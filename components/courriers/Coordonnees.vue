<template>
    <div class="custom-bloc-padding">
        <h3 class="title"></h3>
        <form class="row d-flex">
           <!--  <div class="form-group col-12">
                <div class="custom-lable-title">Je suis</div>
            </div> -->
            <!-- <div class="form-group col-12 mb-3">
                <div class="form-check form-check-inline border-radio mr-5 pb-1">
                    <input checked="checked" @change="changeTypeExpediteur($event)" class="form-check-input" type="radio" v-model="model.type_expediteur" id="inlineRadioE1" value="Requerant">
                    <label class="form-check-label" for="inlineRadioE1">Requérant</label>
                </div>
                <div class="form-check form-check-inline border-radio pb-1">
                    <input @change="changeTypeExpediteur($event)" class="form-check-input" type="radio" v-model="model.type_expediteur" id="inlineRadioE2" value="Mandataire">
                    <label class="form-check-label" for="inlineRadioE2">Mandataire</label>
                </div>
            </div> -->
            <div class="form-group col-12 mt-5">
                <div class="custom-lable-title">Je dépose un courrier en tant que</div>
            </div>
            <div class="form-group col-12 mb-3">
                <div class="form-check form-check-inline border-radio mr-5 pb-1">
                    <input @change="changeTypeUser($event)" class="form-check-input" type="radio" v-model="model.type_utilisateur" id="inlineRadioT3" value="Requerant">
                    <label class="form-check-label" for="inlineRadioT3">Requérant</label>
                </div>
                <div class="form-check form-check-inline border-radio mr-5 pb-1">
                    <input @change="changeTypeUser($event)" class="form-check-input" type="radio" v-model="model.type_utilisateur" id="inlineRadioT1" value="Personne">
                    <label class="form-check-label" for="inlineRadioT1">Mandataire personne physique</label>
                </div>
                <div class="form-check form-check-inline border-radio pb-1">
                    <input @change="changeTypeUser($event)" class="form-check-input" type="radio" v-model="model.type_utilisateur" id="inlineRadioT2" value="Entreprise">
                    <label class="form-check-label" for="inlineRadioT2">Mandataire personne morale</label>
                </div>
            </div>
            <hr class='dotted mt-5'  />
            <div class="form-group col-12 my-0 mb-4 mt-3" v-if="requerant">
                <div class="custom-lable-title">COORDONNÉES REQUÉRANT</div>
            </div>
            <div class="form-group col-12 my-0 mb-4 mt-3" v-if="personne_physique">
                <div class="custom-lable-title">COORDONNÉES MANDATAIRE PERSONNNE PHYSIQUE</div>
            </div>
            <div class="form-group col-12 my-0 mb-4 mt-3" v-if="entreprise">
                <div class="custom-lable-title">COORDONNÉES MANDATAIRE ENTREPRISE</div>
            </div>
            <hr class='dotted mt-2 mb-5' />
            <div class="form-group col-6">
                <label for="reg-name">Prénom*</label>
                <input type="text" class="border-radio readonly" name="reg-name" id="reg-name" placeholder="Votre prénom" v-model="model.requerant.prenom"  readonly >
            </div>
            <div class="form-group col-6">
                <label for="reg-name">Nom*</label>
                <input type="text" class="border-radio readonly" name="reg-name" id="reg-name" placeholder="Votre nom" v-model="model.requerant.nom"  readonly >
            </div>
            <div class="form-group col-6 mb-4 mt-2">
                <div class="form-group col-12 mb-0">
                    <label for="reg-name">Sexe*</label>
                </div>
                <div class="form-group col-12 border-input pt-3 pb-1 readonly">
                    <div class="form-check form-check-inline mr-5">
                        <input class="form-check-input readonly" type="radio" v-model="model.requerant.sexe" name="inlineRadioOptions2" id="inlineRadio1111" value="Homme" desabled >
                        <label class="form-check-label" for="inlineRadio1111">Homme</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input readonly" type="radio" v-model="model.requerant.sexe" name="inlineRadioOptions2" id="inlineRadio2222" value="Femme" desabled >
                        <label class="form-check-label" for="inlineRadio2222">Femme</label>
                    </div>
                </div>
                
            </div>
            <div class="form-group col-6 mb-5 mt-2">
                <label for="reg-name">Téléphone*</label>
                <input type="text" class="border-radio readonly" name="reg-name" id="reg-name" placeholder="Votre numéro de téléphone" v-model="model.requerant.telephone" readonly >
            </div>
            <div class="form-group col-6">
                <label for="log-email">Email*</label>
                <input type="email" class="border-radio readonly" name="log-email" id="log-email" placeholder="Votre Email" v-model="model.requerant.email" readonly >
            </div>
            <div class="form-group col-6">
                <label for="log-email">Adresse*</label>
                <input type="text" class="border-input readonly" name="reg-name" id="reg-name" placeholder="Adresse" v-model="model.requerant.adresse" readonly >
            </div>
            <!-- PERSONNNE PHYSIQUE -->
            
            <div class="form-group col-12 mb-4 mt-3" v-if="personne_physique">
                <hr class='dotted mt-2 mb-5' />
                <div class="custom-lable-title">COORDONNÉES PERSONNE PHYSIQUE</div>
                <hr class='dotted mt-2 mb-5' />
            </div>
            
            <div class="row d-flex" v-if="personne_physique">
                <div class="form-group col-6">
                    <label for="reg-name">Prénom*</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Votre prénom" v-model="model.personne_physique.prenom">
                </div>
                <div class="form-group col-6">
                    <label for="reg-name">Nom*</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Votre nom" v-model="model.personne_physique.nom">
                </div>
                <div class="form-group col-6 mb-4 mt-2">
                    <div class="form-group col-12 mb-0">
                        <label for="reg-name">Sexe*</label>
                    </div>
                    <div class="form-group col-12 border-input pt-3 pb-1">
                        <div class="form-check form-check-inline mr-5">
                            <input class="form-check-input" type="radio" v-model="model.personne_physique.sexe" id="inlineRadioPP1" value="Homme">
                            <label class="form-check-label" for="inlineRadioPP1">Homme</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="model.personne_physique.sexe"  id="inlineRadioPP2" value="Femme">
                            <label class="form-check-label" for="inlineRadioPP2">Femme</label>
                        </div>
                    </div>
                    
                </div>
                <div class="form-group col-6 mb-5 mt-2">
                    <label for="reg-name">Téléphone*</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Votre numéro de téléphone" v-model="model.personne_physique.telephone">
                </div>
                <div class="form-group col-6">
                    <label for="log-email">Email*</label>
                    <input type="email" class="border-radio" name="log-email" id="log-email" placeholder="Votre Email" v-model="model.personne_physique.email">
                </div>
                <div class="form-group col-6">
                    <label for="log-email">Adresse*</label>
                    <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Adresse" v-model="model.personne_physique.adresse">
                </div>
            </div>
            
            <!-- FIN PERSONNE PHYSIQUE -->
            <!-- ENTREPRISE -->
            <div class="row d-flex" v-if="entreprise">
                <hr class='dotted mt-5' />
                <div class="form-group col-12 my-0 mb-4 mt-3">
                    <div class="custom-lable-title">INFORMATIONS CONCERNANT L'ENTREPRISE</div>
                </div>
                <hr class='dotted mt-2 mb-5' />
                <div class="form-group col-12 mb-4">
                    <div class="custom-lable-title"></div>
                    <input class="border-radio my-4" type="text" v-model="recherche" name="reg-name" id="reg-name" placeholder="Rechercher entreprise dans la base RCCM">
                </div>
                <div class="form-group col-12">
                    <label for="reg-name">Nom de la société*</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Nom de la société" v-model="model.entreprise.nom_societe">
                </div>
                <div class="form-group col-6">
                    <label for="reg-name">Numéro RCA*</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Numéro RCA" v-model="model.entreprise.numero_rca">
                </div>

                <div class="form-group col-6 mb-5 ">
                    <label for="reg-name">Numéro NINEA*</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Numéro NINEA" v-model="model.entreprise.numero_ninea">
                </div>
                <div class="form-group col-6">
                    <label for="log-email">Email de l'entreprise*</label>
                    <input type="email" class="border-radio" name="log-email" id="log-email" placeholder="Votre Email" v-model="model.entreprise.email_entreprise">
                </div>
                <div class="form-group col-6 mb-5">
                    <label for="log-email">Siége social de l'entreprise*</label>
                    <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="" v-model="model.entreprise.adresse_entreprise">
                </div>
                <hr class='dotted mt-5' />
                <div class="form-group col-6 mb-5 ">
                    <label for="reg-name">Prénom du représentant légal</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="" v-model="model.entreprise.prenom_representant_legal">
                </div>
                
                <div class="form-group col-6 mb-5 ">
                    <label for="reg-name">Nom du représentant légal</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="" v-model="model.entreprise.nom_representant_legal">
                </div>
                <div class="form-group col-6 mb-5 ">
                    <label for="reg-name">Téléphone du représentant légal</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="" v-model="model.entreprise.telephone_representant_legal">
                </div>
                <div class="form-group col-6 mb-5 ">
                    <label for="reg-name">Email du représentant légal</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="" v-model="model.entreprise.email_representant_legal">
                </div>
                
                <!-- <div class="form-group col-12">
                    <label for="reg-name">Siége social de l'entreprise*</label>
                    <div class="border-adresse row d-flex p-5">
                        <div class="form-group col-6">
                            <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Rue" v-model="model.requerant.rue_entreprise">
                        </div>
                        <div class="form-group col-6">
                            <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Complement d'adresse" v-model="model.requerant.complement_adresse_entreprise">
                        </div>
                        <div class="form-group col-6">
                            <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Code postal" v-model="model.requerant.code_postal_entreprise">
                        </div>
                        <div class="form-group col-6">
                            <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Ville" v-model="model.requerant.ville_entreprise">
                        </div>
                    </div>
                    
                </div> -->
            </div>
            <!-- FIN ENTREPRISE -->
            
            <!-- <div class="form-group col-12">
                <label for="reg-name">Adresse*</label>
                <div class="border-adresse row d-flex p-5">
                    <div class="form-group col-6">
                        <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Rue" v-model="model.requerant.rue">
                    </div>
                    <div class="form-group col-6">
                        <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Complement d'adresse" v-model="model.requerant.complement_adresse">
                    </div>
                    <div class="form-group col-6">
                        <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Code postal" v-model="model.requerant.code_postal">
                    </div>
                    <div class="form-group col-6">
                        <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Ville" v-model="model.requerant.ville">
                    </div>
                </div>
                
            </div> -->
            <div class="row d-flex justify-content-between">
                <div class="form-group col-3">
                <button @click="$goToTab('ministeres')" type="button" class="edu-btn btn-medium"><i class="icon-west"></i> Précédent</button>
                </div>
                <div class="form-group col-3">
                    <button @click="submitCoordonnee" type="button" class="edu-btn btn-medium">Suivant <i class="icon-east"></i></button>
                </div>
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
            this.token = localStorage.getItem('gecToken')
            if(localStorage.getItem('gecToken')){
                const user = JSON.parse(localStorage.getItem('gecLoggedInUser'));

                this.model.requerant.prenom = user?.firstname
                this.model.requerant.nom = user?.lastname
                this.model.requerant.email = user?.email
                this.model.requerant.telephone = user?.telephone
                this.model.requerant.sexe = user?.sexe
                this.model.requerant.adresse = user?.adresse
                /* this.model.entreprise.nom_entreprise = user?.nom_entreprise
                this.model.entreprise.numero_rca = user?.numero_rca
                this.model.entreprise.numero_ninea = user?.numero_ninea
                this.model.entreprise.representant_legal = user?.representant_legal
                this.model.entreprise.adresse_entreprise = user?.adresse_entreprise
                this.model.entreprise.rue_entreprise = user?.rue_entreprise
                this.model.entreprise.complement_adresse_entreprise = user?.complement_adresse_entreprise
                this.model.entreprise.code_postal_entreprise = user?.code_postal_entreprise
                this.model.entreprise.ville_entreprise = user?.ville_entreprise */
                this.model.sender = user?._id
            }       
        },
        computed: mapGetters({
            detailutilisateur: 'coordonnees/detailutilisateur',
        }),
        data() {
            return {
                personne_physique:false,
                entreprise:false,
                requerant:true,
                model :{
                    requerant:{
                        prenom:"",
                        nom:"",
                        email:"",
                        telephone:"",
                        sexe:"",
                        adresse:"",
                        rue:"",
                        complement_adresse:"",
                        code_postal:"",
                        ville:"",
                    },
                    personne_physique:{
                        prenom:"",
                        nom:"",
                        email:"",
                        telephone:"",
                        sexe:"",
                        adresse:"",
                        rue:"",
                        complement_adresse:"",
                        code_postal:"",
                        ville:"",
                    },
                    entreprise:{
                        nom_entreprise:"",
                        numero_rca:"",
                        numero_ninea:"",
                        prenom_representant_legal:"",
                        nom_representant_legal:"",
                        telephone_representant_legal:"",
                        email_nom_representant_legal:"",
                        adresse_entreprise:"",
                        email_entreprise:"",
                        rue_entreprise:"",
                        complement_adresse_entreprise:"",
                        code_postal_entreprise:"",
                        ville_entreprise:"",
                    },
                    type_utilisateur:"Requerant",                 
                    sender:""
                }
            }
        },
        methods: {
            submitCoordonnee(){
                this.load=true
                console.log('Données formulaire ++++++: ', {...this.model})
                this.$store.dispatch('coordonnees/getDetail',{...this.model})
                this.$store.dispatch('active_step/getDetail',{id:'contenu'})
                /* this.$axios.$post('/demandes')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données demande Reçu ++++++: ', response)

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                }); */
            },
            changeTypeUser($event){
                console.log('Données formulaire ++++++: ', $event.target.value)
                /* this.model.requerant.message = $event.target.value.text
                this.model.requerant.subject = $event.target.value.libelle */
                if($event.target.value=='Requerant'){
                    this.requerant = true
                    this.personne_physique=false
                    this.entreprise=false
                }
                if($event.target.value=='Personne'){
                    this.requerant = false
                    this.personne_physique=true
                    this.entreprise=false                
                }
                if($event.target.value=='Entreprise'){
                    this.requerant = false
                    this.personne_physique=false
                    this.entreprise=true
                }
                
            }
        },
    }
