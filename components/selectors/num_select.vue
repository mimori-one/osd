<template>
  <div>
    <div class='mb-1'>
      購入数
    </div>
    <select
      id='nums'
      class='select bg-normal input-bordered'
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