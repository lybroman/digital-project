<template>
  <div>
    <div class="container">
      <div class="box box_addon_default box_left_border" style="float:left; width:40%">
        <span><router-link to="/">{{ $t('homePage.section0') }}</router-link></span>
      </div>
      <div class="box box_addon_default box_left_border" style="width:9%">
        <span><router-link to="about">{{ $t('homePage.section6') }}</router-link></span>
      </div>
      <div class="box box_addon_default box_left_border" style="width:9%">
        <span><router-link to="service">{{ $t('homePage.section7') }}</router-link></span>
      </div>
      <div class="box box_addon_default box_left_border" style="width:9%">
        <span><router-link to="project">{{ $t('homePage.section8') }}</router-link></span>
      </div>
      <div class="box box_addon_default box_left_border" style="width:9%">
        <span><router-link to="contact">{{ $t('homePage.section9') }}</router-link></span>
      </div>
      <div class="box box_addon_default box_right_border box_right_align">
        <span class="locale" @click="changeCurrentLocale('en-US')"> ENGLISH </span>
        <span class="locale" @click="changeCurrentLocale('zh-CN')"> 中文国语 </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  created () {
    this.$i18n.locale = 'en-US'
  },
  methods: {
    changeCurrentLocale (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: None;
    color:black;
  }
  .box_addon_default {
    font-size: 0.75em;
    display:inline-block;
    width:19.6%;
    text-align:left;
    border-radius: 0px;
    box-shadow:none;
    border-style:none none none none;
    padding:2px 0px 2px 9px;
  }
  .box_left_border {
    border-left:solid;
    border-width:1px;
  }
  .box_right_border {
    border-right: solid;
    border-width:1px;
    float:right;
  }
  .box_right_align{
    text-align:right;
    padding-right:15px;
  }
  span:hover{
    cursor:pointer;
  }

</style>
