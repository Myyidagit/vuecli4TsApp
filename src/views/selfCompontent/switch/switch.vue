<template>
  <div class="m-switch">
    <span
      class="weui-switch"
      :class="{ 'weui-switch-on': isChecked }"
      :value="value"
      @click="toggle"
      ref="core"
      style="position: relative"
    >
      <div v-if="isChecked && direction.length > 0" class="aa">
        {{ direction[0] }}
      </div>
      <div v-if="!isChecked && direction.length > 0" class="bb">
        {{ direction[1] }}
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "switchComponent",
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    //如果切换想显示NO|OFF，则需要传NO|OFF
    text: {
      type: String,
      default: "",
    },
    size:{
        type:String,
        default:""
    },
    //选中时的颜色
    activeColor:{
      type:String,
      default:"#1aad19"
    },
    //未选中时的颜色
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isChecked: this.value
    };
  },
  computed: {
    direction() {
      if (this.text) {
        return this.text.split("|");
      } else {
        return [];
      }
    }
  },
  watch: {
    value(val) {
      this.isChecked = val;
    },
    isChecked(val) {
      // this.$emit("change", val);
      this.setBackgroundColor();
    }
  },
  methods: {
    toggle() {
      this.isChecked = !this.isChecked;
      this.$emit("input",this.isChecked)
      this.$emit("change");
    },
    setBackgroundColor() {
      let newColor = this.isChecked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    }
  },
  mounted() {
    if(this.activeColor || this.inactiveColor){
      this.setBackgroundColor();
    }
  },
};
</script>
<style lang="scss" scoped>
.m-switch{
    display: inline-block;
    vertical-align: middle;
}
.weui-switch {
  display: block;
  position: relative;
  width: 60px;
  height: 30px;
  border: 1px solid #dfdfdf;
  outline: 0;
  border-radius: 15px;
  box-sizing: content-box;
  background-color: #dfdfdf;
  transition: background-color 0.2s, border 0.1s;
  cursor: pointer;
}
.aa {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0 5px;
  line-height: 30px;
  color: #fff;
  user-select: none;
  
}
.bb {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0 5px;
  right: 2px;
  line-height: 30px;
  color: #7a7a7a;
  text-align: right;
  user-select: none;
}
.weui-switch:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
//   width: 6px;
  height: 30px;
  border-radius: 15px;
  background-color: #fdfdfd;
  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
}
.weui-switch:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
}
.weui-switch-on {
  border-color: #1aad19;
  background-color: #1aad19;
}
.weui-switch-on:before {
  border-color: #1aad19;
  background-color: #409eff;
}
.weui-switch-on:after {
  transform: translateX(30px);
}
</style>