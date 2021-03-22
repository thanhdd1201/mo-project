<template>
  <div class="art-work-container">
    <div class="d-flex">
      <div class="infographic-block">
        <div class="infographic-block__name">{{ artDetail.name }}</div>
        <div class="infographic-block__artist">{{ artDetail.artist }}</div>
      </div>
      <nuxt-link tag="img" class="thumbnail" :src="artDetail.thumbnail"
                 :to="{name:'photography-id', params: {id: artDetail.id}}"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtWorkThumbnail",
  props: {
    artDetail: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    toDetailPage() {
      router.push({name: 'photoDetail', params: {name: 123}})
    }
  }
}
</script>

<style scoped>
.art-work-container {
  height: 100%;
  max-width: calc(100vw - 100px);
  display: grid;
  place-items: center;
}

.art-work-container .infographic-block {
  display: flex;
  flex-direction: column;
}

.art-work-container .infographic-block__name {
  font-size: 2rem;
}

.art-work-container .infographic-block__artist {
  padding-top: 3rem;
  font-weight: 600;
}
</style>
