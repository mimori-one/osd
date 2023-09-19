<template>
  <div class='m-2 flex h-16 w-16 rounded-full bg-teal-400'>
    <img alt='user icon' class='rounded-full object-cover p-1' :src='url'>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'

interface IProps {
  url: string
}

const props = defineProps<IProps>()

</script>