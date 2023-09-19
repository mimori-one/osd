<template>
  <div class='flex flex-col items-center justify-center'>
    <!-- Profiles -->
    <div class='m-2 flex flex-col flex-wrap gap-5'>
      <div v-for='room in rooms'>
        <Link class='group flex h-32 w-32 flex-col items-center gap-2' href='#'>
          <img
            class='
              rounded
              border-2 border-transparent
              group-hover:border-2 group-hover:border-orange-400
            '
            :src='room'
          >
        </Link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExRooms } from '@/composables/useExRooms.ts'
import Link from '@/components/commons/link'

const rooms = useExRooms()
</script>
