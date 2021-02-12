<template>
  <div class="bg-gray-200 dark:bg-gray-900">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2
          class="text-5xl font-extrabold text-gray-900 dark:text-white font-roboto"
        >
          All-in-one platform
        </h2>
        <p
          class="mt-4 text-lg text-gray-500 dark:text-gray-200 font-montserrat"
        >
          Includes all the tools to help motivate you to complete your goals in
          life. One Wolf at a time.
        </p>
      </div>
      <dl
        class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"
      >
        <div v-for="(feature, index) in features" :key="index" class="flex">
          <svg
            class="flex-shrink-0 w-6 h-6 text-green-500"
            x-description="Heroicon name: outline/check"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <div class="ml-3">
            <dt
              class="text-lg font-medium leading-6 text-gray-900 dark:text-white font-roboto"
            >
              {{ feature.title }}
            </dt>
            <dd
              class="mt-2 text-base text-gray-500 dark:text-gray-200 font-montserrat"
            >
              {{ feature.description }}
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Invite team members',
          description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        },
        {
          title: 'Invite team members',
          description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        },
        {
          title: 'Invite team members',
          description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        },
        {
          title: 'Invite team members',
          description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        },
        {
          title: 'Invite team members',
          description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        },
        {
          title: 'Invite team members',
          description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        },
        {
          title: 'Invite team members',
          description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        },
        {
          title: 'Invite team members',
          description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        },
      ],
    }
  },
}
</script>
