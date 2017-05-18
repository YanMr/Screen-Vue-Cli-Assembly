<template>
  <div class="screen_main" >
      <div >
        <div class="screen_her">
          <div class="screen_foo" @click="cancel">取消</div>
          <div class="screen_cente" @click="empty"><span class="screen_cente_clear">清空选项</span></div>
          <div class="screen_boo" @click="determine" >确定</div>
        </div>
        <div class="clearfix screen_con">
          <div class="screen_left">
            <div @click="screen_left(1)"  :class="{screen_left_one_cur:screen_left1,screen_left_one:!screen_left1}">
              <div class="screen_left_one_ico"></div>
              <span>发车时段</span>
            </div>
            <div @click="screen_left(2)" :class="{screen_left_two:!screen_left2,screen_left_two_cur:screen_left2}">
              <div class="screen_left_two_ico">
                <img src="../../images/ico_car_filter.png">
              </div>
              <span>始发站</span>
            </div>
            <div @click="screen_left(3)" :class="{screen_left_three:!screen_left3,screen_left_three_cur:screen_left3}">
              <div class="screen_left_three_ico">
                <img src="../../images/ico_car_filter.png">
              </div>
              <span>到达站</span>
            </div>
          </div>
          <div class="screen_right">
            <div class="screen_right_one" v-show="screen_left1">
              <div :class="[checked1 ? 'checked' : '', 'screen_right_one_li']" @click="empt(1)"><span>不限</span><i></i></div>
              <div  v-for="(i, index)  in timeList1"  :class="[i.checked ? 'checked' : '', 'screen_right_one_li']" @click="emptfoo(1,index,i);"><span>{{i.name}}</span><i></i></div>
            </div>
            <div class="screen_right_one" v-show="screen_left2">
              <div :class="[checked2 ? 'checked' : '', 'screen_right_one_li']"  @click="empt(2)"><span>不限</span><i></i></div>
              <div v-for="(i, index) in timeList2" :class="[i.checked ? 'checked' : '', 'screen_right_one_li']" @click="emptfoo(2,index,i)"><span>{{i.name}}</span><i></i></div>
            </div>
            <div class="screen_right_one" v-show="screen_left3">
              <div :class="[checked3 ? 'checked' : '', 'screen_right_one_li']"  @click="empt(3)"><span>不限</span><i></i></div>
              <div v-for="(i, index) in timeList3" :class="[i.checked ? 'checked' : '', 'screen_right_one_li']" @click="emptfoo(3,index,i)"><span>{{i.name}}</span><i></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  let timeList1=[
    {name:'凌晨(00:00--06:00)',checked:false},
    {name:'上午(06:00--12:00)',checked:false},
    {name:'下午(12:00--18:00)',checked:false},
    {name:'晚上(18:00--24:00)',checked:false}
  ],
    timeList2=[
      {name:'天津通莎站',checked:false},
      {name:'北京通莎站',checked:false},
      {name:'南京通莎站',checked:false}
    ],
    timeList3=[
      {name:'完美世界小说',checked:false},
      {name:'星辰变',checked:false},
      {name:'帝霸',checked:false}
    ]
  export default{
    data(){
      return {
        checked1:true,
        checked2:true,
        checked3:true,
        screen_left1:true,
        screen_left2:false,
        screen_left3:false,
        timeList1:timeList1,
        timeList2:timeList2,
        timeList3:timeList3
      }
    },
    methods:{
      cancel(){ //取消
        this.$emit('scr-evet',1)
        this.empty();
      },
      determine(){//确定
        this.$emit('scr-evet',3)
      },
      empty(){//清空
        this.$emit('scr-evet',2);
        for(let i=1;i<4;i++ ){
          this.empt(i);
        }
        this.screen_left1=true;
        this.screen_left2=false;
        this.screen_left3=false;
      },
      empt(foo){
         let  tex=eval('timeList'+foo), b= 0;
            this['checked'+foo]=!this['checked'+foo]
                for(let i of tex){
                 if(this['checked'+foo]){
                   b++;
                   i.checked=false;
                 }else{
                   b++;
                   if(b>= tex.length){
                     this['checked'+foo]=true;
                   }
                 }
                }
        console.log(b)
      },
      emptfoo(num,k,j){
            let b= 0,tex=eval('timeList'+num);
                 j.checked= !j.checked;
                  for(let i of tex){
                    if(!i.checked){
                      b++;
                      if(b>= tex.length){
                        this['checked'+num]=true;
                      }else{
                        this['checked'+num]=false;
                      }
                    }
                }
            },
      screen_left(boo){//table切换
           switch (boo){
             case 1:
               this.screen_left1=true;
               this.screen_left2=false;
               this.screen_left3=false;
                   break;
             case 2:
               this.screen_left1=false;
               this.screen_left2=true;
               this.screen_left3=false;
                   break;
             case 3:
               this.screen_left1=false;
               this.screen_left2=false;
               this.screen_left3=true;
           }
      }
    }
  }
