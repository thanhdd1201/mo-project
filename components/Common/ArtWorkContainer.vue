<template>
  <div class="art-work-container">
    <div class="infographic-block">
      <div class="infographic-block__name">{{ artDetail.name }} {{artDetail.id}}<br/>{{ artDetail.description }}</div>
      <div class="infographic-block__artist">{{ artDetail.artist }}</div>
    </div>
    <iframe class="video" :src="artDetail.embedLink"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "ArtWorkContainer",
  data() {
    return {}
  },
  props: {
    artDetail: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.art-work-container {
  max-width: calc(100vw - 100px);
  display: grid;
  grid-template-columns: 1fr auto;
}
.art-work-container .infographic-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.art-work-container .infographic-block__name {
  font-size: 1.25rem;
}
.art-work-container .infographic-block__artist {
  font-weight: 600;
}
</style>
