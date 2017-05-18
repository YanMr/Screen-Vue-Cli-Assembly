<template>
  <div>
    <div class="scr_bto">
      <div class="scr_bto_screen center" @click="show=!show">
        <img src="../../images/ico_Nfilter.png" class="scr_bto_screen_ico">
        <span>筛选</span>
      </div>
    </div>
    <!--筛选弹层begin-->
    <div class="dilog_main" id="dilog_main">
      <transition  @before-enter="beforeEnter" @enter="enter1" :css="false"><div class="dilog_mask" v-show="show"></div></transition>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false">
    <screening  v-show="show" @scr-evet="dialog"></screening>
  </transition>
    </div>
    </div>
    <!--筛选弹层end-->
  </div>
</template>
<script>
  import  screening from '@/components/ticket/screening';
  export default{
    data(){
      return {
        show:false
      }
    },
    components:{screening},
    methods:{
      dialog (foo){
        switch (foo){
          case 1:
            this.show=false
            break;
          case 2:
            console.log("我点清空")
                break;
          case 3:
            console.log("我点了确定")
                break;
          default:
                alert("传递参数有误"+foo)
        }
      },
      beforeEnter: function (el) {
        el.style.opacity = 0;
      },
      enter: function (el, done) {
        Velocity(el, { opacity: 1,bottom:0}, { duration: 300 }, { complete: done })
      },
      enter1: function (el, done) {
        Velocity(el, { opacity: 1}, { duration: 500 }, { complete: done })
      },
      leave: function (el, done) {
        Velocity(el, { opacity: 0,bottom:'-300px'}, { duration: 300 }, { complete: done })
      }
    }
  }
</script>
<style>
  .dilog_main{position:absolute;top:0;left:0;z-index:99999;}
  .dilog_mask{position:fixed;width:100%;height:100000px;background:rgba(0,0,0,.3); transform: translateY(-1000PX)}
  .tickliststation div{padding:5px 0 5px 30px;width:135px;height:15px;text-overflow:ellipsis;white-space:nowrap;line-height:15px}
.tickliststation div{position:relative;overflow:hidden;font-size:13px}
  .scr_bto{position:fixed;bottom:0;z-index:100;display:flex;width:100%;height:50px;background:rgba(0,0,0,.6);line-height:50px;}
  .scr_bto_data{flex:1;color:#fff;font-size:16px;  }
  .scr_bto_data_ico,.scr_bto_data_ico2,.scr_bto_money_ico,.scr_bto_money_ico2{position:relative;top:-1px;display:inline-block;margin-right:5px;width:17px;height:17px;border:1px solid #fff;border-radius:50%;vertical-align:sub}
  .scr_bto_data_ico:before,.scr_bto_money_ico:before{position:absolute;top:5px;left:6px;width:3px;height:3px;border:1px solid #fff;border-color:#fff #fff transparent transparent;content:"";-webkit-transform:rotate(-45deg)}
  .scr_bto_data_ico:after,.scr_bto_money_ico:after{position:absolute;top:5px;left:8px;width:1px;height:9px;background:#fff;content:""}
  .scr_bto_money,.scr_bto_screen{color:#fff;font-size:1pc;flex:1}
  .scr_bto_screen_ico{position:relative;top:-1px;margin-right:5px;width:18px;height:18px}
</style>
