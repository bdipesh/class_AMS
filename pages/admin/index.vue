<template>
  <v-row justify="center" align="center">
    <v-col v-for="(stats, index) in stats" :key="stats" cols="4">
      <v-card class="px-4 indigo accent-2">
        <v-row align="center">
          <v-col cols="4" ml-4 class="text-xs-left">
            <div class="display-1">
              {{ stats.count || 0 }}
            </div>
            <div class="font-weight-bold body-2">
              {{ stats.title }}
            </div>
          </v-col>
          <v-col class="mt-4 text-right">
            <v-avatar size="80" color="white">
              <v-icon size="35" color="green" v-text="stats.icon" />
            </v-avatar>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col>
          <v-card />
        </v-col>
        <v-col />
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      stats: [
        { title: "Total Students", icon: "mdi-account", count: 23 },
        { title: "Total Teacher", icon: "mdi-account", count: 23 },
        { title: "Total Batches", icon: "mdi-account", count: 23 }
      ]
    }
  }
}
</script>
