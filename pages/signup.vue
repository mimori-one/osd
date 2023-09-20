<template>
  <div class='m-4'>
    <div class="mb-4 text-gray-500 font-bold">
        新規登録
    </div>

    <form class='w-full max-w-sm'>
      <div class='mb-6 md:flex md:items-center'>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">メールアドレス</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="sample@super.com" required>
        </div>
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">パスワード</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
        </div>
      </div>
      <div class='mb-6 md:flex md:items-center'>
        <div class='md:w-1/3' />
        <label class='block font-bold text-gray-500 md:w-2/3'>
          <input class='mr-2 leading-tight' type='checkbox'>
          <span class='text-sm'>
            新着のお知らせ通知をメールで受け取る
          </span>
        </label>
      </div>
      <div class='md:flex md:items-center'>
        <div class='md:w-1/3' />
        <div class='md:w-2/3'>
          <button class='focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none' type='button'>
            登録
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
  