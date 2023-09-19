<template>
  <div id='modal'>
    <component
      :is='modal.component'
      v-for='modal in modals'
      v-bind='modal.props'
      :key='modal.id'
      class='hidden last:block'
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from '#app'
import { useModalStore } from '@/stores/modal_store'

const { modals, $reset } = useModalStore()
useRouter().beforeEach($reset)
</script>
