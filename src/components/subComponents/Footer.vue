<template>
  <footer class="footer">
    <div class="container" align="left">
      <div class="box box_addon_default box_left_border" v-html="$t('footer.name')">
      </div>
      <div class="box box_addon_default box_right_border box_right_align" style="width:70%" v-html="$t('footer.contact')">
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .box_addon_default {
    font-size: 0.75em;
    display:inline-block;
    width:28.0%;
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
  footer {
    background-color: white;
    padding-left:0px;
    padding-right:0px;
  }
</style>
