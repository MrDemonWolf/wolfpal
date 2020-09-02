<template>
  <div class="flex flex-col min-h-screen">
    <Navigation :links="links" />
    <main id="content" role="main" class="dark:bg-gray-600 flex-grow">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Shared/Navigation'
import Footer from '@/components/Shared/Footer'

export default {
  components: {
    Navigation,
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
