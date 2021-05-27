<template>
<div
    class="container w-full px-2 mx-auto overflow-auto shadow-md md:px-8 bg-gray-50 lg:w-9/12 dark:bg-gray-200"
  >
    <div class="my-0 sm:my-5">
      <div class="mt-5 md:mt-0">
        <h3 class="text-xl font-bold leading-8 text-gray-900">Notifications</h3>
        <p class="text-sm leading-5 text-gray-500">
          Decide which communications you'd like to receive and how.
        </p>
      </div>
      <div class="mt-6 md:mt-3 md:col-span-2">
        <form @submit.prevent="changeNotificationsSettings">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <fieldset>
                <legend class="text-base font-medium leading-6 text-gray-900">
                  Email
                </legend>
                <div class="mt-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="weeklyGoals"
                        v-model="changeNotificationsEmail.weeklyGoals"
                        type="checkbox"
                        class="w-4 h-4 transition duration-150 ease-in-out text-primary-500 form-checkbox"
                      />
                    </div>
                    <div class="pl-2 text-sm leading-5">
                      <label for="weeklyGoals" class="font-medium text-gray-700"
                        >Weekly Goals</label
                      >
                      <p class="text-gray-500">
                        Received notifications number of completed weekly goals
                        with percent.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="yearlyGoals"
                        v-model="changeNotificationsEmail.yearlyGoals"
                        type="checkbox"
                        class="w-4 h-4 transition duration-150 ease-in-out text-primary-500 form-checkbox"
                      />
                    </div>
                    <div class="pl-2 text-sm leading-5">
                      <label for="yearlyGoals" class="font-medium text-gray-700"
                        >Yearly Goals</label
                      >
                      <p class="text-gray-500">
                        Received notifications number of completed yearly goals
                        with percent.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'account',

  middleware: ['auth'],

  data() {
    return {
      changeNotificationsEmail: {
        weeklyGoals: this.$auth.user.notifications.email.weeklyGoals,
        yearlyGoals: this.$auth.user.notifications.email.yearlyGoals,
        errors: {
          weeklyGoals: null,
          yearlyGoals: null
        }
      }
    }
  },

  methods: {
    async changeNotificationsSettings() {
      const email = {
        weekly:
          this.$auth.user.notifications.email.weeklyGoals !==
          this.changeNotificationsEmail.weeklyGoals,
        yearly:
          this.$auth.user.notifications.email.yearlyGoals !==
          this.changeNotificationsEmail.yearlyGoals
      }

      if (email.weekly || email.yearly) {
        try {
          const res = await this.$axios.$put('/api/notifications/email', {
            weeklyGoals: this.changeNotificationsEmail.weeklyGoals,
            yearlyGoals: this.changeNotificationsEmail.yearlyGoals
          })
          await this.$auth.fetchUser()
          switch (res.code) {
            case 'EMAIL_NOTIFICATIONS_CHANGED':
              this.$toast.success(
                'Your notifications preferences for email has been changed.',
                {
                  position: 'bottom-right'
                }
              )
              break
            default:
          }
        } catch (e) {
          this.$toast.error('Oops.. Something Went Wrong..', {
            position: 'bottom-right'
          })
        }
      }
    }
  }
}
</script>
