<script lang="ts" setup>
import Header from "@/components/Header.vue";
import {
  HomeSearch,
  HomePrinciples,
  HomeTrust,
  HomePromo,
  HomeSubscription,
} from "@/components/Home";
import Footer from "@/components/Footer.vue";
</script>


<template>
  <Header class="sticky top-0 z-50" />
  <main class="grid gap-y-10 bg-gray-100">
    <HomePrinciples />
    <HomeTrust />
    <HomeSearch id="search" />
    <HomePromo id="promos" />
    <HomeSubscription />
  </main>
  <Footer />
</template>