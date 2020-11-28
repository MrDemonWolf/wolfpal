<template>
  <div>
    <div class="mt-5 md:mt-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Security</h3>
      <p class="text-sm leading-5 text-gray-500">Manage account security</p>
    </div>
    <div class="mt-6 md:mt-3">
      <Alert v-if="error" type="danger" :message="error" class="mb-4" />
      <form @submit.prevent="changeSecurity">
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="mb-2 text-base font-medium leading-6 text-gray-900">
              Password Change
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="oldPassword"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Old Password</label
                >
                <input
                  id="oldPassword"
                  v-model="changePassword.oldPassword"
                  type="password"
                  :class="{
                    'border-red-500': changePassword.errors.oldPassword,
                  }"
                  class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
                <span
                  v-if="changePassword.errors.oldPassword"
                  class="text-red-500"
                  >{{ changePassword.errors.oldPassword }}</span
                >
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="newPassword"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >New Password</label
                >
                <input
                  id="newPassword"
                  v-model="changePassword.newPassword"
                  type="password"
                  :class="{
                    'border-red-500': changePassword.errors.newPassword,
                  }"
                  class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
                <span
                  v-if="changePassword.errors.newPassword"
                  class="text-red-500"
                  >{{ changePassword.errors.newPassword }}</span
                >
              </div>

              <div class="col-span-6">
                <div class="flex items-center mt-2">
                  <span class="rounded-md">
                    <div
                      class="mb-2 text-base font-medium leading-6 text-gray-900"
                    >
                      Two Factor Authentication
                    </div>

                    <button
                      v-if="!$auth.user.twoFactor"
                      type="button"
                      class="px-3 py-2 text-sm font-medium leading-4 text-green-700 transition duration-150 ease-in-out bg-green-200 border border-green-300 rounded-md hover:text-green-500 focus:outline-none focus:border-green-300 focus:shadow-outline-blue active:bg-green-50 active:text-green-800"
                      @click.prevent="toggleTwoFactorModal"
                    >
                      Enable
                    </button>
                    <div v-else>
                      <button
                        type="button"
                        class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline active:bg-gray-50 active:text-gray-800"
                      >
                        Download
                        {{ $config.title | lowercase }}-backup-codes.txt
                      </button>
                      <button
                        type="button"
                        class="px-3 py-2 text-sm font-medium leading-4 text-red-700 transition duration-150 ease-in-out bg-red-200 border border-red-300 rounded-md hover:text-red-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                      >
                        Disable
                      </button>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      This adds an extra layer of security to your account. This
                      is highy recommended to keep your account recommended
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <portal-target name="twoFactorModal">
        <transition name="fade">
          <TwoFactorModal v-if="$store.state.account.showTwoFactorModal" />
        </transition>
      </portal-target>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Shared/Alert'
import TwoFactorModal from '@/components/Account/Modal/TwoFactor'