</script>
<style scoped>
.custom-textarea {
  padding: 20px 25px;
  border: solid 1px #cecdcc  !important;
}
.dotted {
    border: 4px dotted #cecdcc ; 
    border-style: none none dotted; 
    color: #fff; 
    background-color: #fff; 
}
.border-grey{
  border: solid 2px #0a3764;
}
.border-radio {
  border: solid 1px #cecdcc  !important;
  padding: 10px;
}
.border-input{
    border: solid 1px #cecdcc  !important;
    border-radius: 5px;
}
.border-adresse{
    border: solid 1px #cecdcc  !important;
    border-radius: 5px;
    margin-left: 1px;
}
.bg-fichier{
    background-color: #0a3764;
    color: #fff;
    border-radius: 5px 0px 0px 5px;
}
.imagePreviewWrapper{
    border: solid 1px #eae9e9;
    height: 200px;
    padding: 20px;
}
.imagePreviewWrapper img{
    height: 100% !important;
}
.custom-input{
  border: 1px solid #cecdcc  !important;
  height: 50px !important;
}
.custom-select {
  height: 50px !important;
  border: solid 1px #cecdcc !important;
  background-color: none !important;
}
.form-group label {
  color: #181818c2 !important;
  margin-bottom: 8px;
}
.custom-lable-title {
  color: #0a3764 !important;
  font-size: 14px;
  font-weight: 500;
}
.custom-bloc-padding {
  padding: 30px;
}
.readonly{
    background: #f7f5f2;
}
</style>