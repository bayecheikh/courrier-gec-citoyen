<template>
   <div class="edu-course-area course-area-3 bg-lighten04 pb-5 pt-5">
      <div class="container mb-6 custom-form-container">
         <div class="isotope-wrapper">
            <h3 class="pl-0 pt-5 pb-5 pr-0">Formulaire de soumission courrier</h3>
            <div class="row isotop-button isotop-filter nav d-flex justify-content-between">
               <!-- <button @click="$goToTab('connexion')" :class="'nav-link '+(detailactive_step.id=='connexion'?'active':'')">Connexion</button> -->
               <div class="col-2 d-flex flex-column justify-content-center align-center">
                  <div :class="'icon-step '+(detailactive_step.id=='ministeres'?'active_step':'')" @click="$goToTab('ministeres')">
                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="26.588" height="26.529" viewBox="0 0 46.588 46.529">
                        <defs>
                           <clipPath id="a">
                                 <rect width="46.588" height="46.529" :fill="detailactive_step.id=='ministeres'?'#ffff':'#000'" />
                           </clipPath>
                        </defs>
                        <g clip-path="url(#a)">
                           <path
                                 d="M43.351,19.708c0,.872.025,1.7-.012,2.528a1.948,1.948,0,0,1-.268,1.038,5.06,5.06,0,0,1-1.08.819V35.977a4.642,4.642,0,0,1,.679.285,1.447,1.447,0,0,1,.681,1.347c0,.861,0,1.722,0,2.637.828,0,1.593,0,2.358,0,.682,0,.877.2.878.895q0,2.26,0,4.52c0,.656-.209.867-.856.867q-22.438,0-44.876,0c-.63,0-.849-.21-.85-.823Q0,43.4,0,41.089c0-.627.208-.837.833-.841.992-.006,1.983,0,3.061,0V39.129q0-.6,0-1.2c0-1.2.207-1.5,1.357-1.957v-.454c0-3.687,0-7.374.007-11.061,0-.342-.051-.529-.429-.653A1.366,1.366,0,0,1,3.9,22.379c-.006-.864,0-1.727,0-2.646-.208-.01-.377-.024-.546-.024-.834,0-1.668.007-2.5-.006a.65.65,0,0,1-.728-.71c-.012-1.571,0-3.142-.006-4.713,0-.416.265-.618.581-.809q4.549-2.738,9.093-5.485Q16.229,4.1,22.663.21A1.049,1.049,0,0,1,23.9.193q10.873,6.58,21.766,13.126a1.445,1.445,0,0,1,.82,1.459c-.051,1.345-.012,2.693-.016,4.039,0,.671-.22.886-.894.891-.718,0-1.436,0-2.224,0m-41.9-1.363H45.134c0-1.137-.016-2.24.01-3.343a.677.677,0,0,0-.4-.675Q34.229,8,23.726,1.645a.7.7,0,0,0-.852-.012Q17.7,4.783,12.514,7.9,7.167,11.125,1.825,14.359c-.154.094-.35.285-.353.436-.029,1.167-.016,2.335-.016,3.55M45.229,41.6H1.366v3.563H45.229ZM26.9,35.974c1.169.425,1.384.737,1.384,1.991,0,.746,0,1.493,0,2.243H33.4c0-.917,0-1.8,0-2.678a1.359,1.359,0,0,1,.548-1.171,5.365,5.365,0,0,1,.8-.4v-12c-1.1-.371-1.346-.723-1.346-1.87,0-.779,0-1.558,0-2.347H28.281c0,.77,0,1.506,0,2.241,0,1.256-.213,1.565-1.384,1.992ZM19.69,23.982c-1.194-.454-1.383-.735-1.383-2.039v-2.2H13.9a.737.737,0,0,0-.031.13q0,1.082-.005,2.164c0,1.191-.216,1.505-1.324,1.925V36.006a1.543,1.543,0,0,1,1.324,1.8c0,.8,0,1.593,0,2.441h4.444c0-.83,0-1.6,0-2.363,0-1.162.266-1.53,1.383-1.9ZM6.62,35.992h4.526V23.94H6.62ZM21.07,36h4.449V23.933H21.07ZM40.6,23.96h-4.47V36.008H40.6ZM12.5,19.788H5.265v2.775H12.5ZM26.9,19.782H19.676v2.776H26.9ZM5.256,40.175H12.5V37.4H5.256Zm14.416.011h7.236V37.393H19.671ZM34.756,22.54h7.238V19.773H34.756Zm7.236,14.866H34.773V40.2h7.218Z"
                                 transform="translate(0 0)" :fill="detailactive_step.id=='ministeres'?'#ffff':'#000'" />
                           <path
                                 d="M158.333,57.165a3.971,3.971,0,1,1-3.99-3.949,3.957,3.957,0,0,1,3.99,3.949m-3.989,2.666a2.638,2.638,0,0,0,2.666-2.593,2.644,2.644,0,1,0-5.288-.037,2.617,2.617,0,0,0,2.623,2.63"
                                 transform="translate(-131.068 -46.379)" :fill="detailactive_step.id=='ministeres'?'#ffff':'#000'" />
                        </g>
                     </svg>
                  </div>
                  <p :class="'title_step pt-2 '">Trouvez l'organisme concerné</p>
               </div>
               <div class="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="6" viewBox="0 0 339 6">

                  <line id="Ligne_19907" data-name="Ligne 19907" x2="333" transform="translate(3 3)" fill="none" :stroke="detailactive_step.id=='ministeres'?'#008064':'#ffff'" stroke-linecap="round" stroke-width="6" opacity="0.998"/>

                  </svg>
               </div>
               <div class="col-2 d-flex flex-column justify-content-center align-center">
                  <div :class="'icon-step '+(detailactive_step.id=='coordonnees'?'active_step':'')" @click="$goToTab('coordonnees')">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26.588" height="26.529"
                        viewBox="0 0 38.16 40.834">
                        <g transform="translate(-5928 -10528.621)">
                           <path
                                 d="M40.159,28.56V24.04A9.04,9.04,0,0,0,31.119,15H13.04A9.04,9.04,0,0,0,4,24.04v4.52"
                                 transform="translate(5925 10539.894)" fill="none" :stroke="detailactive_step.id=='coordonnees'?'#ffff':'#000'"
                                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                           <circle cx="8.771" cy="8.771" r="8.771" transform="translate(5939.57 10529.62)"
                                 fill="none" :stroke="detailactive_step.id=='coordonnees'?'#ffff':'#000'" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" />
                        </g>
                     </svg>
                  </div>
                  <p class="title_step pt-2">Saisissez vos coordonnées</p>
               </div>
               
               <div class="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="6" viewBox="0 0 339 6">

                  <line id="Ligne_19907" data-name="Ligne 19907" x2="333" transform="translate(3 3)" fill="none" :stroke="detailactive_step.id=='contenu'?'#008064':'#ffff'" stroke-linecap="round" stroke-width="6" opacity="0.998"/>

                  </svg>
               </div>
               
               <div class="col-2 d-flex flex-column justify-content-center align-center">
                  <div :class="'icon-step '+(detailactive_step.id=='contenu'?'active_step':'')" @click="$goToTab('contenu')">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26.588" height="26.529"
                                viewBox="0 0 40.834 40.832">
                        <g transform="translate(-847 -579)">
                           <path
                                 d="M19.369,4H5.86A3.86,3.86,0,0,0,2,7.86V34.879a3.86,3.86,0,0,0,3.86,3.86H32.879a3.86,3.86,0,0,0,3.86-3.86V21.369"
                                 transform="translate(846 580.094)" fill="none" :stroke="detailactive_step.id=='contenu'?'#ffff':'#000'"
                                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                           <path d="M28.264,3.078a4.094,4.094,0,1,1,5.79,5.79L15.72,27.2,8,29.132l1.93-7.72Z"
                                 transform="translate(851.579 578.121)" fill="none" :stroke="detailactive_step.id=='contenu'?'#ffff':'#000'"
                                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                     </svg>
                  </div>
                  <p class="title_step pt-2">Remplir le formulaire de soumission</p>
               </div>
               <div class="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="6" viewBox="0 0 339 6">

                  <line id="Ligne_19907" data-name="Ligne 19907" x2="333" transform="translate(3 3)" fill="none" :stroke="detailactive_step.id=='coordonnees'?'#008064':'#ffff'" stroke-linecap="round" stroke-width="6" opacity="0.998"/>

                  </svg>
               </div>
               
               <div class="col-2 d-flex flex-column justify-content-center align-center">
                  <div :class="'icon-step '+(detailactive_step.id=='validation'?'active_step':'')" @click="$goToTab('validation')">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26.588" height="26.529"
                        viewBox="0 0 35.563 43.951">
                        <g transform="translate(-1604 -553)">
                              <path
                                 d="M24.976,2H8.2A4.2,4.2,0,0,0,4,6.2V39.757a4.2,4.2,0,0,0,4.2,4.2H33.366a4.2,4.2,0,0,0,4.2-4.2V14.586Z"
                                 transform="translate(1601 552)" fill="none" :stroke="detailactive_step.id=='validation'?'#ffff':'#000'"
                                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                              <path d="M14,2V14.586H26.586" transform="translate(1611.976 552)" fill="none"
                              :stroke="detailactive_step.id=='validation'?'#ffff':'#000'" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" />
                              <g transform="translate(1614.598 572.977)">
                                 <path d="M20,6,9,17,4,12" transform="translate(-4 -6)" fill="none"
                                 :stroke="detailactive_step.id=='validation'?'#ffff':'#000'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" />
                              </g>
                        </g>
                     </svg>
                  </div>
                  <p class="title_step pt-2 ">Prévisualisez et soumettez</p>
               </div>
               
               <!-- <button @click="$goToTab('ministeres')" :class="'nav-link '+(detailactive_step.id=='ministeres'?'active':'')" >Trouvez le ministère</button> -->
               <!-- <button @click="$goToTab('contenu')" :class="'nav-link '+(detailactive_step.id=='contenu'?'active':'')" >Contenu du courrier</button> -->
               <!-- <button @click="$goToTab('coordonnees')" :class="'nav-link '+(detailactive_step.id=='coordonnees'?'active':'')">Vos coordonnées</button> -->
               <!-- <button @click="$goToTab('validation')" :class="'nav-link '+(detailactive_step.id=='validation'?'active':'')">Validation</button> -->               
            </div>
            <div class="tab-content login-form-box registration-form">
              <!-- <div :class="'tab-pane fade '+(detailactive_step.id=='connexion'?'show active':'')" id="online" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-6">
                          <Connexion />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div> -->
              <div :class="'tab-pane fade '+(detailactive_step.id=='ministeres'?'show active':'')" id="undergraduate" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-12">
                          <Ministeres />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div>
              <div :class="'tab-pane fade '+(detailactive_step.id=='contenu'?'show active':'')" id="graduate" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-12">
                          <Contenu />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div>
              <div :class="'tab-pane fade '+(detailactive_step.id=='coordonnees'?'show active':'')" id="coordonnees" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-12">
                          <Coordonnees />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div>
              <div :class="'tab-pane fade '+(detailactive_step.id=='validation'?'show active':'')" id="validation" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-12">
                          <Validation />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div>              
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
   export default {
       components: {
           Connexion: () => import("@/components/courriers/Connexion"),
           Coordonnees: () => import("@/components/courriers/Coordonnees"),
           Ministeres: () => import("@/components/courriers/Ministeres"),
           Contenu: () => import("@/components/courriers/Contenu"),
           Validation: () => import("@/components/courriers/Validation"),
       },
       mounted: function() { 
        this.$store.dispatch('active_step/getDetail',{id:'ministeres'})        
       },
       computed: mapGetters({
           detailactive_step: 'active_step/detailactive_step',
       }),
       data () {
           return {
               
           }
       },
       methods: {
       },
   }