export default {
  components: { Alert, TwoFactorModal },
  data() {
    return {
      changePassword: {
        oldPassword: '',
        newPassword: '',
        errors: { oldPassword: null, newPassword: null },
      },
      device: {
        os: '',
        browser: '',
      },
      error: null,
      success: null,
    }
  },
  methods: {
    async toggleTwoFactorModal() {
      await this.$store.dispatch('account/TOGGLE_SHOW_TWO_FACTOR_MODAL')
    },

    // twoFactorSecret: this.$store.state.account.twoFactorSecret,
    // twoFactorQrCode:
    //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADUCAYAAADk3g0YAAAAAklEQVR4AewaftIAAAppSURBVO3BQY4YybLgQDJR978yR0tfBZDIKKn/GzezP1hrXfGw1rrmYa11zcNa65qHtdY1D2utax7WWtc8rLWueVhrXfOw1rrmYa11zcNa65qHtdY1D2utax7WWtc8rLWu+eEjlb+p4kTlpGJSmSreUJkqvlCZKr5QeaNiUpkqTlSmihOVqWJS+ZsqvnhYa13zsNa65mGtdc0Pl1XcpHKTyonKVDGpfKEyVUwVk8oXFScqJxU3qUwVb1TcpHLTw1rrmoe11jUPa61rfvhlKm9UvKEyVUwqJxWTyqQyVUwqk8obKlPFVHGiMlVMKm+ovFHxL6m8UfGbHtZa1zysta55WGtd88P/GJWTiknlpGJSmSreUHlD5aaKN1SmiknlC5Wp4v+yh7XWNQ9rrWse1lrX/PA/rmJSOamYVKaKSeUmlb9J5YuKE5X/nzysta55WGtd87DWuuaHX1bxf1nFpDJVnKhMFZPKVPGGyqTyRcVNFb+p4r/kYa11zcNa65qHtdY1P1ym8i9VTCpTxaRyojJVTCpTxU0qU8VJxaTyhcpUMalMFZPKVDGpTBUnKv9lD2utax7WWtc8rLWu+eGjiv8Sld+kMlX8poovKk4q3lD5QuWNiv9LHtZa1zysta55WGtdY3/wgcpUMancVHGiMlX8JpWp4kTlN1X8l6hMFW+o3FTxmx7WWtc8rLWueVhrXfPDRxVfVLyhMlVMFTepTBUnKlPFGxUnKlPFpDJVTConFV+oTBWTylQxqUwVb6icqJxUfPGw1rrmYa11zcNa6xr7gw9UTiq+UJkqJpWTikllqphUpoo3VG6q+EJlqjhRmSpOVN6oOFE5qfhCZaq46WGtdc3DWuuah7XWNT98VHGiclIxqUwVb1RMKlPFGyonFScVb6hMKicVk8obKlPFFxWTyonKScWJylQxqZyoTBVfPKy1rnlYa13zsNa65oePVKaKk4qTiknlpGJSmSomlTcqJpU3VKaKk4pJZap4o2JSeUPlpGJSeaPiDZU3KiaV3/Sw1rrmYa11zcNa6xr7gw9UvqiYVKaKSeWkYlKZKiaVk4pJZar4QmWqOFGZKv4llaniROWNihOVmyq+eFhrXfOw1rrmYa11jf3BByonFZPKFxWTyhcVk8oXFZPKGxWTylQxqfxLFScqJxUnKlPFGypTxW96WGtd87DWuuZhrXWN/cFfpHJScaJyUjGp3FQxqUwVk8pUcaJyUvGGylRxojJVTConFScqU8UbKicVJyonFV88rLWueVhrXfOw1rrmh3+s4kRlqphU/qWKk4oTlaliUjlROamYVKaKLyomlZOKN1TeUJkqporf9LDWuuZhrXXNw1rrmh8+UpkqJpU3VKaKSeVE5Y2KE5UTlaliUpkq3qg4qThROVE5UZkqTiomlROVqeKLikllqphUpoovHtZa1zysta55WGtd88NHFW9UTConKicVJypTxYnKicpUMalMFZPKFypvVEwqU8WkcqIyVZxUnFRMKicVk8p/ycNa65qHtdY1D2uta374SOWmihOVE5U3VKaKE5WTipOK31TxhsobFZPKVPFFxaQyqbxRMan8poe11jUPa61rHtZa1/zwUcWJyhsqb6jcpHJScZPKb1KZKk5U3qiYVP4llanib3pYa13zsNa65mGtdc0Pl6l8UfGGylQxqUwqJxUnKl9UnFS8ofKFyn9JxRsqJypTxaRy08Na65qHtdY1D2uta374SOWkYlJ5Q2Wq+KJiUvmiYlI5UXlDZao4UTlRmSomlaliUpkqpoo3VE5UpoqTikllUpkqbnpYa13zsNa65mGtdc0Pf1nFpHJS8UXFpDJVnKicqEwVb6icVLxRcaIyqUwVb6hMFZPKVPFGxRsqJxW/6WGtdc3DWuuah7XWNfYHv0jlb6qYVN6oeENlqphUpopJ5TdVvKFyUvGGylQxqfymiknlpOKLh7XWNQ9rrWse1lrX2B9cpHJSMalMFScqJxVfqEwVX6j8SxWTylRxovJGxYnKGxVvqJxUTCpTxRcPa61rHtZa1zysta754S9TmSomlTcqTlSmikllqjhROamYKk5UTiq+UJkqJpWTii9U3qg4UZkq3lCZKm56WGtd87DWuuZhrXXND5dVnKi8UTGpnKhMFZPKicobFW+ovKHyN1VMKlPFpDJVTBVvqHxRMamcqEwVXzysta55WGtd87DWuuaHX6byhcpvqjhRmSomlanijYqbVE5UTlSmikllqjhRmSreqDhROak4UbnpYa11zcNa65qHtdY19gcfqJxUTCpvVJyo/EsVb6hMFZPKScWJylTxhcpU8YXKScVNKicVNz2sta55WGtd87DWusb+4CKVk4oTlZOKSWWq+EJlqphU3qg4UTmpeEPlpopJ5W+q+EJlqvhND2utax7WWtc8rLWu+eEvUzmp+C9ROak4UTmpOFGZKk4qJpWpYlI5UfmiYlKZKk5UTiomlaliUjmp+OJhrXXNw1rrmoe11jX2Bx+onFScqLxR8YXKVDGpnFRMKlPFGypvVHyh8kbFpDJVTConFScqU8WJyknFicpU8cXDWuuah7XWNQ9rrWvsD36RylQxqZxUTCpTxYnKGxW/SWWqOFE5qfhC5TdVvKEyVUwqX1RMKlPFFw9rrWse1lrXPKy1rvnhl1W8UTGpfFExqUwVX6hMFTdVTConKlPFScUbKicVJypTxRsVk8pU8UbFTQ9rrWse1lrXPKy1rvnhMpWbKiaVE5WTii9U3lCZKiaVNyomlaliUrmpYlI5UTlRmSomlZOKE5U3Kr54WGtd87DWuuZhrXWN/cEHKlPFicpJxaQyVXyhMlVMKicVJypTxYnKb6r4TSpvVEwqv6nib3pYa13zsNa65mGtdc0PH1W8UfFGxYnKVHFSMalMFZPKFypvVLyhMlWcqJxUTConFZPKFxVvqEwVk8pUMalMFV88rLWueVhrXfOw1rrmh49U/qaKqWJSeaNiUpkqTlR+k8pUcaIyVUwVk8pJxYnKb1KZKr5QmSpuelhrXfOw1rrmYa11zQ+XVdykcqLyRsWk8obKGxWTyhsVX6i8ofJGxW+qeEPlDZWp4ouHtdY1D2utax7WWtf88MtU3qj4omJSmVTeUJkqvqiYVCaVLypuUpkqJpWTiknlROWLihOV3/Sw1rrmYa11zcNa65of/seovFExqfwmlaliUpkqJpWp4guVqWKqOKn4omJSmSomlaliUvmXHtZa1zysta55WGtd88P/uIoTlaliUnlD5YuKSWWqmFTeqDhRmSpOVN6oOKmYVKaKk4pJZar4TQ9rrWse1lrXPKy1rvnhl1X8popJ5QuVqWJSmSpOKk5Upoo3Kn6TylRxUjGpnKhMFScqJxX/0sNa65qHtdY1D2uta+wPPlD5myomlaliUpkqTlSmijdU3qh4Q+U3VUwqJxUnKm9UnKi8UTGpTBU3Pay1rnlYa13zsNa6xv5grXXFw1rrmoe11jUPa61rHtZa1zysta55WGtd87DWuuZhrXXNw1rrmoe11jUPa61rHtZa1zysta55WGtd87DWuub/AQqoeAR0iYemAAAAAElFTkSuQmCC',
    // twoFactorBackupCodes: ['5519 4982', '5624 8067', '0670 5851', '9118 4061'],
    async changeSecurity(e) {
      const changePassword =
        !this.$isEmpty(this.changePassword.oldPassword) ||
        !this.$isEmpty(this.changePassword.newPassword)
      if (changePassword) {
        try {
          this.device = {
            os: this.$ua.os(),
            browser: this.$ua.browser(),
          }
          const response = await this.$axios.put(
            '/api/account/change-password',
            {
              oldPassword: this.changePassword.oldPassword,
              newPassword: this.changePassword.newPassword,
            }
          )
          this.$auth.logout()

          this.$toast.success(response.data.message, {
            position: 'bottom-right',
          })
        } catch (e) {
          if (e.response && e.response.data && e.response.data.errors) {
            this.changePassword.errors = e.response.data.errors
          } else {
            this.$toast.error('Oops.. Something Went Wrong..', {
              position: 'bottom-right',
            })
          }
        }
      } else {
        this.changePassword.errors.oldPassword = null
        this.changePassword.errors.newPassword = null
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.fade-enter-active {
  @apply duration-150 ease-out;
}
.fade-enter {
  @apply opacity-0;
}
.fade-enter-to {
  @apply opacity-100;
}
.fade-leave-active {
  @apply duration-150 ease-in;
}
.fade-leave {
  @apply opacity-100;
}
.fade-leave-to {
  @apply opacity-0;
}
</style>
