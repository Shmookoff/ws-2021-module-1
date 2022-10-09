<script lang="ts" setup>
import BookingHeader from "@/components/BookingHeader.vue";
import { HomeSearch } from "@/components/Home";
import SearchResult from "@/components/SearchResult.vue";
import type { ISearchResult } from "@/components/SearchResult.vue";

const searchResults: ISearchResult[] = [
  {
    image: "https://api.lorem.space/image/car?hash=72oyovoe",
    brand: "BMW",
    name: "X5",
    datetime: new Date(),
    price: 1000,
    likelihood: 100,
  },
  {
    image: "https://api.lorem.space/image/car?hash=mlxr3mc7",
    brand: "Mercedes",
    name: "220 SE",
    datetime: new Date(),
    price: 900,
    likelihood: 90,
  },
  {
    image: "https://api.lorem.space/image/car?hash=dm6baj84",
    brand: "Audi",
    name: "A6",
    datetime: new Date(),
    price: 800,
    likelihood: 80,
  },
  {
    image: "https://api.lorem.space/image/car?hash=26cuaqks",
    brand: "BMW",
    name: "X5",
    datetime: new Date(),
    price: 1000,
    likelihood: 100,
  },
  {
    image: "https://api.lorem.space/image/car?hash=spv9yo9l",
    brand: "Mercedes",
    name: "220 SE",
    datetime: new Date(),
    price: 900,
    likelihood: 90,
  },
  {
    image: "https://api.lorem.space/image/car?hash=vcwbkcja",
    brand: "Audi",
    name: "A6",
    datetime: new Date(),
    price: 800,
    likelihood: 80,
  },
  {
    image: "https://api.lorem.space/image/car?hash=0dau1zk3",
    brand: "BMW",
    name: "X5",
    datetime: new Date(),
    price: 1000,
    likelihood: 100,
  },
  {
    image: "https://api.lorem.space/image/car?hash=g2aifcb9",
    brand: "Mercedes",
    name: "220 SE",
    datetime: new Date(),
    price: 900,
    likelihood: 90,
  },
  {
    image: "https://api.lorem.space/image/car?hash=dhlxw7m8",
    brand: "Audi",
    name: "A6",
    datetime: new Date(),
    price: 800,
    likelihood: 80,
  },
  {
    image: "https://api.lorem.space/image/car?hash=nuzzbscn",
    brand: "BMW",
    name: "X5",
    datetime: new Date(),
    price: 1000,
    likelihood: 100,
  },
  {
    image: "https://api.lorem.space/image/car?hash=tahl7ehp",
    brand: "Mercedes",
    name: "220 SE",
    datetime: new Date(),
    price: 900,
    likelihood: 90,
  },
];
</script>
<template>
  <BookingHeader :step="1" />
  <HomeSearch />
  <main class="my-10 container-md mx-auto grid grid-cols-2 gap-5">
    <SearchResult v-for="searchResult in searchResults" :key="searchResults.indexOf(searchResult)"
      v-bind="searchResult" />
  </main>
</template>