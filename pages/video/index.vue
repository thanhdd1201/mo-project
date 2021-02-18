<template>
  <div class="video-container">
    <carousel :scrollPerPage="true" :paginationEnabled="false" :perPage="1" :paginationPadding="0">
      <slide v-for="video in videos" :key="video.id">
        <ArtWorkContainer :artDetail="video"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import ArtWorkContainer from "@/components/Common/ArtWorkContainer";
export default {
  components: {
    ArtWorkContainer,
    Carousel, Slide
  },
  name: "VideoIndex",
  data() {
    return {
      videos: [
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
.video-container {
  padding: 50px 0 50px 35px;
}
</style>
