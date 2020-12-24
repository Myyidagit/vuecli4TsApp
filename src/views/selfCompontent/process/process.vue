<template>
  <div class="myDiv">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <treelist :treeData="treeData" ref="treeList" :isSelectAll="true" :isStrictly="false"></treelist>
    <van-button type="primary" @click="getNode()">获取节点</van-button>
    <ky-switch></ky-switch>
  </div>
</template>

<script>
import treelist from "./treeData.vue";
// import myswitch from "../switch/switch.vue";
export default {
  name: "tree",
  components: {
      treelist,
      // myswitch
  },
  props: {},
  data() {
    return {
      treeData: [
        {
          name: "表格查看",
          id: "a-1",
          pid: "a",
          level: 1,
          
          children: [
            {
              name: "表格下载",
              id: "a-2",
              pid: "a-1",
              level: 2,
              
            },
            {
              name: "报警处理a",
              id: "a-3",
              pid: "a-1",
              level: 2,
              
              children: [
                {
                  name: "报警处理b",
                  id: "a-a-1",
                  pid: "a-3",
                  level: 3,
                  
                  children: [
                    {
                      name: "报警处理bb",
                      id: "a-a-a-1",
                      pid: "a-a-1",
                      level: 4,
                      
                    }
                  ]
                }
              ]
            },
            {
              name: "附件下载",
              id: "a-4",
              pid: "a-1",
              level: 2,
              
            },
            {
              name: "全部下载",
              id: "a-5",
              pid: "a-1",
              level: 2,
              
            }
          ]
        },
        {
          name: "查看",
          id: "b-1",
          pid: "b",
          level: 1,
          
          children: [
            {
              name: "下载",
              id: "b-2",
              pid: "b-1",
              level: 2,
              
            }
          ]
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
      onClickLeft(){
          window.history.back()
      },
      //获取选中节点
      getNode(){
          let node = this.$refs.treeList.getSelectNode();
          console.log(node)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>