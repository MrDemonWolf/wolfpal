<template>
  <div
    class="container w-full px-2 mx-auto my-0 overflow-auto shadow-md md:px-8 md:my-6 bg-gray-50 lg:w-3/5 dark:bg-gray-200"
  >
    <h1
      class="py-3 mx-3 mt-3 text-2xl font-bold leading-8 text-center text-gray-900 font-roboto"
    >
      Account Settings
    </h1>

    <div class="my-0 sm:my-5">
      <Profile />
    </div>
    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-300"></div>
      </div>
    </div>

    <div class="my-0 sm:my-5">
      <PersonalInformation />
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-300"></div>
      </div>
    </div>
    <div class="my-0 sm:my-5">
      <Security />
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-300"></div>
      </div>
    </div>
    <div class="my-0 sm:my-5">
      <Notifications />
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-300"></div>
      </div>
    </div>
    <div class="my-0 sm:my-5">
      <DeviceList :sessions="sessions" />
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Account/Profile'
import PersonalInformation from '@/components/Account/PersonalInformation'
import Security from '@/components/Account/Security'
import Notifications from '@/components/Account/Notifications'
import DeviceList from '../../components/Account/DeviceList'

export default {
  components: {
    Profile,
    PersonalInformation,
    Security,
    Notifications,
    DeviceList,
  },

  middleware: 'auth',
  async fetch({ store }) {
    await store.dispatch('account/FETCH_SESSIONS')
  },
  computed: {
    sessions() {
      return this.$store.state.account.sessions
    },
  },
}
</script>
