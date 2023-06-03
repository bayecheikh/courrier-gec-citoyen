<template>
  <v-card flat class="pl-5 pr-5 pt-5 pb-5">                   
    <v-card-text>    
      <!-- <v-row class="border-grey mb-5">
        <v-col md="12" sm="12" lg="12" text-md-left>
          {{this.detailCourrier}}
        </v-col>
      </v-row>  -->
      
      <v-row class="border-grey mb-5 pl-5 pr-5 pb-5">
        <v-col md="12" sm="12" lg="12" class="row d-flex justify-start ">
          <div class="col-md-6 col-sm-12 col-lg-6 ">
            <div class="d-flex text-label mb-5">Objet : <div class="text-green text-value">{{this.detailCourrier && this.detailCourrier.subject}}</div> </div>
            <div class="d-flex text-label mb-5">Organisme : <div class="text-green text-value">{{this.detailCourrier && this.detailCourrier.structure && this.detailCourrier.structure.description}}</div> </div>
            <div class="d-flex text-label mb-5">Code de suivi : <div class="text-green text-value">{{this.detailCourrier && this.detailCourrier.idSuivi}}</div> </div>
          </div>
          <div class="col-md-6 col-sm-12 col-lg-6 ">
            <div class="d-flex text-label mb-5">Date d'envoi : <div class="text-green text-value">{{$getDateFormat(this.detailCourrier && this.detailCourrier.createdAt)}}</div> </div>
            <div class="d-flex text-label mb-5">Date de réception : <div class="text-green text-value">{{$getDateFormat(this.detailCourrier && this.detailCourrier.documentDate)}}</div> </div>
            <div class="d-flex text-label mb-5">Statut : <div class="text-green text-value ml-3 mb-status"><v-chip 
                :color="$getColore(this.detailCourrier && this.detailCourrier.traitement_status_slug)"
                outlined
              >
              {{ $getStatus(this.detailCourrier && this.detailCourrier.traitement_status_slug) }}
            </v-chip></div> </div>
          </div>
          
          <div class="col-md-12 col-sm-12 col-lg-12 border-grey " v-if="this.detailCourrier.responses && this.detailCourrier.responses.length">
            <div class="d-flex text-label mb-5">Objet : <span v-html="this.detailCourrier && this.detailCourrier.responses && this.detailCourrier.responses[0] && this.detailCourrier.responses[0].object"></span></div>
          <div class="d-flex mb-5" v-html="this.detailCourrier && this.detailCourrier.responses && this.detailCourrier.responses[0] && this.detailCourrier.responses[0].body"></div> 
          </div>
          
        </v-col>
      </v-row>  
      <v-row class="border-grey mb-5">
        <v-col md="12" sm="12" lg="12" text-md-left class="row d-flex justify-end ">
          <div class="col-md-12 col-sm-12 col-lg-12">
            <div class="d-flex text-label mb-5"><h2>Pièces-jointes</h2></div>
            
            <div class="card" v-if="this.detailCourrier.pieces_jointes && this.detailCourrier.pieces_jointes.length">
                
              <v-row class="">
                <v-col lg="3" md="3" sm="12" v-for="(file, index) in this.detailCourrier.pieces_jointes"
                        :key="index">
                        <a v-if="file.title" class="custom-link d-flex align-items-start flex-column" target="_blank" :href="'data:application/pdf;base64,'+file.encodedFile">
                          <img src="@/static/images/icons/file.png" width="50" >
                          <span>{{ file.title }}</span>
                        </a>
                </v-col>

              </v-row>
              <!-- <ul class="list-group list-group-flush d-flex">
                      <li 
                        v-for="(file, index) in this.detailCourrier.pieces_jointes"
                        :key="index"
                        >
                        <a v-if="file.title" class="list-group-item d-flex justify-content-between" target="_blank" :href="'data:application/pdf;base64,'+file.encodedFile">
                          <span><img src="@/static/images/icons/file.png" width="50" >
                          {{ file.title }}</span>
                        </a>
                        
                      </li>
                </ul> -->
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="border-grey mb-5" >
        <v-col md="12" sm="12" lg="12" text-md-left class="row d-flex justify-end ">
          <div class="col-md-12 col-sm-12 col-lg-12">
            <div class="d-flex text-label mb-5"><h2>Courrier principal</h2></div>
            <div v-if="this.detailCourrier.responses && !this.detailCourrier.responses.length">
              <embed height="800" :src="'data:application/pdf;base64,'+this.detailCourrier.encodedFile+'#toolbar=0'" class="embeded-courrier col-12"> 
            </div>
            <div v-if="this.detailCourrier.responses && this.detailCourrier.responses.length && this.detailCourrier.pieces_jointes && this.detailCourrier.pieces_jointes[0] && this.detailCourrier.pieces_jointes[0].format=='pdf'">
              <embed height="800" :src="'data:application/pdf;base64,'+this.detailCourrier.pieces_jointes[0].encodedFile+'#toolbar=0'" class="embeded-courrier col-12"> 
            </div>
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
        pieces_jointes : []
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
      downloadBase64File(contentType, base64Data, fileName) {
          const linkSource = `data:${contentType};base64,${base64Data}`;
          const downloadLink = document.createElement("a");
          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
      }
    },
  }
</script>
<style scoped>
.text-label{
font-size: 14px;
font-weight: 600;
}
.text-value{
  font-size: 12px !important;
font-weight: 300 !important;
margin-left: 10px;
}
.mb-status{
  margin-top: -7px;
}
.custom-link{
  text-decoration: none;
}
</style>
