<template>
  <section class="row" id="about">
    <div class="xs12 s12 m7 l7 xl7 row align-center">
      <article class="mOffset-3">
        <div class="section-title">
          <h4 class="primaryColor">About Me</h4>
          <h2>Hi, I am here to help your in your next project!</h2>
        </div>
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
      </article>
    </div>
    <div class="xs12 s12 m5 l5 xl5 row center align-center img-box">
      i will add a image over here with some text on it
    </div>
  </section>

  <section class="row center align-center" id="skills">
    <article class="row">
      <div 
        class="xs12 s6 m4 l4 xl4 skill-card"
        v-for="skill in skills"
        :key="skill.title"
        >
        <div class="img"></div>
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.description }}</p>
      </div>
      <!-- <div class="xs12 s6 m4 l4 xl4 skill-card">
        <div class="img"></div>
        <h3>Moblie UI design</h3>
        <p>I'm a professional UX designer with 4 years of exprience</p>
      </div>
      <div class="xs12 s6 m4 l4 xl4 skill-card">
        <div class="img"></div>
        <h3>Brandign Design</h3>
        <p>I'm a professional UX designer with 4 years of exprience</p>
      </div> -->
    </article>
  </section>

  <section class="row align-center" id="say-Hello">
    <div class="xs12 s6 m6 l6 xl6 left-section">
      <div class="img"></div>
    </div>
    <article class="xs12 s6 m6 l6 xl6 right-section">
      <h3>Say Hello!</h3>
      <ul class="row">
        <li>
          <a href="#"><i class="fab fa-linkedin-square"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-github"></i></a>
        </li>
      </ul>
    </article>
  </section>

  <section class="row" id="experience">
    <div class="section-title">
      <h4 class="primaryColor">Educational Qualification</h4>
      <h2>Education & Exprerience</h2>
    </div>

    <div class="row list">
      <div class="xs12 s12 m4 l4 xl4 
      experience-card
      "
      v-for="edu in education" :key="edu.course"
      >
        <h4 class="title">{{edu.from}}</h4>
        <h2>{{edu.course}}</h2>
        <p>
          {{ edu.description}}
        </p>
      </div>
    </div>

    <div class="row list">
      <div class="xs12 s12 m4 l4 xl4  experience-card">
        <h4 class="title">2017 - 2020</h4>
        <h2>Designer at Microsoft</h2>
        <p>
          User ecperience (UX) design is the process design teams use to create
          products.
        </p>
      </div>
      <div class=" xs12 s12 m4 l4 xl4  experience-card">
        <h4 class="title">2017 - 2020</h4>
        <h2>User Researcher at Apple</h2>
        <p>
          User ecperience (UX) design is the process design teams use to create
          products.
        </p>
      </div>
      <div class=" xs12 s12 m4 l4 xl4  experience-card">
        <h4 class="title">2017 - 2020</h4>
        <h2>lead Designer at Dribble</h2>
        <p>
          User ecperience (UX) design is the process design teams use to create
          products.
        </p>
      </div>
    </div>
  </section>

  <section class=" " id="portfolio">
    <div class="section-title ">
      <h4 class="primaryColor">Portfolio</h4>
      <h2>Education & Exprerience</h2>
      <p>
        I'm a professional UX desiner with 4 years of Exprerience. My main focus
        is on listening and understanding your users.
      </p>
    </div>
    <div class="row">
    <article
      class="xs12 s6 m4 l3 xl3 project-card"
      v-for="project in projects"
      :key="project.title"
    >
      <div class="card">
        <div class="img"></div>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </article>
    </div>
  </section>

  <section class="row border" id="testimonial">
    <div class="xs12 s12 m5 l5 xl5 img-box">
      <img src="#" alt="some image" />
    </div>
    <article class="xs12 s12 m7 l7 xl7 row center right align-center">
      <div class="section-title">
        <h4 class="primaryColor">Testimonial</h4>
        <h2>Client Brief</h2>
      </div>
      <div>
        <p class="quote">
          "Excellent desing, reat communication, fast turnaround of revision. I
          had a clear vision of what i wanted. Aniket did not just deliver it he
          also improved upon it substially. Recommended!"
        </p>
        <p><span class="primaryColor">Someone</span> CEO company</p>
      </div>
    </article>
  </section>

</template>
<script>
export default {
  name: "form",
  setup() {
    const skills = [
      {title:'Frontend', description:'This is a brief description of my skill like from where i have got it.'},
      {title:'Backend', description:'This is a brief description of my skill like from where i have got it.'},
      {title:'DevOps', description:'This is a brief description of my skill like from where i have got it.'}
    ]

    const projects = [
      {title:'CornaTacker', description:'Thisi s a brief description about this project that i have made in my free time when i had nothing  to do and every body was busy expect me.'},
      {title:'visualizer', description:'Thisi s a brief description about this project that i have made in my free time when i had nothing  to do and every body was busy expect me.'},
      {title:'Madhu', description:'Thisi s a brief description about this project that i have made in my free time when i had nothing  to do and every body was busy expect me.'},
      {title:'examProject', description:'Thisi s a brief description about this project that i have made in my free time when i had nothing  to do and every body was busy expect me.'}
    ]

    const education = [
      {course:'BBA-Computer Application', from:'University of Pune', description:' User ecperience (UX) design is the process design teams use to creat products.' },
      {course:'HSC', from:'Intermediate', description:' User ecperience (UX) design is the process design teams use to create products.' },
      {course:'SSC', from:'State Board', description:' User ecperience (UX) design is the process design teams use to create products.' }
    ]

    return {
      skills,
      projects,
      education
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/_grid.scss";
</style>