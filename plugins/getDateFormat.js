export default (context, inject) => {
    const getDateFormat = (item) => {
        if (!item) { // d.getTime() or d.valueOf() will also work
        return '';
        } else {
        return new Date(item).toLocaleString('fr-FR');
        }  
    }
    // Inject $getColore(status) in Vue, context and store.
    inject('getDateFormat', getDateFormat)
    context.$getDateFormat = getDateFormat
}