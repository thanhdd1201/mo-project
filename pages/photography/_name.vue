<template>
  <div class="art-work-container">
    <swiper v-if="artId !== 3" :options="swiperOption">
      <swiper-slide v-for="(photo, index) in photo.products" class="slider-photos"
                    v-bind:style="{ backgroundImage: 'url(' + photo + ')' }"
                    :key="index">
      </swiper-slide>
    </swiper>
    <div v-else>
      <div class="grid-display-photo">
        <img class="photo-element" v-for="(photo, ind) in photo.products" :src="photo" :key="ind" alt="">
      </div>
    </div>
    <div>
      <div v-if="true" class="product-info-container">
        <div>
          <p class="product-title">{{ photo.name }}</p>
          <p class="artist-name">{{ photo.artistName }}</p>
        </div>
        <div>
          <span>{{ photo.descriptionVi }}</span>
        </div>
      </div>
      <div v-else class="product-info-container">
        <div>
          <p class="product-title">{{ photo.name }}</p>
          <p class="artist-name">{{ photo.artistName }}</p>
        </div>
        <div>
          <span>{{ photo.descriptionEn }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import {photography} from "@/pages/data";
import "swiper/swiper-bundle.min.css"

export default {
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {
      photos: photography,
      artId: this.$route.params.id,
      swiperOption: {
        slidesPerView: 1,
      }
    }
  },
  computed: {
    photo() {
      return this.photos.find(photo => this.$route.params.name === photo.name)
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-container {
  height: 800px;
}

.slider-photos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: auto;
  background-position: center;
}

.grid-display-photo {
  display: grid;
  grid-template-columns: repeat(4, 25vw);
  max-width: 100vw;

  .photo-element {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
}

.product-info-container {
  max-width: 100vw;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 1fr 2fr;

  .product-title {
    font-size: 2rem;
  }

  .artist-name {
    font-weight: 700;
  }
}
</style>
