<template>
  <div>
    <div class="container">
      <figure class="image is-16x9">
        <img src="../assets/home.png">
      </figure>
    </div>
    <!--br /-->
    <!--div class="container" align="left">
      <div v-if="this.$i18n.locale=='en-US'" class="box box_addon_default box_left_border" v-html="$t('homePage.section1')" style="width:19%">
      </div >
      <div v-else class="box box_addon_default box_left_border" v-html="$t('homePage.section1')" style="width:24%">
      </div>
      <div v-if="this.$i18n.locale=='en-US'" class="box box_addon_default box_left_border" v-html="$t('homePage.section2')" style="width:28%">
      </div >
      <div v-else class="box box_addon_default box_left_border" v-html="$t('homePage.section2')" style="width:24%">
      </div>
      <div v-if="this.$i18n.locale=='en-US'" class="box box_addon_default box_left_border" v-html="$t('homePage.section3')" style="width:24%">
      </div >
      <div v-else class="box box_addon_default box_left_border" v-html="$t('homePage.section3')" style="width:24%">
      </div>
      <div v-if="this.$i18n.locale=='en-US'" class="box box_addon_default box_left_border box_right_border" v-html="$t('homePage.section4')" style="width:28%">
      </div>
      <div v-else class="box box_addon_default box_left_border box_right_border" v-html="$t('homePage.section4')" style="width:24%">
      </div>
    </div-->
    <div class="container" align="left">
      <!--h1 v-if="this.$i18n.locale=='en-US'" class="title"
          style="font-size:0.9em; font-style: italic; text-align:center " v-html="$t('homePage.sloganTitle')">
      </h1-->
      <h1 v-if="this.$i18n.locale=='en-US'" class="title" style="font-size:1.0em; font-style: italic; text-align:center">
        "<span class="initial">S</span>TRIVING
        <span class="content">FOR THE</span> <span class="initial">E</span>XCELLENCE
        <span class="content">, WITH </span><span class="initial">C</span>OMPLIANCE"
      </h1>
      <h1 v-else class="title" style="font-size:0.95em; text-align:center " v-html="$t('homePage.sloganTitle')">
      </h1>
      <p></p>
      <h2 v-if="this.$i18n.locale=='en-US'" class="subtitle" style="text-align:left; font-size:0.80em; line-height:150%; text-align:center" v-html="$t('homePage.sloganContent')">
      </h2>
      <h2 v-else style="text-align:left; font-size:0.85em; line-height:150%;" v-html="$t('homePage.sloganContent')">
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created () {
    this.$i18n.locale = 'en-US'
  }
}
</script>

<style scoped>
  .box_addon_default {
    font-size: 0.75em;
    display:inline-block;
    width:24.0%;
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
  span:hover{
    cursor:pointer;
  }
  span.initial{
     font-size:1.2em;
  }
  span.content{
    font-size:0.9em;
  }
</style>
