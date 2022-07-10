<script setup lang="ts">

let scrollPos



onScroll()
function onScroll(){
	scrollPos = window.scrollY
	let circles: NodeListOf<HTMLElement> = document.querySelectorAll('.circle')
	for(let circle of circles ){

		if (circle != null && !circle.classList.contains('floatBalls') && scrollPos > 0) {
			circle?.classList.add("floatBalls")
			circle.style['animationDuration'] = `${getBallSpeed()}s`;

		}
	}


}

window.addEventListener("scroll", onScroll)
document.addEventListener("focus",onScroll)
window.addEventListener("",onScroll)



function getBallSpeed(){
	return (Math.random() * 10)+10
}



let ballVariables ={
	y: `${-150}px`,
	speed: `${getBallSpeed() }s`,
	start: `${150}px`,
}



const circleColours = {
	pink: '#d4afb9'
}

</script>

<template>

	<div id="homeHeader" class="position-relative overflow-hidden overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style="z-index: -2;">
		<div class="">

			<h1>asdfsad Welcome</h1>
			This is a personal site for personal reasons, mostly to serve as a playground for learning new web technologies
		</div>

		<div class="circle d-block"> </div>
		<div class="circle d-block" style="left: 120px"> </div>
		<div class="circle d-block" style="left: 210px"> </div>
		<div class="circle d-block" style="left: 320px"> </div>
		<div class="circle d-block" style="left: 500px"> </div>
		<div class="circle d-block" style="left: 640px"> </div>
		<div class="circle d-block" style="left: 800px"> </div>
	</div>
</template>
<style>

.circle{
	position: absolute;
	top:v-bind('ballVariables.start');
	z-index: -1;
	border-radius: 50%;
	width: 4em;
	height: 4em;
	background-color:v-bind('circleColours.pink');

}

.floatBalls{
	animation: floatAway forwards ease-in;
	animation-duration:5s; 
}

 @keyframes floatAway{
	0%{top:v-bind('ballVariables.start')}
     100%{top:v-bind('ballVariables.y')}
}


 @keyframes floatIn{
	0%{top: 200px}
     100%{top:v-bind('ballVariables.start')}
}



</style>

