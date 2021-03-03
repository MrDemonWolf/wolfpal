<template>
  <div id="top">
    <Hero />
    <Pricing id="pricing" />
    <FeaturesGrid id="features" />
    <FAQ id="faq" />
    <CTA id="cta" />
    <Footer id="footer" />
  </div>
</template>

<script>
import Hero from '@/components/Landing/Hero'
import Pricing from '@/components/Landing/Pricing'
import FeaturesGrid from '@/components/Landing/FeaturesGrid'
import FAQ from '@/components/Landing/FAQ'
import CTA from '@/components/Landing/CTA'
import Footer from '@/components/Landing/Footer'

export default {
  components: {
    Hero,
    Pricing,
    FeaturesGrid,
    FAQ,
    CTA,
    Footer,
  },

  middleware: ['alreadyAuthenticated'],
}
</script>
