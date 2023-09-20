<template>
  <div>クリエイター登録</div>
  <form class='w-full max-w-sm'>
    <div class='mb-6 md:flex md:items-center'>
      <div class='md:w-1/3'>
        <label class='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' for='inline-full-name'>
          Full Name
        </label>
      </div>
      <div class='md:w-2/3'>
        <input
          id='inline-full-name'
          class='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
          type='text'
          value='Jane Doe'
        >
      </div>
    </div>
    <div class='mb-6 md:flex md:items-center'>
      <div class='md:w-1/3'>
        <label class='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' for='inline-password'>
          Password
        </label>
      </div>
      <div class='md:w-2/3'>
        <input
          id='inline-password'
          class='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
          placeholder='******************'
          type='password'
        >
      </div>
    </div>
    <div class='mb-6 md:flex md:items-center'>
      <div class='md:w-1/3' />
      <label class='block font-bold text-gray-500 md:w-2/3'>
        <input class='mr-2 leading-tight' type='checkbox'>
        <span class='text-sm'>
          Send me your newsletter!
        </span>
      </label>
    </div>
    <div class='md:flex md:items-center'>
      <div class='md:w-1/3' />
      <div class='md:w-2/3'>
        <button class='focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none' type='button'>
          Sign Up
        </button>
      </div>
    </div>
  </form>
</template>
  