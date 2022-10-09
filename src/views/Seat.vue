<script lang="ts" setup>
import BookingHeader from "@/components/BookingHeader.vue";
import SeatCar from "@/components/SeatCar.vue";
import type { ISeatCar } from "@/components/SeatCar.vue";
import { InputButton } from "@/components/Input";
import { ref } from "vue";

const seatsCar: ISeatCar[] = [
  {
    plate: "A123AA",
  },
  {
    plate: "B123BB",
  },
  {
    plate: "C123CC",
  },
  {
    plate: "D123DD",
  },
  {
    plate: "E123EE",
  },
  {
    plate: "F123FF",
  },
  {
    plate: "G123GG",
  },
  {
    plate: "H123HH",
  },
  {
    plate: "I123II",
  },
  {
    plate: "J123JJ",
  },
  {
    plate: "K123KK",
  },
  {
    plate: "L123LL",
  },
  {
    plate: "M123MM",
  },
  {
    plate: "N123NN",
  },
  {
    plate: "O123OO",
  },
  {
    plate: "P123PP",
  },
];

const street = "ул. Ленина";
const house = "1";

const popupVisible = ref(false);
const popupSeat = ref("");
</script>

<template>
  <div class="h-screen flex flex-col">
    <div :class="{ hidden: !popupVisible }" class="absolute z-10 h-screen w-full flex bg-gray-900 bg-opacity-25">
      <div class="bg-blue-50 w-96 p-5 h-fit m-auto flex flex-col gap-y-5">
        <div class="text-xl font-bold">Вы выбираете {{ popupSeat }}</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsam
          nisi officiis repellendus nulla cum?
        </div>
        <div class="grid grid-cols-2 gap-x-5">
          <InputButton variant="secondary" @click="
            () => {
              popupVisible = false;
              popupSeat = '';
            }
          ">
            Отмена
          </InputButton>
          <InputButton>Да, продолжить</InputButton>
        </div>
      </div>
    </div>
    <BookingHeader :step="3" />
    <div class="flex my-auto">
      <div class="container-md m-auto flex flex-col gap-y-5">
        <div class="text-3xl font-bold">
          Парковка на {{ street }}, {{ house }}
        </div>
        <div class="p-5 border-8 border-blue-500 bg-gray-200">
          <div class="flex flex-col gap-y-16">
            <div class="h-fit grid grid-cols-8 grid-rows-2 gap-2 bg-gray-200">
              <SeatCar class="bg-gray-50" v-for="seatCar in seatsCar" :key="seatCar.plate" v-bind="seatCar" @click="
                () => {
                  popupVisible = true;
                  popupSeat = seatCar.plate;
                }
              " />
            </div>
            <div class="h-fit grid grid-cols-8 grid-rows-2 gap-2 bg-gray-200">
              <SeatCar class="bg-gray-50" v-for="seatCar in seatsCar" :key="seatCar.plate" v-bind="seatCar" @click="
                () => {
                  popupVisible = true;
                  popupSeat = seatCar.plate;
                }
              " />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>