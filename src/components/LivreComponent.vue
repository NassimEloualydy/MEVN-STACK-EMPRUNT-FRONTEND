<template>
    <div class="containerBodyMenu">
      <!-- detailCard -->
      <div :class="switchDetailForm?'detailForm':'showDetailForm'">
      <center>
          <br>

          <h3>Detail Livre</h3>
          <br>
          <div class="containerDitailCard">
  
              <img :src="this.apiUrl+'/livre/getPhoto/'+this.detailLivre._id"  class="imgClientDetail">
              <br>
                {{this.detailLivre.desi}}
              <br>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Code :</div>
                  <div class="valueInforDetial">{{this.detailLivre.code}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Qentite :</div>
                  <div class="valueInforDetial">{{this.detailLivre.qte}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Prix :</div>
                  <div class="valueInforDetial">{{this.detailLivre.prix}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Theme :</div>
                  <div class="valueInforDetial">{{this.detailLivre.theme}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Date Edition :</div>
                  <div class="valueInforDetial">{{this.detailLivre.dateEdition}}</div>
              </div>
              <br>
          </div>
          <br>
          <br>
          <h3>Detail Auteur</h3>
          <br>
          <div class="containerDitailCard">
  
              <img :src="this.apiUrl+'/auteur/getPhoto/'+this.detailLivre.auteur._id"  class="imgClientDetail">
              <br>
              {{this.detailLivre.auteur.nom}} {{this.detailLivre.auteur.prenom}}
              <br>
              <br>
              <!-- auteur: { _id: "", nom: "", cni: "", prenom: "", datNaissance: "", sexe: "", theme: ""} -->

              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Cni :</div>
                  <div class="valueInforDetial">{{this.detailLivre.auteur.cni}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Date de naissance :</div>
                  <div class="valueInforDetial">{{this.detailLivre.auteur.datNaissance}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Sexe :</div>
                  <div class="valueInforDetial">{{this.detailLivre.auteur.sexe}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Theme :</div>
                  <div class="valueInforDetial">{{this.detailLivre.auteur.theme}}</div>
              </div>
  
          </div>
          <br>
          <input type="button" @click="hideDetailForm"  value="Reteur" class="inputBtnForm">

          <br>
          <br>
      </center>
      </div>
      <!-- detailCard -->
      <div :class="this.switchForm?'form':'showForm'">
        <center>
          <br>
          <h3>Formulaire de Livre</h3>
          <br>
          <div class="containerInputTextForm">
              <div>Photo :</div>
              <input type="file" @change="handlChange"  name="photo">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Code :</div>
              <input type="text" name="code" v-model="livreData.code" @change="handlChange" class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Designation :</div>
              <input type="text" name="desi" v-model="livreData.desi" @change="handlChange"  class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Qentite :</div>
              <input type="text" name="qte" v-model="livreData.qte" @change="handlChange"  class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Prix :</div>
              <input type="text" name="prix" v-model="livreData.prix" @change="handlChange"  class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Date Edition :</div>
              <input name="dateEdition" v-model="livreData.dateEdition" @change="handlChange" type="date" class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Theme :</div>
              <select name="theme" v-model="livreData.theme" @change="handlChange" class="inputForm">
              <option value="">Choisire le Theme</option>
              <option value="romans">romans</option>
              <option value="nouvelles">nouvelles</option>
              <option value="albums">albums</option>
              <option value="documentaires">documentaires</option>
              <option value="magazines">magazines</option>
              <option value="journaux">journaux</option>
              <option value="mangas">mangas</option>
              <option value="poésie">poésie</option>
              <option value="contes">contes</option>
             </select>
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Auteur :</div>
              <select name="auteur"  v-model="livreData.auteur" @change="handlChange" class="inputForm">
                <option value="">Choisir un auteur</option>
                <slot :key="a._id" v-for="a in auterForLivre">
                    <option :value="a._id">{{a.nom}}  {{a.prenom}}</option>                                  
                </slot>
                <!-- <span :key="a._id" v-for="a in auterForLivre"> -->
                <!-- </span> -->
             </select>
          </div>
          <br>
          <input type="button" @click="submitBtn" :value="submitBtnValue" class="inputBtnForm">&nbsp;
          <input type="button" @click="hideForm" value="Annuler" class="inputBtnForm">
        </center>
      </div>
      <div :class="this.switchMenu?'menu':'showMenu'">
          <!-- <center>
          <br>
          <br>
          <h3>Menu</h3>
          <br>
          <img src="" class="comptImage" alt="">
          <br>
          <br>
          <div class="menuButton">Client</div>
          <br>
          <div class="menuButton">Client</div><br>
          <div class="menuButton">Client</div><br>
          <div class="menuButton">Client</div><br>
      </center> -->
     <MenuComponent @switchPage="switchPage"/>
  </div>
      <div class="body">
    <h3 class="titleBody">Gestion des Livre</h3>
  <br>
          <center>
              <ion-icon @click="switchMenuBtn" class="btnMenu" name="menu-outline"></ion-icon>
              <div class="charts">
                <div class="ontainerCharts">
                  <div class="chartItem">
                      <br>
                      <br>
                      <canvas  height="220" id="myChart1" ></canvas>
  
                  </div>
                  <div class="chartItem">
                      <br>
                      <br>
                      <div class="containerCartCharts">
                        <canvas height="220" id="myChart2" ></canvas>

                      </div>
  
                  </div>
                </div>
              </div>
              <br>
              <div class="listTable">
                  <div class="list">
                      <input type="button" value="Noveau" @click="showFormAdd" class="inputBtnAdd">
                 <h3 class="titleList">Liste des Livre</h3>
                 <br>
                 <br>
                 <br>
                 <div class="containerSearchInput">
                          <input type="text" placeholder="Code" name="code" v-model="livreSearch.code"   class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="Designation" name="desi" v-model="livreSearch.desi" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="Qentiter" name="qte"  v-model="livreSearch.qte" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="Prix" name="prix"  v-model="livreSearch.prix" class="inputSearch inputSearchLivre"><br><br>
                 </div>
                 <div  class="containerSearchInput">
                          <input type="text" placeholder="Date Edition" name="dateEdition"  v-model="livreSearch.dateEdition" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="Theme" name="theme"  v-model="livreSearch.theme" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="CNI" name="cni"  v-model="livreSearch.cni" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Nom" name="nom" v-model="livreSearch.nom" class="inputSearch inputSearchLivre"><br><br>

                 </div>
                 <div  class="containerSearchInput">
                          <input type="text"  placeholder="Preneom" name="prenom" v-model="livreSearch.prenom" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Date Naissance" name="datNaissance" v-model="livreSearch.datNaissance" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Sexe" name="sexe" v-model="livreSearch.sexe" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" style="visibility: hidden;"  placeholder="Sexe" name="sexe" class="inputSearch inputSearchLivre"><br><br>
                 </div>
  
                 <br>
                 <input type="button" @click="searchLivre" value="Chercher" style="border-color: black;" class="inputBtnForm">&nbsp;
                 <input type="button" @click="getData" value="Actualiser" style="border-color: black;" class="inputBtnForm">
  
                 <br>
                 <br>
  
                 <div class="containerListTable">
                  <table>
          <tr id="header">
              <th>Livre</th>
              <th>Code</th>
              <th>Auteur</th>
              <th>Designation</th>
              <th>Qenite</th>
              <th>Prix</th>
              <th colspan="3">Options</th>
          </tr>
          <tbody :key="l._id" v-for="l in Livres">
              <tr>
              <td><img :src="this.apiUrl+'/livre/getPhoto/'+l._id"  class="comptImgeList"> </td>
              <td>{{l.code}} </td>
              <td>{{l.auteur.nom}} {{l.auteur.prenom}}</td>
              <td>{{l.desi}} </td>
              <td>{{l.qte}} </td>
              <td>{{l.prix}} </td>
              <td><ion-icon  class='Icon Icon_delete' @click="deleteLivre(l._id)" name='trash-outline'></ion-icon></td>
                  <td><ion-icon class='Icon Icon_update' @click="updateLivre(l)" name='pencil-outline'></ion-icon></td>
                  <td><ion-icon class='Icon Icon_details' @click="detailLivreBtn(l)" name='information-circle-outline'></ion-icon>  </td></tr>
  
          </tbody>
      </table>
  
                 </div>
  
  
                  </div>
    <br>
    <div class="chartsLatest">
      <center>
          <br>
          <br>
          <h3>Les dernier Ajoute :</h3>
          <br>
          <!-- <tbody :key="c.id" v-for="c in Clients"> -->
  
          <div :key="l._id" v-for="l in  latestAddLivre">
              <div class="lastAddedItem">
              <img :src="this.apiUrl+'/livre/getPhoto/'+l._id"  class="comptImgeList">
              {{l.desi}}
          </div>
          <br>
          
          </div>
          
      </center>
    </div>
              </div>
              <br>
          </center>
      </div>
    </div>
  </template>
  <script>
import MenuComponent from './MenuCompnent.vue'
  import Chart from 'chart.js/auto';
   export default {
      name:"LivreComponent",
      components:{
          MenuComponent
      },
      emits:['switchMenu'],
      data :function (){
          return {
              apiUrl:"http://localhost:3000/api",
               switchMenu:true,
               switchForm:true,
               switchDetailForm:true,
               offset:0,
               Livres:[],
               submitBtnValue:"Ajouter",
               idLivre:"",
               detailLivre:{
                _id: "", 
                code: "", 
                desi: "", 
                qte: "", prix: "",
                dateEdition: "", 
                theme: "", 
                auteur: { _id: "", nom: "", cni: "", prenom: "", datNaissance: "", sexe: "", theme: ""}
            },
               auterForLivre:[],
               latestAddLivre:[],
               livreData:{
                    code:"",
                    desi:"",
                    qte:"",
                    prix:"",
                    theme:"",
                    dateEdition:"",
                    auteur:""
               },
               livreSearch:{
                code:'',
                desi:'',
                qte:'',
                prix:'',
                dateEdition:'',
                theme:'',
                cni:'',
                nom:'',
                prenom:'',
                datNaissance:'',
                sexe:''
              },
               livreDataF:new FormData()
          }
      },
      methods:{
        getLatestAdded(){
          const {token}=JSON.parse(localStorage.getItem("info"));
           fetch(`${this.apiUrl}/livre/getLatestAdded`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
           }).then(res=>res.json()).then(res=>{
            if(res.list)
            this.latestAddLivre=res.list;
            else
            console.log(res);
           }).catch(err=>console.log(err));
        },
        getNbrLivreParTheme(){
          const {token}=JSON.parse(localStorage.getItem("info"));
          fetch(`${this.apiUrl}/livre/getNbrLivreParTheme`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
          }).then(res=>res.json()).then(res=>{
            const themes=[];
            const counts=[];
            for(const data of res.list){
                themes.push(data._id.theme);
                counts.push(data.count);
            }
            const ctx1 = document.getElementById('myChart2');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: themes,
        datasets: [{
            label: 'Nombre des livre par Theme',
            data: counts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
myChart1;


          }).catch(err=>console.log(err));
        },
        getNbrLivreByAuteur(){
           const {token}=JSON.parse(localStorage.getItem("info"));
           fetch(`${this.apiUrl}/livre/getNbrLivreByAuteur`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
           }).then(res=>res.json()).then(res=>{
            const auteur=[];
            const counts=[];
            for(const data of res.list){
                auteur.push(data.auteur[0].nom+" "+data.auteur[0].prenom);
                counts.push(data.count);
            }
            const ctx1 = document.getElementById('myChart1');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: auteur,
        datasets: [{
            label: 'Nombre des livre par Auteur',
            data: counts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
myChart1;

           }).catch(err=>console.log(err));
        },
        searchLivre(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            fetch(`${this.apiUrl}/livre/searchLivre`,{
              method:"POST",
              headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
              },
              body:JSON.stringify(this.livreSearch)
            }).then(res=>res.json()).then(res=>{
                if(res.livres)
                this.Livres=res.livres;
                else
                console.log(res);
            }).catch(err=>console.log(err));
        },
        detailLivreBtn(l){
         this.switchDetailForm=false;
        //  this.detailLivre=l;
         this.detailLivre._id=l._id;
         this.detailLivre.code=l.code;
            this.detailLivre.desi=l.desi;
            this.detailLivre.qte=l.qte;
            this.detailLivre.prix=l.prix;
            this.detailLivre.theme=l.theme;
            this.detailLivre.dateEdition=l.dateEdition;
            this.detailLivre.auteur._id=l.auteur._id;
            this.detailLivre.auteur.nom=l.auteur.nom;
            this.detailLivre.auteur.cni=l.auteur.cni;
            this.detailLivre.auteur.prenom=l.auteur.prenom;
            this.detailLivre.auteur.datNaissance=l.auteur.datNaissance;
            this.detailLivre.auteur.sexe=l.auteur.sexe;
            this.detailLivre.auteur.theme=l.auteur.theme;
          
        },
        hideDetailForm(){
            this.switchDetailForm=true;
        },
        updateLivre(l){
            console.log(JSON.stringify(l));
            this.switchForm=false;
            this.submitBtnValue="Moddifier";
            this.livreData.code=l.code;
            this.livreData.desi=l.desi;
            this.livreData.qte=l.qte;
            this.livreData.prix=l.prix;
            this.livreData.theme=l.theme;
            this.livreData.dateEdition=l.dateEdition;
            this.livreData.auteur=l.auteur._id;
            this.getAuteurForLivre(l.theme);
            this.livreDataF.set("code",this.livreData.code);
            this.livreDataF.set("desi",this.livreData.desi);
            this.livreDataF.set("qte",this.livreData.qte);
            this.livreDataF.set("prix",this.livreData.prix);
            this.livreDataF.set("theme",this.livreData.theme);
            this.livreDataF.set("dateEdition",this.livreData.dateEdition);
            this.livreDataF.set("auteur",this.livreData.auteur);
            this.idLivre=l._id;
        }, 
        deleteLivre(id){
            if(window.confirm("voulez vous vraiment supprimer cet livre ?")){

                const {token}=JSON.parse(localStorage.getItem("info"));
                fetch(`${this.apiUrl}/livre/deleteLivre/${id}`,{
                    method:"POST",
                    headers:{
                        "Accept":"application/json",
                        "Content-Type":"application/json",
                        "Authorization":`Bearer ${token}`
                    }
                }).then(res=>res.json()).then(res=>{
                    if(res.msg){
                        this.getData();
                        this.$toast.success(res.msg);
                    }else
                    console.log(res);
                }).catch(err=>console.log(err));
            }
        },
        handlChange(e){
         const value=e.target.name=="photo"?e.target.files[0]:e.target.value;
         this.livreDataF.set(e.target.name,value);
         if(e.target.name=="theme" && e.target.value!="")
         this.getAuteurForLivre(e.target.value);
        },
        showFormAdd(){
           this.switchForm=false;
        },
        hideForm(){
            this.switchForm=true;
            this.submitBtnValue="Ajouter";
            this.livreData.code="";
            this.livreData.desi="";
            this.livreData.qte="";
            this.livreData.prix="";
            this.livreData.theme="";
            this.livreData.dateEdition="";
            this.livreData.auteur="";  
        },
        switchMenuBtn(){
            this.switchMenu=!this.switchMenu;
        },
        switchPage(url){
            this.$router.push(url);
            this.switchMenu=!this.switchMenu;
        },
        getAuteurForLivre(theme){
            const {token}=JSON.parse(localStorage.getItem("info"));
            fetch(`${this.apiUrl}/livre/getAuteur/${theme}`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json()).then(res=>{
            //    console.log(res.auteurs);
            if(res.auteurs)
            this.auterForLivre=res.auteurs;
            else
            console.log(res);
            });
        },
        submitBtn(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            if(this.submitBtnValue=="Ajouter"){

                fetch(`${this.apiUrl}/livre/addLivre`,{
                    method:"POST",
                    headers:{
                        "Accept":"application/json",
                        "Authorization":`Bearer ${token}`
                    },
                    body:this.livreDataF
                }).then(res=>res.json()).then(res=>{
                    if(res.err)
                     this.$toast.warning(res.err);
                     if(res.msg){
                        this.$toast.success(res.msg);
                        this.hideForm();
                        this.getData();
                     }else
                     console.log(res);
                }).catch(err=>console.log(err));
            }else{
                fetch(`${this.apiUrl}/livre/updateLivre/${this.idLivre}`,
                {
                  method:"POST",
                  headers:{
                    "Accept":"application/json",
                    "Authorization":`Bearer ${token}`
                  },
                  body:this.livreDataF
                }).then(res=>res.json()).then(res=>{
                    if(res.err)
                     this.$toast.warning(res.err);
                     if(res.msg){
                        this.$toast.success(res.msg);
                        this.hideForm();
                        this.getData();
                     }else
                     console.log(res);
                }).catch(err=>console.log(err));
            }
        },
        getData(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            fetch(`${this.apiUrl}/livre/getData/${this.offset}`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json()).then(res=>{
                if(res.livres){

                    this.Livres=res.livres;
                }else
                console.log(res);
            }).catch(err=>console.log(err));
        }
        
      },
      created(){
        this.getData();
        this.getNbrLivreByAuteur();
        this.getNbrLivreParTheme();
        this.getLatestAdded();
      }
  
       }
  </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
  *{
      font-family: 'Nunito', sans-serif;
     transition: .3s;
  }
  .lastAddedItem{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border: 1px solid black;
      border-radius: 5px;
      width: 85%;
     padding: 5px;
  }
  .containerInfoDetail{
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
  }
  /* .labelInforDetial{
      font-weight: bolder;
      width: 50%;
      text-align: left;
      
  }
  .valueInforDetial{
      width: 50%;
      text-align: left;
  } */
  .containerDitailCard{
      width: 80%;
      border: 1px solid white;
      border-radius: 5px;
      height: 80vh;
      padding: 5px;
  }
  .imgClientDetail{
      width: 180px;
      height: 180px;
      border: 1px solid white;
      border-radius: 180px;
      object-fit: cover;
  }
  .detailForm{
      width: 40%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: -40%;
      background-color: rgb(26, 24, 24);
      color: white;
      z-index: 99999999;
      overflow: hidden;
      overflow-y: scroll;
  }
  .showDetailForm{
      width: 40%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      background-color: rgb(26, 24, 24);
      color: white;
      z-index: 99999999;
      overflow: hidden;
      overflow-y: scroll;
  }
  .comptImgeList{
      height: 50px;
      width: 50px;
      border: 1px solid black;
      border-radius: 50px;
      object-fit: cover;
  }
  .Icon{
      padding: 5px;
      border: 1px solid black;
      border-radius: 5px ;
    }
    .Icon_delete{
      color: rgb(163, 4, 4);
      border-color: rgb(163, 4, 4);
      transition: .3s;
      cursor: pointer;
    }
    .Icon_delete:hover{
        background-color: rgb(163, 4, 4);
        color: white;
        transition: .3s;
      }
      .Icon_update{
        color: rgb(195, 224, 31);
        border-color: rgb(195, 224, 31);
        transition: .3s;
        cursor: pointer;
      }
      .Icon_update:hover{
          background-color: rgb(195, 224, 31);
          color: white;
          transition: .3s;
        }
        .Icon_details{
            color: rgb(127, 193, 255);
            border-color: aquamarine;
            transition: .3s;
            cursor: pointer;
          }
          .Icon_details:hover{
              background-color: aquamarine;
              color: white;
              transition: .3s;
            }
  .containerSearchInput{
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .inputSearch{
      width: 20%;
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px;
  }
  .inputSearchLivre{
    width: 20%;
  }
  table {
          border-collapse: collapse;
          width: 90%;
          height: 200px;
          border: 1px solid #bdc3c7;
      }
      
      tr {
          transition: all .2s ease-in;
          cursor: pointer;
      }
      
      th,
      td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
      }
      
      #header {
          background-color: rgb(26, 24, 24);
          color: #fff;
      }
      
      h1 {
          font-weight: 600;
          text-align: center;
          background-color: rgb(26, 24, 24);
          color: #fff;
          padding: 10px 0px;
      }
      
      tr:hover {
          background-color: #f5f5f5;
          transform: scale(1.02);
          box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
      }
      
      @media only screen and (max-width: 768px) {
          table {
              width: 90%;
          }
      }
  .titleList{
      position: absolute;
      top: 15px;
      left: 20px;
  }
  .containerInputTextForm{
      width: 90%;
      display: block;
      text-align: left;
  }
  .inputForm{
      border: 1px solid rgb(26, 24, 24);
      border-bottom-color: white;
      color: white;
      background-color: rgb(26, 24, 24);
      width: 100%;
      outline: none;
  }
  .inputBtnForm{
      padding: 5px;
      border: 1px solid white;
      border-radius:5px;
      background-color: rgb(26, 24, 24);
      color: white;
  }
  .inputBtnForm:hover{
      padding: 5px;
      border: 1px solid white;
      border-radius:5px;
      background-color: white;
      color: rgb(26, 24, 24);
  }
  
  .inputBtnAdd{
      padding: 5px;
      border: 1px solid #5cb85c;
      border-radius:5px;
      background-color: #5cb85c;
      color: white;
      position: absolute;
      top: 15px;
      right: 15px;
  }
  .inputBtnAdd:hover{
      padding: 5px;
      border: 1px solid #5cb85c;
      border-radius:5px;
      background-color:white ;
      color: #5cb85c;
  
  }
  
  .titleBody{
      position: relative;
      left: 25px;
      top: 10px;
  }
  .charts{
      width: 95%;
      height: 60vh;
      border: 1px solid black;
      border-radius: 5px;
  
  }
  .listTable{
      width: 95%;
      height: 110vh;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  
  }
  .list{
      position: relative;
      width: 80%;
      height: 100%;
      border: 1px solid rgb(26, 24, 24);
      border-radius: 5px;
  }
  .chartsLatest{
      border: 1px solid rgb(26, 24, 24);
      border-radius: 5px;
      height: 100%;
      width: 17%;
  
  }
  .comptImage{
      width:250px;
      height:250px;
      border: 1px solid white;
      border-radius:250px;
  
  }
  .menuButton{
      width: 90%;
      padding: 5px;
      border: 1px solid white;
      border-radius: 5px;
      margin: 5px;
  }
  .menuButton:hover{
      background-color: white;
      color: rgb(26, 24, 24);
      cursor: pointer;
  }
  .containerBodyMenu{
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
  
  } 
  .menu{
      width: 20%;
      height: 100vh;
      background-color: rgb(26, 24, 24);
      color: white;
      z-index: 999;
  
  
  }
  .showMenu{
      width: 20%;
      height: 100vh;
      background-color: rgb(26, 24, 24);
      color: white;
      z-index: 999;
  }
  .body{
      width: 80%;
      height: 100vh;
      position: relative;
      overflow: hidden;
      overflow-y: scroll;
  }
  
  .form{
      width: 20%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: -20%;
      background-color: rgb(26, 24, 24);
      z-index: 999;
      color: white;
  }
  .showForm{
      width: 20%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      background-color: rgb(26, 24, 24);
      z-index: 999;
      color: white;
  }
  .btnMenu{
      position: fixed;
      top: 5px;
      right: 25px;
      font-size: 50px;
      visibility: hidden;
  }
  /* 
   */
  .ontainerCharts{
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .chartItem{
      width: 50%;
      height: 100%;
  }
  .containerCartCharts{
      width: 100%;
      display: block;   
  }
  .itemChartCart{
      width: 80%;
      height: 18vh;
      border: 1px solid black;
      border-radius: 5px;
      margin: 15px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
  }
  .itemChartCart:nth-child(1){ 
     background-color:  #0d6efd;
     color: white;
  }
  /* .itemChartCart:nth-child(2){ 
     background-color:  #dc3545;
     color: white;
  }  */
  .male{
      background-color:  #dc3545;
     color: white;
  
  }
  
  .iconinfoitemChartCart{
      width: 50%;
      font-size: 80px;
  }
  .infoitemChartCart{
      width: 50%;
      font-size:19px;
     
  }
  @media(max-width:1000px){
      .ontainerCharts{
      width: 90%;
      height: 100%;
      display: block;
      justify-content: space-between;
      align-items: center;
  }
  .chartItem{
      width: 100%;
      height: 50%;
  }
      .charts{
      width: 95%;
      height: 120vh;
      border: 1px solid black;
      border-radius: 5px;
  
  }
      .containerListTable{
  
          width: 90%;
          overflow: hidden;
          overflow-x: scroll;
      }
      .detailForm{
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: -100%;
      background-color: rgb(26, 24, 24);
      color: white;
      z-index: 99999999;
      overflow: hidden;
      overflow-y: scroll;

    }
  .showDetailForm{
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      background-color: rgb(26, 24, 24);
      color: white;
      z-index: 99999999;
      overflow: hidden;
      overflow-y: scroll;

  }
  
      .containerDitailCard{
      width: 80%;
      border: 1px solid white;
      border-radius: 5px;
      height: 80vh;
      padding: 5px;
  }
  
      .listTable{
      width: 95%;
      height: 230vh;
      border-radius: 5px;
      display: block;
      justify-content: center;
      align-items: center;
  
  }
  .list{
      position: relative;
      width: 100%;
      height: 70%;
      border: 1px solid rgb(26, 24, 24);
      border-radius: 5px;
  }
  .chartsLatest{
      border: 1px solid rgb(26, 24, 24);
      border-radius: 5px;
      height: 25%;
      width: 100%;
  
  }
  
      .containerSearchInput{
      width: 90%;
      display: block;
      justify-content: center;
      align-items: center;
  }
  .inputSearch{
      width: 100%;
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px;
  }
  
      .btnMenu{
      position: fixed;
      top: 5px;
      right: 25px;
      font-size: 50px;
      visibility: visible;
      z-index: 9999999999999999999;
  }
  
      .form{
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: -100%;
      background-color: rgb(26, 24, 24);
      z-index: 999;
      color: white;
  }
  .showForm{
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      background-color: rgb(26, 24, 24);
      z-index: 999;
      color: white;
  }
  
      .containerBodyMenu{
      width: 100%;
      height: 100vh;
      display: block;
      justify-content: block;
      align-items: center;
      position: relative;
  } 
  .menu{
      width: 100%;
      height: 100vh;
      background-color: rgb(26, 24, 24);
      color: white;
      position: fixed;
      top: 0;
      left: -100%;
      z-index: 999;
  
  }
  .showMenu{
      width: 100%;
      height: 100vh;
      background-color: rgb(26, 24, 24);
      color: white;
      position: fixed;
      top: 0;
      left: 0;   
      z-index: 999;
  
  }
  .body{
      width: 100%;
      height: 100vh;
  }
  
  }
  </style>