<template>
    <div>
        <div class="custom-template offset-xl-2 col-lg-6">
            <div class="contact-form form-style-2">
                <button @click="onClickClose()" class="custom-close-btn">x</button>
                <div class="section-title">
                    <h4 class="title custom-suivi-title text-uppercase">VOTRE COURRIER A ÉTÉ ENVOYÉ AVEC SUCCÈS</h4>
                    <p class="custom-information-msg">Vous avez reçu un email
                        contenant un code confidentiel vous permettant d'accéder à l'état de votre courrier. Pour
                        suivre l'avancement de votre courrier, veuillez saisir ce code à la lettre.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    mounted(){
        this.isCodeValid()
    },
    computed: {
        ...mapGetters({
            ispopupload: 'courrierenvoye/ispopupload'
        })
    },
    methods: {

        async onClickClose() {
            this.showValidMessage1 = false;
            this.showValidMessage2 = false;
            this.validCode = true
          


         
            this.$store.dispatch('courrierenvoye/getDetail', false)
            this.$router.push('/');
           


        },
        isCodeValid() {
            
            this.isLoading = true
            if (this.ispopupload == 2) {
                this.isCharging = true
                setTimeout(() => {
                    this.isCharging = false
                    this.showValidMessage2 = false
                    this.showValidMessage1 = false
                    this.validCode = false
                    this.isLoading = false
                }, 1000);
            }
            else if (this.ispopupload == 3) {
                this.isCharging = true
                setTimeout(() => {
                    this.isCharging = false
                    this.showValidMessage1 = true
                    this.showValidMessage2 = false
                    this.validCode = true
                    this.isLoading = false
                }, 1000);
            }
            else {
                this.isCharging = true
                setTimeout(() => {
                    this.isCharging = false
                    this.showValidMessage2 = true
                    this.showValidMessage1 = false
                    this.validCode = true
                    this.isLoading = false
                }, 1000);
              
              
            }


        }
    },

    data() {
        return {
            isCharging: false,
            isLoading: false,
            validCode: true,
            showValidMessage1: false,
            showValidMessage2: false,
            code: ''
        }
    },
}

</script>

<style>
.custom-categorie-grid {
    height: 337.25px !important;
}

.custom-categorie-area-1 {
    padding-top: 30px !important;
}

.custom-actions-btn {
    padding-top: 20px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 20px !important;

}

.custom-row {
    margin-top: -15px !important;
    padding-top: 0px !important;
}

.custom-send-btn {
    font-weight: bold !important;
    margin-top: 20px !important;
    background-color: rgb(0, 128, 100) !important;

}

.custom-track-btn {
    margin-top: 20px !important;
    cursor: pointer !important;
    font-weight: bold !important;
}

.custom-title {
    height: 78.3px !important;
}

.custom-number {
    font-size: 25px !important;
    margin-top: 25px !important;

}

.custom-number-1 {
    color: #007aff !important;
}

.custom-section-title {
    color: rgb(0, 128, 100) !important;
}

.custom-categorie-grid:hover {
    color: var(--color-white) !important;
}

