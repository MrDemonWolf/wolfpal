<template>
  <div>
    <div class="mt-5 md:mt-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
      <p class="text-sm leading-5 text-gray-500">
        This information will be displayed publicly so be careful what you
        share.
      </p>
    </div>
    <div class="mt-6 md:mt-3">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white sm:p-6">
            <label
              for="username"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Username
            </label>
            <div class="flex mt-1 rounded-md shadow-sm">
              <input
                id="username"
                class="flex-1 block w-full transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                placeholder="Example"
              />
            </div>

            <div class="mt-6">
              <label
                for="about"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                About
              </label>
              <div class="rounded-md shadow-sm">
                <textarea
                  id="about"
                  rows="3"
                  class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                  placeholder="you@example.com"
                ></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <div class="mt-6">
              <label
                for="photo"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Photo
              </label>
              <div class="flex items-center mt-2">
                <span
                  class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full"
                >
                  <svg
                    class="w-full h-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <span class="ml-5 rounded-md shadow-sm">
                  <button
                    type="button"
                    class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  >
                    Change
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                Save
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
