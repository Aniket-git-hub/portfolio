<template>
  <footer>
    <section class="letstryme">
      <h1>let's try me!</h1>
      <nav class="row">
        <ul>
          <li>
            <a href="#"><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-github"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
        </ul>
         <section class="xs12 s12 m12 l12 xl12 row center">
           <a href="mailto:singdharmvir81@gmail.com" class="email"><h2>Just an E-mail away!</h2>
           <i class="fas fa-paper-plane fa-2x"></i></a>
         </section>
      </nav>
    </section>

    <nav class="row">
      <h2>&copy; <span class="primaryColor">L</span>etsbug.com 2021</h2>

      <ul class="row">
        <li><a href="#">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="mailto:singhdharmvir81@gmail.com">Contact</a></li>
      </ul>

      <ul class="row">
        <li>
          <a href="#"><i class="fab fa-facebook"></i></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aniket-singh-80371b201/"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="https://github.com/Aniket-git-hub"
            ><i class="fab fa-github"></i
          ></a>
        </li>
        <!-- <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
          <li><a href="#"><i class="fab fa-hackerrank"></i></a></li> -->
      </ul>
    </nav>
  </footer>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "@/scss/_grid.scss";
</style>
