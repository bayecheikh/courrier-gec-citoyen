export default () => ({
    listcourriers: [],

    headercourriers : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Structure', value: 'structure' },
        { text: 'Objet', value: 'subject' },
        { text: 'Date d\'envoi', value: 'documentDate' },
        { text: 'Statut', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false }
    ],
    detailcourrier :{}
})