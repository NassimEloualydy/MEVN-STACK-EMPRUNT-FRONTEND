<template>
  <div class="containerBodyMenu">
    <!-- detailCard -->
    <div :class="switchDetailForm?'detailForm':'showDetailForm'">
    <center>
        <br>
        <h3>Detail Client</h3>
        <br>
        <div class="containerDitailCard">

            <img :src="clientDetailClient.photo"  class="imgClientDetail">
            <br>
            Nassim Eloualydy
            <br>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Cni :</div>
                <div class="valueInforDetial">{{clientDetailClient.cni}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Nom :</div>
                <div class="valueInforDetial">{{clientDetailClient.nom}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Prenom :</div>
                <div class="valueInforDetial">{{clientDetailClient.prenom}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Email :</div>
                <div class="valueInforDetial">{{clientDetailClient.email}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Telephone :</div>
                <div class="valueInforDetial">{{clientDetailClient.tel}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Sexe :</div>
                <div class="valueInforDetial">{{clientDetailClient.sexe}}</div>
            </div>
            <br>
            <div class="containerInfoDetail">
                <div class="labelInforDetial">Priorite :</div>
                <div class="valueInforDetial">{{clientDetailClient.priorite}}</div>
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
        <h3>Formulaire de Client</h3>
        <br>
        <div class="containerInputTextForm">
            <div>Photo :</div>
            <input type="file" @change="handleChange" name="photo">
        </div>
        <br>
        <div class="containerInputTextForm">
            <div>Cni :</div>
            <input type="text" name="cni" v-model="clientData.cni" @change="handleChange" class="inputForm">
        </div>
        <br>
        <div class="containerInputTextForm">
            <div>Nom :</div>
            <input type="text" name="nom" v-model="clientData.nom" @change="handleChange" class="inputForm">
        </div>
        <br>
        <div class="containerInputTextForm">
            <div>Prenom :</div>
            <input type="text" name="prenom" v-model="clientData.prenom" @change="handleChange" class="inputForm">
        </div>
        <br>
        <div class="containerInputTextForm">
            <div>Email :</div>
            <input type="text" name="email" v-model="clientData.email" @change="handleChange" class="inputForm">
        </div>
        <br>
        <div class="containerInputTextForm">
            <div>Telephone :</div>
            <input type="text" name="tel" v-model="clientData.tel" @change="handleChange" class="inputForm">
        </div>
        <br>
        <div class="containerInputTextForm">
            <div>Adresse :</div>
            <input name="adresse" v-model="clientData.adresse" @change="handleChange" type="text" class="inputForm">
        </div>
        <br>
        <div class="containerInputTextForm">
            <div>Sexe :</div>
            <!-- <input name="adresse" type="text" class="inputForm"> -->
           <select name="sexe" v-model="clientData.sexe" @change="handleChange" class="inputForm">
            <option value="">Choisire le sexe</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
           </select>
        </div>
        <br>
        <div class="containerInputTextForm">
            <div>Priorité :</div>
            <select name="priorite" v-model="clientData.priorite" @change="handleChange" class="inputForm">
            <option value="">Choisire la priorité</option>
            <option value="Heigh">Heigh</option>
            <option value="Mediem">Mediem</option>
            <option value="Low">Low</option>
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
  <h3 class="titleBody">Gestion des Client</h3>
<br>
        <center>
            <ion-icon @click="switchMenuBtn" class="btnMenu" name="menu-outline"></ion-icon>
            <div class="charts">
              <div class="ontainerCharts">
                <div class="chartItem">
                    <br>
                    <br>
                    <canvas id="myChart1" ></canvas>

                </div>
                <div class="chartItem">
                    <br>
                    <br>
                    <br>
                    <div class="containerCartCharts">
                        <div class="itemChartCart">
                            <div class="infoitemChartCart">&nbsp;&nbsp;&nbsp; Nombre des Homme : {{this.nbrFemme}} </div>
                            <ion-icon class="iconinfoitemChartCart"  name="male-outline"></ion-icon>
                        </div>
                        <br>
                        <br>
                        <div class="itemChartCart male">
                            <div class="infoitemChartCart"> &nbsp;&nbsp;&nbsp;Nombre des Homme : {{this.nbrHomme}}</div>
                            <ion-icon class="iconinfoitemChartCart" name="female-outline"></ion-icon>
                        </div>

                    </div>

                </div>
              </div>
            </div>
            <br>
            <div class="listTable">
                <div class="list">
                    <input type="button" value="Noveau" @click="showFormAdd" class="inputBtnAdd">
               <h3 class="titleList">Liste des client</h3>
               <br>
               <br>
               <br>
               <div class="containerSearchInput">
                        <input type="text" placeholder="CNI" v-model="clientSearch.cni" @change="handlChangeSearch" class="inputSearch"><br><br>
                        <input type="text" placeholder="Nom" v-model="clientSearch.nom" class="inputSearch"><br><br>
                        <input type="text" placeholder="Prenom" v-model="clientSearch.prenom" class="inputSearch"><br><br>
               </div>
               <div class="containerSearchInput">
                        <input type="text" placeholder="Email" v-model="clientSearch.email" class="inputSearch"><br><br>
                        <input type="text" placeholder="Telephone" v-model="clientSearch.tel" class="inputSearch"><br><br>
                        <input type="text" placeholder="Adresse" v-model="clientSearch.adresse" class="inputSearch"><br><br>
               </div>
               <div class="containerSearchInput">
                        <input type="text"  placeholder="Priorite" v-model="clientSearch.priorite" class="inputSearch"><br><br>
                        <input type="text"  placeholder="Sexe" v-model="clientSearch.sexe" class="inputSearch"><br><br>
                        <input style="visibility: hidden;" type="text" class="inputSearch"><br><br>
               </div>

               <br>
               <input type="button" @click="searchClient" value="Chercher" style="border-color: black;" class="inputBtnForm">&nbsp;
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
            <th>Email</th>
            <th>Sexe</th>
            <th colspan="3">Options</th>
        </tr>
        <tbody :key="c.id" v-for="c in Clients">
            <tr>
            <td><img :src="this.apiUrl+'/client/getPhoto/'+c._id"  class="comptImgeList"> </td>
            <td>{{c.cni}} </td>
            <td>{{c.nom}} </td>
            <td>{{c.prenom}} </td>
            <td>{{c.email}} </td>
            <td>{{c.sexe}} </td>
            <td><ion-icon  class='Icon Icon_delete' @click="deleteClient(c._id)" name='trash-outline'></ion-icon></td>
                <td><ion-icon class='Icon Icon_update' @click="updateClient(c)" name='pencil-outline'></ion-icon></td>
                <td><ion-icon class='Icon Icon_details' @click="detailClient(c)" name='information-circle-outline'></ion-icon>  </td></tr>

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

        <div :key="c._id" v-for="c in  latestAddClient">
            <div class="lastAddedItem">
            <img :src="this.apiUrl+'/client/getPhoto/'+c._id"  class="comptImgeList">
            {{c.nom}}
            {{c.prenom}}
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
    name:"ClientComponent",
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
             Clients:[],
             submitBtnValue:"Ajouter",
             idClient:"",
             nbrHomme:0,
             nbrFemme:0,
             clientDetailClient:{
                cni:'',
                nom:'',
                prenom:'',
                email:'',
                tel:'',
                adresse:'',
                sexe:'',
                priorite:'',
                photo:''
             },
             latestAddClient:[],
             clientData:{
                cni:'',
                nom:'',
                prenom:'',
                email:'',
                tel:'',
                adresse:'',
                sexe:'',
                priorite:''
             },
             clientSearch:{
                cni:'',
                nom:'',
                prenom:'',
                email:'',
                tel:'',
                adresse:'',
                sexe:'',
                priorite:''

             },
             clientDataF:new FormData()
        }
    },
    methods:{
        searchClient(){
            const {token}=JSON.parse(localStorage.getItem("info"));
           fetch(`${this.apiUrl}/client/searchClient`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify(this.clientSearch)
           }).then(res=>res.json()).then(res=>{
            if(res.clients)
                this.Clients=res.clients;
                else
                console.log(res);

            }).catch(err=>console.log(err));
        },
        hideDetailForm(){
            this.switchDetailForm=true;
        },
        detailClient(c){
            this.switchDetailForm=false;
            this.clientDetailClient.cni=c.cni;
            this.clientDetailClient.nom=c.nom;
            this.clientDetailClient.prenom=c.prenom;
            this.clientDetailClient.email=c.email;
            this.clientDetailClient.tel=c.tel;
            this.clientDetailClient.adresse=c.adresse;
            this.clientDetailClient.sexe=c.sexe;
            this.clientDetailClient.priorite=c.priorite;
            this.clientDetailClient.photo=this.apiUrl+'/client/getPhoto/'+c._id;
        },
        updateClient(c){
            this.switchForm=false;
            this.clientData.cni=c.cni;
            this.clientData.nom=c.nom;
            this.clientData.prenom=c.prenom;
            this.clientData.email=c.email;
            this.clientData.tel=c.tel;
            this.clientData.adresse=c.adresse;
            this.clientData.sexe=c.sexe;
            this.clientData.priorite=c.priorite;
            this.idClient=c._id;
            this.submitBtnValue="Moddiffier"
            this.clientDataF.set("nom",c.nom);
            this.clientDataF.set("prenom",c.prenom);
            this.clientDataF.set("email",c.email);
            this.clientDataF.set("tel",c.tel);
            this.clientDataF.set("adresse",c.adresse);
            this.clientDataF.set("sexe",c.sexe);
            this.clientDataF.set("priorite",c.priorite);
            this.clientDataF.set("_id",c._id);
            this.clientDataF.set("cni",c.cni);
        },
        deleteClient(id){
            const {token}=JSON.parse(localStorage.getItem("info"));
            if(window.confirm("Voulez vous vraiment supprimer cet client ?"))
            fetch(`${this.apiUrl}/client/deleteClient/${id}`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json()).then(res=>{
                if(res.msg)
                 {
                    this.$toast.success(res.msg);
                    this.hideForm();
                    this.getData();

                }else
                 console.log(res);
            }).catch(err=>console.log(err));
        },
        submitBtn(){
            // fetch()
            const {token}=JSON.parse(localStorage.getItem("info"));
            token;
            if(this.submitBtnValue=="Ajouter"){
                fetch(`${this.apiUrl}/client/addClient`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Authorization":`Bearer ${token}`
                },
                body:this.clientDataF
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
            })

            }else{
                fetch(`${this.apiUrl}/client/updateClient/${this.idClient}`,{
                 method:"POST",
                 headers:{
                    "Accept":"application/json",
                    "Authorization":`Bearer ${token}`
                 },
                 body:this.clientDataF
                }).then(res=>res.json()).then(res=>{
                    if(res.err){
                        this.$toast.warning(res.err)
                    }
                    if(res.msg){
                        this.$toast.success(res.msg);
                        this.hideForm();
                    this.getData();

                    }else{
                        console.log(res);
                    }
                });
            }
        },
        handleChange(e){
            const value=e.target.name=="photo"?e.target.files[0]:e.target.value;
            this.clientDataF.set(e.target.name,value);
    
         },
        showFormAdd(){
           this.switchForm=false;
        },
        hideForm(){
            this.switchForm=true;
            this.clientData.cni="";
            this.clientData.nom="";
            this.clientData.prenom="";
            this.clientData.email="";
            this.clientData.tel="";
            this.clientData.adresse="";
            this.clientData.sexe="";
            this.clientData.priorite='';
            this.submitBtnValue="Ajouter"
        },
        switchMenuBtn(){
            this.switchMenu=!this.switchMenu;
        },
        switchPage(url){
            this.$router.push(url);
            this.switchMenu=!this.switchMenu;
        },
        getData(){
            const {token}=JSON.parse(localStorage.getItem("info"));

            fetch(`${this.apiUrl}/client/getClients/${this.offset}`,{
               method:"POST",
               headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`

               },

            }).then(res=>res.json()).then(res=>{
                if(res.clients){
                    
                    this.Clients=res.clients;
                    this.getNbrClientByPriority();
                    for(const data of res.clients){
                        if(data.sexe=="Homme")
                        this.nbrHomme=this.nbrHomme+1;
                        else
                        this.nbrFemme=this.nbrFemme+1;
                    }


                }
                else
                console.log(res);

            }).catch(err=>console.log(err));
        },
        getNbrClientByPriority(){
            const {token}=JSON.parse(localStorage.getItem("info"));
            fetch(`${this.apiUrl}/client/getNbrClientByPriority`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json()).then(res=>{
                const priorite=[];
                const counts=[];
                for(const data of res.l){
                    priorite.push(data._id.priorite)   
                    counts.push(data.count);
                }
                const ctx1 = document.getElementById('myChart1');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: priorite,
        datasets: [{
            label: 'Nombre de client par prioriter',
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

                // console.log(res);
            }).catch(err=>console.log(err));
        },
            getLatestAdded(){
        const {token}=JSON.parse(localStorage.getItem("info"));
        fetch(`${this.apiUrl}/client/getLatest`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json()).then(res=>{
            if(res.c){
                this.latestAddClient=res.c;
            }else
            console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    }
    },
    created(){
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