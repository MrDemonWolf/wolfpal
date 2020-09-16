<template>
  <SignedInDashboard v-if="$auth.loggedIn" />
  <NotSignedInJumbotron v-else />
</template>

<script>
import NotSignedInJumbotron from '@/components/Landing/NotSignedInJumbotron'
import SignedInDashboard from '@/components/Landing/SignedInDashboard'
export default {
  components: {
    NotSignedInJumbotron,
    SignedInDashboard,
  },
}
</script>
