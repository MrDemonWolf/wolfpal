<template>
  <div
    class="container overflow-auto md:mx-auto w-full lg:w-3/5 m-6 bg-gray-50 dark:bg-gray-200 px-8"
  >
    <h1
      class="text-gray-900 text-2xl font-bold font-roboto leading-8 m-3 text-center py-3"
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
      <Notifications />
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Account/Profile'
import PersonalInformation from '@/components/Account/PersonalInformation'
import Notifications from '@/components/Account/Notifications'

export default {
  components: {
    Profile,
    PersonalInformation,
    Notifications,
  },
}
</script>
