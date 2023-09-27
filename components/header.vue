<template>
  <header>
    <div class='navbar bg-primary text-primary-content'>
      <!-- ロゴとサービス名 -->
      <div class='navbar-start'>
        <Link class='btn btn-ghost text-xl normal-case' href='/'>
          ONE SHEEN
        </Link>
      </div>

      <!-- 中央（なし） -->
      <div class='navbar-center' />

      <!-- 右 -->
      <div class='navbar-end'>
        <div class='dropdown dropdown-end'>
          <label class='btn btn-ghost btn-circle' tabindex='0'>
            <div class='indicator'>
              <svg
                class='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              ><path
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
              /></svg>
              <span class='badge badge-sm indicator-item'>2</span>
            </div>
          </label>
          <div class='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow' tabindex='0'>
            <div class='card-body'>
              <span class='text-lg font-bold'>2つの商品</span>
              <span class='text-info'>合計金額: ¥999</span>
              <div class='card-actions'>
                <Link class='btn btn-primary btn-block' href='/cart'>
                  カート内容を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
        <template v-if='currentUser'>
          <Link class='btn btn-ghost' href='/login'>
            ユーザ名
          </Link>
        </template>

        <template v-else>
          <Link class='btn btn-ghost' href='/login'>
            ログイン
          </Link>
        </template>
      </div>
    </div>

    <!-- 検索 -->
    <div class='navbar bg-neutral text-primary-content'>
      <div class='dropdown dropdown-bottom'>
        <label class='btn m-1 w-40' tabindex='0'>検索対象：全て
          <svg
            aria-hidden='true'
            class='ml-2.5 h-2.5 w-2.5'
            fill='none'
            viewBox='0 0 10 6'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m1 1 4 4 4-4'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
          </svg>
        </label>
        <ul class='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow' tabindex='0'>
          <li><a>全て</a></li>
          <li><a>メタル商品</a></li>
          <li><a>クリエイター</a></li>
          <li><a>バリアブルフレーム</a></li>
        </ul>
      </div>

      <input class='input input-bordered input-primary-content max-w-xm w-full' placeholder='検索したい単語を入力' type='text'>
      
      <button class='btn btn-ghost btn-circle'>
        <svg
          class='h-5 w-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        ><path
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
        /></svg>
      </button>
    </div>

    <nav class='hidden border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
      <div class='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
        <!-- ヘッダ右 -->
        <div class='flex items-center justify-items-end'>
          <!-- 検索 -->
          <div style='width: 20px; font-family: helvetica, arial, sans-serif'>
            <Link href='/search'>
              <!-- inline SVG icon -->
              <svg
                aria-labelledby='title desc'
                class='svg-icon search-icon'
                role='img'
                viewBox='0 0 19.9 19.7'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title id='title'>Search Icon</title>
                <desc id='desc'>A magnifying glass icon.</desc>
                <g class='search-path' fill='none' stroke='#ffffff'>
                  <path d='M18.5 18.3l-5.4-5.4' stroke-linecap='square' />
                  <circle cx='8' cy='8' r='7' />
                </g>
              </svg>
            </Link>
          </div>

          <!-- カート -->
          <Link class='ml-3' href='/cart' style='width: 20px;'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA60lEQVR4nO3WsQpBURjA8VsmKwNG5Q1MJoOFlFmKJ7BY5QHkJZTJG9ydYrPZhZXBoAh/XX1ic45z7pH4z1/n11nOdzzvJwPGPFoA1U/AQScg4wS/BwxuNHQ8lwEVgaeu4SiwB85AwjXuy60bruEm4TR6BadDglcqt56HAPdV4F4IcE0FzltGL0BSBY4AG4vw7CX6hA8twl0duG4RLujAMVkYpu2DF1EZFnxiAfa1UIHbFuDWO3AK2BmgWyCuDQueC9YkcNQAD/LByL6F/m5AGVgHGwYomc4pJwfdW5rOfQVckkOXQNF07p/nqit4etkTHpfOQQAAAABJRU5ErkJggg=='>
          </Link>

          <!-- ログイン時メニュー -->
          <template v-if='currentUser'>
            <div class='flex items-center lg:order-2' @click='opened = !opened'>
              <div
                ref='menu'
                class='animate-dropdown absolute right-0 top-0 z-50 mt-8 max-h-[90svh] origin-top-left divide-y divide-gray-100 overflow-hidden overflow-y-auto whitespace-nowrap rounded-md border border-gray-200 bg-white text-sm leading-none shadow-md empty:hidden'
                :class="[opened ? 'block' : 'hidden']"
              >
                <DMenu />
              </div>

              <Btn
                aria-controls='mobile-menu-2'
                aria-expanded='false'
                class='ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden'
                data-collapse-toggle='mobile-menu-2'
                type='button'
              >
                <span class='sr-only'>Open main menu</span>
                <svg
                  class='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path clip-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' fill-rule='evenodd' />
                </svg>
                <svg
                  class='hidden h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path clip-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' fill-rule='evenodd' />
                </svg>
              </Btn>
            </div>
          </template>

          <!-- 非ログイン時ログイン導線 -->
          <template v-else>
            <Link class='mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5' href='/login'>
              Log in
            </Link>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCurrentUser } from '@/composables/sessions/current_user'
import Btn from '@/components/commons/btn.vue'
import Link from '@/components/commons/link.vue'
import DMenu from '@/components/menu.vue'

const opened = ref(false)
const currentUser = useCurrentUser().data

</script>
