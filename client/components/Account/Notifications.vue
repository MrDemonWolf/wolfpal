<template>
  <div>
    <div class="mt-5 md:mt-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
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
                  <div class="absolute flex items-center h-5">
                    <input
                      id="weeklyGoals"
                      v-model="changeNotificationsEmail.weeklyGoals"
                      type="checkbox"
                      class="w-4 h-4 transition duration-150 ease-in-out text-primary-500 form-checkbox"
                    />
                  </div>
                  <div class="text-sm leading-5 pl-7">
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
            </fieldset>
          </div>
          <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <button
              class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeNotificationsEmail: {
        weeklyGoals: this.$auth.user.notifications.email.weeklyGoals,
        errors: { weeklyGoals: null },
      },
      error: null,
      success: null,
    }
  },
  methods: {
    async changeNotificationsSettings(e) {
      const email = {
        weekly:
          this.$auth.user.notifications.email.weeklyGoals !==
          this.changeNotificationsEmail.weeklyGoals,
      }

      if (email.weekly) {
        try {
          const response = await this.$axios.put('/api/notifications/email', {
            weeklyGoals: this.changeNotificationsEmail.weeklyGoals,
          })
          await this.$auth.fetchUser()
          this.$toast.success(response.data.message, {
            position: 'bottom-right',
          })
        } catch (e) {
          if (e.response && e.response.data && e.response.data.errors) {
            this.changeUsername.errors = e.response.data.errors
          } else {
            this.$toast.error('Oops.. Something Went Wrong..', {
              position: 'bottom-right',
            })
          }
        }
      }
    },
  },
}
</script>
