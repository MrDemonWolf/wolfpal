<template>
  <div class="h-80 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-gray-200"
      >
        <div class="text-center">
          <CircleLoaderCheckmark :success="trie" :loading="false" />
        </div>
        <h1
          class="mt-8 font-bold font-roboto text-3xl text-primary-500 text-center"
        >
          Email Confirmation
        </h1>

        <p class="mt-4 font-montserrat leading-5">
          Good job! Your email address is now confirmed and you can start using
          WolfPal
        </p>
        <div class="mt-6">
          <div v-if="error" class="text-sm leading-5">
            <nuxt-link
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              to="/activate-account/resend"
            >
              Resend activation link?
            </nuxt-link>
          </div>
          <div v-else class="text-sm leading-5">
            <nuxt-link
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              to="/login"
            >
              Login
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleLoaderCheckmark from '@/components/Shared/CircleLoaderCheckmark'
export default {
  components: {
    CircleLoaderCheckmark,
  },
}
</script>
