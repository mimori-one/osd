<template>
  <div class='m-3 flex flex-col'>
    <p>商品</p>
    <template v-for='item in items' :key='item.id'>
      <Link
        to='/creator/items/1/edit'
      >
        {{ item.title }}
      </Link>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Link from '@/components/commons/link'

const { 
  data: items, 
} = await useFetch('/api/creator/items')
</script>
