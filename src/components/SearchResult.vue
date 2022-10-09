<script lang="ts" setup>
import Value from "@/components/Value.vue";

export interface ISearchResult {
  image: string;
  brand: string;
  name: string;
  datetime: Date;
  price: number;
  likelihood: number;
  picked?: boolean;
}
withDefaults(defineProps<ISearchResult>(), {
  picked: false,
});
</script>
<template>
  <RouterLink :to="{name: 'booking' }">
    <div class="
        flex
        items-center
        bg-blue-500
        text-gray-50
        gap-x-5
        border-4 border-blue-300
        hover:ring-2 hover:bg-blue-700
        group
      ">
      <div class="">
        <img :src="image" :alt="name" :class="{
          'w-96 h-56': picked,
          'w-48 group-hover:w-56 h-48': !picked,
        }" class="object-cover" />
      </div>
      <div class="h-fit">
        <div class="grid grid-cols-2 gap-2">
          <Value label="Марка автомобиля" :value="brand" variant="secondary" :size="picked ? 'base' : 'sm'" />
          <Value label="Название автомобиля" :value="name" variant="secondary" :size="picked ? 'base' : 'sm'" />
          <Value label="Дата бронирования" :value="datetime.toLocaleDateString()" variant="secondary"
            :size="picked ? 'base' : 'sm'" />
          <Value label="Время бронирования" :value="datetime.toLocaleTimeString()" variant="secondary"
            :size="picked ? 'base' : 'sm'" />
          <Value label="Стоимость" :value="price" variant="secondary" :size="picked ? 'base' : 'sm'" />
          <Value label="Вероятность бронирования" :value="`${likelihood}%`" variant="secondary"
            :size="picked ? 'base' : 'sm'" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>