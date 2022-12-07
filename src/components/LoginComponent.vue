<template>
    <div class="conatianerLogin">
        <div class="itemLogin">
            <center>
                <br>
                <br>
                <h1>Bonjour Dans Nous Site Web</h1>
            </center>
        </div>
        <div class="itemLogin">
            <center>
                <div :class="switchInscriptionCnx?'continerInscrCnx':'showContinerInscrCnx'">
                    <div class="cnx">
                        <center>
                            <br>
                            <h3>Page De Connxion</h3>
                            <br>
                            <br>
                                    <div class="containerInputForm">
                                       <div>Email :</div> 
                                       <input type="text" v-model="adminCnx.email" placeholder="Email" class="inputText">
                                    </div>
                            <br>
                            <div class="containerInputForm">
                                       <div>Mot De Passe :</div> 
                                       <input type="text" v-model="adminCnx.pw" placeholder="Mot de passe" class="inputText">
                                    </div>
                                    <br>
                                    <input type="button" value="Connexion" @click="cnxAdmin" class="btnInput">&nbsp;
                                    <input type="button" value="Inscrire" @click="swichCnx" class="btnInput">

                            <br>

                        </center>
                    </div>
                    <div class="inscription">
                        <center>
                            <br>
                            <h3>Page D'inscription</h3>
                            <br>
                            <br>
                            <div class="containerInputForm">
                                       <div>Photo :</div> 
                                       <input type="file"  name="photo" @change="handleChange" class="inputText">
                                    </div>
                            <br>

                            <div class="containerInputForm">
                                       <div>Nom :</div> 
                                       <input type="text" v-model="adminInscrir.nom" @change="handleChange" placeholder="Nom" name="nom" class="inputText">
                                    </div>
                            <br>
                            <div class="containerInputForm">
                                       <div>Prenom :</div> 
                                       <input type="text" v-model="adminInscrir.prenom" @change="handleChange" placeholder="Prenom" name="prenom" class="inputText">
                                    </div>
                            <br>

                            <div class="containerInputForm">
                                       <div>Email :</div> 
                                       <input type="text" placeholder="Email"  v-model="adminInscrir.email" @change="handleChange" name="email" class="inputText">
                                    </div>
                            <br>
                            <div class="containerInputForm">
                                       <div>Mot De Passe :</div> 
                                       <input type="text" v-model="adminInscrir.pw" placeholder="Mot de passe" @change="handleChange" name="pw" class="inputText">
                                    </div>
                                    <br>
                                    <input type="button" value="Inscrire" @click="inscrireAdmin" class="btnInput">&nbsp;
                                    <input type="button" value="Connexion" @click="swichCnx" class="btnInput">

                            <br>

                        </center>
                    </div>

                </div>
            </center>
        </div>
    </div>
</template>
<script>
export default {
    name:"LoginComponent",
    data:function(){
        return {
            switchInscriptionCnx:true,
            apiUrl:"http://localhost:3000/api",
            adminCnx:{
                email:"",
                pw:""
            },
            adminInscrir:{
                nom:"",
                prenom:"",
                email:"",
                pw:""
            },
            adminInscrirF:new FormData()
        }
    },
    methods:{
        cnxAdmin(){
            fetch(`${this.apiUrl}/admin/cnx`,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(this.adminCnx)
            }).then(res=>res.json()).then(res=>{
                if(res.err){
                    this.$toast.warning(res.err);
                }
        else{
           localStorage.setItem("info",JSON.stringify(res));
                    this.$router.push('/client');
                    this.$toast.info("Bonjour "+res.nom+" "+res.prenom);
}
            }).catch(err=>console.log(err));
        },
        handleChange(e){
            var value=e.target.name=="photo"?e.target.files[0]:e.target.value;
            this.adminInscrirF.set(e.target.name,value);
        },
        inscrireAdmin(){
            fetch(`${this.apiUrl}/admin/inscrire`,{
                method:"POST",
                headers:{
                    "Accept":"application/json"
                },
                body:this.adminInscrirF
            }).then(res=>res.json()).then(res=>{
                if(res.err){
                    this.$toast.warning(res.err);
                }
                if(res.msg){
                    this.$toast.success(res.msg);
                    this.swichCnx();
                    this.adminInscrir.nom="";
                    this.adminInscrir.prenom="";
                    this.adminInscrir.email="";
                    this.adminInscrir.pw="";
                }else
                console.log(res);
                

            }).catch((err)=>{
                console.log(err);
            })
             
        },
        swichCnx(){
            this.switchInscriptionCnx=!this.switchInscriptionCnx;
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
*{
    font-family: 'Nunito', sans-serif;
   transition: .3s;
}
.btnInput{
    padding: 5px;
    border: 1px solid rgb(26, 24, 24);
    color: white;
    background-color: rgb(26, 24, 24);
    border-radius: 5px;
}
.btnInput:hover{
    padding: 5px;
    border: 1px solid rgb(26, 24, 24);
    background-color: white;
    color: rgb(26, 24, 24);
    
}
.conatianerLogin{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
   overflow: hidden;   
   position: relative;
}

.itemLogin{
    height: 100vh;
    width: 50%;
        position: relative;
        overflow: hidden;
}

.itemLogin:nth-child(1){
    background-color: rgb(26, 24, 24);
    color: white;
    background: linear-gradient(rgba(0, 0, 0,0.5),rgb(26, 24, 24)),url("../assets/images/loginImage.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.continerInscrCnx{
    position: absolute;
    width: 200%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    left: 0;
    transition:.3s;
}
.showContinerInscrCnx{
    position: absolute;
    width: 200%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    left: -100%;
    transition:.3s;

}
.cnx,.inscription{
    width: 50%;
    height: 100vh;
}
.containerInputForm{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.inputText{
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
}
input[type="file"]{
    border-color: white;
}

@media(max-width:1000px){
    .containerInputForm{
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

    .conatianerLogin{
    width: 100%;
    height: 100vh;
    display: block;
    justify-content: center;
    align-items: center;
   overflow: hidden;   
}
.itemLogin:nth-child(2){
    height: 100vh;
    width: 100%;
        
}
.itemLogin:nth-child(1){
    background-color: rgb(26, 24, 24);
    color: white;
    background: linear-gradient(rgba(0, 0, 0,0.5),rgb(26, 24, 24)),url("../assets/images/loginImage.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 0%;
    visibility: hidden;
    display: none;
}
    
}
</style>