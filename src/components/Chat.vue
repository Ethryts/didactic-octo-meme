<script setup lang="ts">
import { reactive } from 'vue';

type Message = {
	User: string,
	message: string,
}


function SendChat() {
	state.textValue += state.chatMessage + "\n"
}


let tempName = ""


function sendUserName(){
	let inputBox: HTMLInputElement|null = document.querySelector("#userName-input") 

	if (inputBox != null) {
		state.currentChaterName =  inputBox.value
		if (inputBox.value != "") {
			state.chatEnabled = true
			state.userProptEnabled = false
		}
	}
	console.log(state.currentChaterName)
}

function getWelcomeMessage(){
	return `Welcome ${state.currentChaterName}, please enter a message`
}

const state = reactive({
	currentChaterName: "",
	textValue: "",
	chatMessage: "",
	chatEnabled: false,
	userProptEnabled: true,
	currentMessage:<Message>{
		User: "" ,
		message: "",
	},
	messageLog: <Array<Message>>[]
})


</script>


<template>


	<div class="col-12"> 

		<div v-bind:hidden="!state.userProptEnabled" id="chat">

			<div class="input-group" >
				<input v-model="tempName" id="userName-input" class="chat-text-input form-control" type="text">
				<button @click="sendUserName" class="btn btn-outline-primary" type="button">Send!</button>
			</div>

		</div>

		<div v-bind:hidden="!state.chatEnabled" id="chat">
			<textarea class="chat-text-area" name="" id="" cols="30" rows="10" readonly> {{state.textValue}}</textarea>
			<div class="input-group" >
				<input v-model="state.chatMessage" id="chat-input" class="chat-text-input form-control" type="text" v-bind:placeholder='getWelcomeMessage()'>
				<button @click="SendChat" class="btn btn-outline-primary" type="button">Send!</button>
			</div>

		</div>
	</div>


</template>



<style>

.chat-text-area{
	width: 100%;
	resize: none;
}
.chat-text-input{
	width: 100%;

}


</style>


