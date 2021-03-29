<template>
  <v-app class="container">
    <default-header :items="items"/>
    <nuxt/>
  </v-app>
</template>

<script>
import DefaultHeader from "../components/Detail/header"

export default {
  components: {
    DefaultHeader: DefaultHeader
  },
  data() {
    return {
      items: [
        {
          id: '01',
          title: 'VIDEOS',
          to: '/video'
        },
        {
          id: '02',
          title: 'SOUND/ AUDIO-VISUAL',
          to: '/audio-visual'
        },
        {
          id: '03',
          title: 'PHOTOGRAPHY',
          to: '/photography'
        },
        {
          id: '04',
          title: 'OTHERS',
          to: '/others'
        },
        {
          id: '05',
          title: 'MƠ HỎI MỞ - MO?',
          to: '/about-us'
        }
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr;
  background: #fff;
  width: 100%;
  padding: 0;
  margin: 0;
  max-width: 100%;
}
</style>
