<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="9" sm="12" lg="9" text-md-left>
          {{this.detailCourrier}}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    mounted: function() {
      //this.getDetail(this.id)
    },
    computed: mapGetters({
      detailCourrier: 'courriers/detailCourrier'
    }),
    data () {
      return {
        id : this.$nuxt._route.params.id,
      }
    },
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/courriers');
      },
      getDetail(id){
          this.progress=true
          this.$gecApi.$get('/users/'+id)
        .then(async (response) => {
            console.log('Detail ++++++++++',response)
            this.$store.dispatch('Courriers/getDetail',response.data)
        }).catch((error) => {
             this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requête envoyée ')
        });
        //console.log('total items++++++++++',this.paginationstructure)
      },
    },
  }
</script>
