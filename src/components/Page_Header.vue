<template>
  <nav class="row">
    <h2><span class="primaryColor">L</span>etsbug.com</h2>

    <ul class="row" >
      <li><a href="#">Home</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="mailto:singhdharmvir81@gmail.com">Contact</a></li>
    </ul>

    <ul>
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

  <header class="row">

    <section class="xs12 s2 m2 l2 xl2 row center align-center">
      <div class="hireme">
        <p>Available For Porjects</p>
        <button class="hiremeBtn"> <a href="tel:+917559410568">Hire Me</a> </button>
      </div>
    </section>

    <section class="xs12 s10 m10 l10 xl10 row right">
      <section class="xs12 s12 m8 l8 xl7 row center align-center">
        <article>
          <p class="primaryColor monospaced">FullStack Developer</p>
          <h1>
            Hello, I'm
            <span class="primaryColor">Aniket!</span>
          </h1>
          <p>
            Hi, I am a student and a professional Web Developer. Need any help?
          </p>
          <button class="resumeBtn">
            <a href="../pdf/resume.pdf" download="aniketsresume"
              >Download Resume</a
            >
          </button>
        </article>
      </section>
      <section class="xs12 s12 m4 l4 xl5 row center align-center img-box">
        <img src="../assets/programming1.svg" alt="" srcset="">
      </section>
    </section>
  </header>
</template>
<style lang="scss" scoped>
@import "@/scss/_grid.scss";
</style>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
})
</script>
