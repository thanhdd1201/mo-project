<template>
  <div class="art-work-container">
    <div class="d-flex">
      <div class="infographic-block">
        <div class="infographic-block__name">{{ artDetail.name }}</div>
        <div class="infographic-block__artist">{{ artDetail.artistName }}</div>
      </div>
      <nuxt-link tag="img" class="thumbnail" :src="artDetail.thumbnail"
                 :to="{name:'photography-name', params: {id: artDetail.id, name: artDetail.name}}"/>
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
  methods: {}
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
  margin-right: 15px;
}

.art-work-container .infographic-block__name {
  font-size: 1.5rem;
}

.art-work-container .infographic-block__artist {
  padding-top: 3rem;
  font-weight: 600;
}
</style>
