<template>
  <div class="art-work-container">
    <carousel :scrollPerPage="true" :center-mode="true" :paginationEnabled="false" :perPage="1" :paginationPadding="0">
      <slide v-for="photo in photos" :key="photo.id">
        <img alt="art" class="art-work-photography" :src="photo"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "PhotoDetail",
  props: {
    photos: {
      type: Array,
      default: () => {
      }
    }
  },
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
