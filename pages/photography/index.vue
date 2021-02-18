<template>
  <div class="video-container">
    <carousel :scrollPerPage="true" :paginationEnabled="false" :perPage="1" :paginationPadding="0">
      <slide v-for="photo in photos" :key="photo.id">
        <ArtWorkContainer :artDetail="photo"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'

export default {
  components: {
    Carousel, Slide
  },
  name: "PhotographyIndex",
  data () {
    return {
      photos: [
        {
          id: 1,
          name: 'Toi la ai',
          description: 'Nhung su ton tai khac',
          artist: 'Nguyen Linh Phuong Thao',
          embedLink: 'https://www.youtube.com/embed/j_XnU1Yhyxc'
        },
        {
          id: 2,
          name: 'Toi la ai',
          description: 'Nhung su ton tai khac',
          artist: 'Nguyen Linh Phuong Thao',
          embedLink: 'https://www.youtube.com/embed/j_XnU1Yhyxc'
        },
        {
          id: 3,
          name: 'Toi la ai',
          description: 'Nhung su ton tai khac',
          artist: 'Nguyen Linh Phuong Thao',
          embedLink: 'https://www.youtube.com/embed/j_XnU1Yhyxc'
        },
        {
          id: 4,
          name: 'Toi la ai',
          description: 'Nhung su ton tai khac',
          artist: 'Nguyen Linh Phuong Thao',
          embedLink: 'https://www.youtube.com/embed/j_XnU1Yhyxc'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
