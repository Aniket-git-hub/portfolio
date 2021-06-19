<template>
  <section class="row" id="about">
    <div class="xs12 s12 m7 l7 xl7 row align-center">
      <article class="mOffset-3">
        <div class="section-title">
          <h4 class="primaryColor">About Me</h4>
          <h2>Hi, I am here to help your in your next project!</h2>
        </div>
        <p>
          I am a student from pune. I love desining and creating
          web application for people who want to expand their reach 
          by going online and creating their bands.
        </p>
        <p>
          Freelancer. Looking for jobs. Like working from home.☺
          <!-- https://www.upwork.com/freelancers/~013f77709e50c8cd03 -->
        </p>
      </article>
    </div>
    <div class="xs12 s12 m5 l5 xl5 row center align-center img-box">
      <img src="../assets/freelancer.svg" alt="" srcset="">
    </div>
  </section>

  <section class="row center align-center" id="skills">
    <article class="row">
      <div class="xs12 s12 m12 l12 xl12 row center">
        <h1>SPECILIZING IN</h1>
      </div>
      <div
        class="xs12 s6 m4 l4 xl4 skill-card"
        v-for="skill in skills"
        :key="skill.title"
      >
        <div class="img-box">
          <img src="../assets/updateportfolio.svg">
        </div>
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.description }}</p>
      </div>
    </article>
  </section>

  <section class="row align-center" id="say-Hello">
    <div class="xs12 s6 m6 l6 xl6 left-section">
      <div class="img-box">
        <img src="../assets/hello.svg" alt="" srcset="">
      </div>
    </div>
    <article class="xs12 s6 m6 l6 xl6 right-section">
      <h3>Say Hello!</h3>
      <nav>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/aniket-singh-80371b201/"
              ><i class="fab fa-linkedin-in fa-2x"></i
            ></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
          </li>
          <li>
            <a href="https://www.instagram.com/aniketsingh6967/"
              ><i class="fab fa-instagram fa-2x"></i
            ></a>
          </li>
        </ul>
      </nav>
    </article>
  </section>

  <section class="row" id="experience">
    <div class="section-title">
      <h4 class="primaryColor">Educational Qualification</h4>
      <h2>Education & Exprerience</h2>
    </div>

    <div class="row list">
      <div
        class="xs12 s12 m4 l4 xl4 experience-card"
        v-for="edu in education"
        :key="edu.course"
      >
        <h4 class="title">{{ edu.from }}</h4>
        <h2>{{ edu.course }}</h2>
        <p>
          {{ edu.description }}
        </p>
      </div>
    </div>

    <div class="row list">
      <article
        class="xs12 s12 m4 l4 xl4 experience-card"
        v-for="exp in experience"
        :key="exp.title"
      >
        <h4 class="title">{{ exp.duration }}</h4>
        <h2>{{ exp.title }}</h2>
        <p>
          {{ exp.description }}
        </p>
      </article>
    </div>
  </section>

  <section class="" id="portfolio">
    <div class="section-title">
      <h4 class="primaryColor">Portfolio</h4>
      <h2>Creativity & Innovation</h2>
      <p>
        These are some of my works that I have done in order to enhance my
        skills. The code to many of these projects can be found on my github
        repo.
      </p>
    </div>
    <div class="row">
      <article
        class="xs12 s6 m4 l3 xl3 project-card"
        v-for="project in projects"
        :key="project.title"
      >
        <div class="card">
          <div class="img-box">
            <img :src="project.img" alt="" srcset="">
          </div>
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </article>
    </div>
  </section>

  <section class="row" id="testimonial">
    <div class="xs12 s12 m5 l5 xl5 img-box">
      <img src="../assets/feedback.svg" alt="" srcset="">
    </div>
    <article class="xs12 s12 m7 l7 xl7 row center right align-center">
      <div class="section-title">
        <h4 class="primaryColor">Testimonial</h4>
        <h2>Client Brief</h2>
      </div>
      <div>
        <p class="quote">
          "Excellent desing, best communication, fast turnaround of revision. I
          had a clear vision of what i wanted. Aniket did not just deliver it he
          also improved upon it substially. Recommended!"
        </p>
        <p>
          <a href="https://madhu-enterprises-pune.business.site/"
            ><span class="primaryColor">Dharmvir Singh,</span></a
          >
          Owner Madhu Enterprises
        </p>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: "form",
  setup() {
    const experience = [
      {
        duration: "2021 - present",
        title: "Internshala Student Partner",
        description:
          "Working part time in internshala student program to gain experince in maketing, communication and promotion.",
      },
      {
        duration: "2019 - 2021",
        title: "Business Accountant at Madhu Enterprises",
        description:
          "I have worked at madhu Enterprises where my job was manage finance related works.",
      },
    ];

    const skills = [
      {
        title: "Frontend",
        img:'../assets/server.svg',
        description:
          "Some of my frontend skills are HTML, CSS, Javascript, Vue.js, vuetify, etc ",
      },
      {
        title: "Backend",
        img:'../assets/server.svg',
        description:
          "Backend skills includes Node.js(with express), Deno, PHP(with larvel) and Django",
      },
      {
        title: "Database",
        img:'../assets/server.svg',
        description:
          "Databases I am good at mongoDB, firestore, mysql, mariaDB, sqlLite",
      },
    ];

    const projects = [
      {
        title: "Covid19Update",
        img:'../assets/server.svg',
        description:
          "This was my first professional looking project that I made during covid19 pandemic.",
      },
      {
        title: "visualizer",
         img:'../assets/server.svg',
        description:
          "After examProject I will work on this project which helps understaing the working of different algorithms.  ",
      },
      {
        title: "Madhu",
         img:'../assets/server.svg',
        description:
          "This is my first project which is used by a company and helping their business grow.",
      },
      {
        title: "examProject",
         img:'../assets/server.svg',
        description:
          "examProject is the one I am currently working on so, it is still in development. I am using nuxt.js to built it.",
      },
    ];

    const education = [
      {
        course: "BBA-Computer Application",
        from: "University of Pune",
        description:
          " User ecperience (UX) design is the process design teams use to creat products.",
      },
      {
        course: "HSC",
        from: "Intermediate",
        description:
          " User ecperience (UX) design is the process design teams use to create products.",
      },
      {
        course: "SSC",
        from: "State Board",
        description:
          " User ecperience (UX) design is the process design teams use to create products.",
      },
    ];

    return {
      skills,
      projects,
      education,
      experience,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/_grid.scss";
</style>