</script>
<style>
  .screen_main{position:fixed;bottom:-100%; left:0;width:100%;background:#333;}
  .screen_her{display:flex;padding:0 20px;height:45px;border-bottom:solid #7a7a7a 1px;line-height:45px}
  .screen_foo{color:#a3b2c5;font-size:15px;flex:1}
  .screen_cente{text-align:center;flex:2}
  .screen_cente_clear{display:inline-block;width:100px;height:25px;border-radius:10px;background:#fff;color:#ff7600;font-size:15px;line-height:25px}
  .screen_boo{color:#a3b2c5;text-align:right;font-size:15px;flex:1}
  .screen_con{display:flex}
  .screen_left{flex:3;}
  .screen_left_one{padding-top:12px;  height:52px;text-align:center;font-size:12px;color:#fff; border-bottom:solid #7a7a7a 1px; border-right:solid #7a7a7a 1px;  }
  .screen_left_one_ico{position:relative;display:block;margin:0 auto 5px;width:20px;height:20px;border:1px solid #fff;border-radius:50%;}
  .screen_left_one_ico:after{position:absolute;top:6px;left:5px;display:block;width:8px;height:2px;background:#fff;content:"";transform:rotate(90deg);}
  .screen_left_one_ico:before{position:absolute;top:10px;left:8px;display:block;width:10px;height:2px;background:#fff;content:"";transform:rotate(180deg);}
  .screen_left_two{padding-top:20px;height:60px;border-right:solid #7a7a7a 1px;border-bottom:solid #7a7a7a 1px;color:#fff;text-align:center;font-size:12px;}
  .screen_left_three{padding-top:12px;height:52px;border-right:solid #7a7a7a 1px;color:#fff;text-align:center;font-size:12px;}
  .screen_left_three_ico img{margin-bottom:5px;width:27px;height:19px;}
  .screen_left_two_ico img{margin-bottom:5px;width:27px;height:19px;transform:rotateY(180deg);}
  .screen_right{flex:10;}
  .screen_right_one_li{position:relative;padding:0 20px 0 10px;height:41px;border-bottom:solid #7a7a7a 1px;color:#fff;font-size:14px;line-height:40px;}
  .screen_right_one_li i{position:absolute;top:50%;right:20px;margin-top:-9px;width:16px;height:16px;border:1px solid #fff;border-radius:2px;}
  .screen_right_one_li.checked i{border:1px solid #ff7600;}
  .screen_right_one_li.checked i:before{position:absolute;top:3px;left:2px;width:11px;height:6px;border:1px solid #ff7600;border-color:transparent transparent #ff7600 #ff7600;border-width:0 0 1px 1px;content:"";-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);-ms-transform:rotate(-45deg);}
  .screen_left_one_cur{padding-top:12px;height:52px;text-align:center;font-size:12px;color:#fff;border-bottom:solid #7a7a7a 1px;border-right:solid #7a7a7a 1px;position:relative;background:#000;}
  .screen_left_one_cur:after {content:"";position:absolute;top:50%;right:-12px;width:9px;height:9px;border:1px solid #1a2430;border-color:#7a7a7a rgba(0,0,0,0) rgba(0,0,0,0) #7a7a7a;background:#333;transform:rotate(-45deg) translateY(-9px);}
  .screen_left_two_cur{position:relative;padding-top:20px;height:60px;border-right:solid #7a7a7a 1px;border-bottom:solid #7a7a7a 1px;background:#000;color:#fff;text-align:center;font-size:12px;}
  .screen_left_two_cur:after{position:absolute;top:50%;right:-12px;width:9px;height:9px;border:1px solid #1a2430;border-color:#7a7a7a transparent transparent #7a7a7a;background:#333;content:"";transform:rotate(-45deg) translateY(-9px);}
  .screen_left_three_cur{position:relative;padding-top:12px;height:52px;border-right:solid #7a7a7a 1px;background:#000;color:#fff;text-align:center;font-size:12px;}
  .screen_left_three_cur:after{position:absolute;top:50%;right:-12px;width:9px;height:9px;border:1px solid #1a2430;border-color:#7a7a7a transparent transparent #7a7a7a;background:#333;content:"";transform:rotate(-45deg) translateY(-9px);}
</style>
