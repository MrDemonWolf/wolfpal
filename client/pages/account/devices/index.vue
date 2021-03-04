<template>
  <div
    class="container w-full px-2 mx-auto my-0 overflow-auto shadow-md md:px-8 md:my-6 bg-gray-50 lg:w-3/5 dark:bg-gray-200"
  >
    <div class="my-0 sm:my-5">
      <div class="mt-5 md:mt-0">
        <h3 class="text-xl font-bold leading-8 text-gray-900">Devices</h3>
        <p class="text-sm leading-5 text-gray-500">
          Currently logged in devices. If you see any devices you don't want
          logged in anymore or are not yours. You can revoke them..
        </p>
      </div>
      <div class="mt-6 md:mt-3 md:col-span-2">
        <div class="overflow-hidden bg-white shadow sm:rounded-md">
          <ul>
            <li
              v-for="(session, index) in sessions"
              :key="index"
              class="block border-t border-b border-gray-200"
            >
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div
                  class="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between"
                >
                  <div>
                    <div
                      class="text-sm font-medium leading-5 truncate text-primary-600 dark:text-primary-500"
                    >
                      {{ session.device.browser }}
                      <span class="ml-1 font-normal text-gray-500">
                        on {{ session.device.os }}
                      </span>
                      <span
                        v-if="session.device.isDev"
                        class="px-2 ml-1 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full"
                      >
                        Dev
                      </span>
                      <span
                        v-if="currentSession === session.accessTokenHash"
                        class="px-2 ml-1 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      >
                        Current
                      </span>
                    </div>
                    <div class="flex mt-2">
                      <div class="flex items-center">
                        <fa
                          :icon="['fas', 'calendar']"
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-lg text-gray-500"
                        />

                        <time
                          class="text-sm leading-5 text-gray-500"
                          :datetime="$dayjs(session.createdAt).format('lll')"
                          >{{ $dayjs(session.createdAt).format('lll') }}</time
                        >
                        <fa
                          :icon="['fas', 'map-marker-alt']"
                          class="flex-shrink-0 ml-1.5 mr-1.5 h-5 w-5 text-lg text-gray-500"
                        />

                        <span class="text-sm leading-5 text-gray-500">
                          {{ session.location | capitalize }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0 ml-5">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md dark:bg-red-500 sm:my-2 hover:bg-red-500 dark-hover:bg-red-400 focus:outline-none focus:border-red-700"
                    @click.prevent="revokeSession(index)"
                  >
                    Revoke
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md dark:bg-red-500 sm:my-2 hover:bg-red-500 dark-hover:bg-red-400 focus:outline-none focus:border-red-700"
              @click.prevent="toggleRevokeAllSessionsModal"
            >
              Revoke all
            </button>
          </div>
        </div>
      </div>
      <portal-target name="revokeAllDevices">
        <transition name="fade">
          <RevokeAllDevices
            v-if="$store.state.account.showRevokeAllSessionsModal"
          />
        </transition>
      </portal-target>
    </div>
  </div>
</template>

<script>
import sha512 from 'js-sha512'
import RevokeAllDevices from '@/components/Account/Modal/RevokeAllDevices'

export default {
  components: {
    RevokeAllDevices,
  },

  layout: 'account',

  middleware: ['auth'],

  data() {
    return {
      email: this.$auth.user.email,
      newEmail: this.$auth.user.newEmail,
    }
  },

  async fetch({ store }) {
    await store.dispatch('account/FETCH_SESSIONS')
  },

  computed: {
    currentSession() {
      return sha512(
        this.$auth.strategy.token.get().split(' ').slice(1).toString()
      )
    },
    sessions() {
      return this.$store.state.account.sessions
    },
  },

  methods: {
    async revokeSession(index) {
      try {
        if (
          this.currentSession ===
          this.$store.state.account.sessions[index].accessTokenHash
        ) {
          return await this.$auth.logout()
        }
        await this.$store.dispatch('account/REVOKE_SESSION', index)
        if (this.$store.state.account.messages.success) {
          return this.$toast.success(
            this.$store.state.account.messages.success,
            {
              position: 'bottom-right',
            }
          )
        }
        this.$toast.error(this.$store.state.account.messages.error, {
          position: 'bottom-right',
        })
      } catch (e) {
        this.$toast.error('Oops.. Something Went Wrong..', {
          position: 'bottom-right',
        })
      }
    },
    async toggleRevokeAllSessionsModal() {
      await this.$store.dispatch(
        'account/TOGGLE_SHOW_REVOKE_ALL_SESSIONS_MODAL'
      )
    },
  },
}
</script>