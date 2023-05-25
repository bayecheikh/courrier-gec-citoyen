<template>
<div>
  <v-card-title class="d-flex pl-0 pr-0">
    <v-row>
        <v-col md="4" lg="4" sm="12">
          <h3>Courriers envoyés</h3>
        </v-col>
        <v-col md="4" lg="4" sm="12">
          <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Rechercher"
          outlined
          rounded
          dense
          hide-details
          ></v-text-field>
        </v-col>
        <v-col md="4" lg="4" sm="12" class="d-flex justify-end">
          <v-btn
          depressed
          rounded
          color="primary"
          @click="goToAddcourrier"
          >
            <v-icon left>
              mdi-plus
            </v-icon>
            Ajouter un courrier
          </v-btn>
        </v-col>
      </v-row>
</v-card-title>
<v-data-table
  :headers="headers"
  :items="listcourriers"
  item-key="id"
  items-per-page="20"
  class="flat mt-5"
  :loading="listcourriers.length?false:true" 
  loading-text="Chargement... Patientez svp"
  :rows-per-page-items="[10,20,30,40,50]"
  
  :search="search"
>
 <template v-slot:[`item.actions`]="{ item }">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" icon v-bind="attrs" v-on="on" @click="visualiserItem(item)">
              <v-icon>mdi-eye-outline</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </template>
      <template v-slot:[`item.traitement_status_slug`]="{ item }">
      <v-chip
        :color="$getColore(item.traitement_status_slug)"
        outlined
      >
        {{ $getStatus(item.traitement_status_slug) }}
      </v-chip>
  </template>
      <template v-slot:[`item.documentDate`]="{ item }">
      {{$getDateFormat(item.documentDate)}}
  </template>
      <template v-slot:[`item.responses[0].send_date`]="{ item }">
      {{$getDateFormat(item.responses[0] && item.responses[0].send_date)}}
  </template>
</v-data-table>
</div>

</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    mounted: function() {
      this.$store.dispatch('categories/getList')
   
    },
    computed: mapGetters({
      listcourriers: 'courriers/listcourriers',
      headers: 'courriers/headercourriers',
      listcategories: 'categories/listcategories',
    }),
    props: ['tab'],
    metaInfo () {
      return {
        tab: this.tab,
      }
    },
    methods: {
      visualiserItem (item) {   
        this.$store.dispatch('courriers/getDetail',item)
        this.$router.push('/courriers/detail/'+item.id);
      },
      editItem (item) {
        this.$store.dispatch('courriers/getDetail',item)
        this.$router.push('/courriers/modifier/'+item.id);
      },
       deleteItem (item) {
        this.dialog=false   
        this.$store.dispatch('toast/getMessage',{type:'processing',text:'Traitement en cours ...'}) 
        this.$gecApi.$delete('/structures/'+this.activeItem.id)
        .then(async (response) => { 
            console.log('Réponse delete ++++++: ', response)
            this.$store.dispatch('courriers/deletecourrier',this.activeItem.id)
            this.$store.dispatch('toast/getMessage',{type:'success',text:response.data?.data?.message || 'Suppression réussie'})
            }).catch((error) => {
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Échec de la suppression'})
              console.log('Code error ++++++: ', error)
            }).finally(() => {
              
            console.log('Requête envoyée ')
        });
        /* alert('Supprimer '+item.id) */
      },
      exporterItem (item) {
        alert('Exporter '+item.id)
      },
      visualiser(){
        if(this.selected.length!=1)
        alert('Veuillez sélectionner un élément')
        else{
          let contenu = this.selected.map(function(value){ return value})[0]
          this.$store.commit('courriers/initdetail',contenu)
          this.$router.push('/courriers/detail/'+contenu.id);
        }
      },
      modifier(){
        if(this.selected.length!=1)
        alert('Veuillez sélectionner un élément')
        else{
          let contenu = this.selected.map(function(value){ return value})[0]
          this.$store.commit('contenus/initdetail',contenu)
          this.$router.push({path: '/contenus/modifier/'+contenu.id, query: {categorie_href: "courriers"}});
        }
      },
      supprimer(){
        if(this.selected.length>=1)
        alert('Supprimer '+this.selected.map(function(value){ return value.id}))
        else
        alert('Veuillez sélectionner un élément')
      },
      exporter(){
        if(this.selected.length>=1)
        alert('Exporter '+this.selected.map(function(value){ return value.id}))
        else
        alert('Veuillez sélectionner un élément')
      },
      opendialog (item) {
        this.dialog=true
        this.activeItem=item
      },
      customFilter(item,search,filter){
        search.toString().includes(item.categories);
      }
    },
    data: () => ({
      headercourriers : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Titre', value: 'titre' },
        { text: 'Catégorie', value: 'categories',sortable: true},
        { text: 'Actions', value: 'actions', sortable: false },
    ],
     dialog: false,
      progress:true,
      selected: [],
      search:'',
      items:[],
      page: 1,
      totalPages:1,
      pageCount: '',
      itemsPerPage:'',
      path:'',
      totalItems:0,
      options: {},
      selectedItem:0,
      activeItem:{}
    })
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>