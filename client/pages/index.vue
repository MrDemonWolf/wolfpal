<template>
  <SignedInJumbotron v-if="$auth.loggedIn" />
  <NotSignedInJumbotron v-else />
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
