<script lang="ts" setup>
import { InputButton, InputField } from "../Input";
</script>
<template>
  <div class="bg-blue-500 py-5">
    <div class="bg-gray-50 p-5 container-sm mx-auto grid gap-y-5">
      <div class="text-gray-900 font-bold text-2xl">Найди свою машину</div>
      <form class="grid gap-y-5" @submit.prevent="() => $router.push({name: 'search'})">
        <div class="grid gap-y-3">
          <InputField :required="true" id="from" type="text" label="Откуда" />
          <InputField :required="true" id="date" type="date" label="Дата" />
          <InputField :required="true" id="auto" type="text" label="Марка автомобиля" />
        </div>
        <InputButton class="w-full" type="submit">Найти</InputButton>
      </form>
    </div>
  </div>
</template>