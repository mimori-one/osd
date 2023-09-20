<!-- eslint-disable vue/no-restricted-html-elements -->
<template>
  <NuxtLink :class='linkStyle' :href='href' :target='target'>
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface IProperty {
  href: string;
  styled?: boolean;
  target?: '_blank';
}

const props = withDefaults(defineProps<IProperty>(), {
  styled: true,
  target: undefined,
})

const linkStyle = computed((): string => {
  // eslint-disable-next-line vue/max-len
  return props.styled ? 'rounded text-primary-600 no-underline transition-colors hover:text-primary-700 hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-primary-600/50' : ''
})
</script>
