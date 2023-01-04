<template>
<div class="bgc">
	<div class="box">
		<div class="left-card" >
			<div class="ai"> AI Chat</div>	
			<div class="artificial"> Artificial Intelligence Driving</div>
			<div class="welcome">Welcome back! Please login to your account</div>
			<input type="text" placeholder="Account" v-model="loginForm.username">
			<input type="password" placeholder="Passward" v-model="loginForm.password">
			<button class="login" @click="submitForm(loginForm)"> Login</button>
		</div>
		<div class="right-card">

			<img src="../assets/bike.png" alt="">

		</div>
	</div>


</div>
</template>

<script setup>
import {loginApi} from "@/http/api"
import { useRouter } from "vue-router"
import { reactive, ref } from "@vue/reactivity"

const loginForm = reactive({
  username: "admin",
  password: "123456",
});
const router = useRouter()


const submitForm = (loginForm) => {
    // if (valid) {
    //   // console.log("submit!");
    //   loginApi(loginForm).then(res=>{
    //     console.log(res);
    //     localStorage.setItem('token',res.data.token)
    //     router.push('./home')
    //     })    
    // }
	console.log(loginForm);
	router.push('/home')
  
};


</script>

<style lang="scss">
.bgc{
	background-color: #e5e5e5;
	height: 100vh;
	padding:3% 20% ;
}

.box{
	height: 85%;
	width: 100%;
	display: flex;
	
	
}
.left-card{
	box-sizing: border-box;
	display: inline-block;
	height: 100%;
	width: 48%;
	background-color:#ffffff;
	padding-left: 50px;
	padding-top: 50px;
	.ai{
		margin-bottom: 50px;
		color: #3751FE;
		font-size: 24px;
		font-weight: 550;
	}
	.artificial{
		margin-bottom: 50px;
		color: #3751FE;
		font-size: 24px;
		font-weight:  550;
	}
	.welcome{
		margin-bottom: 50px;
		color: rgba($color: #000000, $alpha: 0.6);
		font-size: 12px;
		font-weight: 400;
	}
	input{
		display: block;
		margin: 5px 0;
		width: 90%;
		height: 38px;
	}
	.login{
		margin-top:20px ;
		margin-left: 71%;
		width:80px;
		height: 40px;
		background-color: #3751FE;
		border-style: none;
		border-radius: 3px;
		color: #f4f4f4;
		font-weight: 550;
	}

}
.right-card{
	position: relative;
	display: inline-block;
	height: 100%;
	width: 52%;
	background-color: #f4f4f4;
	img{
		width: 100%;
		height: 40%;
		position: absolute;
		top: 22%;
		left: 0;
	}
}


</style>