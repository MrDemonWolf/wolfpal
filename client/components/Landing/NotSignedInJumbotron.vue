<template>
  <div class="relative bg-gray-800 overflow-hidden h-85">
    <div class="hidden sm:block sm:absolute sm:inset-0">
      <svg
        class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
        width="450"
        height="450"
        viewBox="0 0 450 450"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="450"
          height="450"
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
    </div>
    <div class="relative pt-6 md:pt-12 pb-12 sm:pb-32">
      <main class="mt-8 sm:mt-16 md:mt-20 lg:mt-24">
        <div class="mx-auto max-w-screen-xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <h2
                  class="mt-4 text-4xl tracking-tight leading-10 font-extrabold text-white sm:mt-5 sm:leading-none sm:text-6xl lg:mt-6 lg:text-5xl xl:text-6xl"
                >
                  Reach your
                  <br class="hidden md:inline" />
                  <span class="text-indigo-400"> full potential</span>
                </h2>
                <p
                  class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  Let the Wolf guide you to what you dream of getting done. We
                  all have goals in life and keeping track of them can either be
                  a pain and or overwellming.
                </p>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6">
              <div
                class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
              >
                <div class="px-4 py-8 sm:px-10">
                  <div class="mt-6">
                    <form action="#" method="POST" class="space-y-6">
                      <div>
                        <label for="username" class="sr-only"> Username </label>
                        <div class="rounded-md shadow-sm">
                          <input
                            id="username"
                            placeholder="Username"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>

                      <div>
                        <label for="email" class="sr-only"> Email </label>
                        <div class="rounded-md shadow-sm">
                          <input
                            id="email"
                            placeholder="Email"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>

                      <div>
                        <label for="password" class="sr-only"> Password </label>
                        <div class="rounded-md shadow-sm">
                          <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>

                      <div>
                        <span class="block w-full rounded-md shadow-sm">
                          <button
                            type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                          >
                            Create your account
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10"
                >
                  <p class="text-xs leading-5 text-gray-500">
                    By signing up, you agree to our
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                      >Terms</a
                    >,
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                      >Data Policy</a
                    >
                    and
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                      >Cookies Policy</a
                    >.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRegister: true,
    }
  },
}
</script>
