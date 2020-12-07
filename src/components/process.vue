<template>
    <div class="contain-c-progress">
        <svg :id="cid" :width="cwidth" :height="cwidth" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle :cx="cr.cx" :cy="cr.cy" :r="bgr" :fill="bg" />
            <path v-if="percent!=100" :d="cd" :stroke="strokeColor" :stroke-width="strokeWidth" :fill="bg" />
            <circle v-if="percent==100" :cx="cr.cx" :cy="cr.cy" :r="r" :stroke="strokeColor" :stroke-width="strokeWidth" :fill="bg" />
            <text :x="textPos.x" :y="textPos.y" :fill="strokeColor" :font-size="fontSize.f0" font-style="italic">{{percent}}</text>
            <text :x="textPos.x1" :y="textPos.y1" :fill="strokeColor" :font-size="fontSize.f1" font-style="italic">%</text>
        </svg>
    </div>
</template>
 
<script type="text/ecmascript-6">
export default {
  name: "Cprogress",
  data() {
    return {
        per:0,
    };
  },
  props: {
    cw: {
      required: true,
      type: Number
    },
    id: {
      required: true,
      type: Number
    },
    bg: {
      required: true,
      type: String
    },
    strokeColor: {
      type: String,
      required: true
    },
    strokeWidth: {
      type: Number,
      required: true
    },
    percent: {
      type: Number,
      required: true
    }
  },
  watch:{
  },
  methods:{
  },
  computed: {
    //整个svg的大小
    cwidth() {
      return this.cw + "px";
    },
    //path的起点
    start() {
      if (this.cw == 80) {
        return { sx: 40, sy: 8 };
      } else {
        return { sx: 30, sy: 6 };
      }
    },
    //背景圆的半径
    bgr() {
      return this.cw / 2;
    },
    //弧线半径
    r() {
      return this.cw==80? this.cw / 2 - 8 : this.cw/2 -6;
    },
    //弧线的圆心
    cr() {
      return { cx: this.cw / 2, cy: this.cw / 2 };
    },
    //path 终点
    end() {
      //终点位置
      var alpha = this.percent / 100 * 2 * Math.PI;
      var ex = this.cw / 2 + this.r * Math.sin(alpha);
      var ey = this.cw / 2 - this.r * Math.cos(alpha);
      return { x: ex, y: ey };
    },
    cd() {
      //示例："M50 10 A 40 40, 0, 0, 1, 50  90"
      return this.percent <= 50
        ? `M ${this.start.sx} ${this.start.sy} 
              A ${this.r} ${this.r}, 0, 0, 1,${this.end.x} ${this.end.y}`
        : `M ${this.start.sx} ${this.start.sy}
              A ${this.r} ${this.r}, 0, 1, 1,${this.end.x} ${this.end.y}`;
    },
    cid() {
      //svg的id
      return "svg" + this.id;
    },
    textPos() {
      //文字x方向位置
      if (this.cw == 80) {
        if (this.percent < 10) {
          return { x: 30, y: 48, x1: 43, y1: 48};
        } else if (this.percent < 100) {
          return { x: 22, y: 48, x1: 47, y1: 48};
        } else {
          return { x: 14, y: 48, x1: 51, y1: 48 };
        }
      } else {
        if (this.percent < 10) {
          return { x: 22, y: 37, x1: 33, y1: 37 };
        } else if (this.percent < 100) {
          return { x: 12, y: 37, x1: 33, y1: 37 };
        } else {
          return { x: 8, y: 37, x1: 38, y1: 37 };
        }
      }
    },
    //文字大小
    fontSize(){
      if(this.cw==80){
        return {f0: 20, f1: 13}
      }else if(this.cw==60){
        return {f0: 16, f1: 12}
      }
    }
  }
};
</script>
 
<style scoped>
svg {
  text-align: center;
  line-height: 100px;
  color: #fff;
}
</style>