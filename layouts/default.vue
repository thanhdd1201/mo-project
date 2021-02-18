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
          to: '/video'
        },
        {
          id: '03',
          title: 'PERFORMANCE/ LIVESTREAM',
          to: '/video'
        },
        {
          id: '04',
          title: 'PHOTOGRAPHY',
          to: '/photography'
        },
        {
          id: '05',
          title: 'OTHERS',
          to: '/inspire'
        },
        {
          id: '06',
          title: 'MƠ HỎI MỞ - MO?',
          to: '/inspire'
        }
      ],
    }  }
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
