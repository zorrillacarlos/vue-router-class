<template>
  <div class="container">

    <h4>Vista de Componentes Dinamicos {{ $route.params.id }}</h4><br>

    <ul v-for="item in listaProductos" :key="item.id" class="d-flex">
      <li class="mr-5">{{ item.nombre }} - {{ item.precio }} $</li>
      <button @click="shareData(item)" class="btn btn-primary">Ver Detalle</button>
    </ul>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      listaProductos: [
        {
          id: 1,
          nombre: "Patata",
          precio: 1,
          imagen: "patata.jpg",
        },
        {
          id: 2,
          nombre: "Cebolla",
          precio: 1.2,
          imagen: "cebolla.jpg",
        },
        {
          id: 3,
          nombre: "Calabacin",
          precio: 2.1,
          imagen: "calabacin.jpg",
        },
        {
          id: 4,
          nombre: "Fresas",
          precio: 0.6,
          imagen: "fresas.jpg",
        },
      ],
      elegido:[],
    };
  },


  methods: {
    shareData(item) {
      this.elegido.push(item)
      this.$router.push({
        name: "datos",
        params: { datos: this.elegido },
      });
    },
  },
};
</script>

<style></style>
