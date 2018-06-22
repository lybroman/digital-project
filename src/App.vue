<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <cfooter></cfooter>
  </div>
</template>

<script>

import Navigation from './components/subcomponents/Navigation'
import Footer from './components/subcomponents/Footer'

export default {
  name: 'App',
  components: {
    'navigation': Navigation,
    'cfooter': Footer
  }
}
</script>

<style>
body {
  width:900px !important;
  margin:0 auto !important;
}
.container{
  width: 900px !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
h1.title{
  font-size:1.1em;
  font-weight:300;
}

</style>
