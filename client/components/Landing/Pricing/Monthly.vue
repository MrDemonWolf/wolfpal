<template>
  <div
    class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3"
  >
    <PricingCard
      name="Pro"
      description=" Fully keep track of your goals in life."
      price="$6.99"
      frequency="monthly"
      :features="pro"
      cta="Go Pro"
      cta-link="/register/pro?frequency=monthly"
    />
    <PricingCard
      name="Free Trial"
      description="Get access to the full experience for a limited time but keep the basics forever.*"
      price="$0.00"
      frequency="monthly"
      :features="free"
      cta="Get Started"
      cta-link="/#top"
    />
    <PricingCard
      name="Enterprise"
      description="Make your team better at tracking their goals.*"
      price="$4.99"
      frequency="monthly"
      :features="enterprise"
      cta="Buy for your team"
      cta-link="/register/enterprise?frequency=monthly"
    />
  </div>
</template>

<script>
import PricingCard from '@/components/Shared/PricingCard'

export default {
  components: {
    PricingCard,
  },

  data() {
    return {
      pro: ['Weekly Goals', 'Two Factor', 'Notifications'],
      free: ['Weekly Goals (10 max)'],
      enterprise: ['Weekly Goals', 'Two Factor', 'Notifications'],
    }
  },
}
</script>
