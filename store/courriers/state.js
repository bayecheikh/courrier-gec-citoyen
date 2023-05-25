export default () => ({
    listcourriers: [],

    headercourriers : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Structure', value: 'structure.description' },
        { text: 'Objet', value: 'subject' },
        { text: 'Date d\'envoi', value: 'documentDate' },
        { text: 'Date de reponse', value: 'responses[0].send_date' },
        { text: 'Responses', value: 'responses', align: ' d-none' },
        { text: 'Statut', value: 'traitement_status_slug' },
        { text: 'Actions', value: 'actions', sortable: false }
    ],
    detailcourrier :{}
})