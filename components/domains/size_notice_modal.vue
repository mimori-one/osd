<template>
  <Layout :title='subject'>
    <div>
      <div>実際に印刷されるサイズを設定する必要があります。</div>
      <div>画像をアップロードした直後は、最も印刷に適していると判断されたサイズが自動で設定されています。</div>
      <div>販売するサイズを変更したい場合は「サイズを変更」から変更できます。</div>
      <div class='divider' />
      <div>現在対応しているサイズは以下になります。</div>
      <ul>
        <li>
          A3版(420mm x 297mm) 縦・横
        </li>
        <li>
          A4版(297mm x 210mm) 縦・横
        </li>
        <li>
          A5版(210mm x 148mm) 縦・横
        </li>
        <li>
          A6版(148mm x 105mm) 縦・横
        </li>
        <li>
          スクエア210(210mm x 210mm)
        </li>
        <li>
          スクエア105(105mm x 105mm)
        </li>
      </ul>
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
  