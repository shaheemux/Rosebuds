<template>
  <div class="home">
   <Navbar /> 
   <Home /> 
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Home from "../components/Home.vue"


export default {
  components : {
    Navbar,
    Home
  }
}
</script>



<!-- reference for importing components  -->

<!-- 
import Navbar from "../components/Navbar.vue"
  import Home from "../components/Home.vue"
  import About from "../components/About.vue"


  export default {
    components: {
      Navbar,
      Home,
      About,
    }
  } 
    <Navbar />
    <Home />
    <About />  
  -->