.custom-track-btn:hover {
    background: linear-gradient(-90deg, #2985BC 0%, #2985BC 100%) !important;
}

.custom-track-btn:after {
    background: linear-gradient(-90deg, #4CA4E4 0%, #1da1f2 100%) !important;
}



.categorie-style-3:hover .icon svg path,
.categorie-style-3:hover .icon svg circle {
    stroke: #fff !important;
}

.categorie-style-3:hover .content .custom-title-1 {
    color: var(--color-extra08) !important;
}

.categorie-style-3:hover .content .custom-number-1 {

    color: var(--color-white) !important;
    background-color: var(--color-extra08) !important;
}

.categorie-style-3:hover .content .custom-title-2 {
    color: #008064 !important;
}




.categorie-grid.color-green-style:hover.color-primary-style .icon {
    background-color: #008064 !important;

}

.categorie-style-3:hover .content .custom-title-3 {
    color: var(--color-secondary) !important;
}

.categorie-style-3:hover .content .custom-number-3 {
    color: var(--color-white) !important;
    background-color: var(--color-secondary) !important;
}

.categorie-style-3:hover .content .custom-title-4 {
    color: var(--color-tertiary) !important;
}

.categorie-style-3:hover .content .custom-number-4 {
    color: var(--color-white) !important;
    background-color: var(--color-tertiary) !important;
}

.custom-edu-btn-2 {
    text-align: center !important;
    border-radius: 5px !important;
    display: inline-block !important;
    height: 60px !important;
    line-height: 62px !important;
    color: var(--edu-btn-color) !important;
    padding: 0 30px !important;
    font-size: 15px !important;
    transition: 0.4s !important;
    font-family: var(--font-secondary) !important;
    border: 0 none !important;
    overflow: hidden !important;
    position: relative !important;
    z-index: 1 !important;
    font-weight: bold !important;
    margin-top: 20px !important;
    background-color: #2985BC !important;
    background: #2985BC !important;
}

.custom-template {
    position: fixed !important;
    top: 50%;
    left: 34.8%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 9999 !important;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2) !important;
  
}

.custom-error-msg {
    margin-top: 25px !important;
    color: #FF5733 !important;
}

.message-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

.message-text {
    font-size: 16px;
    color: #666;
}

.custom-close-btn {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
    color: gray;
    padding-right: 15px;
    font-size: 20px;
}

.custom-information-msg {
    margin-bottom: 25px !important;
    font-size: 12.5px !important;
    padding: 5px !important;
    padding-left: 2px !important;
}

.custom-title-resultat {
    margin-top: 25px !important;
    margin-bottom: 25px !important;
    font-size: 12.5px !important;
    padding: 5px !important;
    padding-left: 2px !important;
}

.custom-suivi-title {
    margin-top: -10px !important;
    padding: 10px !important;
    padding-left: 0px !important;
    color: #0a3764 !important;
    font-weight: bold !important;
}

.search-box {
    display: flex;
    margin: 0 !important;
    height: 100% !important;
    align-items: center;
    background-color: #fff;
    color: #0a3764 !important;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0px;

    justify-content: center;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1) !important;

}

.search-box input[type="text"] {
    flex: 1;

    border: none !important;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0px !important;
    outline: none !important;
}




.search-box .icon-4 {
    width: 80px !important;
    height: 2px !important;
}

.result-box {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 2px;

}

.result-textarea {
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    font-size: 14px;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 10px;
    border-radius: 2px;
    box-sizing: border-box;
}

.result-item {

    align-items: center;

    margin-right: 20px;
    margin-left: 20px;
    margin: 20px;
}

.result-label {
    color: #181818 !important;
    width: 80px;
    margin-right: 30px;
    font-size: 13px !important;
}

.result-line {
    flex-grow: 1;
    border-bottom: 1px solid #ccc;
}

.box-resultat {
    margin: 0 !important;
    height: 100% !important;

    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center !important;
    flex-direction: column;
}

.resultat-section {
    height: 50px;
    border-bottom: 1px solid #ccc;
    display: flex;

    align-items: center;
}

.resultat-section-etat {
    height: 70px;
    border-bottom: 1px solid #ccc;
    display: flex;
    border-bottom: none;
    align-items: center;
}

.resultat-section:first-child {
    border-top: none;
}

.resultat-section:last-child {
    border-bottom: none;
}

p {
    margin: 0;
}

.row-label-resultat {
    flex-grow: 1;
    color: #181818 !important;
}

.row-label-value {
    color: #181818 !important;
    font-weight: 500;
    justify-content: right !important;
    margin-left: auto;
}

.row-etat-value-pending {
    color: #f8b924 !important;
    background-color: #fff8e8;
    font-weight: 500;
    padding: 7px !important;
    font-style: italic;
    justify-content: right !important;
    margin-left: auto;
}

.row-etat-value-close {
    color: #168b71 !important;
    background-color: #e7f8f5;
    font-weight: 500;
    padding: 7px !important;
    font-style: italic;
    justify-content: right !important;
    margin-left: auto;
}

#code {
    color: #0a3764 !important;
}

.row-etat-value-pending svg {

    padding: 3px;
    fill: #ffa500;
    width: 20px;
    height: 20px;
}

.row-etat-value-close svg {

    padding: 2.5px;
    fill: #008064;
    width: 20px;
    height: 20px;
}
.custom-loader{
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
</style>