<template>
  <div class='container'>
    <img
      ref='target'
      alt='product image'
      class='target w-60'
      :src='url'
    >
    <!-- <div class="target w-40 h-40" ref="target">
      <img class="p-2 rounded-t-lg w-40 h-40" :src="url" alt="product image" />
    </div> -->
    <Moveable
      class-name='moveable'
      :drag-target='null'
      :draggable='true'
      :hide-default-lines='true'
      :target="['.target']"
      @drag='onDrag'
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Moveable from 'vue3-moveable'

const target = ref(null)

const onDrag = ({ transform }): void => {
  console.log('tangent')
  target.value.style.transform = transform
}
</script>

<style scoped>
:deep(.moveable-control.moveable-origin) {
  visibility: hidden;
}
</style>
