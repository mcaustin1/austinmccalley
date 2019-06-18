<template>
  <div>
    <nuxt />
    <div class="scripts">
  </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      // script: [
      //   {src: 'https://github.com/VincentGarreau/particles.js/blob/master/particles.min.js'}
      // ]
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100i,300i,400,600&display=swap');

html {
font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#e6cfda+0,ae63e8+100 */
background: rgb(230,207,218); /* Old browsers */
background: -moz-radial-gradient(center, ellipse cover,  rgba(230,207,218,1) 0%, rgba(174,99,232,1) 100%); /* FF3.6-15 */
background: -webkit-radial-gradient(center, ellipse cover,  rgba(230,207,218,1) 0%,rgba(174,99,232,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: radial-gradient(ellipse at center,  rgba(230,207,218,1) 0%,rgba(174,99,232,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e6cfda', endColorstr='#ae63e8',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


</style>
