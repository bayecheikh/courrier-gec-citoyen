<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="3" sm="12" lg="3" text-md-center>
          <img src="@/static/avatar/user.png" class="user-profil" alt="Plateforme GEC CITOYEN">
        </v-col>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
              <div class="col-md-6 border-left">
                  <h3 class="mb-4">{{detailrole.nom}}</h3>
                  <p class="info-profil mb-4"><span>Description :
                      </span>{{detailrole.description}}
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
    computed: mapGetters({
      detailrole: 'roles/detailrole'
    }),
    data: () => ({

    }),
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/roles');
      },
    },
  }
</script>
<style scoped>
.border-left{
  border-left: solid 2px rgb(0 0 0 / 4%);;
}
</style>