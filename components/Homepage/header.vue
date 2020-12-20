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
          <v-list-item-content>
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
      <img alt="Logo" src="~assets/icons/mologo.svg">
      <v-toolbar-title class="header-title">
        <v-toolbar-items class="header-title--main">Á Space Virtual No.1:</v-toolbar-items>
        <v-toolbar-items class="header-title--main">(Tôi, Những sự tồn tại khác)</v-toolbar-items>
        <span class="header-title--sub">Curated bởi MƠ HỎI MỞ - MO?</span>
      </v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          id: '01',
          title: 'VIDEOS',
          to: '/'
        },
        {
          id: '02',
          title: 'SOUND/ AUDIO-VISUAL',
          to: '/inspire'
        },
        {
          id: '03',
          title: 'PERFORMANCE/ LIVESTREAM',
          to: '/inspire'
        },
        {
          id: '04',
          title: 'PHOTOGRAPHY',
          to: '/inspire'
        },
        {
          id: '05',
          title: 'OTHERS',
          to: '/inspire'
        },
        {
          id: '06',
          title: 'MƠ HỎI MỞ - MO?',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped lang="scss">
.mo-header {
  background-color: #fff;
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
}
</style>
