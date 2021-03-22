<template>
  <div>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped"
                         :right="right" fixed app temporary class="list-navigation-drawer">
      <v-list dark>
        <v-list-item v-for="(item, i) in items" class="list-navigation-drawer__item"
                     :key="i" :to="item.to" router exact>
          <v-list-item-action class="list-navigation-drawer__item--id">
            {{ item.id }}
          </v-list-item-action>
          <v-list-item-content @click="getPage(i)">
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="list-navigation-drawer__block">ARTIST</div>
      <div class="list-navigation-drawer__block">ABOUT</div>
      <div class="list-navigation-drawer__block">SCHEDULE</div>
      <v-btn class="list-navigation-drawer__btn" rounded block color="#FF3D3D">DONATION</v-btn>
    </v-navigation-drawer>
    <div class="mo-header">
      <NuxtLink to="/"><img alt="Logo" src="~assets/icons/mologo.svg"></NuxtLink>
      <v-toolbar-title class="header-title">
        <v-toolbar-items class="header-title--main">{{ title }}</v-toolbar-items>
      </v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      title: '',
      clipped: false,
      drawer: false,
      miniVariant: false,
      right: true,
    }
  },
  methods: {
    getPage (index) {
      this.title = this.items[index].title
    }
  }
}
</script>

<style scoped lang="scss">
.mo-header {
  background-color: #fff;
  width: 100vw;
  padding: 0 50px;
  display: grid;
  grid-template-columns: auto 1fr auto;

  .header-title {
    place-items: center;
    display: grid;

    &--main {
      font-size: 2em;
    }

    &--sub {
      font-size: 0.7em;
    }
  }
}

.list-navigation-drawer {
  padding: 0 20px;
  background: #000;

  &__item {
    background: #000;
    color: #fff;

    &--id {
      color: #FF003D;
    }
  }

  &__block {
    color: #fff;
    font-weight: 700;
    border-top: 1px solid #DEDEDF;
    padding: 12px 0;
  }

  &__btn {
    color: #fff;
    font-weight: 700;
  }

  ::v-deep .v-navigation-drawer {
    &__content {
      overflow-y: hidden;
    }
  }
}
</style>
