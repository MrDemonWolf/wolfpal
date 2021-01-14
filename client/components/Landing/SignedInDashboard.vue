<template>
  <div class="container px-6 mx-auto">
    <div
      class="grid grid-cols-1 mt-5 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-200 md:grid-cols-3"
    >
      <div>
        <div class="px-4 py-5 sm:p-6">
          <content-loader
            v-if="loading.weekly"
            :height="60"
            :width="277.33"
            :speed="2"
            primary-color="#edf1f9"
            secondary-color="#486ec2"
          >
            <rect
              x="-1.5"
              y="0.27"
              rx="0"
              ry="0"
              width="202.65"
              height="22.03"
            />
            <rect
              x="-0.5"
              y="32.27"
              rx="0"
              ry="0"
              width="98.01"
              height="28.75"
            />
            <rect x="189.5" y="32.27" rx="0" ry="0" width="90.12" height="29" />
          </content-loader>
          <StatCard
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
      <!--  This will be added once we add more stats this is just so we know how it would look like with two more status -->
      <!-- <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
             <StatCard
              v-if="!loading.weekly"
              title="Completed Weekly Goals"
              :from="stats.weekly.completed"
            />
          </div>
        </div> -->
      <!-- <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <content-loader
              v-if="loading.weekly"
              :width="340"
              :height="84"
              :speed="2"
              primary-color="#f3f3f3"
              secondary-color="#ecebeb"
            >
              <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
              <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
              <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
              <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
              <rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
              <rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
              <rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
              <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
            </content-loader>
            <StatCard
              v-if="!loading.weekly"
              title="Completed Weekly Goals"
              :from="analytics.weekly.completed"
            />
          </div>
        </div> -->
    </div>
  </div>
</template>

<script>
import StatCard from '@/components/Shared/StatCard'
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    StatCard,
    ContentLoader,
  },

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

  mounted() {
    this.getAnalytics()
  },

  methods: {
    async getAnalytics() {
      await this.$axios
        .$get('/api/stats')
        .then((res) => {
          this.stats.weekly.completed = res.weekly.completed
          this.stats.weekly.notCompleted = res.weekly.notCompleted
          this.stats.weekly.total = res.weekly.total
          this.loading.weekly = false
        })
        .catch((err) => {
          this.error({ statusCode: 500, message: err.error })
        })
    },
  },
}
</script>
