export default (context, inject) => {
    const goToTab = (tab) => {
        context.store.dispatch('active_step/getDetail',{id:tab})
    }
    // Inject $getColore(status) in Vue, context and store.
    inject('goToTab', goToTab)
    context.$goToTab = goToTab
}