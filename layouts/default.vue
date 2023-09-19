<template>
  <Header />
  <slot />
  <Footer />
  <ModalSlot />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import ModalSlot from '@/components/commons/modals/slot.vue'
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'

</script>
