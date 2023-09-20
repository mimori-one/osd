<template>
  <div>
    <div>
      購入数
    </div>
    <select
      id='countries'
      class='
        block
        w-full rounded-lg
        border border-gray-300
        bg-gray-50
        p-2.5 text-sm
        text-gray-900
        focus:border-blue-500
        focus:ring-blue-500
        dark:border-gray-600
        dark:bg-gray-700
        dark:text-white
        dark:placeholder:text-gray-400
        dark:focus:border-blue-500
        dark:focus:ring-blue-500
      '
    >
      <option v-for='count in counts'>
        {{ count }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const counts = [1, 2, 3, 4, 5]
</script>