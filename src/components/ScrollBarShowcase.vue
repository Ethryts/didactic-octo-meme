<script setup lang="ts">
var scrollPos = window.scrollY;
//var rect: DOMRect = 
//var scrollBoxRect: DOMRect = document.querySelector('.scrollBox')?.getBoundingClientRect();
var popupPos = document.querySelector('.popup')?.getBoundingClientRect().top;


let distanceFromTop = 10;
let distanceTraveledThreshhold = 100;

function getBackgroundColour(){
	let scrollBoxRect: DOMRect = document.querySelector('.scrollBox')!.getBoundingClientRect();
	let percentage:number =  Math.min( Math.max((((scrollPos - scrollBoxRect.top)/ scrollBoxRect.bottom - scrollBoxRect.top) / scrollBoxRect.bottom),0),1) 
	let color = `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(${255 - 255 * percentage},255,255,1) 100%)`
	let scrollBox: HTMLElement |null = document.querySelector('.scrollBox')
	if (scrollBox != null) scrollBox.style.background = color;
	
	console.log(color)
	return color
}

function scroll(){

	scrollPos = window.scrollY	
	popupPos = document.querySelector('.popup')!.getBoundingClientRect().top
	getBackgroundColour()
}

function setPopupPosition(){

	if (popupPos > distanceTraveledThreshhold)
	{

	}
}


window.addEventListener("scroll",scroll)

</script>

<template>
	<!-- 
		I want there to be a little box that pops up and says that this was all made by me :Ethan Hrytsak
		I then want this to swing back, blur and disapear above the screen
	-->
	<div class="scrollBox
		justify-content-center row ">
		<div class="popup 
			text-center
			bg-light col-4 
			rounded border border-dark border-3"
		>
			<h1 class="display-5">Made Entirely by</h1>
			<p class="display-3" >Ethan Hrytsak</p>
		</div>
	</div>
	
</template>


<style>

.scrollBox{
	height: 200vh;
	background: v-bind('getBackgroundColour()'); 
	
}

.popup{
	position: relative;
	height: 250px;
	top: 100vh;
	transform: translateY(-50%)
}


</style>

