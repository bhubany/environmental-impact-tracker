<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'

export type LeaderBoardType = {
  rank: number
  name: string
  plantation: number
  volunteer: number
}

const leaderBoardData: LeaderBoardType[] = [
  { rank: 1, name: 'Green Warriors', plantation: 1200, volunteer: 350 },
  { rank: 2, name: 'Green Heroes', plantation: 900, volunteer: 280 },
  { rank: 3, name: 'Green Champions', plantation: 700, volunteer: 300 },
  { rank: 4, name: 'Eco Volunteers', plantation: 600, volunteer: 100 },
  { rank: 5, name: 'Green Runners', plantation: 500, volunteer: 100 },
  { rank: 6, name: "Nature's Defenders", plantation: 800, volunteer: 400 },
  { rank: 7, name: 'Green Hearts', plantation: 400, volunteer: 300 },
  { rank: 8, name: 'Eco Youth', plantation: 2500, volunteer: 1000 },
  { rank: 8, name: 'Nature Warrior', plantation: 1500, volunteer: 1000 }
]
</script>
<template>
  <ContentWrapper class="mt-8 px-4 mb-10 md:mb-16">
    <h3 class="text-heading-3 text-gray-900 font-heading">Leaderboard: Environmental Impact</h3>
    <div class="py-4 shadow-lg rounded-lg">
      <table class="w-full text-center hover:border-collapse">
        <thead class="bg-green-600 text-white h-16 text-wrap">
          <tr>
            <th class="border border-slate-300">Rank</th>
            <th class="border border-slate-300">Name/Community</th>
            <th class="border border-slate-300">Trees Planted</th>
            <th class="border border-slate-300">Volunteer Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="datum in leaderBoardData" :key="datum.rank">
            <td class="border border-slate-300">{{ datum.rank }}</td>
            <td class="border border-slate-300">{{ datum.name }}</td>
            <td class="border border-slate-300">{{ datum.plantation }}</td>
            <td class="border border-slate-300">{{ datum.volunteer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </ContentWrapper>
</template>
