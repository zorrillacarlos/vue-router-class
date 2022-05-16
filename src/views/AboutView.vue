<template>
    <div class="about container">
    <h1>This is an about page</h1><br>
    <button class="btn btn-danger" @click="irHome">Enviar al Home</button>
  </div>
</template>

<script>
export default {
methods: {
    irHome() {
      this.$router.push("/");
    }
  },
}
</script>

<style>

</style>