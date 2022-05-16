<template>
  <div id="app">
    <nav class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/router">Router</router-link> |
    </nav>
    <transition name="view">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.view-enter-active,
.vista-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter {
  opacity: 0;
  transform: translateY(10px);
}
.view-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.view-leave {
  opacity: 1;
  transform: translateY(0px);
}
.view-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
