<template>
  <v-card flat class="pl-5 pr-5 pt-5 pb-5">                   
    <v-card-text>    
      <!-- <v-row class="border-grey mb-5">
        <v-col md="12" sm="12" lg="12" text-md-left>
          {{this.detailCourrier}}
        </v-col>
      </v-row>  -->
      <v-row class="border-grey mb-5">
        <v-col md="12" sm="12" lg="12" text-md-left class="row d-flex justify-end ">
          <div class="col-md-6 col-sm-12 col-lg-6 ">
            <div class="d-flex text-label mb-5">Objet : <div class="text-green text-value">{{this.detailCourrier.subject}}</div> </div>
            <div class="d-flex text-label mb-5">Organisme : <div class="text-green text-value">{{this.detailCourrier.structure}}</div> </div>
            <div class="d-flex text-label mb-5">Code de suivi : <div class="text-green text-value">{{this.detailCourrier.idSuivi}}</div> </div>
          </div>
          <div class="col-md-6 col-sm-12 col-lg-6 ">
            <div class="d-flex text-label mb-5">Date d'envoi : <div class="text-green text-value">{{this.detailCourrier.createdAt}}</div> </div>
            <div class="d-flex text-label mb-5">Date de réception : <div class="text-green text-value">{{this.detailCourrier.documentDate}}</div> </div>
            <div class="d-flex text-label mb-5">Statut : <div class="text-green text-value">{{this.detailCourrier.status}}</div> </div>
          </div>
        </v-col>
      </v-row>  
      <v-row class="border-grey mb-5">
        <v-col md="12" sm="12" lg="12" text-md-left class="row d-flex justify-end ">
          <div class="col-md-12 col-sm-12 col-lg-12">
            <div class="d-flex text-label mb-5"><h2>Courrier</h2></div>
          </div>
        </v-col>
      </v-row> 
      <v-row class="border-grey mb-5">
        <v-col md="12" sm="12" lg="12" text-md-left class="row d-flex justify-end ">
          <div class="col-md-12 col-sm-12 col-lg-12">
            <div class="d-flex text-label mb-5"><h2>Pièces-jointes</h2></div>
          </div>
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
      detailCourrier: 'courriers/detailcourrier'
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
      /* getDetail(id){
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
      }, */
    },
  }
</script>
