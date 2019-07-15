<template>
  <div class="about">
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
        return this.$store.getters.categories

      },

    }
  }

</script>

