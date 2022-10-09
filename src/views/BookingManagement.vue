<script lang="ts" setup>
import BookingHeader from "@/components/BookingHeader.vue";
import Value from "@/components/Value.vue";
import SearchResult from "@/components/SearchResult.vue";
import type { ISearchResult } from "@/components/SearchResult.vue";
import { InputButton } from "@/components/Input";

const booking: ISearchResult = {
  image: "https://api.lorem.space/image/car?hash=72oyovoe",
  brand: "BMW",
  name: "X5",
  datetime: new Date(),
  price: 1000,
  likelihood: 100,
  picked: true,
};
const bookingId = "1234567890";

const driver = {
  firstName: "Иван",
  lastName: "Иванов",
  birthDate: new Date(1990, 1, 12),
  drivingLicense: "1234567890",
};
</script>

<template>
  <BookingHeader :step="3" />
  <main class="container-sm mx-auto my-10 grid gap-y-10">
    <SearchResult v-bind="booking" />
    <div class="container-md bg-gray-50">
      <div class="container-xs mx-auto py-10 grid gap-y-5">
        <div class="grid grid-cols-2 gap-3">
          <Value label="Имя" :value="driver.firstName" />
          <Value label="Фамилия" :value="driver.lastName" />
          <Value label="Дата рождения" :value="driver.birthDate.toLocaleDateString()" />
          <Value label="Номер водительского удостоверения" :value="driver.drivingLicense" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <Value label="Финальная стоимость бронирования" value="1000" />
          <Value label="Номер бронирования" :value="bookingId" />
        </div>
        <InputButton @click="$router.push({name: 'seat'})" class="w-full">Выбрать автомобиль</InputButton>
      </div>
    </div>
  </main>
</template>