<template>
  <div class="flex flex-col min-h-screen">
    <Navigation :links="links" />
    <main
      id="content"
      role="main"
      class="flex-grow bg-gray-200 dark:bg-gray-800"
    >
      <OfflineBanner />
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Shared/Navigation'
import OfflineBanner from '@/components/Shared/OfflineBanner'
import Footer from '@/components/Shared/Footer'

export default {
  components: {
    Navigation,
    OfflineBanner,
    Footer,
  },
  data() {
    return {
      title: 'MrDemonWolf',
      links: [
        {
          url: '/goals/weekly',
          text: 'Weekly',
        },
      ],
    }
  },
}
</script>
<style lang="postcss"></style>
