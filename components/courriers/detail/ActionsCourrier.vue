<template>
  <v-row
  >
    <v-btn
      flat
      text
      rounded
      color="primary"
      v-on:click="retour()"
    >
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      Retour
    </v-btn>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    mounted: function() {
      //this.model.email = this.detailUtilisateur.email
    },
    computed: mapGetters({
      detailCourrier: 'courriers/detailcourrier'
    }),
    data: () => ({
      loading:false,
      dialog: false,
      model: {
        email: '',
        password: '',
        password_confirmation: '',
      },
      rules:{
        passwordRules: [
          v => !!v || 'Le mot de passe est obligatoire',
          v => (v && v.length >= 8) || 'Le mot de passe doit être supérieur ou égal à 8 caractères',
        ],
        emailRules: [
          v => !!v || 'L\'e-mail est obligatoire',
          v => /.+@.+\..+/.test(v) || 'L\'e-mail doit être valide',
        ]
      },
    }),
    methods: {

      retour(){       
        this.$router.push('/dashboard');
      },
      reinitialiser(){  
        this.dialog = true    
      },
    },
  }
</script>