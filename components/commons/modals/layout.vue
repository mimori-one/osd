<template>
  <div class='fixed left-0 top-0 z-20 max-h-screen min-h-screen w-screen overflow-y-auto'>
    <div
      class='flex h-screen w-full justify-center bg-black/40'
      @click="emit('close')"
    >
      <div class='flex h-[100svh] w-full items-center justify-center p-2'>
        <section
          class='animate-popup flex max-h-full w-full max-w-xl flex-col overflow-hidden rounded-lg bg-white shadow-lg'
          @click.stop
        >
          <header
            v-if='title'
            class='flex flex-1 items-center justify-center border-b border-gray-200 p-4 text-center font-bold'
          >
            {{ title }}
          </header>
          <div class='flex-1 overflow-y-auto p-4 md:p-6'>
            <slot />
          </div>
          <footer
            v-if='$slots["buttons"]'
            class='flex flex-col justify-end gap-2 border-t border-gray-200 bg-gray-50 px-4 py-3 md:flex-row'
          >
            <div class='order-1 flex-1 md:order-2'>
              <div class='flex flex-col justify-end gap-2 md:flex-row'>
                <slot name='buttons' />
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'

interface IProperty {
  title?: string
}

withDefaults(defineProps<IProperty>(), {
  title: '',
})

const emit = defineEmits(['close'])

const $slots = useSlots()
</script>
