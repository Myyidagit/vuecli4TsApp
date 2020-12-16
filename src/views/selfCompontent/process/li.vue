<template>
  <div class="myDiv">
      <li
                v-for="(itemb,indexb) in item.children"
                :key="indexb"
                class="item_box b"
                :style="{'margin-left':20+'px'}"
                >
                <div class="options">
                    <img :class="[itemb.isOpen?'roate':'',itemb.isLeaf?'isopacity':'']" src="../../../assets/images/mine/down.png" alt  @click="openOption(itemb)" />
                    <van-switch
                    v-model="itemb.isSelect"
                    :size="switchSize"
                    @change="changeSwitch(itemb,indexb)"
                    />
                    <span class="item_name">{{ itemb.name }}</span>
                </div>
                <div v-if="itemb.children"  v-show="itemb.isOpen">
                    <li
                    v-for="(itemc,indexc) in itemb.children"
                    :key="indexc"
                    class="item_box c"
                    :style="{'margin-left':40+'px'}"
                    >
                    <div class="options">
                        <img  v-if="!itemc.isLeaf" :class="[itemc.isOpen?'roate':'']" src="../../../assets/images/mine/down.png" alt  @click="openOption(itemc)" />
                        <van-switch
                        v-model="itemc.isSelect"
                        @change="changeSwitch(itemc,indexc)"
                        :size="switchSize"
                        />
                        <span class="item_name">{{ itemc.name }}</span>
                    </div>
                    <div v-if="itemc.children" v-show="itemc.isOpen"> 
                        <li
                        v-for="(itemd,indexd) in itemc.children"
                        :key="indexd"
                        class="item_box c"
                        :style="{'margin-left':60+'px'}"
                        >
                        <div class="options">
                            <img  v-if="!itemd.isLeaf" src="../../../assets/images/mine/down.png" alt />
                            <van-switch
                            v-model="itemd.isSelect"
                            @change="changeSwitch(itemd,indexd)"
                            :size="switchSize"
                            />
                            <span class="item_name">{{ itemd.name }}</span>
                        </div>
                        </li>
                    </div>
                    </li>
                </div>
                </li>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
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
.myDiv{}
</style>