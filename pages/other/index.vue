<template>
  <div class="art-container">
    <carousel :scrollPerPage="true" :paginationEnabled="false" :center-mode="true" :perPage="1" :paginationPadding="0">
      <slide v-for="photo in photos" :key="photo.id" >
        <ArtWorkThumbnail :artDetail="photo"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import ArtWorkThumbnail from "@/components/Common/ArtWorkThumbnail";
import {photography} from '@/pages/data.js'

export default {
  components: {
    ArtWorkThumbnail,
    Carousel, Slide
  },
  name: "otherIndex",
  data () {
    return {
      photos: photography
    }
  },
  methods: {
  }
}
</script>
