<template>
    <center>
        <br>
        <br>
        <h3>Menu</h3>
        <br>
        <img :src="this.apiUrl+'/admin/getPhoto/'+this.dataAdmin._id" class="comptImage" alt="">
        <br>
        {{this.dataAdmin.nom}} {{this.dataAdmin.prenom}} 
        <br>
        <br>
        <div @click="switchPage('/client')" class="menuButton">Client</div><br>
        <div @click="switchPage('/auteur')" class="menuButton">Auteur</div><br>
        <div @click="switchPage('/livre')" class="menuButton">Livre</div><br>
        <div @click="switchPage('/emprunt')" class="menuButton">Emprunt</div><br>
        <div @click="switchPage('/compt')" class="menuButton">Votre Compt</div><br>
        <div @click="switchPage('/')" class="menuButton">Quitter</div><br>
        
    </center>
</template>
<script>

 export default {
    name:"MenuComponent",
    props:{
        changeCompt:()=>{
            this.getAdmin();
        }
    },
    data:function(){
  return {
    apiUrl:"http://localhost:3000/api",
    dataAdmin:JSON.parse(localStorage.getItem("info"))
  }
    },
    methods:{
        switchPage(url){
            if(url=="/"){
                localStorage.clear("info");
            }
            this.$emit('switchPage',url);
            this.dataAdmin=JSON.parse(localStorage.getItem("info"));
        },
        getAdmin(){
            console.log("ff");
        }
    },
    created(){
        this.getAdmin();
    }
    
}
</script>
<style scoped>
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

</style>