<script lang="ts" setup>
export interface IInputField {
  required?: boolean;
  id: string;
  type: string;
  label?: string;
  value?: string;
}

defineProps<IInputField>();
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label v-if="label" :for="id" class="text-sm text-gray-700">
      {{ label }}
    </label>
    <div class="flex">
      <input :id="id" :type="type" :required="required" :value="value" class="
          bg-gray-50
          text-gray-900
          border border-gray-300
          focus:border-blue-500 focus:outline-none
          w-full
          p-2
        " />
    </div>
  </div>
</template>