<template>
  <form class="ml-2">
    <div class="form-title m-4"><span>{{ formTitle }}</span></div>
    <div class="form-inputs">
      <div class="input full">
        <input type="email" id="email" required hint="some hints" />
        <label for="email">Email</label>
      </div>
      <div class="input full">
        <input type="text" id="message" required />
        <label for="message">message</label>
      </div>
      <div class="input full">
        <textarea id="textarea" rows="5" requried></textarea>
        <label for="textarea">Message</label>
      </div>
    </div>
    <div class="form-footer row right">
      <button type="button" class="btn blue white-text outlined-1">Send</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "form",
  setup() {
      let formTitle = "You Can Email"
      return{
          formTitle
      }
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/myLib.scss";

.form-title {
  font-size: 2rem;
  margin: 1rem;
}
.form-inputs {
  .full {
    width: 100%;
    input, textarea {
      width: 100%;
    }
  }
  .input {
    position: relative;
    margin-bottom: 1rem;

    input, textarea {
      padding: 0.5rem;
      transition: 0.2s;
      border: 2px solid $seventhColor;
      border-radius: 0.2rem;
      background-color: transparent;
      outline: none;
      font-size: 1rem;
    }
    textarea{
        white-space: pre-wrap;
        height:auto;
    }
    label, textarea:invalid {
      padding: 0.5rem;
      position: absolute;
      top: 0;
      left: 0;
      background-color: transparent;
      transition: 0.5s;
    }

    label:hover {
      cursor: pointer;
    }
    input:focus ~ label,
    input:valid ~ label,
    textarea:focus ~ label,
    textarea:valid ~ label
    {
      top: -20px;
      left: 10%;
      font-size: 0.8rem;
      color: $seventhColor;
    }
    input:focus,
    input:valid,
    textarea:valid,
    textarea:focus
     {
      border-top: 1px solid transparent;
      border-bottom: 5px solid $seventhColor;
    }
  }
}
</style>