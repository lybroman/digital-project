<template>
  <div>
    <div class="container">
      <section class="section" style="text-align: left; padding-left:0px">
        <div class="container">
          <h1 class="title">{{ $t('about.title') }}</h1><br/>
          <h2 class="subtitle" v-html="$t('about.content0')" style="font-size:0.85em; line-height:150%;">
          </h2>
        </div>
      </section>
    </div>
    <div class="container" style="padding:0px 10% 0px 10%">
      <figure class="image is-16x9">
        <img src="../assets/about1.png">
      </figure>
    </div>
    <div class="container">
      <section class="section" style="text-align: left; padding-left:0px">
        <div class="container">
          <h2 class="subtitle" v-html="$t('about.content1')" style="font-size:0.85em; line-height:150%;">
          </h2>
        </div>
      </section>
    </div>
    <!--div class="container">
      <figure class="image is-16x9">
        <img src="../assets/about2.png">
      </figure>
    </div-->
    <br/>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

</style>
