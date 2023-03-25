<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div class="main-container">
      <UsersComponent/>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import UsersComponent from './components/Users.vue';


@Options({
  components: {
    HelloWorld,
    UsersComponent
  },
})
export default class App extends Vue {

    

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.main-container {
    min-width: 900px;
    width: 80%;
    margin: 20vh auto;
}
</style>
