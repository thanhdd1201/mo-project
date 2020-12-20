<template>
 <div class="container">
 </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'homepage',
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
}
</style>
