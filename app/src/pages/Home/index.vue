<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(f) in floorList" :key="f.id" :list="f" > </Floor>
  </div>
</template>

<script>
import Recommend from "./Recommed"
import Rank from "./Rank"
import ListContainer from "./ListContainer"
import Like from "./Like"
import Floor from "./Floor"
import {mapState} from "vuex"
export default {
  name: "Home",
  components: {
    Recommend,
    Rank,
    ListContainer,
    Like,
    Floor
  },
  mounted() {
    this.$store.dispatch("getFloorList")
    
  },
  computed: {
    ...mapState(
      {floorList: (state)=> state.home.floorList}
    )
  }
}
</script>

<style>

</style>