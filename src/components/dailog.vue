<template>
  <div>
      <div class="dialog-wrap">
          <div class="dialog-cover"></div>
          <div class="dialog-content">
              <p class="dialog-close"></p>
              <slot>empty</slot>
          </div>
      </div>
  </div>
</template>
<script>
export default{
    data(){
        return{

        }
    }
}
</script>