<script lang="ts" setup>
import BookingHeader from "@/components/BookingHeader.vue";
import Value from "@/components/Value.vue";
import SearchResult from "@/components/SearchResult.vue";
import type { ISearchResult } from "@/components/SearchResult.vue";
import { InputField, InputButton } from "@/components/Input";

const searchResult: ISearchResult = {
  image: "https://api.lorem.space/image/car?hash=72oyovoe",
  brand: "BMW",
  name: "X5",
  datetime: new Date(),
  price: 1000,
  likelihood: 100,
  picked: true,
};
</script>

<template>
  <BookingHeader :step="2" />
  <main class="container-sm mx-auto my-10 grid gap-y-10">
    <SearchResult v-bind="searchResult" />
    <div class="container-md bg-gray-50">
      <form class="container-xs mx-auto py-10 grid gap-y-5"
        @submit.prevent="() => $router.push({name: 'booking_management'})">
        <div class="grid grid-cols-2 gap-3">
          <InputField type="text" id="firstName" :required="true" label="Имя" />
          <InputField type="text" id="lastName" :required="true" label="Фамилия" />
          <InputField type="date" id="birthDate" :required="true" label="Дата рождения" />
          <InputField type="text" id="drivingLicense" :required="true" label="Номер водительского удостоверения" />
        </div>
        <div class="flex items-center justify-between">
          <Value label="Финальная стоимость бронирования" value="1000" />
          <InputButton type="submit">Оформить бронирование</InputButton>
        </div>
      </form>
    </div>
  </main>
</template>