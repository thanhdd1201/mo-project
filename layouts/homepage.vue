<template>
  <v-app class="container">
    <homepage-header/>
    <nuxt />
  </v-app>
</template>

<script>
import homepageHeader from "../components/Homepage/header"
export default {
  components: {
    homepageHeader: homepageHeader
  },

}
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr;
  background: #fff;
  width: 100%;
  max-width: 100%;
}
</style>
