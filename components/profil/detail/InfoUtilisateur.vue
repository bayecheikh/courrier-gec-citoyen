<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="3" sm="12" lg="3" text-md-center>
          <!-- <img src="@/static/avatar/user.png" class="user-profil" alt="Plateforme GEC CITOYEN"> -->
          <div class="headline">
            <v-avatar v-if="detailUtilisateur.avatar" tile style="border: solid 2px #d8d8d8;" size="150px">
              <img :src="detailUtilisateur.avatar" alt="Avatar"/>
            </v-avatar>
            <v-avatar size="100px" v-else>
              <img src="@/static/avatar/user.png" alt="Cheikh Gueye"/>
            </v-avatar>
          </div>
        </v-col>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
              <div class="col-md-6 border-left">
                  <!--<p class="info-profil mb-4"><span>Prénom: </span>{{detailUtilisateur.firstname}}</p>
                  <p class="info-profil mb-4"><span>Nom: </span>{{detailUtilisateur.lastname}}</p>-->
                  <p class="info-profil mb-4"><span>Nom: </span>{{loggedInUser && loggedInUser.name}}</p>
                  
                  <p class="info-profil mb-4"><span>ID : </span>{{idUser}}</p>
                  
              </div>
              <div class="col-md-6 border-left">
                  <p class="info-profil mb-4"><span><v-text-field
                      label="Adresse Email"
                      outlined dense
                      v-model="model.email"
                      
                    ></v-text-field>
                    </span><v-btn
                      :loading="loading"
                      class="mr-4 text-white" color="#1B73E8"
                      @click="submitForm"
                      depressed
                    >
                      Mettre à jours l'Email
                    </v-btn>
                  </p>
              
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
      this.loggedInUser = this.$getUser() 
      this.idUser = localStorage.getItem('gecIdUser') 
      this.model.email = this.$getUser()?.email
    },
    computed: mapGetters({
      detailUtilisateur: 'utilisateurs/detailutilisateur'
    }),
    data () {
      return {
        loggedInUser:null,
        idUser:null,
        loading:false,
        valid:false,
        model:{
          email:''
        },
        rules:{

        emailRules: [
          v => !!v || 'L\'adresse e-mail est obligatoire',
          v => /.+@.+\..+/.test(v) || 'L\'adresse e-mail doit être valide',
        ]
      },
      }
    },
    methods: {
      submitForm () {
        //let validation = this.$refs.form.validate()
        console.log('Données formulaire +++++',{email:this.model.email})

       this.$gecFileApi.put('/users',{email:this.model.email})
          .then((res) => {           
            console.log('Données reçues ++++++: ',res)
            this.$store.dispatch('toast/getMessage',{type:'success',text:"Email mis à jours avec succès !"})
          })
          .catch((error) => {
              console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de l\'ajout '})
          }).finally(() => {
            this.loading = false;
            console.log('Requête envoyée ')
        }); 
      },
      retour(){       
          this.$router.push('/utilisateurs');
      },
      getDetail(id){
          this.progress=true
          this.$gecApi.$get('/users/'+id)
        .then(async (response) => {
            console.log('Detail ++++++++++',response)
            this.$store.dispatch('utilisateurs/getDetail',response.data)
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
