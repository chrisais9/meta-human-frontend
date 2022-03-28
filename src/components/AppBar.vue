<template>
  <v-app-bar app flat color="transparent">
    <a class="w-min-content" href="/">
      <img class="pa-2 bg-red rounded" width="80" :src="logo" />
    </a>
    <v-spacer />
    <span class="router">
      <v-btn
        class="mx-1 px-4"
        color="black"
        v-for="item in routers"
        :key="item.name"
        :to="item.link"
      >
        {{ item.name }}
      </v-btn>
    </span>
    <span class="social">
      <v-btn icon v-for="item in socials" :key="item.name" :href="item.to" target="_blank">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </span>
    <span class="language">
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
    </span>
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
        name: "GALLERY",
        link: "/gallery",
      },
      {
        name: "THE GARDEN",
        link: "/garden",
      },
      {
        name: "CAREERS",
        link: "/careers",
      },
      {
        name: "MANIFESTO",
        link: "/manifesto",
      },
      {
        name: "MINDMAP",
        link: "/mindmap",
      },
      {
        name: "SHOP",
        link: "/shop",
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
    font-size: 0.7em;
  }
}

.language {
  .v-btn {
    font-size: 0.3em;
  }
}
</style>
