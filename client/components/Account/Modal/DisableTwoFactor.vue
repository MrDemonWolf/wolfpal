<template>
  <div
    role="dialog"
    aria-modal="true"
    class="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
  >
    <div class="fixed inset-0">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <div
      class="overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full"
      @click.stop
    >
      <Loading
        :active.sync="loader.isLoading"
        :can-cancel="loader.canCancel"
        :color="loader.color"
        :background-color="loader.bgColor"
        :height="loader.height"
        :width="loader.width"
        :is-full-page="loader.fullPage"
      />
      <form @submit.prevent="userDisableTwoFactor">
        <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10"
            >
              <fa :icon="['fas', 'unlock']" class="w-6 h-6 text-primary-600" />
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div>
                <h3 class="text-xl font-medium leading-6 text-primary-500">
                  Disable Two Factor
                </h3>
              </div>
              <div class="my-3">
                <label
                  for="twoFactorPassword"
                  class="block my-2 text-sm font-medium leading-5 text-gray-700"
                >
                  Please verify your two factor code before two factor can be
                  disabled
                </label>
                <input
                  id="twoFactorCode"
                  v-model="twoFactor.code"
                  type="text"
                  :class="{
                    'border-red-500': $store.state.account.messages.error,
                  }"
                  class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
                <span
                  v-if="$store.state.account.messages.error"
                  class="text-red-500"
                  >{{ $store.state.account.messages.error }}</span
                >
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="submit"
                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border rounded-md order-transparent hover:bg-red-500 focus:outline-none focus:shadow-outline"
              >
                Disable Two Factor
              </button>
            </span>
            <span
              class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5"
                @click="toggleTwoFactorModal"
                @keydown.esc="hideTwoFactorModal"
              >
                Cancel
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading,
  },
  data() {
    return {
      loader: {
        isLoading: true,
        canCancel: false,
        fullPage: false,
        color: '#007bff',
        bgColor: '#ffffff',
        height: 64,
        width: 64,
      },
      twoFactor: {
        code: '',
      },
    }
  },
  mounted() {
    const close = (e) => {
      const ESC = 27
      if (e.keyCode !== ESC) return
      this.hideTwoFactorModal()
    }
    this.scrollPosition = window.pageYOffset

    /**
     * Disable scrolling
     */
    const $body = document.querySelector('body')
    $body.style.overflow = 'hidden'
    $body.style.position = 'fixed'
    $body.style.top = `-${this.scrollPosition}px`
    $body.style.width = '100%'

    /**
     * Disabling Loading
     */
    this.loader.isLoading = false

    document.addEventListener('keyup', close)
    this.$on('hook:destroyed', () => {
      document.removeEventListener('keyup', close)

      /**
       * Enable  scrolling
       */
      const $body = document.querySelector('body')
      $body.style.removeProperty('overflow')
      $body.style.removeProperty('position')
      $body.style.removeProperty('top')
      $body.style.removeProperty('width')

      window.scrollTo(0, this.scrollPosition)
    })
  },
  methods: {
    async toggleTwoFactorModal() {
      await this.$store.dispatch('account/TOGGLE_SHOW_DISABLE_TWO_FACTOR_MODAL')
    },
    async hideTwoFactorModal() {
      await this.$store.commit(
        'account/SET_SHOW_DISABLE_TWO_FACTOR_MODAL',
        false
      )
    },
    async userDisableTwoFactor(e) {
      try {
        await this.$store.dispatch(
          'account/DISABLE_TWO_FACTOR',
          this.twoFactor.code
        )

        if (this.$store.state.account.messages.success) {
          await this.$auth.fetchUser()
          return await this.$store.commit(
            'account/SET_SHOW_DISABLE_TWO_FACTOR_MODAL',
            false
          )
        }
        if (this.$store.state.account.messages.error) {
          return
        }
        this.$toast.error('Oops.. Something Went Wrong..', {
          position: 'bottom-right',
        })
      } catch (e) {
        this.$toast.error('Oops.. Something Went Wrong..', {
          position: 'bottom-right',
        })
      }
    },
  },
}
</script>
