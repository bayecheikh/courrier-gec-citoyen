<template>
    <div class="login-form-box border-grey">
        <h3 class="title"></h3>
        <form>
            <div class="form-group">
                <label for="current-log-email">Numéro Personnel d'Identification (NPI)*</label>
                <input v-model="model.numero_ipn" type="email" name="current-log-email" id="current-log-email" placeholder="Numéro IPN">
            </div>
            <div class="form-group">
                <label for="current-log-password">Mot de passe*</label>
                <input v-model="model.password" type="password" name="current-log-password" id="current-log-password" placeholder="Password">
                <span class="password-show"><i class="icon-76"></i></span>
            </div>
            <div class="form-group chekbox-area">
                <div class="edu-form-check">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Se souvenir de moi</label>
                </div>
                <a href="#" class="password-reset">Mot de passe oublié</a>
            </div>
            <div class="form-group">
                <button @click="submitConnexion" type="button" class="edu-btn btn-medium">Suivant <i class="icon-east"></i></button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        components: {
            
        },
        mounted: function() {         
        },
        computed: mapGetters({
            detailactive_step: 'active_step/detailactive_step',
        }),
        data() {
            return {
                model :{
                    numero_ipn:"",
                    password:""
                }
            }
        },
        methods: {
            submitConnexion(){
                this.load=true
                //console.log('Données formulaire ++++++: ', {...this.model})
                let dataUser = {
                    numero_ipn:"",
                    type_utilisateur:"Citoyen",
                    prenom:"Cheikh",
                    nom:"Gueye",
                    email:"cheikh.gueye@ip3-conseil.com",
                    telephone:"778688784",
                    adresse:"Dakar, Sacré Coeur 3",
                }
                this.$store.dispatch('coordonnees/getDetail',{dataUser})
                
                this.$store.dispatch('active_step/getDetail',{id:'coordonnees'})
            },
        },
    }
</script>
<style scoped>
.border-grey{
  border: solid 2px #0a3764;
}
</style>
