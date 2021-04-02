<template>
  <header class="row black v-center">
    <section class="xl6 xs8 yellow">
      <div class="row text-center">
        <h1 class="h1 p-1">I'm Aniket Singh</h1>
      </div>
    </section>
  </header>

  <main class="row center">
    <h3 class="h3 py-5 title-underline">My Works</h3>
    <section class="col xs12 s12 m12 l12 xl12">
      <section class="row">
        <div class="xs12 s6 m4 l3" v-for="card in cards" :key="card.title">
          <article class="card rounded-1">
            <h1 class="card-title">{{ card.title }}</h1>
            <p class="body-1">{{ card.text }}</p>
            <p class="card-actions row spaced-between">
              <button class="btn-outlined">more</button>
              <button class="btn-text">About</button>
              <button class="btn-fill">Cancle</button>
            </p>
          </article>
        </div>
      </section>
    </section>
    <About />
    <h3 class="h3 py-5 title-underline">Contact Me !</h3>
    <section class="col xs12 s12 m12 l12 xl12">
      <section class="row center v-center ">
        <section class="m6  xs12 s8 l4 card orange mb-3" >
          <Form/>
        </section>
      </section>
    </section>
  </main>

  <footer class="row purple">footer</footer>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import About from "@/views/About.vue";
import Form from "@/components/Form.vue";
export default defineComponent({
  components: {
    About,
    Form
  },
  setup() {
    const cards = [
      { title: "Sim Card", text: "Iss card is sim milega" },
      { title: "Shadi Card", text: "Iss card is sim milega" },
      { title: "Birthday Card", text: "Iss card is sim milega" },
      { title: "Anneversay Card", text: "This is anneversay card" },
    ];
    return {
      cards,
    };
  },
});
</script>

<style lang="scss">
@import "@/scss/myLib.scss";
header {
  width: 100vw;
  height: 60vh;
}
footer {
  height: 30vh;
}


</style>
