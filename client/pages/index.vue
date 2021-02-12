<template>
  <div id="top">
    <!-- Hero -->
    <Hero />
    <!-- Pricing Table -->
    <Pricing id="pricing" />
    <!-- Features -->
    <FeaturesGrid id="features" />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Landing/Hero'
import FeaturesGrid from '@/components/Landing/FeaturesGrid'
import Footer from '@/components/Landing/Footer'
import Pricing from '@/components/Landing/Pricing'

export default {
  components: {
    Hero,
    FeaturesGrid,
    Footer,
    Pricing,
  },

  layout: 'landing',
}
</script>
