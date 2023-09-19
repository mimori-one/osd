<template>
  <component
    :is="!!visit ? 'a' : 'button'"
    class='focus:outline-primary-600/50 flex items-center justify-center whitespace-nowrap rounded border text-center font-bold leading-none transition-colors hover:shadow-sm focus:outline focus:outline-2 focus:outline-offset-2'
    :class='buttonStyle'
    :href='visit'
    type='button'
    @click='onClick'
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// import { usePageStore } from '@/stores/globals/page_store'
import { TComponentRole } from '@/types/components/component_role'
import { TComponentSize } from '@/types/components/component_size'

const ROLE_STYLES: { [P in TButtonRole]: string[] } = {
  danger:    ['text-red-700', 'bg-white', 'border-gray-300', 'hover:text-red-800', 'hover:border-gray-400'],
  default:   ['text-black', 'bg-white', 'border-gray-300', 'hover:border-gray-400'],
  hazard:    ['text-white', 'bg-red-700', 'border-red-700', 'hover:bg-red-800', 'hover:border-red-800'],
  primary:   ['text-white', 'bg-primary-600', 'border-primary-600', 'hover:bg-primary-700', 'hover:border-primary-700'],
  secondary: ['text-primary-600', 'bg-white', 'border-current', 'hover:text-primary-700'],
  tertiary:  ['text-black', 'bg-white', 'border-gray-300', 'hover:border-gray-400'],
  twitter:   ['text-white', 'bg-twitter-600', 'border-twitter-600', 'hover:bg-twitter-700', 'hover:border-twitter-700'],
  discord:   ['text-white', 'bg-discord-600', 'border-discord-600', 'hover:bg-discord-700', 'hover:border-discord-700'],
}

const SIZE_STYLES: { [P in TComponentSize]: string[] } = {
  small:  ['px-2', 'h-6', 'text-2xs'],
  medium: ['px-4', 'h-8', 'text-xs'],
  large:  ['px-6', 'h-10', 'text-base'],
}

type TButtonRole = TComponentRole | 'discord' | 'twitter'

interface IProperty {
  role?: TButtonRole
  size?: TComponentSize
  disabled?: boolean
  loadingEffect?: boolean
  visit?: string
}

const props = withDefaults(defineProps<IProperty>(), {
  role:          'default',
  size:          'medium',
  disabled:      false,
  loadingEffect: true,
  visit:         undefined,
})

// const $page = usePageStore()

const buttonStyle = computed((): string[] => {
  // eslint-disable-next-line vue/max-len
  return [...ROLE_STYLES[props.role], ...SIZE_STYLES[props.size], ...(props.disabled ? ['opacity-50', 'pointer-events-none'] : []), ...(props.loadingEffect ? ['group-aria-loading:opacity-50', 'group-aria-loading:outline-none'] : [])]
})

const onClick = (e: MouseEvent): void => {
  if (props.visit) {
    // $page.visit(props.visit)
    e.stopPropagation()
    e.preventDefault()
  }
}
</script>
