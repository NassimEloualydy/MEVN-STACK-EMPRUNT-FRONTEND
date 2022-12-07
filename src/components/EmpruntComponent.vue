<template>
    <div class="containerBodyMenu">
      <!-- detailCard -->
      <div :class="switchDetailForm?'detailForm':'showDetailForm'">
      <center>
        <br>

<h3>Detail Emprunt</h3>
<br>
<div class="containerDitailCard" style="height: 35vh;">
    <div class="containerInfoDetail">
        <div class="labelInforDetial">Date Emprunt :</div>
        <div class="valueInforDetial">{{this.detailEmprunt.dateEmprunt}}</div>
    </div>
    <br>
    <div class="containerInfoDetail">
        <div class="labelInforDetial">Date Reteur :</div>
        <div class="valueInforDetial">{{this.detailEmprunt.dateReteur}}</div>
    </div>
    <br>
    <div class="containerInfoDetail">
        <div class="labelInforDetial">Qte :</div>
        <div class="valueInforDetial">{{this.detailEmprunt.qte}}</div>
    </div>
    <br>
    <div class="containerInfoDetail">
        <div class="labelInforDetial">Prix :</div>
        <div class="valueInforDetial">{{this.detailEmprunt.prix}}</div>
    </div>
    <br>
</div>

          <br>

          <h3>Detail Livre</h3>
          <br>
          <div class="containerDitailCard" >
            <!-- this.apiUrl+'/livre/getPhoto/'+this.detailLivre._id -->
              <img :src="this.apiUrl+'/livre/getPhoto/'+this.detailEmprunt.livre._id"  class="imgClientDetail">
              <br>
              <br>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Code :</div>
                  <div class="valueInforDetial">{{this.detailEmprunt.livre.code}}</div>
              </div>
              <br>

              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Designation :</div>
                  <div class="valueInforDetial">{{this.detailEmprunt.livre.desi}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Qentite :</div>
                  <div class="valueInforDetial">{{this.detailEmprunt.livre.qte}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Prix :</div>
                  <div class="valueInforDetial">{{this.detailEmprunt.livre.prix}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Theme :</div>
                  <div class="valueInforDetial">{{this.detailEmprunt.livre.theme}}</div>
              </div>
              <br>
              <div class="containerInfoDetail">
                  <div class="labelInforDetial">Date Edition :</div>
                  <div class="valueInforDetial">{{this.detailEmprunt.livre.dateEdition}}</div>
              </div>
              <br>
          </div>
          <br>
          <br>
          <h3>Detail Client</h3>
          <br>
          <div class="containerDitailCard" >
            <!-- this.apiUrl+'/livre/getPhoto/'+this.detailLivre._id -->
              <img :src="this.apiUrl+'/client/getPhoto/'+this.detailEmprunt.client._id"  class="imgClientDetail">
              <br>
              <br>
              <br>
              <div class="containerInfoDetail">
                <div class="labelInforDetial">Cni :</div>
                <div class="valueInforDetial">{{this.detailEmprunt.client.cni}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Nom :</div>
                <div class="valueInforDetial">{{this.detailEmprunt.client.nom}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Prenom :</div>
                <div class="valueInforDetial">{{this.detailEmprunt.client.prenom}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Email :</div>
                <div class="valueInforDetial">{{this.detailEmprunt.client.email}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Telephone :</div>
                <div class="valueInforDetial">{{this.detailEmprunt.client.tel}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Sexe :</div>
                <div class="valueInforDetial">{{this.detailEmprunt.client.sexe}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Priorite :</div>
                <div class="valueInforDetial">{{this.detailEmprunt.client.priorite}}</div>
            </div>

              <br>
          </div>

          <br>
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
          <h3>Formulaire de Emprunt</h3>
          <br>
          <div class="containerInputTextForm">
              <div>Client :</div>
              <select name="client"   v-model="empruntData.client"   class="inputForm">
                <option value="">Choisir un Client</option>
                <slot :key="c._id" v-for="c in clientForEmprunt">
                    <option :value="c._id">{{c.nom}}  {{c.prenom}}</option>                                  
                </slot> 
             </select>
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Livre :</div>
              <select name="livre" @change="handleChnagePrix" v-model="empruntData.livre"  class="inputForm">
                <option value="">Choisir un Livre</option>
                <slot :key="l._id" v-for="l in livreForEmprunt">
                    <option :value="l._id">{{l.desi}}  </option>                                  
                </slot>
             </select>
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Date Emprunt :</div>
              <input type="date" name="dateEmprunt" v-model="empruntData.dateEmprunt"    class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Date Reteur :</div>
              <input type="date" name="dateReteur" v-model="empruntData.dateReteur"    class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Qentite :</div>
              <input type="text" @input="handlChangeQte" name="qte"    v-model="empruntData.qte" class="inputForm">
          </div>
          <br>
          <div class="containerInputTextForm">
              <div>Prix :</div>
              <input name="prix" readonly  v-model="empruntData.prix" type="text" class="inputForm">
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
    <h3 class="titleBody">Gestion des Emprunt</h3>
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
                 <h3 class="titleList">Liste des Emprunt</h3>
                 <br>
                 <br>
                 <br>
                 <div class="containerSearchInput">
                          <input type="text" placeholder="Code Livre" v-model="empruntSearch.livre.code" name="code"   class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="Qentite Livre" v-model="empruntSearch.livre.qte" name="desi"  class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="Prix Livre" v-model="empruntSearch.livre.prix" name="qte"   class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="Theme" name="prix" v-model="empruntSearch.livre.theme"  class="inputSearch inputSearchLivre"><br><br>

                 </div>
                 <div  class="containerSearchInput">
                          <input type="text" placeholder="CNI Client"   v-model="empruntSearch.client.cni" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="Nom Client"  v-model="empruntSearch.client.nom"   class="inputSearch inputSearchLivre"><br><br>
                          <input type="text" placeholder="Prenom Client"  v-model="empruntSearch.client.prenom" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Email Client" v-model="empruntSearch.client.email"  class="inputSearch inputSearchLivre"><br><br>

                 </div>
                 <div  class="containerSearchInput">
                          <input type="text"  placeholder="Telephone Client" v-model="empruntSearch.client.tel"  class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Sexe Client"  v-model="empruntSearch.client.sexe" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Priorite Client"  v-model="empruntSearch.client.priorite" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Date Edition"  v-model="empruntSearch.livre.dateEdition" class="inputSearch inputSearchLivre"><br><br>
                 </div>
                 <div  class="containerSearchInput">
                          <input type="text"  placeholder="Date Emprunt" v-model="empruntSearch.dateEmprunt"  class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Date Reteur" v-model="empruntSearch.dateReteur"  class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Qentiter Emprunter"  v-model="empruntSearch.qte" class="inputSearch inputSearchLivre"><br><br>
                          <input type="text"  placeholder="Prix D'emprunt"  v-model="empruntSearch.prix" class="inputSearch inputSearchLivre"><br><br>
                 </div>
                 <div  class="containerSearchInput">
                          <input type="text"  placeholder="Designation" v-model="empruntSearch.livre.desi"  class="inputSearch inputSearchLivre"><br><br>
                 </div>
  
                 <br>
                 <input type="button" @click="searchEmprunt" value="Chercher" style="border-color: black;" class="inputBtnForm">&nbsp;
                 <input type="button" @click="getData" value="Actualiser" style="border-color: black;" class="inputBtnForm">
  
                 <br>
                 <br>
  
                 <div class="containerListTable">
                  <table>
          <tr id="header">
              <th>Client</th>
              <th>Nom & Prenom</th>
              <th>Designation</th>
              <th>Date Emprunt</th>
              <th>Date Retuer</th>
              <th>Qentite</th>
              <th colspan="3">Options</th>
          </tr>
          <tbody :key="e._id" v-for="e in Emprunts">
              <tr>
              <td><img :src="this.apiUrl+'/client/getPhoto/'+e.client[0]._id"  class="comptImgeList"> </td>
              <td>{{e.client[0].nom}} {{e.client[0].prenom}}</td>
              <td>{{e.livre[0].desi}} </td>
              <td>{{e.dateEmprunt}} </td>
              <td>{{e.dateReteur}} </td>
              <td>{{e.qte}} </td>
              <td><ion-icon  class='Icon Icon_delete' @click="deleteEmprunt(e._id)" name='trash-outline'></ion-icon></td>
                  <td><ion-icon class='Icon Icon_update' @click="updateEmprunt(e)" name='pencil-outline'></ion-icon></td>
                  <td><ion-icon class='Icon Icon_details' @click="detailEmpruntBtn(e)" name='information-circle-outline'></ion-icon>  </td></tr>
  
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
          
           <div :key="l._id" v-for="l in  latestAddEmprunt">
              <div class="lastAddedItem">
              <img :src="this.apiUrl+'/client/getPhoto/'+l.client._id"  class="comptImgeList">
              {{l.client.nom}}
              {{l.client.prenom}}
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
      name:"EmpruntComponent",
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
               Emprunts:[],
               submitBtnValue:"Ajouter",
               idEmprunt:"",
               prix:0
               ,
               empruntSearch:{
                livre:{
                        code:"",
                        desi:"",
                        qte:"",
                        prix:"",
                        dateEdition:"",
                        theme:"",
                        auteur:""
                    }
                    ,
                        client:{
                        nom:"",
                        prenom:"",
                        cni:"",
                        email:"",
                        tel:"",
                        sexe:"",
                        adresse:"",
                        priorite:"",
                    },
                        dateEmprunt:"",
                        dateReteur:"",
                        qte:"",
                        prix:""
              } ,               
               detailEmprunt:
                {_id:"",
                        livre:{_id:"",
                        code:"",
                        desi:"",
                        qte:"",
                        prix:"",
                        dateEdition:"",
                        theme:"",
                        auteur:""
                    },
                        client:{_id:"",
                        nom:"",
                        prenom:"",
                        cni:"",
                        email:"",
                        tel:"",
                        sexe:"",
                        adresse:"",
                        priorite:"",
                    },
                        dateEmprunt:"",
                        dateReteur:"",
                        qte:"",
                        prix:""}
            ,
               clientForEmprunt:[],
               livreForEmprunt:[],
               latestAddEmprunt:[],
               empruntData:{
                client:"",
                livre:"",
                dateEmprunt:"",
                dateReteur:"",
                qte:"",
                prix:""
               }         }
      },
      methods:{
        detailEmpruntBtn(data){
         this.switchDetailForm=false;
         this.detailEmprunt._id=data._id;
         this.detailEmprunt.livre.code=data.livre[0].code;
         this.detailEmprunt.livre._id=data.livre[0]._id;
         this.detailEmprunt.livre.desi=data.livre[0].desi;
         this.detailEmprunt.livre.qte=data.livre[0].qte;
         this.detailEmprunt.livre.prix=data.livre[0].prix;
         this.detailEmprunt.livre.dateEdition=data.livre[0].dateEdition;
         this.detailEmprunt.livre.theme=data.livre[0].theme;
         this.detailEmprunt.client._id=data.client[0]._id;
         this.detailEmprunt.client.nom=data.client[0].nom;
         this.detailEmprunt.client.prenom=data.client[0].prenom;
         this.detailEmprunt.client.cni=data.client[0].cni;
         this.detailEmprunt.client.email=data.client[0].email;
         this.detailEmprunt.client.tel=data.client[0].tel;
         this.detailEmprunt.client.sexe=data.client[0].sexe;
         this.detailEmprunt.client.adresse=data.client[0].adresse;
         this.detailEmprunt.client.priorite=data.client[0].priorite;
         this.detailEmprunt.dateEmprunt=data.dateEmprunt;
         this.detailEmprunt.dateReteur=data.dateReteur;
         this.detailEmprunt.qte=data.qte;
         this.detailEmprunt.prix=data.prix;
         console.log(JSON.stringify(this.detailEmprunt));
        },
        searchEmprunt(){
            const {token}=JSON.parse(localStorage.getItem("info"));
         fetch(`${this.apiUrl}/emprunt/search`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify(this.empruntSearch)
         }).then(res=>res.json()).then(res=>{
            if(res.emprunts)
            this.Emprunts=res.emprunts;
            else
            console.log(res);
            console.log(res);
         }).catch(err=>console.log(err));
        },
        deleteEmprunt(id){
            const {token}=JSON.parse(localStorage.getItem("info"));
            if(window.confirm("voulez vous vraiment supprimer cet emprunt !!"))
            fetch(`${this.apiUrl}/emprunt/deleteEmprunt/${id}`,{
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
                console.log(res.err);
                 console.log(res);
                 
            }).catch(err=>console.log(err));
        },
        hideDetailForm(){
            this.switchDetailForm=true;
        },
        showFormAdd(){
           this.switchForm=false;
        },
        updateEmprunt(data){
            this.switchForm=false;
            this.submitBtnValue="Moddifier";
            this.empruntData.client=data.client[0]._id;
            this.empruntData.livre=data.livre[0]._id;
            this.empruntData.dateEmprunt=data.dateEmprunt;
            this.empruntData.dateReteur=data.dateReteur;
            this.empruntData.qte=data.qte;
            this.empruntData.prix=data.prix;
            this.idEmprunt=data._id;
            this.prix=this.livreForEmprunt.filter(l=>l._id===data.livre[0]._id)[0].prix;

        },
        hideForm(){
            this.switchForm=true;
            this.submitBtnValue="Ajouter";
            this.empruntData.client="";
            this.empruntData.livre="";
            this.empruntData.dateEmprunt="";
            this.empruntData.dateReteur="";
            this.empruntData.qte="";
            this.empruntData.prix="";
        },
        switchMenuBtn(){
            this.switchMenu=!this.switchMenu;
        },
        switchPage(url){
            this.$router.push(url);
            this.switchMenu=!this.switchMenu;
        },
        handleChnagePrix(e){
            if(e.target.value!=""){
                this.prix=this.livreForEmprunt.filter(l=>l._id===e.target.value)[0].prix;
            }else{
                this.empruntData.qte="0";
                this.prix="0";
                this.empruntData.prix="0";
            }
        },
        handlChangeQte(e){
//            alert(e.target.value);
            if(isFinite(e.target.value)==true && e.target.value!=""){
                this.empruntData.prix=this.prix*e.target.value;
            }else{
                this.empruntData.prix="0";
            }
         },
        submitBtn(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            if(this.submitBtnValue=="Ajouter"){

                fetch(`${this.apiUrl}/emprunt/addEmprunt`,{
                    method:"POST",
                    headers:{
                        "Accept":"application/json",
                        "Content-Type":"application/json",
                        "Authorization":`Bearer ${token}`
                    },
                    body:JSON.stringify(this.empruntData)
                }).then(res=>res.json()).then(res=>{
                    if(res.msg){
                        this.$toast.success(res.msg);
                        this.hideForm();
                        this.getData();
                    }
                    if(res.err)
                    this.$toast.warning(res.err);
                    else
                    console.log(res);
                }).catch(err=>console.log(err));
            }else{
                fetch(`${this.apiUrl}/emprunt/updateEmprunt/${this.idEmprunt}`,{
                  method:"POST",
                  headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                  },
                  body:JSON.stringify(this.empruntData)
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
        getLivreEmprunt(){
            const {token}=JSON.parse(localStorage.getItem("info"));
             fetch(`${this.apiUrl}/emprunt/getLivre`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
             }).then(res=>res.json()).then(res=>{
                if(res.l)
                 this.livreForEmprunt=res.l;
                 else
                 console.log(res);
             })
        },
        getClientForEmprunt(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            fetch(`${this.apiUrl}/emprunt/getClient`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json()).then(res=>{
                 if(res.l)
                 this.clientForEmprunt=res.l;
                 else
                 console.log(res);
            }).catch(err=>console.log(err));
        },
        getData(){
          const {token}=JSON.parse(localStorage.getItem("info"));
          fetch(`${this.apiUrl}/emprunt/getData/${this.offset}`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
          }).then(res=>res.json()).then(res=>{
            if(res.emprunts)
            this.Emprunts=res.emprunts;
            else
            console.log(res);
            this.nbrEmpruntClient();
         this.getNbrEmpruntLivre();

          }).catch(err=>console.log(err));
        },
        nbrEmpruntClient(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            fetch(`${this.apiUrl}/emprunt/getNbreEmpruntClient`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json()).then(res=>{
                const clients=[];
                const counts=[];
               for(const data of res.c){
                counts.push(data.count);
                clients.push(data.client[0].nom+" "+data.client[0].prenom)
               }
               const ctx1 = document.getElementById('myChart1');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: clients,
        datasets: [{
            label: 'Nombre d emprunt par Client',
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
        getNbrEmpruntLivre(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            fetch(`${this.apiUrl}/emprunt/getNbrEmpruntLivre`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json()).then(res=>{
                const livres=[];
                const counts=[];
               for(const data of res.l){
                counts.push(data.count);
                livres.push(data.livre[0].desi)
               }
               const ctx1 = document.getElementById('myChart2');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: livres,
        datasets: [{
            label: 'Nombre d emprunt par livre',
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


            }).catch(err=>{
              console.log(err);
            })
        },
        getLatestAdded(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            fetch(`${this.apiUrl}/emprunt/getLatestAdded`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json()).then(res=>{
                if(res.l)
                this.latestAddEmprunt=res.l;
                else
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        }
        
      },
      
      created(){
        this.getClientForEmprunt();
        this.getLivreEmprunt();
        this.getData();
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
      height: 330vh;
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