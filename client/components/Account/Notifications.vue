<template>
  <div>
    <div class="mt-5 md:mt-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
      <p class="text-sm leading-5 text-gray-500">
        Decide which communications you'd like to receive and how.
      </p>
    </div>
    <div class="mt-6 md:mt-3 md:col-span-2">
      <form action="#" method="POST">
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <fieldset>
              <legend class="text-base font-medium leading-6 text-gray-900">
                By Email
              </legend>
              <div class="mt-4">
                <div class="flex items-start">
                  <div class="absolute flex items-center h-5">
                    <input
                      id="weeklyGoals"
                      type="checkbox"
                      class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                    />
                  </div>
                  <div class="text-sm leading-5 pl-7">
                    <label for="weeklyGoals" class="font-medium text-gray-700"
                      >Weekly Goals</label
                    >
                    <p class="text-gray-500">
                      Laboris nostrud magna esse voluptate eiusmod commodo ea
                      elit eu aliqua cillum est sint.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <button
              class="px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue focus:bg-indigo-500 active:bg-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
