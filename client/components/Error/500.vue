<template>
  <div class="flex items-center justify-center h-84">
    <template>
      <div class="w-1/2">
        <div class="mx-auto text-white h-40 w-56">
          <div class="ml-16">
            <fa
              :icon="['fas', 'cog']"
              class="text-6xl fa-spin"
              transform="down-5  right-2"
            />
            <fa
              :icon="['fas', 'cog']"
              class="text-5xl fa-spin"
              transform="down-20 left-2"
            />
            <fa
              :icon="['fas', 'cog']"
              class="text-8xl fa-spin"
              transform="left-7 down-2"
            />
          </div>
        </div>
        <h2
          class="leading-10 text-center text-5xl font-bold font-roboto text-primary-500 dark:text-white mt-4"
        >
          500 Error
        </h2>
        <p class="mt-4 text-center font-montserrat text-black dark:text-white">
          Ruh-roh, something just isn't right... Time to paw through your logs
          and get down and dirty in your stack-trace;)
        </p>
      </div>
    </template>
  </div>
</template>
