<template>
  <v-app-bar app flat color="transparent">
    <v-toolbar-title>
      <a href="/">
        <v-img :src="logo" max-width="100" />
      </a>
    </v-toolbar-title>
    <span class="router">
      <v-btn
        selected-class="router_active"
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
        link: "/home",
      },
      {
        name: "THE GARDEN",
        link: "/home",
      },
      {
        name: "CAREERS",
        link: "/home",
      },
      {
        name: "MANIFESTO",
        link: "/home",
      },
      {
        name: "MINDMAP",
        link: "/home",
      },
      {
        name: "SHOP",
        link: "/home",
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
  .router_active {
    background-color: black;
  }
  .v-btn {
    font-size: 0.3em;
    &:active {
      text-decoration-line: underline;
    }
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
