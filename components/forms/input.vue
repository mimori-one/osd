<template>
  <input
    v-bind='$attrs'
    class='group-aria-invalid:border-red-700 h-8 rounded border border-gray-300 bg-white px-2 text-sm transition-all placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm focus:border-gray-400 focus:shadow-inner focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-orange-600/50 active:border-gray-400 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:border-gray-200 disabled:hover:shadow-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' 
    :class='inputStyle'
    :value='modelValue'
    @input='onInput'
  >
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue'
import type { TComponentRole } from '@/types/components/component_role'

interface IProps {
  role?: TComponentRole,
  modelValue: number | string | null | undefined
}

const props = withDefaults(defineProps<IProps>(), {
  role: 'default',
})

const emit = defineEmits(['update:modelValue'])

const attrs = useAttrs()

const onInput = (e: Event): void => {
  let value = (e.target as HTMLInputElement).value
  emit('update:modelValue', attrs.type === 'number' && value ? parseFloat(value) : value)
}

const roleStyles: { [P in TComponentRole]: string[] } = {
  danger:    ['border-red-700'],
  default:   [],
  hazard:    [],
  primary:   [],
  secondary: [],
  tertiary:  [],
}

const inputStyle = computed((): string[] => {
  return [
    ...roleStyles[props.role],
  ]
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
