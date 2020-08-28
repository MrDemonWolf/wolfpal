<template>
  <div
    class="py-48 md:py-64 bg-gradient-to-r from-primary-400 to-primary-500 dark:from-gray-400 dark:to-primary-500"
  >
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-2 text-white">
        Welcome, {{ $auth.user.username }}
      </h2>
      <h3 class="text-2xl mb-8 text-gray-200">Create a new goal</h3>
    </div>
  </div>
</template>
