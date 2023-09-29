<template>
  <Header />
  <section>
    <slot />
  </section>
  <Footer />
  <ModalSlot />
</template>

<script setup lang="ts">
import ModalSlot from '@/components/commons/modals/slot.vue'
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
</script>
