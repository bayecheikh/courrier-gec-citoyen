export default (context, inject) => {
    const getStatus = (status) => {
        switch (status){
            case 'traite': return 'Traité'
            break;
            case 'en-cours-de-traitement': return 'En cours de traitement'
            break;
            default:  return ''
        }
    }
    // Inject $getColore(status) in Vue, context and store.
    inject('getStatus', getStatus)
    context.$getStatus = getStatus
}