<script>
import { mapActions } from 'pinia'
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/user'
export default {
  methods: {
    ...mapActions(useUserStore, ['handleChangeLoginStatus', 'fetchDetailUser'])
  },
  created() {
    if (localStorage.access_token) {
      this.handleChangeLoginStatus(true)
      this.fetchDetailUser()
    } else {
      this.handleChangeLoginStatus(false)
      localStorage.clear()
    }
  }
}
</script>

<template>
  <RouterView />
</template>
