<template>
  <v-row>
    <v-col>
      <v-snackbar class="" >
         {{ getNotify.text }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
   data () {
     return {

     }
   },
    computed: {
      ...mapGetters({
          getNotify: 'getNotifyDetail'
      })
    }
  }

</script>
