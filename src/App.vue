<script setup lang="ts">
import {ref} from 'vue'
import NavBar from './components/NavBar.vue'
import TheWelcome from './components/TheWelcome.vue'
import TechVue from './Tech.vue';
import ScrollBarShowcase from './components/ScrollBarShowcase.vue';
import spacer  from './components/spacer.vue';

Vue.prototype.

</script>

<template>

	<NavBar />

	<main class="scrollspy homeHeader" data-bs-spy="scroll" data-bt-target="#navbar" >

		<TheWelcome  />
		<spacer />
		<TechVue />
		<spacer />
		<ScrollBarShowcase />

		<div class="d-md-flex">

			<div class="col-md-4 col-12 flex-md  p-3 p-md-5 m-md-3 rounded
				bg-light">
				Main Point
			</div>
			<div class="col-md-4 col-12 flex-md p-3 p-md-5 m-md-3 rounded
				bg-light">

				Secondary Point
			</div>
			<div class="col-md-4 col-12 flex-md p-3 p-md-5 m-md-3 rounded
				bg-light">
				Tertiary point
			</div>
		</div>
	</main>
</template>

<style></style>
