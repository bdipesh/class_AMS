<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col>
          <nuxt />
        </v-col>
      </v-row>
      <vue-snackbare />
    </v-container>
  </v-app>
</template>
<script>
import VueSnackbare from "../components/LayoutUtils/VueSnackbar"
export default {
  components: { VueSnackbare }
}
</script>
