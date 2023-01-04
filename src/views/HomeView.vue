<template>
  <!-- 导航 -->
  <div class="top">
    <div class="logo">
      Logo
    </div>

    <div class="hd-img">
      头像
    </div>

    <div class="nums"> 50/80 </div>

  </div>
 
  <div style="display:flex;justify-content:space-between">
    <el-scrollbar  class="left">   
      <div v-for="(i,index) in data.list" :key="index" >
        <div class="left-box" @click=history(index)>{{i.q}} </div>
      </div>

    </el-scrollbar>
    <!-- 主要内容 -->
    
    <el-scrollbar class="main">
      <div class="question">
        <div class="wen"> 问 </div>
        <input type="text" placeholder="What's your problem" v-model="ques.q" @keyup.enter="ask(ques.q)">
      </div>
      
      <div  class="answer"> 
        <div class="da"> 答</div>
        <div class="detail">
         {{ques.a}}

        </div>

      </div>
      

    </el-scrollbar>



  </div>
 

</template>

<script  setup>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { getlist } from "@/http/api";

const data = reactive({
  list:[{q:'世界第一座高峰',a:'雷锋'},{q:'花儿为什么这么红',a:'花青素'},{q:'狗为什么喜欢狗叫',a:'因为喜欢'}]

})


// 获取左侧历史数据
// onMounted(()=>{
//   getlist().then((res) => {
//         data.list=res.data.data.length
//       });
//     }

// )


const ques = reactive({
  q:'',
  a:''
})

const ask = (data) => {
    if (data) {
      console.log(data);
      ques.a='sdadadad'
    }else{
      alert('问题不能为空')
    } 
};

const history=(i)=>{
  console.log(i);
  ques.a=data.list[i].a
  ques.q=data.list[i].q
}


</script>

<style lang="scss">
.top{
  box-sizing: border-box;
  width:100%;
  height: 50px;
  background-color: #f9f9fb;
  display: flex;
  padding-top:5px ;

  .logo{
    font-size: 36px;
    flex-grow: 6;
    padding-left: 20px;
  }
  .hd-img{
    width: 40px;
    height: 40px;
    border-radius:20px;
    background-color: rgb(138, 133, 133);
    flex-grow: 0.1;
    text-align: center;
    line-height: 40px;
    
  }
  .nums{
    font-size: 16px;
    flex-grow: 0.5;
    text-align: center;
    line-height: 40px;
  }

}
.left{
  box-sizing: border-box;
  width: 248px;
  height:calc(100vh - 50px);
  background-color:#1f2123;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
 

}

.left-box{
  height: 40px;
  background-color:#1f2123;
  text-align: center;
  line-height: 50px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;
  padding: 0 20px;
}

.left-box:hover{

  background:#53789e;
}

.main{
  box-sizing: border-box;
  display: inline-block;
  width: calc(100vw - 222px);
  height:calc(100vh - 50px);
  background-color:  #ffffff;
  
  .question{
    width:100%;
    background-color: #ffffff;
    padding: 15px 330px;

    .wen{
      width: 40px;
      height: 40px;
      background-color: #f7bc09;
      color: #ffffff;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      border-radius: 4px;
      display: inline-block;
      margin-right: 32px;
    }
    input{
      display: inline-block;
      height: 40px;
      width: 45%;
      border: none;
      font-size: 16px;
    }

  }

  .answer{
    width: 100%;
    background-color: #f7f7f7;
    padding: 15px 330px;
    position: relative;

    min-height: 50px;

    .da{
      width: 40px;
      height: 40px;
      background-color:#00997e;
      color: #ffffff;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      border-radius: 4px;
      display: inline-block;
      position: absolute;  
    }

    .detail{
      display: inline-block;
      margin-left: 74px;
    }
  }


}


</style>