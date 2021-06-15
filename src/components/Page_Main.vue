<template>
    <main>
    <section class="about">
      <div class="about-left">
        <h4 class="primaryColor">About Me</h4>
        <h2>Hi, I am here to help your in your next project!</h2>
        <p>
          Hi, if you need PSD template, landing page or Website design within a
          day? then you can tell me. I'm here to help you. I can design any kind
          of PSD template. check my portfolio.
        </p>
        <p>
          Hi, if you need PSD template, landing page or Website design within a
          day? then you can tell me. I'm here to help you. I can design any kind
          of PSD template. check my portfolio.
        </p>
      </div>
      <div class="about-right"></div>
    </section>

    <section class="skills">
      <div class="skill-card">
        <div class="img"></div>
        <h3>Web Ui Design</h3>
        <p>I'm a professional UX designer with 4 years of exprience</p>
      </div>
      <div class="skill-card">
        <div class="img"></div>
        <h3>Moblie UI design</h3>
        <p>I'm a professional UX designer with 4 years of exprience</p>
      </div>
      <div class="skill-card">
        <div class="img"></div>
        <h3>Brandign Design</h3>
        <p>I'm a professional UX designer with 4 years of exprience</p>
      </div>
    </section>

    <section class="say-hello">
      <div class="left">
        <div class="img"></div>
      </div>
      <div class="right">
        <div>
          <h3>Say Hello!</h3>
          <ul>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="experience">
      <div class="experience-title">
        <h4 class="primaryColor">Educational Qualification</h4>
        <h2>Education & Exprerience</h2>
      </div>
      <div class="top">
        <div class="experience-card">
          <h4 class="title">University of Pune</h4>
          <h2>BBA - Computer Application</h2>
          <p>
            User ecperience (UX) design is the process design teams use to
            create products.
          </p>
        </div>
        <div class="experience-card">
          <h4 class="title">HSC</h4>
          <h2>Intermediate</h2>
          <p>
            User ecperience (UX) design is the process design teams use to
            create products.
          </p>
        </div>
        <div class="experience-card">
          <h4 class="title">SSC</h4>
          <h2>Maharashtra Board</h2>
          <p>
            User ecperience (UX) design is the process design teams use to
            create products.
          </p>
        </div>
      </div>
      <div class="bottom">
        <div class="experience-card">
          <h4 class="title">2017 - 2020</h4>
          <h2>Designer at Microsoft</h2>
          <p>
            User ecperience (UX) design is the process design teams use to
            create products.
          </p>
        </div>
        <div class="experience-card">
          <h4 class="title">2017 - 2020</h4>
          <h2>User Researcher at Apple</h2>
          <p>
            User ecperience (UX) design is the process design teams use to
            create products.
          </p>
        </div>
        <div class="experience-card">
          <h4 class="title">2017 - 2020</h4>
          <h2>lead Designer at Dribble</h2>
          <p>
            User ecperience (UX) design is the process design teams use to
            create products.
          </p>
        </div>
      </div>
    </section>

    <section class="portfolio">
      <div class="portfolio-title">
        <h4 class="primaryColor">Portfolio</h4>
        <h2>Education & Exprerience</h2>
        <p>
          I'm a professional UX desiner with 4 years of Exprerience. My main
          focus is on listening and understanding your users.
        </p>
      </div>
      <article 
        class="project-card item-3"
        v-for="project in works"
        :key="project.title"
      >
         <div class="card">
          <div class="img"></div>
          <h2>{{ project.title }}</h2>
        </div>
      </article>
    </section>

    <section class="testimonial">
      <div class="left">
        <img src="#" alt="some image" />
      </div>
      <div class="right">
        <div class="testimonial-title">
          <h4 class="primaryColor">Testimonial</h4>
          <h2>Client Brief</h2>
        </div>
        <div>
          <p class="quote">
            "Excellent desing, reat communication, fast turnaround of revision.
            I had a clear vision of what i wanted. Aniket did not just deliver
            it he also improved upon it substially. Recommended!"
          </p>
          <p><span class="primaryColor">Someone</span> CEO company</p>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "form",
  setup() {
     
      return{
         
      }
  },
};
</script>
<style lang="scss" scoped>

</style>