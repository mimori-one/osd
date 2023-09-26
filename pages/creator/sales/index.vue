<template>
  <div class='m-3 flex flex-col'>
    <p>アナリティクス</p>
  </div>
</template>

<script lang="ts" setup>
import Link from '@/components/commons/link'

const { 
  data: items, 
} = await useFetch('/api/creator/items')
</script>
