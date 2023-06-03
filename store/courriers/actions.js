export default {
    getList({commit}){
      let id_user = localStorage.getItem('gecIdUser')
      //this.$gecApi.$get('/courriers/644bf2489bedac022588afe0/mescourriers')
      this.$gecApi.$get('/courriers/'+id_user+'/mescourriers')
      .then(async (response) => { 
        console.log('Données reçues contenu+++++++++++',response)
            await commit('initlist', response.data.data)
          }).catch((error) => {
           console.log("ERROR GEC", error)
              this.$toast.error(error).goAway(3000)
          }).finally(() => {
            console.log('Requête envoyée ')
      
          });
    },
    async getDetail({commit},payload){
      console.log('Données détail reçues +++++++++++',payload)
      await commit('initdetail', payload)
    },
    async deletecourrier({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}