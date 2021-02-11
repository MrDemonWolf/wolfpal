<template>
  <div id="top">
    <Hero />
    <Pricing id="pricing" />
    <FeaturesGrid id="features" />
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
