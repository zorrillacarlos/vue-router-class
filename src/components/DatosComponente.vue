<template>
  <div class="container">
    <ul v-for="elemento in userData" :key="elemento.id">
      <li>{{ elemento.nombre }}</li>
    </ul>
    <button class="btn btn-primary mr-5" @click="anterior">Anterior</button>
  </div>
</template>

<script>
// https://www.youtube.com/watch?v=K5NarzCmLWM
// https://router.vuejs.org/guide/essentials/nested-routes.html
export default {
  data() {
    return {
      userData: [],
    };
  },
  methods:{
    anterior() {
      this.$router.go(-1);
    },
  },

  created() {
    this.userData = this.$route.params.datos;
  },
};
</script>

<style></style>
