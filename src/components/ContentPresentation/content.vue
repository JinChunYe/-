<template>
<div class="expense-center">
<div class="fl expense-left">
<p class="left-titles">费用中心</p>
<ul class="order-con">
<router-link to="/control-home/expense-center/my-order	"><li @click="orderOne(0)" :class="clickColor==0?'click-color':'default-color'">我的订单</li></router-link>
<router-link to="/control-home/expense-center/renew-manage"><li class="default-color" @click="orderOne(1)" :class="clickColor==1?'click-color':'default-color'">续费管理</li></router-link>
<li class="order-par default-color">
<div @click="orderOne(2)" :class="clickColor==2?'click-color':'default-color'">发票管理<i class="order-close" :class="orderChildOne?'orderOpen':'order-close'"></i></div>
<ul class="order-child" v-show="orderChildOne" >
<li>发票索取</li>
<li>发票列表</li>
<li>发票信息管理</li>
<li>发票寄送地址管理</li>
</ul>
</li>
<li class="order-par default-color">
<div @click="orderTwo(3)" :class="clickColor==3?'click-color':'default-color'">合同管理<i class="order-close" :class="orderChildTwo?'orderOpen':'order-close'"></i></div>	
<ul class="order-child" v-show="orderChildTwo">
<li>合同申请</li>
<li>合同管理</li>
</ul>
</li>
</ul>
</div>
<div class="fl expense-right">
<transition name="move" mode="out-in">
<router-view></router-view>
</transition>
</div>

</div>
</template>

<script>	
export default {	
data() {
return {
orderChildOne:false,//点击子列表显示隐藏
orderChildTwo:false,
clickColor:0,//点击对应的颜色
}
},
methods: {
orderOne:function(index){//点击显示子列表或隐藏子列表
if(index==1){//点击下标为2的时候下标为3也展开，实际效果是不展开的，加上判断就不会出现这种情况了
this.clickColor=index;
}else{
this.orderChildOne=!this.orderChildOne;
this.clickColor=index;
}

},
orderTwo:function(index){
this.orderChildTwo=!this.orderChildTwo;
this.clickColor=index;
}
}
};
</script>

