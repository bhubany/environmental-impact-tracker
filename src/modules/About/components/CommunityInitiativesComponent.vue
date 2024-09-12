<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import EventCard from './EventCard.vue'

export type EventType = {
  id: number
  icon: string
  title: string
  date: string
  time: string
  location: string
}

const events: EventType[] = [
  {
    id: 1,
    icon: '🌿',
    title: 'Tree Planting Event',
    date: 'September 20, 2024',
    time: '9:00 AM',
    location: 'City Park'
  },
  {
    id: 2,
    icon: '🌍',
    title: 'Community Beach Cleanup',
    date: 'October 5, 2024',
    time: '7:30 AM',
    location: 'Seaside Beach'
  },
  {
    id: 3,
    icon: ',🗑️',
    title: 'Neighborhood Recycling Drive',
    date: 'October 18, 2024',
    time: '10:00 AM',
    location: 'Town Hall'
  },
  {
    id: 4,
    icon: '♻️',
    title: 'Green Tech Fair',
    date: 'November 2, 2024',
    time: '12:00 PM',
    location: 'Eco Center'
  },
  {
    id: 5,
    icon: '🌟',
    title: 'Stargazing Night',
    date: 'November 15, 2024',
    time: '8:00 PM',
    location: 'Observatory'
  },
  {
    id: 6,
    icon: '📢',
    title: 'Community Awareness Event',
    date: 'December 6, 2024',
    time: '2:00 PM',
    location: 'Community Center'
  }
]
</script>
<template>
  <ContentWrapper class="px-4">
    <div class="flex flex-col gap-2">
      <h3 class="text-heading-3 font-heading text-green-600">Community Initiatives</h3>
      <p class="text-heading-4 text-gray-900">
        We're dedicated to fostering a sense of environmental responsibility through local events,
        volunteering, and more. Join us in making the planet greener and cleaner!
      </p>
    </div>
    <div
      class="flex flex-col justify-center items-center bg-gray-100 rounded-lg gap-2 my-8 pt-4 pb-10"
    >
      <h3 class="text-heading-3 font-heading text-green-600 my-4">Local Events & Volunteering</h3>
      <div class="w-full flex items-stretch justify-center flex-wrap gap-4 md:gap-8 px-8">
        <EventCard v-for="event in events" :key="event.id" :data="event" />
      </div>
    </div>
  </ContentWrapper>
</template>
