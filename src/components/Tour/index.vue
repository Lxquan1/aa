<template>
  <div class="tour">
    <TourItem></TourItem>
    <TourItem></TourItem>
    <TourItem></TourItem>
  </div>
</template>

<script>
import TourItem from "./TourItem";
export default {
  name: "TourIndex",

  data() {
    return {};
  },
  components: { TourItem },

  mounted() {},

  methods: {
    
  },
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
.tour {
  width: 1000px;
  margin: 0 auto;
  background: #f8f8f8;
}
</style>