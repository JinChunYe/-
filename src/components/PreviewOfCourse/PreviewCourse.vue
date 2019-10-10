<template>
    <div>
        <div class = "preview-course">
            <ul class = "semester-ul">
                <li class = "semester-li"
                    v-for = "(semester,index,key) in PreviewCourse"
                    :key = "semester.indexid">  
					<div class = "semester-span">
						<img src = "../../assets/img/semester-logo.png" />
						<p>{{ semester.title }}</p>
					</div>
                       
                    <ul class = "curriculum-ul">
                        <li class = "curriculum-li" 
                            v-for = "(curriculum,index,key) in semester.curriculum"
                            :key = "semester.curriculum.id"
                            :class = " curriculum.id % 2 != 1 ? left : right"
                            @click = "clickCurriculum(index,curriculum)"
                            >
                            <div class = "curriculum-span" ref="element">
								<!-- /* 绘制横直线 */ -->           
								<span class = "Y-axis"></span>  
								<!-- /* 绘制横直线结束 */ -->                                
								<img src = "../../assets/img/curriculum-logo.png" />
								<p>{{ curriculum.title }}</p>
                            </div>
                            <!-- 在点击课程的时候，使用v-show来弹出 -->
							<!-- <div class = "clickhander"
								v-show = "orderChildOne" 
								:class="{ qiehuan:fanhui == index }"  
								v-if = "JudgmentDisplay == '' ? false : true" 
								@click.stop>    -->
							<div class = "clickhander"
								:class="{ qiehuan:fanhui == index }"  
								@click.stop
								v-if="orderChildOne"
								v-show = "semester.indexid == indexid">   
								<!-- /* 绘制到点击之后课程对应的横直线 */ -->
								<span class = "Y-axisclick"></span>
								<!-- /* 绘制到点击之后竖直线 */ -->
								<span class = "X-axisclick" :style = "{'height': (GetLength) + 'px'}"></span>
								<!-- 在后台获取详细课程数据，还有把相对应的线绑定数据一起循环出来 -->
								<ul class="clickhander-ul">
									<li class= "Detailed-course-data"
										v-for = "(detailed,index) in curriculum.detailed"
										:key = "curriculum.detailed.id">
										<!-- 通过p标签把线和数据绑定到一起-->
										<!-- /* 绘制到点击之后横直线 */ -->
										<p>
											<span class = "Y-axis-clicktow"></span>
											{{ detailed.title }}+{{ index }}
										</p>
									</li>
								</ul>
							</div>
                        </li>
                    </ul>
                    <!-- /* 绘制竖直线 */ -->
                  <!-- {{semester.curriculum.length*50+50}} -->
				  <!-- {{ semester.curriculum.detailed.length * 50 + 50 }} -->
                    <span class = "X-axis"  :style = "{'height': (semester.curriculum.length * 50 + 45)+'px'}"></span>
                    <!-- /* 绘制竖直线结束 */ -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
        var PreviewCourse = [
    {
      "indexid": 1,
      "title": "第一学期",
      "curriculum": [
			{
				"id": 1,
				"indexid": 1,
				"title": "分布式5数据库多个字",
				"detailed":[
					{
						"id":86,
						"title":"分布式数据库"
					},
					{
						"id":805,
						"title":"分布式数据库"
					},
					{
						"id":84,
						"title":"分布式数据库"
					},
					{
						"id":85,
						"title":"分布式数据库"
					},
				]
			},
			{
			"id": 2,
			"indexid": 1,
			"title": "大数据2处理",
			"detailed":[
								{
									"id":50,
									"title":"分布式数据库"
								},
								{
									"id":51,
									"title":"分布式数据库"
								},
								{
									"id":52,
									"title":"分布式数据库"
								},
								{
									"id":53,
									"title":"分布式数据库"
								},
								{
									"id":54,
									"title":"分布式数据库"
								},
								{
									"id":55,
									"title":"分布式数据库"
								},
							]
			},
			{
			"id": 3,
			"indexid": 1,
			"title": "自然语1言处理",
			"detailed":[
								{
									"id":56,
									"title":"分布式数据库"
								},
								{
									"id":57,
									"title":"分布式数据库"
								},
								
							]
			},
			{
			"id": 4,
			"indexid": 1,
			"title": "自然0语言处理",
			"detailed":[
								{
									"id":58,
									"title":"分布式数据库"
								},
								{
									"id":59,
									"title":"分布式数据库"
								},
								
							]
			},
		]
    },
    {
      "indexid": 2,
      "title": "第二学期",
      "curriculum": [
        {
          "id": 5,
		  "indexid": 2,
          "title": "分布式数据库多个字",
          "detailed":[
							{
								"id":60,
								"title":"分布式数据库"
							},
							{
								"id":61,
								"title":"分布式数据库"
							},
							{
								"id":62,
								"title":"分布式数据库"
							},
							{
								"id":63,
								"title":"分布式数据库"
							},
							{
								"id":64,
								"title":"分布式数据库"
							},
							{
								"id":65,
								"title":"分布式数据库"
							},
							
						]
        },
        {
          "id": 6,
		  "indexid": 2,
          "title": "大数据处理",
		  "detailed":[
							{
								"id":100,
								"title":"分布式数据库"
							},
							{
								"id":101,
								"title":"分布式数据库"
							},
							{
								"id":102,
								"title":"分布式数据库"
							},
							{
								"id":103,
								"title":"分布式数据库"
							},
							{
								"id":104,
								"title":"分布式数据库"
							},
							{
								"id":105,
								"title":"分布式数据库"
							},
							
						]
        },
        {
          "id": 7,
		  
          "title": "自然语言处理"
        },
        {
          "id": 8,
		  
          "title": "分布式数据库多个字"
        },
        {
          "id": 9,
		  
          "title": "大数据处理"
        },
        {
          "id": 10,
		  "indexid": 2,
          "title": "自然语言处理",
          "detailed":[
				{
					"id":66,
					"title":"分布式数据库"
				},
				{
					"id":67,
					"title":"分布式数据库"
				},
				{
					"id":68,
					"title":"分布式数据库"
				},			
				]
        },
        {
          "id": 11,
		  "indexid": 2,
          "title": "大数据处理",
          "detailed":[
							{
								"id":69,
								"title":"分布式数据库"
							},
							{
								"id":70,
								"title":"分布式数据库"
							},
							{
								"id":71,
								"title":"分布式数据库"
							},
							{
								"id":72,
								"title":"分布式数据库"
							},
							{
								"id":73,
								"title":"分布式数据库"
							},
							{
								"id":74,
								"title":"分布式数据库"
							},
							{
								"id":75,
								"title":"分布式数据库"
							},
							{
								"id":76,
								"title":"分布式数据库"
							},
							
						]
        },
        {
          "id": 12,
		  "indexid": 2,
          "title": "自然语言处理"
        },
        {
          "id": 13,
		  "indexid": 2,
          "title": "分布式数据库多个字"
        },
        {
          "id": 14,
		  "indexid": 2,
          "title": "大数据处理"
        },
        {
          "id": 15,
		  "indexid": 2,
          "title": "自然语言处理"
        }
      ]
    },
    {
      "indexid": 3,
      "title": "第三学期",
      "curriculum": [
        {
          "id": 16,
          "title": "分布式数据库多个字"
        },
        {
          "id": 17,
          "title": "大数据处理"
        },
        {
          "id": 18,
          "title": "自然语言处理"
        },
        {
          "id": 19,
          "title": "分布式数据库多个字"
        },
        {
          "id": 20,
          "title": "大数据处理"
        },
        {
          "id": 21,
          "title": "自然语言处理"
        },
        {
          "id": 22,
          "title": "大数据处理"
        },
        {
          "id": 23,
          "title": "自然语言处理"
        },
        {
          "id": 24,
          "title": "分布式数据库多个字"
        },
        {
          "id": 25,
          "title": "大数据处理"
        },
        {
          "id": 26,
          "title": "自然语言处理"
        }
      ]
    },
    {
      "indexid": 4,
      "title": "第四学期",
      "curriculum": [
        {
          "id": 27,
          "title": "分布式数据库多个字"
        },
        {
          "id": 28,
          "title": "大数据处理"
        },
        {
          "id": 29,
          "title": "自然语言处理"
        },
        {
          "id": 30,
          "title": "分布式数据库多个字"
        },
        {
          "id": 31,
          "title": "大数据处理"
        },
        {
          "id": 32,
          "title": "自然语言处理"
        },
        {
          "id": 33,
          "title": "大数据处理"
        },
        {
          "id": 34,
          "title": "自然语言处理"
        },
        {
          "id": 35,
          "title": "分布式数据库多个字"
        },
        {
          "id": 36,
          "title": "大数据处理"
        },
        {
          "id": 37,
          "title": "自然语言处理1"
        }
      ]
    }
  ]
export default {
    data () {
        return {
            // PreviewCourse:[],
            left:"listleft",
            right:"listright", 
		// v-show点击判断
            orderChildOne:false,
            fanhui:0,
            PreviewCourse:PreviewCourse,
		// 获取每条详细课程对应竖线的长度
			GetLength:'',
		// 判断详细课程是否为空
			JudgmentDisplay:'',

			indexid: ''
        }
    },
    // created(){
    //     this.$axios.get('previewcourse').then(res => {
    //         this.PreviewCourse = res.data.message
    //         }).catch(err => {
    //              console.log("抱歉，数据没传过来",err);
    //        })
    // }
    methods: {
        clickCurriculum(index,curriculum){
        	this.orderChildOne = !this.orderChildOne;
			this.indexid = curriculum.indexid
			this.fanhui = index;
			this.GetLength = curriculum.detailed.length * 20 - 14;
			console.log(curriculum.detailed.length,555);

			// this.JudgmentDisplay = curriculum.detailed;
        }
    }
}    
</script>    
    
<style scoped>
    .clickhander{
        display: none;
    }
    .qiehuan{
        display: block;
    }
</style>    
    
    