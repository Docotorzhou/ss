<template>
  <div class="home">
    <ul v-for="category in categories">
      <li>{{category.name}}</li>
      <li>{{category.num}}</li>
    </ul>
  </div>
</template>

<script>
  export  default {
    computed:{
      categories(){
        return this.$store.state.categories
      }
    },

  }

</script>
