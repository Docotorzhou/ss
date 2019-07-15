<template>
  <div>
    <about></about>
    <input type="button" value="增加" @click="add()">
    <input type="button" value="减少"  @click="list()">
    <home></home>
  </div>
</template>
<script>
  import About from "../components/About";
  import Home from "../components/Home";
  export default {
    components: {Home,About},
    methods:{
      add(){
        // this.$store.commit('add');
        this.$store.dispatch('add')
      },
      list(){
        // this.$store.commit('list');
        this.$store.dispatch('list')
      }
    },

  }
</script>