<template>
  <NotSignedInJumbotron v-if="isAuthenticated" />
  <SignedInJumbotron v-else />
</template>

<script>
import NotSignedInJumbotron from '@/components/Landing/NotSignedInJumbotron'
import SignedInJumbotron from '@/components/Landing/SignedInJumbotron'
export default {
  components: {
    NotSignedInJumbotron,
    SignedInJumbotron,
  },
}
</script>
