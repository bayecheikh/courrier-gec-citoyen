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
            <div class="d-flex text-label mb-5">Date d'envoi : <div class="text-green text-value">{{$getDateFormat(this.detailCourrier && this.detailCourrier.documentDate)}}</div> </div>
<!--             <div class="d-flex text-label mb-5">Date de réception : <div class="text-green text-value">{{$getDateFormat(this.detailCourrier && this.detailCourrier.createdAt)}}</div> </div> -->
            <div class="d-flex text-label mb-5">Statut : <div class="text-green text-value ml-3 mb-status"><v-chip 
                :color="$getColore(this.detailCourrier && this.detailCourrier.traitement_status_slug)"
                outlined
              >
              {{ $getStatus(this.detailCourrier && this.detailCourrier.traitement_status_slug) }}
            </v-chip></div> </div>
            <div class="d-flex align-items-end "> <p class="text-label">Courrier principal d'envoi :</p>  <div class="text-green text-value">
              <img class="file" :ref="'file'+detailCourrier._id" @click="openCourrier(detailCourrier.resId)" src="@/static/images/icons/file.png" width="50" >                         
              <!-- <span class="d-flex justify-star">{{detailCourrier.subject}}</span> -->
            </div> 
          
          </div>
          </div>
          
          <div class="col-md-12 col-sm-12 col-lg-12 border-grey " v-if="this.detailCourrier.responses && this.detailCourrier.responses.length">
            <h2 class="mb-5">Reponses</h2>
            <div class=" loader" v-if="progress">
              <v-progress-linear
                                  
                                    indeterminate
                                    color="black"
                                    class="mb-0"
                                  ></v-progress-linear>
                                  <p class="text-sm-center" v-if="progress"> Chargement du document ...</p>
            </div>
            
            <div class="border-grey pl-5 pr-5 pt-5 mb-5" v-for="(reponse, index) in this.detailCourrier.responses && this.detailCourrier.responses" :key="index">
              <div class="d-flex text-label mb-5">Date d'envoi : <div class="text-green text-value">{{$getDateFormat(reponse.send_date)}}</div> </div>
              <div class="d-flex text-label mb-5">Objet : <span v-html="reponse.object"></span></div>
              <div class="d-flex mb-5" v-html="reponse.body"></div> 
              
              <div class="d-flex text-label mb-5">Piéces-jointes</div>
              <v-row class="" v-if="reponse.document && reponse.document.attachments">
                <v-col lg="3" md="3" sm="12" v-for="(file, index) in reponse.document.attachments"
                        :key="index" class="">
                      <template>
                        <div class="text-center">
                          <!-- <v-btn
                            color="primary"
                            @click="dialog = true"
                          >
                            Open Dialog
                          </v-btn> -->
                          <div class="d-flex justify-start flex-column">
                          
                            <img class="file" :ref="'file'+file.id" @click="getDocument(file.id)" src="@/static/images/icons/file.png" width="50" >                         
                            <span class="d-flex justify-star">Pièce-jointe ({{ index+1 }})</span>
                            <!-- <span>{{getDocument(file.id)}}</span> -->
                          </div>                        
                        </div>
                      </template>
                </v-col>
              </v-row>
            </div>
          </div>
          
        </v-col>
      </v-row> 
      <v-row>
        <v-col lg="12" md="12" sm="12">
                  <v-dialog
                            v-model="dialog"
                            width="1024"
                            persistent
                          >
                            <v-card>
                              <v-card-title class="border-bottom-grey">{{document_link.filename}}
                                  <v-spacer></v-spacer>
                                <v-btn class="custom-close" color="red" icon @click="dialog = false" >
                                  <v-icon>mdi-close</v-icon>
                                </v-btn>
                              </v-card-title>
                              <!-- <v-card-title class="text-h5 d-flex">
                                <span>{{document_link.filename}}</span>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                              </v-card-title> -->
                              <v-card-text class="bg-grey-dialog">
                                <v-col md="12" lg="12" sm="12" >
                                 
                                  <!-- <p class="text-sm-center color-white" v-if="progress"> Chargement du document ...</p> -->
                                  
                                  
                                  <div v-if="!progress && document_link && document_link.originalFormat=='pdf'">
                                    <embed height="800" :src="'data:'+document_link.mimeType+';base64,'+document_link.encodedDocument+'#toolbar=0'" class="embeded-courrier col-12"> 
                                  </div>
                                  <div v-if="!progress && document_link && document_link.originalFormat=='docx'">
                                    <embed height="800" :src="'data:'+document_link.mimeType+';base64,'+document_link.encodedDocument+'#toolbar=0'" class="embeded-courrier col-12"> 
                                  </div>
                                </v-col>
                              </v-card-text>
                            </v-card>
                          </v-dialog>
                </v-col>
      </v-row> 
      <v-row class="border-grey mb-5" v-if="this.detailCourrier.responses && !this.detailCourrier.responses.length">
        <v-col md="12" sm="12" lg="12" text-md-left class="row d-flex justify-end ">
          <div class="col-md-12 col-sm-12 col-lg-12">
            <div class="d-flex text-label mb-5"><h2>Fichiers attachés</h2></div>
            
            <div class="card" v-if="this.detailCourrier.pieces_jointes && this.detailCourrier.pieces_jointes.length">
                
              <v-row class="">
                <v-col lg="3" md="3" sm="12" v-for="(file, index) in this.detailCourrier.pieces_jointes"
                        :key="index">
                        <!-- <a v-if="file.title" class="custom-link d-flex align-items-start flex-column" target="_blank" :href="'data:application/pdf;base64,'+file.encodedFile">
                          <img src="@/static/images/icons/file.png" width="50" >
                          <span>{{ file.title }}</span>
                        </a> -->

                        <div class="d-flex justify-start flex-column">
                          
                          <img class="file" :ref="'file'+file.id" @click="openDocument(file)" src="@/static/images/icons/file.png" width="50" >                         
                          <span class="d-flex justify-star">{{file.title}}</span>
                          <!-- <span>{{getDocument(file.id)}}</span> -->
                        </div>
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
      <!-- <v-row class="border-grey mb-5" v-if="!this.detailCourrier.responses.length">
        <v-col md="12" sm="12" lg="12" text-md-left class="row d-flex justify-end ">
          <div class="col-md-12 col-sm-12 col-lg-12">
            <div class="d-flex text-label mb-5"><h2>Courrier principal</h2></div>
            <img class="file" :ref="'file'+detailCourrier._id" @click="openCourrier(detailCourrier)" src="@/static/images/icons/file.png" width="50" >                         
            <span class="d-flex justify-star">{{detailCourrier.subject}}</span>
          </div>
        </v-col>
      </v-row> --> 
                     
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
        pieces_jointes : [],
        document_link:'#',
        pieces_jointes_reponses:[],
        dialog: false,
        progress:false
      }
    },
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/courriers');
      },
      getDocument(id){
        
          this.progress=true
          let idStructure = this.detailCourrier.structure._id
          this.$gecApi.$get('/attachments/'+id+'/'+idStructure)
        .then(async (response) => {
            console.log('Detail document ++++++++++',response.data.data)
            this.document_link = response.data.data
            this.pieces_jointes_reponses.push(this.document_link)
            this.dialog=true
            
        }).catch((error) => {
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requête envoyée ')
            this.progress=false
        });
        //console.log('total items++++++++++',this.paginationstructure)
      },
      openDocument(file){
        this.progress=true
        let document = {
          mimeType : 'application/pdf',
          originalFormat : file.format,
          encodedDocument : file.encodedFile,
          filename: file.title
        }
        this.document_link = document
        this.dialog=true
        this.progress=false
      console.log('document ++++++++++++',document)
      //console.log('total items++++++++++',this.paginationstructure)
    },
    openCourrier(id){
      this.progress=true
          let idStructure = this.detailCourrier.structure._id
          this.$gecApi.$get('/courriers/courrier-content/'+id+'/'+idStructure)
        .then(async (response) => {
            console.log('Detail document ++++++++++',response.data)
            this.document_link = response.data
            //this.pieces_jointes_reponses.push(this.document_link)
            this.dialog=true
            
        }).catch((error) => {
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requête envoyée ')
            this.progress=false
        });
      //console.log('total items++++++++++',this.paginationstructure)
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
.file{
  cursor: pointer;
}
.v-dialog {
  overflow-y: unset !important;
}

.custom-close:hover{
  background: rgba(255, 0, 0, 0.212);
}
.border-bottom-grey{
  border-bottom: solid 2px #d4d4d7;
  background-color: #80808012;
}
.bg-grey-dialog {
  background-color: #122a43;
}
.color-white{
  color: #fff;
}
.loader{
  position:fixed;
  z-index: 10000;
  top: 30%;
  left: 50%;
  background-color: #0a376400;;
  padding: 100px;
  opacity: 0.5;
  border-radius: 10px;

}
</style>
