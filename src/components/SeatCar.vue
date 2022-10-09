<script lang="ts" setup>
export interface ISeatCar {
  plate: string;
}
defineProps<ISeatCar>();
</script>

<template>
  <div class="px-2 py-3">
    <div class="
        flex
        bg-blue-500
        text-gray-50
        h-28
        border-4 border-blue-300
        hover:ring-2 hover:bg-blue-700
      ">
      <div class="w-fit m-auto text-lg">
        {{ plate }}
      </div>
    </div>
  </div>
</template>