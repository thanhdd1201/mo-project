<template>
  <div class="art-container">
    <carousel :scrollPerPage="true" :paginationEnabled="false" :center-mode="true" :perPage="1" :paginationPadding="0">
      <slide v-for="video in videos" :key="video.id" >
        <ArtWorkThumbnail :artDetail="video"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import ArtWorkThumbnail from "@/components/Common/ArtWorkThumbnail";
import {video} from '@/pages/data.js'

export default {
  components: {
    ArtWorkThumbnail,
    Carousel, Slide
  },
  name: "PhotographyIndex",
  data () {
    return {
      videos: video
    }
  },
  methods: {
  }
}
</script>
