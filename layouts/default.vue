<template>
  <v-app class="container">
    <header/>
    <nuxt />
  </v-app>
</template>

<script>
import header from "../components/Detail/header"
export default {
  components: {
    header: header
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
