import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default () => {
  Vue.component('LoadingOverlay', Loading)
}
