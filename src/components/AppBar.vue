<template>
  <v-app-bar app flat color="transparent">
    <a class="w-min-content" href="/">
      <img class="pa-2 bg-red rounded" width="80" :src="logo" />
    </a>
    <v-spacer />
    <div class="d-none d-lg-flex align-center">
      <div class="router">
        <v-btn class="mx-1 px-4" v-for="item in routers" :key="item.name" :to="item.link">
          {{ item.name }}
        </v-btn>
      </div>
      <div class="social">
        <v-btn
          class="mx-1 px-4"
          v-for="item in socials"
          :key="item.name"
          :href="item.to"
          target="_blank"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </div>
      <div class="shop mr-6">
        <v-badge content="soon" overlap>
          <v-btn disabled>SHOP</v-btn>
        </v-badge>
      </div>
      <div class="language">
        <v-menu transition="slide-y-transition" bottom>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">LANGUAGE</v-btn>
          </template>
          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
            <v-list-item @click="() => {}">
              <v-list-item-title>한국어</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <v-app-bar-nav-icon class="d-flex d-lg-none"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class AppBar extends Vue {
  get logo() {
    return new URL(`../assets/logo_azuki.svg`, import.meta.url).href;
  }

  get routers() {
    return [
      {
        name: "HOME",
        link: "/",
      },
      {
        name: "BUY",
        link: "/mint",
      },
      {
        name: "GALLERY",
        link: "/gallery",
      },
      {
        name: "ROADMAP",
        link: "/roadmap",
      },
      {
        name: "TEAM",
        link: "/team",
      },
    ];
  }

  get socials() {
    return [
      {
        icon: "mdi-twitter",
        to: "https://twitter.com",
      },
      {
        icon: "mdi-instagram",
        to: "https://twitter.com",
      },
      {
        icon: "mdi-discord",
        to: "https://twitter.com",
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
.router {
  .v-btn {
    height: 1.75rem;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 0.3em;
  }

  .v-btn--active {
    background-color: rgba(255, 255, 255, 0.7);
    text-decoration: underline;
  }
}

.social {
  .v-btn {
    background-color: rgba(255, 255, 255, 0.3);
    height: 1.75rem;
    font-size: 0.7em;
  }

  .v-btn--active {
    background-color: rgba(255, 255, 255, 0.7);
    text-decoration: underline;
  }
}

.shop {
  .v-btn {
    height: 1.75rem;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 0.3em;
  }
  &:hover {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🦄</text></svg>")
        16 0,
      auto;
  }
}

.language {
  .v-btn {
    height: 1.75rem;
    font-size: 0.3em;
  }
}
</style>
