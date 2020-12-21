<template>
  <div>
    <div class="mt-5 md:mt-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Devices</h3>
      <p class="text-sm leading-5 text-gray-500">
        Currently logged in devices. If you see any devices you don't want
        logged in anymore or are not yours. You can revoke them.
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
                  class="inline-flex justify-center px-4 py-1 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md sm:my-2 bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700"
                >
                  Revoke
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sessions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      error: null,
      success: null,
    }
  },

  // methods: {
  //   async,
  // },
}
</script>
