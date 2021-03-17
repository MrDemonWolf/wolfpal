<template>
  <div id="top">
    <LandingHero />
    <LandingPricing id="pricing" />
    <LandingFeaturesGrid id="features" />
    <LandingFAQ id="faq" />
    <LandingCTA id="cta" />
    <LandingFooter id="footer" />
  </div>
</template>

<script>
export default {
  middleware: ['alreadyAuthenticated'],
}
</script>
