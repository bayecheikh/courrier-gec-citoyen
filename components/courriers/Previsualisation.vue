<template>
    <div class="container-pdf">
       <div>
          <client-only>
             <vue-html2pdf
             :show-layout="false"
             :enable-download="true"
             :preview-modal="false"
             :paginateElementsByHeight="1200"
             :manual-pagination="true"
             :html-to-pdf-options="htmlToPdfOptions"
             @progress="onProgress($event)"
             @hasStartedGeneration="hasStartedGeneration()"
             @beforeDownload="beforeDownload($event)"
             @hasGenerated="hasGenerated($event)"
             @hasDownloaded="hasDownloaded($event)"
             ref="html2Pdf"
             >
             <section slot="pdf-content">
                <section class="pdf-item">
                   <div class="preview-pdf">
                      <form >
                         <div class="row border-grey">
                            <div class="form-group col-8">
                              <p><span>Prénom : </span>{{this.detailutilisateur && this.detailutilisateur.requerant.prenom}}</p>
                              <p><span>Nom : </span>{{this.detailutilisateur && this.detailutilisateur.requerant.nom}}</p>
                              <p><span>Email : </span>{{this.detailutilisateur && this.detailutilisateur.requerant.email}}</p>
                              <p><span>Téléphone : </span>{{this.detailutilisateur && this.detailutilisateur.requerant.telephone}}</p>
                              <p><span>Adresse : </span>{{this.detailutilisateur && this.detailutilisateur.requerant.adresse}}</p>
                            </div>
                            <div class="form-group col-4">
                               <h5 for="reg-name">Ministère</h5>
                               <p>{{this.detailministere && this.detailministere.title_organisme}}</p>
                            </div>
                         </div>
                         <hr>
                         <div class="row border-grey">
                            <div class="form-group col-12">
                               <h5 for="reg-name">Objet</h5>
                               <p>{{this.detailcontenu && this.detailcontenu.subject}}</p>
                            </div>
                         </div>
                         <hr>
                         <div class="row border-grey">
                            <div class="form-group col-12">
                               <h5 for="reg-name">Message</h5>
                               <p>{{this.detailcontenu && this.detailcontenu.message}}</p>
                            </div>
                         </div>
                      </form>
                   </div>
                </section>
             </section>
             </vue-html2pdf>
          </client-only>

          <div class="form-group col-12">
            <button @click="generatePdf()" type="button" class="btn-medium float-end">Générer le courrier *</button>
          </div>
       </div>
    </div>
 </template>
 <script>
    import { mapMutations, mapGetters } from 'vuex'
     export default {
       components: {
       },
       computed: mapGetters({
               detailutilisateur: 'coordonnees/detailutilisateur',
               detailministere: 'ministeres/detailministere',
               detailcontenu: 'contenus/detailcontenu'
           }),
       data() {
         return {
           htmlToPdfOptions: {
             margin: [0, 0, 0.3, 0],
         
             filename: `courrier.pdf`,
         
             image: {
                 type: 'jpeg', 
                 quality: 0.98
             },
         
             html2canvas: {
                 scale: 1,
                 useCORS: true
             },
         
             jsPDF: {
                 unit: 'in',
                 format: 'a4'
             }
           }
         }
       },
       methods: {
         async beforeDownload ({ html2pdf, options, pdfContent }) {
            //console.log("PDF content +++++++ ",pdfContent)
            /* await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').then((pdf) => {
                const totalPages = pdf.internal.getNumberOfPages()
                for (let i = 1; i <= totalPages; i++) {
                    pdf.setPage(i)
                    pdf.setFontSize(10)
                    pdf.setTextColor(150)
                    pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() * 0.88), (pdf.internal.pageSize.getHeight() - 0.3))
                } 
            }).save() */
        },
        async hasDownloaded (e) {
            this.blobToBase64(e)
            .then(base64String => {
               //console.log("PDF content +++++++ ",base64String)
               this.$store.dispatch('contenus/getDetail',{...this.detailcontenu,encodedFile:base64String.split(';base64,')[1],format:'pdf'})
            });
        },
        async blobToBase64(blob) {
            return new Promise((resolve, _) => {
               const reader = new FileReader();
               reader.onloadend = () => resolve(reader.result);
               reader.readAsDataURL(blob);
            });
         },
         generatePdf () {
           this.$refs.html2Pdf.generatePdf()
           // Define the string
            let string = 'Hello World!';

            // Encode the String
            Buffer.from(string).toString('base64')
            console.log('base 64', Buffer.from('Hello World!').toString('base64'))
         },
         onProgress (x) {
           console.log(x)
         },
         hasGenerated (x) {
           console.log(x)
         }
       }
     }
     
 </script>
 <style scoped>
    .preview-pdf {
    padding: 40px !important;
    }
 </style>
 