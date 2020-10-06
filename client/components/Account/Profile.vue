<template>
  <div>
    <div class="mt-5 md:mt-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
      <p class="text-sm leading-5 text-gray-500">
        This information will be displayed publicly so be careful what you
        share.
      </p>
    </div>
    <div class="mt-6 md:mt-3 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="username"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Username
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    id="username"
                    class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Example"
                  />
                </div>
              </div>
            </div>

            <div class="mt-6">
              <label
                for="about"
                class="block text-sm leading-5 font-medium text-gray-700"
              >
                About
              </label>
              <div class="rounded-md shadow-sm">
                <textarea
                  id="about"
                  rows="3"
                  class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                class="block text-sm leading-5 font-medium text-gray-700"
              >
                Photo
              </label>
              <div class="mt-2 flex items-center">
                <span
                  class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                >
                  <svg
                    class="h-full w-full text-gray-300"
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
                    class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                  >
                    Change
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
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
