<template>
  <div class='w-60'>
    <div class='w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
      <Link :href='`/scene/${scene.id}`'>
        <img alt='product image' class='rounded-t-lg p-2' :src='scene.thumbnail'>
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IScene } from '@/types/scene.d.ts'
import Link from '@/components/commons/link'

interface IProps {
  scene: IScene
}

defineProps<IProps>()

</script>
