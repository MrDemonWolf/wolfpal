<template>
  <div
    class="grid grid-cols-1 mt-5 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-200 md:grid-cols-3"
  >
    <div>
      <div class="px-4 py-5 sm:p-6">
        <content-loader
          v-if="loading.weekly"
          :height="60"
          :width="327"
          :speed="3"
          primary-color="#edf1f9"
          secondary-color="#486ec2"
        >
          <rect x="0" y="0" rx="0" ry="0" width="327" height="60" />
        </content-loader>
        <SharedStatCard
          v-if="!loading.weekly"
          title="Completed Weekly Goals"
          :from="stats.weekly.completed"
          from-text="out of"
          :to="stats.weekly.total"
          :total="stats.weekly.total"
          iod="completed percent"
          :increased="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

  middleware: ['auth'],

  data() {
    return {
      stats: {
        weekly: {
          completed: 0,
          notCompleted: 0,
          total: 0,
        },
      },
      loading: {
        weekly: true,
      },
    }
  },

  head() {
    return {
      title: 'Dashboard',
    }
  },

  mounted() {
    this.getAnalytics()
  },

  methods: {
    async getAnalytics() {
      try {
        const res = await this.$axios.$get('/api/stats')
        this.stats.weekly.completed = res.weekly.completed
        this.stats.weekly.notCompleted = res.weekly.notCompleted
        this.stats.weekly.total = res.weekly.total
        this.loading.weekly = false
      } catch (e) {
        this.stats.weekly.completed = 'N/A'
        this.stats.weekly.notCompleted = 'N/A'
        this.stats.weekly.total = 'N/A'
        this.loading.weekly = false
      }
    },
  },
}
</script>
