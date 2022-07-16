<script setup lang="ts">
import TechItemVue from "./components/TechItem.vue";
import IconVue from "./components/icons/IconVue.vue";
import IconBootStrap from "./components/icons/IconBootstrap.vue";
</script>

<template>
  <div class="d-md-flex" id="techHeader">
    <div
      class="col-md-6 col-12 flex-md-equal p-3 p-md-5 m-md-3 bg-dark text-white rounded"
    >
      This is the text
    </div>
    <div
      class="col-md-6 col-12 col-xs-12 flex-md-equal p-3 p-md-5 m-md-3 bg-light text-dark rounded"
    >
      <div class="col-md-4">
        <TechItemVue>
          <template v-slot:icon>
            <IconBootStrap />
          </template>
          <template v-slot:text>
            This website was built with The front end bootstrap 5 framwork
          </template>
        </TechItemVue>

        <TechItemVue>
          <template v-slot:icon>
            <IconVue />
          </template>
          <template v-slot:text> The reactive framework Vue3 </template>
        </TechItemVue>

        <TechItemVue>
          <template v-slot:icon> <i class="bi bi-node-plus"></i>> </template>
          <template v-slot:text> Node.js for the backend </template>
        </TechItemVue>
      </div>
    </div>
  </div>
</template>
