<template>
  <section>
    <div class='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
      <p>注文が完了しました。</p>
      <div class='mb-4'>
        注文の内容は注文履歴からも確認できます。
      </div>
      <Link class='hover:underline' href='/'>
        トップページへ
      </Link>
    </div>
  </section>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'
</script>