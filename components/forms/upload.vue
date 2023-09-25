<template>
  <div ref='dropZone' class='relative flex w-full flex-col items-center gap-2 rounded-md bg-gray-100 py-10 after:pointer-events-none after:absolute after:inset-1 after:rounded after:border after:border-dashed after:border-gray-300 after:content-[""] md:py-14'>
    <Btn @click='file.open'>
      画像をアップロード
    </Btn>
    <div
      class='hidden text-xs text-gray-500 md:block'
      :class='isOverDropZone ? "font-bold" : ""'
    >
      <slot />
    </div>
  </div>
</template>
  
  <i18n lang="yaml">
  ja:
    local:
      upload: 'アップロード'
  en:
    local:
      upload: 'Upload'
  </i18n>
  
<script lang="ts" setup>
import { useDropZone, useFileDialog } from '@vueuse/core'
import { ref } from 'vue'
//   import { useI18n } from '@/composables/systems/i18n'
import Btn from '@/components/commons/btn.vue'
  
const emit = defineEmits(['input'])
  
const dropZone = ref()
  
//   const { t } = useI18n()
const file = useFileDialog()
  
const onChange = (files: File[] | FileList | null): void => {
  emit('input', files)
}
  
file.onChange(onChange)
const { isOverDropZone } = useDropZone(dropZone, onChange)
</script>
  