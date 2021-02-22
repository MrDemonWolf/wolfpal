<template>
  <footer class="bg-white dark:bg-gray-800" aria-labelledby="footerHeading">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-2 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <Logo class="inline-block h-12" :alt="$config.title" />
          <span
            class="text-4xl font-bold align-middle text-primary-500 font-roboto dark:text-primary-300"
          >
            {{ $config.title }}</span
          >
          <p
            class="text-base font-medium text-gray-500 break-words dark:text-gray-200"
          >
            {{ $config.mission }}
          </p>
          <div class="flex space-x-6">
            <a
              href="https://www.twitter.com/mrdemonwolf"
              class="text-gray-400 dark:text-gray-200 hover:text-brand-twitter dark:hover:text-brand-twitter"
            >
              <span class="sr-only">Twitter</span>

              <fa :icon="['fab', 'twitter']" class="w-6 h-6 text-2xl" />
            </a>
            <a
              href="https://www.github.com/nathanhenniges"
              class="text-gray-400 dark:text-gray-200 hover:text-brand-github dark:hover:text-gray-400"
            >
              <span class="sr-only">GitHub</span>
              <fa :icon="['fab', 'github']" class="w-6 h-6 text-2xl" />
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-1">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold tracking-wider text-gray-400 uppercase dark:text-white"
              >
                Company
              </h3>
              <ul class="mt-4 space-y-4">
                <li v-for="(link, index) in links.company" :key="index">
                  <nuxt-link
                    :to="link.url"
                    class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
                  >
                    {{ link.text }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold tracking-wider text-gray-400 uppercase dark:text-white"
              >
                Support
              </h3>
              <ul class="mt-4 space-y-4">
                <li v-for="(link, index) in links.support" :key="index">
                  <nuxt-link
                    :to="link.url"
                    class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
                  >
                    {{ link.text }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-14">
            <div>
              <h3
                class="text-sm font-semibold tracking-wider text-gray-400 uppercase dark:text-white"
              >
                Legal
              </h3>
              <ul class="mt-4 space-y-4">
                <li v-for="(link, index) in links.legal" :key="index">
                  <nuxt-link
                    :to="link.url"
                    class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
                  >
                    {{ link.text }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold tracking-wider text-gray-400 uppercase dark:text-white"
              >
                Theme
              </h3>

              <button
                type="button"
                aria-label="Color Theme"
                class="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium leading-4 text-gray-500 border border-transparent rounded-md shadow-sm bg-primary-100 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="
                  $colorMode.value === 'dark'
                    ? ($colorMode.preference = 'light')
                    : ($colorMode.preference = 'dark')
                "
              >
                <fa
                  v-if="$colorMode.value === 'dark'"
                  :icon="['fas', 'sun']"
                  class="w-4 h-4 text-xl align-middle"
                />
                <fa
                  v-else
                  :icon="['far', 'moon']"
                  class="w-4 h-4 text-xl align-middle"
                />
                <span class="pl-1">{{
                  $colorMode.value === 'dark' ? 'Light' : 'Dark'
                }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-8 mt-12 border-t border-gray-200">
        <p class="text-base text-gray-400 xl:text-center dark:text-gray-200">
          &copy; {{ year }}
          <a class="font-bold" :href="$config.copyrightLink">{{
            $config.copyright
          }}</a
          >. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/assets/vectors/logo.svg?inline'

export default {
  components: { Logo },
  data() {
    return {
      year: new Date().getFullYear(),
      links: {
        company: [
          {
            text: 'About',
            url: '/about',
          },
          {
            text: 'Blog',
            url: '/blog',
          },
        ],
        support: [
          {
            text: 'Pricing',
            url: '/#pricing',
          },
          {
            text: 'FAQ',
            url: '/#faq',
          },
        ],
        legal: [
          {
            text: 'Privacy',
            url: '/privacy',
          },
          {
            text: 'Terms',
            url: '/terms',
          },
        ],
      },
    }
  },
}
</script>
