<template>
    <div class="containerBodyMenu">
      <!-- detailCard -->
      <div :class="switchDetailForm?'detailForm':'showDetailForm'">
      <center>
          <br>
          <h3>Detail Client</h3>
          <br>
          <div class="containerDitailCard">
  
              <img src="clientDetailClient.photo"  class="imgClientDetail">
              <br>
              Nassim Eloualydy
              <br>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Cni :</div>
                  <div class="valueInforDetial"></div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Nom :</div>
                  <div class="valueInforDetial"></div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Prenom :</div>
                  <div class="valueInforDetial"></div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Email :</div>
                  <div class="valueInforDetial"></div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Telephone :</div>
                  <div class="valueInforDetial"></div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Sexe :</div>
                  <div class="valueInforDetial"></div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Priorite :</div>
                  <div class="valueInforDetial"></div>
              </div>
  
          </div>
          <br>
          <input type="button" @click="hideDetailForm" value="Reteur" class="inputBtnForm">
          
          <br>
      </center>
      </div>
      <!-- detailCard -->
      <div :class="this.switchForm?'form':'showForm'">
        <center>
          <br>
          <h3>Formulaire de Auteur</h3>
          <br>
          <div class="containerInputTextForm">
              <div>Photo :</div>
              <input type="file" @change="handleChange" name="photo">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>CNI :</div>
              <input type="text" name="cni" v-model="auteurData.cni" @change="handleChange" class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Nom :</div>
              <input type="text" name="nom" v-model="auteurData.nom" @change="handleChange" class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Prenom :</div>
              <input type="text" name="prenom" v-model="auteurData.prenom" @change="handleChange"  class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Date Naissance :</div>
              <input type="date" name="datNaissance"  v-model="auteurData.datNaissance" @change="handleChange" class="inputForm">
          </div>
          <br>

          <div class="containerInputTextForm">
              <div>Sexe:</div>
              <select name="sexe" v-model="auteurData.sexe" @change="handleChange" class="inputForm">
            <option value="">Choisire le sexe</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
           </select>
          </div>
          <br>

          <div class="containerInputTextForm">
              <div>Theme :</div>
              <select name="theme" v-model="auteurData.theme" @change="handleChange"  class="inputForm">
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
    <h3 class="titleBody">Gestion des Auteur</h3>
  <br>
          <center>
              <ion-icon @click="switchMenuBtn" class="btnMenu" name="menu-outline"></ion-icon>
              <!-- <div class="charts">
                <div class="ontainerCharts">
                  <div class="chartItem">
                      <br>
                      <br>
  
                  </div>
                  <div class="chartItem">
                      <br>
                      <br>
                      <br>
                      <div class="containerCartCharts">
                    
                      </div>
  
                  </div>
                </div>
              </div> -->


              <br>
              <div class="listTable">
                  <div class="list">
                      <input type="button" value="Noveau" @click="showFormAdd" class="inputBtnAdd">
                 <h3 class="titleList">Liste des Livre</h3>
                 <br>
                 <br>
                 <br>
                 <div class="containerSearchInput">
                          <input type="text" placeholder="CNI" v-model="auteurSearch.cni"  class="inputSearch"><br><br>
                          <input type="text" placeholder="Nom" v-model="auteurSearch.nom"  class="inputSearch"><br><br>
                          <input type="text" placeholder="Prenom" v-model="auteurSearch.prenom"  class="inputSearch"><br><br>
                 </div>
                 <div class="containerSearchInput">
                          <input type="text" placeholder="Theme" v-model="auteurSearch.theme" class="inputSearch"><br><br>
                          <input type="text" placeholder="Sexe" v-model="auteurSearch.sexe" class="inputSearch"><br><br>
                          <input type="text" placeholder="Naissance" v-model="auteurSearch.datNaissance"  class="inputSearch"><br><br>
                 </div>
                 <br>
                 <input type="button" @click="searchAuteur" value="Chercher" style="border-color: black;" class="inputBtnForm">&nbsp;
                 <input type="button" @click="getData" value="Actualiser" style="border-color: black;" class="inputBtnForm">
  
                 <br>
                 <br>
  
                 <div class="containerListTable">
                  <table>
          <tr id="header">
              <th>client</th>
              <th>Cni</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Theme</th>
              <th>Sexe</th>
              <th>Naissance</th>
              <th colspan="2">Options</th>
          </tr>
          <tbody :key="a._id" v-for="a in auteurs">
              <tr>
              <td><img :src="this.apiUrl+'/auteur/getPhoto/'+a._id"  class="comptImgeList"> </td>
              <td>{{a.cni}} </td>
              <td>{{a.nom}} </td>
              <td>{{a.prenom}} </td>
              <td>{{a.theme}} </td>
              <td>{{a.sexe}} </td>
              <td>{{a.datNaissance}} </td>
              <td><ion-icon  class='Icon Icon_delete' @click="deleteAuteur(a._id)" name='trash-outline'></ion-icon></td>
                  <td><ion-icon class='Icon Icon_update' @click="updateAuteur(a)" name='pencil-outline'></ion-icon></td>
                </tr>
  
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
  
          <div :key="a._id" v-for="a in  latestAddAuteur">
              <div class="lastAddedItem">
              <img :src="this.apiUrl+'/auteur/getPhoto/'+a._id"  class="comptImgeList">
              {{a.nom}}
              {{a.prenom}}
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
//   import Chart from 'chart.js/auto';
   export default {
      name:"AuteurComponent",
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
               auteurs:[],
               submitBtnValue:"Ajouter",
               idAuteur:"",
               detailAueteur:{
               },
               latestAddAuteur:[],
               auteurData:{
                cni:'',
                nom:'',
                prenom:'',
                datNaissance:'',
                sexe:'',
                theme:''
               },
               auteurSearch:{
                cni:'',
                nom:'',
                prenom:'',
                datNaissance:'',
                sexe:'',
                theme:''

              },
               auteurDataF:new FormData()
          }
      },
      methods:{
        updateAuteur(a){
            this.switchForm=false;
            this.submitBtnValue="Moddifier"
            this.auteurData.cni=a.cni;
                this.auteurData.nom=a.nom;
                this.auteurData.prenom=a.prenom;
                this.auteurData.datNaissance=a.datNaissance;
                this.auteurData.sexe=a.sexe;
                this.auteurData.theme=a.theme;
                this.idAuteur=a._id;
                this.auteurDataF.set("cni",a.cni);
                this.auteurDataF.set("nom",a.nom);
                this.auteurDataF.set("prenom",a.prenom);
                this.auteurDataF.set("datNaissance",a.datNaissance);
                this.auteurDataF.set("sexe",a.sexe);
                this.auteurDataF.set("theme",a.theme);
        },
        showFormAdd(){
           this.switchForm=false;
        },
        hideForm(){
            this.switchForm=true;
            this.submitBtnValue="Ajouter";
            this.auteurData.cni="";
                this.auteurData.nom="";
                this.auteurData.prenom="";
                this.auteurData.datNaissance="";
                this.auteurData.sexe="";
                this.auteurData.theme="";

        },
        switchMenuBtn(){
            this.switchMenu=!this.switchMenu;
        },
        switchPage(url){
            this.$router.push(url);
            this.switchMenu=!this.switchMenu;
        },
        handleChange(e){
         const value=e.target.name=="photo"?e.target.files[0]:e.target.value;
         this.auteurDataF.set(e.target.name,value);

        },
        submitBtn(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            if(this.submitBtnValue=="Ajouter"){
                fetch(`${this.apiUrl}/auteur/addAuteur`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Authorization":`Bearer ${token}`
                },
                body:this.auteurDataF
            }).then(res=>res.json()).then(res=>{
                if(res.err)
                this.$toast.warning(res.err);
                if(res.msg){

                    this.$toast.success(res.msg);
                    this.hideForm();
                    this.getData();
                }
                else
                console.log(res);
            }).catch(err=>console.log(err));

            }else{
                fetch(`${this.apiUrl}/auteur/updateAuteur/${this.idAuteur}`,{
                    method:"POST",
                    headers:{
                        "Accept":"application/json",
                        "Authorization":`Bearer ${token}`
                    },
                    body:this.auteurDataF
                }).then(res=>res.json()).then(res=>{
                  if(res.err){
                    this.$toast.warning(res.err);
                  }
                  if(res.msg){
                    this.$toast.success(res.msg);
                    this.hideForm();
                    this.getData();

                  }else
                  console.log(res);
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
      getData(){
        const {token}=JSON.parse(localStorage.getItem("info"));
        fetch(`${this.apiUrl}/auteur/getData/${this.offset}`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },

        }).then(res=>res.json()).then(res=>{
            if(res.auteurs)
             this.auteurs=res.auteurs
             else 
             console.log(res);
             console.log(res);
        }).catch(err=>console.log(err));
      },
      deleteAuteur(id){
        if(window.confirm("Voulez vous vraiment supprimer cet auteur ?")){
            const {token}=JSON.parse(localStorage.getItem("info"));
        fetch(`${this.apiUrl}/auteur/deleteAuteur/${id}`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json()).then(res=>{
          if(res.msg){
              this.$toast.success(res.msg);
              this.getData();
          }else
          console.log(res);

        }).catch(err=>console.log(err));

        }
      },
      searchAuteur(){
        const {token}=JSON.parse(localStorage.getItem("info"));
        fetch(`${this.apiUrl}/auteur/searchAuteur`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`,
            },
            body:JSON.stringify(this.auteurSearch)
        }).then(res=>res.json()).then(res=>{
            if(res.auteurs)
              this.auteurs=res.auteurs;
            else
            console.log(res);
        }).catch(err=>{console.log(err)});
        
      },
      getLatestAddAuteur(){
        const {token}=JSON.parse(localStorage.getItem("info"));

        fetch(`${this.apiUrl}/auteur/latestAddAuteur`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`,
            }
        }).then(res=>res.json()).then(res=>{
            if(res.auteurs)
            this.latestAddAuteur=res.auteurs;
            else
            console.log(res);
        }).catch(err=>console.log(err));
      },
      getNbrAuteurParTheme(){
        const {token}=JSON.parse(localStorage.getItem("info"));
        fetch(`${this.apiUrl}/auteur/getNbrAuteurParTheme`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`,
            }
        }).then(res=>res.json()).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
      }
      },
      created(){
this.getData();
this.getLatestAddAuteur();
this.getNbrAuteurParTheme();
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
      width: 95%;
  
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
      width: 30%;
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px;
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