<template>
    <!-- 工作岗位后台最多传输三层，如果超过层的数据，就会影响到课程体系飞机格的样式 -->
    <div id = "coursetab">
        <div class = "container">
            <ul>
                <!-- <li class="on">大数据可视化工程545456456465456465师</li>
                <li>大数据运维工程师</li>
                 <li>大数据运维工程师</li>
                  <li>大数据运维工程师</li>
                   <li>大数据运维工程师</li>
                    <li>大数据运维工程师</li> -->
                <li         
                    :class = "{'tab-content': index == currenindex}"
                    @click = "clickHander(index)"
                    v-for = "(item,index) in ContentList"
                    :key = "item.id"
                    v-text = "item.title"
                ></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ContentList:{},
            currenindex:0
        }
    },
    methods: {
        clickHander(index){
            this.currenindex = index; 
        }
    },
    created () {
        this.$axios.get('coursetab').then(res => {
            console.log(res.data.message);
            this.ContentList = res.data.message
        }).catch(err => {
            console.log("抱歉，数据没传过来",err);
        })
    }
}
</script>

<style scoped>
    .tab-content{
        color: #1277eb;
        border: 1px solid #65aafa;
        background-color: #eaf5ff;
    }
</style>