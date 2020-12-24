<template>
  <div :class="['myAlert',type]">
      {{ text }}
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        text:'我是弹框',
        type:'success'
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.success{
     background:#67C23A;
}
.warning{
    background:#E6A23C;
}
.error{
   background: #F56C6C;
}
.myAlert{
    width: 200px;
    color: #fff;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    position: fixed;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 788888888;
}
</style>