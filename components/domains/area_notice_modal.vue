<template>
  <Layout :title='subject'>
    <div>
      <div>画像の実際に印刷されるエリアを設定する必要があります。</div>
      <div>変更したい場合は「印刷するエリアを変更」から変更できます。</div>
      <div class='divider' />
      <div>現在対応しているサイズは以下になります。</div>
      <button
        class='btn w-full'
        type='button'
        @click='resolve("ok")'
      >
        閉じる
      </button>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/commons/modals/layout.vue'

export interface IProps {
  subject: string,
    message: string,
  resolve(result: TResult): void
}

export type TResult = 'cancel' | 'ok'

defineProps<IProps>()

</script>
