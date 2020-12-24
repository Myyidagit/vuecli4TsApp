<template>
  <div class="treeList">
    <li v-for="(item,index) in treeData" :key="index" class="item_box a" :style="{'margin-left':item.level*20+'px'}">
      <div class="options">
        <img
          :class="[item.isOpen?'roate':'',item.isLeaf?'isopacity':'']"
          src="../../../assets/images/mine/down.png"
          alt
          @click="openOption(item)"
        />
        <!-- <van-switch v-model="item.isSelect" :size="switchSize" @change="changeSwitch(item,index)" /> -->
        <m-switch v-model="item.isSelect" @change="changeSwitch(item,index)"></m-switch>
        <span class="item_name">{{ item.name }}</span>
      </div>
      <!-- <transition enter-active-class="animatedb fadeIn" leave-active-class="animatedb fadeOut"> -->
      <div v-if="item.children" v-show="item.isOpen">
        <treelist :treeData="item.children" :originData="originData"></treelist>
      </div>
      <!-- </transition> -->
    </li>
    <!-- <van-button type="primary" @click="getActNode">获取选中的节点</van-button> -->
  </div>
</template>

<script>
import mSwitch from "../switch/switch.vue"
export default {
  name: "treelist",
  components: {
    mSwitch
  },
  props: {
      //树的数据
    treeData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    //源数据，递归组件的时候需要
    originData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    //选中父节点是否要勾选子节点
    isStrictly: {
      type: Boolean,
      default: true
    },
    //是否要展开全部
    openAll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      checked: true,
      switchSize: "15px",
      authArr: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    onClickLeft() {
      window.history.back();
    },
    //修改权限
    changeSwitch(authObj, i) {
      console.log(authObj)
      if (!authObj.isSelect) {
        //取消勾选
        this.cancelSwitch(authObj, false);
      } else {
        //勾选中父节点
        this.selectFather(authObj, true);
        //将其一下的子节点勾选中
        if(this.isStrictly){
            this.selectChild(authObj, true);
        }
      }
    },
    //递归遍历将下面的全部取消
    cancelSwitch(authObj, flag) {
      let _this = this;
      let cancel = function(arr) {
        if (!arr || !arr.length) return;
        for (let i = 0; i < arr.length; i++) {
          let item = arr[i];
          if (item.children && item.children.length) {
            item.isSelect = flag;
            cancel(item.children);
          } else {
            item.isSelect = flag;
          }
        }
      };
      cancel(authObj.children);
    },
    //开启一个，向上找父节点，并将选项置为true
    selectFather(authObj, flag) {
      let _this = this;
      //将数组降维逐级向上寻找父节点
      let newArr = this.downArr(_this.originData);
      let forFn = function(arr, pid) {
        if (!arr.length) return;
        for (let i = 0; i < arr.length; i++) {
          let item = arr[i];
          //节点id == 子节点父id
          if (item.id == pid) {
            item.isSelect = flag;
            forFn(newArr, item.pid);
          }
        }
      };
      forFn(newArr, authObj.pid);
    },
    //开启一个，向下找子节点，并将选项置为true
    selectChild(authObj, flag){
        let _this = this;
        //将数组降维逐级向上寻找父节点
        let newArr = this.downArr(_this.originData);
        let forFn = function(arr, id) {
            if (!arr.length) return;
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                //节点id == 子节点父id
                if (item.pid == id) {
                    item.isSelect = flag;
                    forFn(newArr, item.id);
                }
            }
        };
        forFn(newArr, authObj.id);
    },
    //数组降维
    downArr(arr) {
      var newArr = [];
      var reduceArr = function(arrArg) {
        if (!arrArg.length) return;
        for (var i = 0; i < arrArg.length; i++) {
          if (Array.isArray(arrArg[i].children)) {
            newArr.push(arrArg[i]);
            reduceArr(arrArg[i].children);
          } else {
            newArr.push(arrArg[i]);
          }
        }
      };
      reduceArr(arr);
      return newArr;
    },
    //展开收起节点
    openOption(item) {
      console.log(item);
      item.isOpen = !item.isOpen;
    },
    /**
     * @description  获取选中的节点的对象
     */
    getActNode() {
      let nodeArr = [];
      let idArr = [];
      let obj = {};
      let arr = this.downArr(this.treeData);
      arr.map((item, index) => {
        if (item.isSelect) {
          idArr.push(item.id);
          nodeArr.push(item);
        }
      });
      obj = {
        idArr,
        nodeArr
      };
      return obj;
    }
  },
  created() {
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.van-switch {
  vertical-align: middle;
}
.roate {
  transform: rotate(90deg);
}
.isopacity {
  opacity: 0;
}
.treeList /deep/ {
  .a {
    // background: #f2f6fc;
  }
  .b {
    // background: #e6a23c;
  }
  // .c{
  //     background: #F56C6C;
  // }
  .item_box {
    margin: 20px 0px;
    position: relative;
    .item_name {
      display: inline-block;
      //   width: 180px;
      //   text-align: right;
      padding-left: 10px;
      height: 42px;
      line-height: 42px;
    }
    .options {
      padding: 5px 25px;
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        transition: all ease-in 0.2s;
      }
    }
    &::before {
      border-left: 1px dashed #4386c6;
      bottom: 0px;
      // height: 20px;
      top: -15px;
      width: 1px;
      content: "";
      // left: 32px;
      position: absolute;
      right: auto;
      border-width: 1px;
    }
    &::after {
      border-top: 1px dashed #4386c6;
      height: 20px;
      top: 28px;
      width: 17px;
      content: "";
      left: 2px;
      position: absolute;
      right: auto;
      border-width: 1px;
    }
  }
}
</style>