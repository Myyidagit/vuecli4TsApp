<template>
  <treeList :treeData="treeDatanew" :originData="treeDatanew" :isSelectAll="isSelectAll" :isStrictly="isStrictly" ref="tree"></treeList>
</template>

<script>
import treeList from "./treeList.vue";
export default {
  components: {
    treeList
  },
  props: {
    treeData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    //是否遵循父子相关
    isStrictly: {
      type: Boolean,
      default: false
    },
    //是否要展开全部
    openAll: {
      type: Boolean,
      default: true
    },
    isSelectAll:{
        type: Boolean,
        default: false
    },
    //选中父节点是否要勾选子节点
    isStrictly:{
        type: Boolean,
        default: true
    }
  },
  data() {
    return {
      treeDatanew: [],
      originData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    //获取节点
    getSelectNode() {
       return this.$refs.tree.getActNode();
    },
    //给数据添加是否要展开，是否默认选中等标记
    setData() {
      let data = JSON.parse(JSON.stringify(this.treeData));
      let _this = this;
      let forFn = function(arr) {
        for (let i = 0; i < arr.length; i++) {
          let item = arr[i];
          if (item.children && Array.isArray(item.children)) {
            item.isOpen = _this.openAll;
            item.isSelect = _this.isSelectAll;
            forFn(item.children);
          } else {
            item.isSelect = _this.isSelectAll;
            item.isOpen = _this.openAll;
          }
        }
      };
      forFn(data);
      this.treeDatanew = this.leafFun(data);
    },
    //查找叶子节点
    leafFun(arr) {
      let leafFun = function(arrArges) {
        for (let i = 0; i < arrArges.length; i++) {
          let item = arrArges[i];
          if (item.children && Array.isArray(item.children)) {
            item.isLeaf = false;
            leafFun(item.children);
          } else {
            item.isLeaf = true;
          }
        }
      };
      leafFun(arr);
      console.log(arr);
      return arr;
    }
  },
  created() {
    this.setData();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.myDiv {
}
</style>