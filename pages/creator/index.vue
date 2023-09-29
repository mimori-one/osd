<template>
  <div class='m-4 flex flex-col'>
    <img src='https://morishitaya.com/hiroba/wp-content/uploads/990e8ae561e9ed52eb3c4a820679fd9b-300x198.jpg'>

    <!-- クリエイター登録済 -->
    <template v-if='currentUser'>
      <Link class='btn btn-primary mb-4' href='/creator/items/create'>
        新規商品追加
      </Link>
      <Link class='btn bg-noral mb-4' href='/creator/items'>
        商品管理
      </Link>
      <Link class='btn bg-noral mb-4' href='/creator/sales'>
        売上管理
      </Link>
      <Link class='btn bg-noral mb-4' href='/creator/message_card'>
        メッセージカード登録
      </Link>
      <Link class='btn bg-noral mb-4' href='/creator/popup'>
        ポップアップ登録
      </Link>
    </template>

    <!-- ユーザ登録前 -->
    <template v-else>
      <div class='m-4 flex flex-col'>
        <p>ユーザ登録して自分の画像を販売しましょう</p>
        <Link class='btn btn-secondary mb-2' href='/signup'>
          新規ユーザ登録
        </Link>
        <p>アカウントをお持ちの方は</p>
        <Link class='btn btn-primary mb-2' href='/login'>
          ログイン
        </Link>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCurrentUser } from '@/composables/sessions/current_user'
import Link from '@/components/commons/link'

const currentUser = useCurrentUser().data
</script>
