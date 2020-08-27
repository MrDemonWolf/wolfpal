<template>
  <form @submit.prevent="register">
    <div>
      <label>email</label>
      <input v-model="email" type="text" />
    </div>
    <div>
      <label>username</label>
      <input v-model="username" type="text" />
    </div>
    <div>
      <label>Password</label>
      <input v-model="password" type="text" />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('/api/auth/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