</script>
<style lang="scss" scoped>
   .course-area-3 {
   .isotop-button {
   button {
   &:hover,
   &.active {
   background-color: var(--color-secondary);
   color: var(--color-white);
   }
   &.active:after {
   bottom: -10px;
   visibility: visible;
   opacity: 1;
   }
   }
   }
   }
   .dark-mode {
   .course-area-3 { 
   .isotop-button {
   button {
   &:hover,
   &.active {
   background-color: var(--color-secondary);
   color: var(--color-white);
   }
   }
   }
   }
   }
   .login-form-box {
 box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.08);
 padding: 0px 38px !important;
 border-radius: 5px;
 background-color: #ffffff;
 background-color: var(--color-white);
}
.icon-step {
   
  height: 46px;
  width: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  transition: 0.3s;
  transition: var(--transition);
  background-color: #ffffffe8;
  border: solid 1px;
}
.align-center{
   align-items: center;
}
.active_step{
   background-color:#008064;
   color: #ffffff;
}
.title_step{
  font-size: 12px;
  font-weight: 400;
  color:#ffffffe8 ;
}
.isotop-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -5px 0px 23px;
  background: #0a3764;
  padding: 18px;
  border-radius: 5px;
}
.color-#green{
   color: #008064 !important;
}
.tab-content {
  border: solid 1px #8080804d;
  background-color: #fff;
  width: 100% !important;
  margin-left: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 0px !important;
}
.tab-content > .active {
  width: 100% !important;
}
.custom-form-container{
   max-width: 900px;
}
.align-center{
   text-align: center;
}
</style>
