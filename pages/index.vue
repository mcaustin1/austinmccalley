<template>
  <div class="container">

    <div class="main">
      <h1 class="title">
        Austin McCalley
      </h1>
      <hr class="divider">
      <h2 class="subtitle">
        Software Developer
      </h2>
      <div class="links">
        <font-awesome-layers class='fa-2x'>
          <a href="http://github.com/austinmccalley" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" color='#fff' />
          </a>
        </font-awesome-layers>
        <font-awesome-layers class='fa-2x'>
          <a href="mailto:austin@austinmccalley.com" target="_blank">
            <font-awesome-icon :icon="['fa', 'envelope']" color='#fff' />
          </a>
        </font-awesome-layers>
        <font-awesome-layers class='fa-2x'>
          <a href="https://paypal.me/austinmccalley?locale.x=en_US" target="_blank">
            <font-awesome-icon :icon="['fab', 'paypal',]" color='#fff' />
          </a>
        </font-awesome-layers>


      </div>
    </div>

    <div class="particle">
      <vueParticles color='#fff'>
      </vueParticles>
    </div>
  </div>
</template>

<script>
  import vueParticles from '~/components/vue-particles.vue';
  export default {
    components: {
      vueParticles
    }

  }

</script>

<style>
  .particle {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    z-index: 0;
  }

  .main {
    pointer-events: none;
  }

  a,
  button,
  .links,
  .main {
    z-index: 999;
    pointer-events: all !important;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    display: block;
    font-size: 75px;
    color: #fff;
    letter-spacing: 1px;
  }

  .divider {
    color: #fff;
    background-color: #fff;
    opacity: 0.5;
    height: 3px;
    width: 75vw;
    border: none;
  }

  .subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-style: italic;
    font-size: 35px;
    color: #fff;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .button--white {
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 300;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #fff;
    color: #fff;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--white:hover {
    color: rgba(174, 99, 232, 1);
    background-color: #fff;
    text-decoration: none;

  }

</style>
