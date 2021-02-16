<template>
  <div id="top">
    <!-- Hero -->
    <Hero />
    <!-- Pricing Table -->
    <Pricing id="pricing" />
    <!-- Features -->
    <FeaturesGrid id="features" />
    <!-- FAQ -->
    <FAQ id="faq" />
    <!-- CTA -->
    <CTA id="cta" />
    <!-- Footer -->
    <Footer />
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
