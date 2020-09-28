<template>
  <div class="w-1/2">
    <div class="fa-animation flex items-center">
      <fa
        :icon="['fas', 'skull']"
        class="text-primary-500 text-6xl block m-auto"
      />
      <fa :icon="['fas', 'cog']" class="fa-lg fa-spin" />
      <fa :icon="['fas', 'cog']" class="fa-md fa-spin" />
      <fa :icon="['fas', 'cog']" class="fa-sm fa-spin" />
    </div>
    <h2
      class="leading-10 text-center text-5xl font-bold font-roboto text-primary-500 dark:text-white mt-4"
    >
      We couldn't find that page
    </h2>
    <p class="mt-4 text-center font-montserrat text-black dark:text-white">
      The page you are looking for has either been moved or as dead as a
      doornail.
    </p>
    <div class="mt-4 flex items-center">
      <nuxt-link
        class="block m-auto px-4 py-2 text-white bg-primary-500 hover:text-primary-500 hover:bg-white rounded transition ease-in-out duration-150 font-roboto font-bold"
        to="/"
      >
        Back Home
      </nuxt-link>
    </div>
  </div>
</template>
<style scoped>
.fa-animation {
  height: 70px;
  width: 70px;
  margin: 0 auto;
  position: relative;
}

.fa-animation .fa {
  position: absolute;
}

.fa-lg {
  font-size: 45px;
  top: 8px;
  left: 0px;
}
.fa-md {
  font-size: 30px;
  top: 0px;
  left: 40px;
}
.fa-sm {
  font-size: 24px;
  top: 30px;
  left: 35px;
}
</style>
