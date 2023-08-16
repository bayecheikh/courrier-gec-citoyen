<template>
    <div class="custom-bloc-padding">
        <h3 class="title"></h3>
        <form class="row">
            <!-- <div class="edu-sorting form-group col-12">
                <div class="form-check form-check-inline border-radio">
                    <input @change="changeType($event)" class="form-check-input" type="radio" v-model="model.type_contenu" name="inlineRadioOptions1" id="inlineRadio22" value="attache_courrier">
                    <label class="form-check-label" for="inlineRadio22">Attacher le courrier</label>
                </div>
                <div class="form-check form-check-inline border-radio mr-5">
                    <input @change="changeType($event)" class="form-check-input" type="radio" v-model="model.type_contenu" name="inlineRadioOptions1" id="inlineRadio11" value="saisie_libre">
                    <label class="form-check-label" for="inlineRadio11">Saisie le courrier</label>
                </div>              
            </div> -->
            <div class="edu-sorting form-group col-12">
                <label for="reg-name">Choisir une entrée</label>
                <select class="custom-select" @change="changeModelEntree($event)" v-model="selectedEntree">
                    <!-- <option>--</option> -->
                    <option v-for="item in modelEntree" :key="item.id" :value="item.libelle" >{{item.libelle}}</option>
                </select>
            </div>
            <div class="edu-sorting form-group col-12" v-if="saisie">
                <label for="reg-name">Choisir un model</label>
                <select class="custom-select" @change="changeModel($event)">
                    <option>--</option>
                    <option v-for="item in modelContenu" :key="item._id" :value="item._id">{{item.name}}</option>
                </select>
            </div>
            <div class="form-group col-12">
                <label for="reg-name">Objet*</label>
                <input ref="subject" class="custom-input" type="text" v-model="model.subject" name="reg-name" id="reg-name" placeholder="Sujet du courrier">
            </div>
            <div class="form-group col-12 mt-4" v-if="saisie">
                <label for="reg-name">Message*</label>
                <textarea ref="message" class="custom-textarea" cols="30" rows="4" name="reg-name" placeholder="Votre courrier*" :v-model="model.message" required></textarea>
                
            </div>
            <div class="col-12 form-group" v-if="attache_courrier">
                <label for="reg-name">Joindre le courrier (Format PDF) :</label>
                <div class="d-flex justify-content-between border-input" @click="$refs.file.click()">
                    <p class="mb-0 bg-fichier p-3">Choisir un fichier</p>
                    <div class="p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                        </svg>
                    </div>
                    
                </div>
                <input type="file" id="file" name="avatar" ref="file" v-on:change="handleFileUpload" style="display: none"/>
            </div>
            <div class="col-12 form-group" v-if="attache_courrier && imageData">
                <div
                class="imagePreviewWrapper col-12 border-input mb-3"
                @click="selectImage">
                    <img :src="imageData" v-if="model.format=='jpg' || model.format=='png'" />
                    <!-- <iframe :src="imageData+'#toolbar=0'" width="100%" height="300"></iframe> -->
                    <embed :src="imageData+'#toolbar=0'" class="embeded-courrier" v-if="model.format=='pdf' || model.format=='docx' || model.format=='doc'">
                </div>
                
            </div>
            <div class="col-12 my-5">
                <div class="card">
                    <div class="card-header ">Ajouter des pièces jointes (Format PDF)</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between"
                        v-for="(file, index) in model.pieces_jointes"
                        :key="index"
                        >
                        <span><img src="@/static/images/icons/file.png" width="50">
                        {{ file.title }}</span>
                        <span>{{ file.size }}</span>
                        
                        <span @click="deleteFindFichier(i)"><img class="remove" src="@/static/images/icons/remove.png" width="50"></span>
                        </li>
                        <li class="list-group-item"
                        >
                            <div class="d-flex justify-content-center border-input bg-grey" @click="$refs.file2.click()">
                                <div class="p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                    </svg>
                                </div>
                                
                            </div>
                            <input type="file" id="file2" name="avatar" ref="file2" v-on:change="handleFileUpload2" style="display: none"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="form-group col-12 chekbox-area">
                <div class="edu-form-check">
                <input type="checkbox" id="terms-condition">
                <label for="terms-condition">J'accepte les termes et conditions <a href="terms-condition.html">Terms & Condition.</a> </label>
                </div>
            </div>
            <div class="row d-flex justify-content-between">
                <div class="form-group col-3 mt-5">
                <button @click="$goToTab('ministeres')" type="button" class="edu-btn btn-medium"><i class="icon-west"></i> Précédent</button>
                </div>
                <div class="form-group col-3 mt-5">
                    <button @click="submitContenu" type="button" class="edu-btn btn-medium">Suivant <i class="icon-east"></i></button>
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
        computed: mapGetters({
            detailutilisateur: 'coordonnees/detailutilisateur',
            detailministere: 'ministeres/detailministere',
            detailcontenu: 'contenus/detailcontenu'
        }),
        mounted: async function () {
            try {
                const response = await this.$axios.get("/model-courriers");
                /* for (let organisme of response.data.data.data) {
                    this.organismes.push(organisme)
                } */
                this.modelContenu = response.data.data.data
            }
            catch (error) {
                console.error(error);
                return;
            }
        },
        data() {
            return {
                selectedEntree:'Secrétariat administratif',
                fileInfos:[{name:'file 1',url:'#'},{name:'file 2',url:'#'}],
                key:null,
                imageData:null,
                title_courrier:'',
                extFile:'',
                saisie:false,
                attache_courrier:true,
                modelContenu:[
                    {id:1,libelle:'Plainte',text:'Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor'},
                    {id:2,libelle:'Demande',text:'Message message'},
                    {id:3,libelle:'Opinion',text:'Lorum ipsum dolor Lorum ipsum dolor'},
                ],
                modelEntree:[
                    {id:1,libelle:'Secrétariat administratif',text:'Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor',default:true},
                    {id:2,libelle:'Secrétariat DC',text:'Message message'},
                    {id:3,libelle:'Secrétariat particulier',text:'Lorum ipsum dolor Lorum ipsum dolor'},
                ],
                model :{
                    type_contenu:"attache_courrier",
                    encodedFile:'',
                    pieces_jointes:[],
                    modelId:1,
                    entree:'',
                    format:"",
                    subject:"",
                    message:"",
                    doctype:102,   
                    status:"COU",
                    destination:1             
                } 
            }
        },
        methods: {
            submitContenu(){
                this.load=true
                //console.log('Données formulaire ++++++: ', {...this.model})
                this.$store.dispatch('contenus/getDetail',{...this.model,entree:this.selectedEntree,subject:this.model.subject})
                this.$store.dispatch('active_step/getDetail',{id:'validation'})

            },
            changeModel($event){
                //console.log('Données formulaire ++++++: ', $event.target.value)
                let model = this.modelContenu?.filter(item => (item._id==$event.target.value))[0];
                this.$refs.message.value=model?.message || ""
                this.model.message = model?.message || ""

                this.$refs.subject.value=model?.objet || ""
                this.model.subject = model?.objet || ""

                this.model.modelId = parseInt($event.target.value)
            },
            changeModelEntree($event){
                //console.log('Données formulaire ++++++: ', $event.target.value)
                /* this.model.message = $event.target.value.text
                this.model.subject = $event.target.value.libelle */
                this.model.entree = $event.target.value
            },
            changeType($event){
                //console.log('Données formulaire ++++++: ', $event.target.value)
                /* this.model.message = $event.target.value.text
                this.model.subject = $event.target.value.libelle */
                if($event.target.value=='saisie_libre'){
                    this.saisie = true
                    this.attache_courrier=false
                    this.model.message=''
                    //this.$store.dispatch('contenus/getDetail',{...this.model,encodedFile:''})
                }
                if($event.target.value=='attache_courrier'){
                    this.saisie = false
                    this.attache_courrier=true
                    //this.$store.dispatch('contenus/getDetail',{...this.model,encodedFile:''})
                }
                
            },
            selectImage () {
                this.$refs.fileInput.click()
            },
            selectImage () {
                this.$refs.file.click()
            },
            handleFileUpload(e){     
                    
                //Recupère le fichier
                const input = this.$refs.file
                const files = input.files

                //Recupère l'extension
                let filename = files[0].name;
                let title = filename.substring(0, filename.lastIndexOf('.')) || filename;
                this.title_courrier=title
                let idxDot = filename.lastIndexOf(".") + 1;
                let extFile = filename.substr(idxDot, filename.length).toLowerCase(); 
                this.model.format = extFile
                let size = files[0].size/1024/1024 //La taille en Mbit
                //console.log('Size -------------- ',size)

                //if (size <= 5 && (extFile=="jpg" || extFile=="jpeg" || extFile=="png"|| extFile=="pdf" || extFile=="doc" || extFile=="xls")){
                if (size <= 5 && ( extFile=="pdf" )){
                //Affecté le fichier image au model avatar
                //this.model.avatar = e.target.files[0];

                //Prévisualise l'image
                if (files && files[0]) {
                        const reader = new FileReader
                        reader.onload = e => {
                        this.imageData = e.target.result
                       this.model.encodedFile = reader.result.split(';base64,')[1];
                        this.$store.dispatch('contenus/getDetail',{...this.detailcontenu,encodedFile:reader.result.split(';base64,')[1],format:extFile})
                        //this.model.piece_jointes.push({title:title,format:extFile,encodedFile:reader.result.split(';base64,')[1]})
                        //this.model.piece_jointes.push({title:title,format:extFile,encodedFile:reader.result.split(';base64,')[1]})
                        //console.log(reader.result.split(';base64,')[1])
                    }
                    reader.readAsDataURL(files[0])
                    this.$emit('input', files[0])
                }
                }else{
                    alert("Seules les fichiers pdf et de taille inférieure à 5Mb sont acceptées!");
                }  
            },
            handleFileUpload2(e){  
                //console.log(this.model.pieces_jointes.length)   
                if(this.model.pieces_jointes.length<=2){
                    //Recupère le fichier
                    const input = this.$refs.file2
                    const files = input.files

                    //Recupère l'extension
                    let filename = files[0].name;
                    let title = filename.substring(0, filename.lastIndexOf('.')) || filename;
                    // this.title_courrier=title
                    let idxDot = filename.lastIndexOf(".") + 1;
                    let extFile = filename.substr(idxDot, filename.length).toLowerCase(); 
                    // this.model.format = extFile
                    let size = files[0].size/1024/1024 //La taille en Mbit
                    //console.log('Size -------------- ',size)

                    //if (size <= 5 && (extFile=="jpg" || extFile=="jpeg" || extFile=="png"|| extFile=="pdf" || extFile=="doc" || extFile=="xls")){
                    if (size <= 5 && ( extFile=="pdf" )){
                    //Affecté le fichier image au model avatar
                    //this.model.avatar = e.target.files[0];

                    //Prévisualise l'image
                    if (files && files[0]) {
                            const reader = new FileReader
                            reader.onload = e => {
                            //this.imageData = e.target.result
                            //this.model.encodedFile = reader.result.split(';base64,')[1];
                            //this.$store.dispatch('contenus/getDetail',{...this.detailcontenu,encodedFile:reader.result.split(';base64,')[1],format:extFile})
                            this.model.pieces_jointes.push({title:title,format:extFile,encodedFile:reader.result.split(';base64,')[1],taille:size})
                            //this.model.piece_jointes.push({title:title,format:extFile,encodedFile:reader.result.split(';base64,')[1]})
                            //console.log(this.model.pieces_jointes)
                        }
                        reader.readAsDataURL(files[0])
                        this.$emit('input', files[0])
                    }
                    }else{
                        alert("Seules les fichiers pdf et de taille inférieure à 5Mb sont acceptées!");
                    } 
                }
                else{
                    alert("Le nombre maximum de pièces-jointes est déja atteint")
                }
                 
            },
            deleteFindFichier: function(index) {
                //console.log('Index---- ',index);
                this.model.pieces_jointes.splice(index,1);

            },
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
  padding-top: 16px;
padding-bottom: 6px;
}
.border-input{
    border: solid 1px #cecdcc  !important;
    border-radius: 5px;
    cursor: pointer;
}
.bg-fichier{
    background-color: #0a3764;
    color: #fff;
    border-radius: 5px 0px 0px 5px;
}
.imagePreviewWrapper{
    border: solid 1px #eae9e9;
    padding: 20px;
    cursor: pointer;
}
.imagePreviewWrapper img{
    height: 200px !important;
}
.custom-input{
  border: 1px solid #cecdcc  !important;
  height: 50px !important;
}
.custom-select {
  height: 50px !important;
  border: solid 1px #cecdcc !important;
  background-color: none !important;
  background: none !important;
}
.form-group label {
  color: #181818c2 !important;
  margin-bottom: 8px;
}
.custom-bloc-padding {
  padding: 30px;
}
.embeded-courrier{
    width: 100%;
    min-height: 400px;
}
.bg-grey{
  background: #f7f5f2;
}
.remove{
    cursor: pointer;
}
</style>