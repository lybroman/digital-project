<template>
  <div>
    <div class="container">
      <section class="section" style="text-align: left; padding-left:0px">
        <div class="container">
          <h1 class="title">{{ $t('contact.title') }}</h1><br/>
          <h2 class="subtitle" v-html="$t('contact.content0')" style="font-size:0.85em; line-height:150%;">
          </h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>

</style>
