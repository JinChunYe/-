<template>
  	<div id="app">
		<!-- 顶部栏区域，课程选项卡 -->
			<course-tab />
		<!-- 内容区域，课程体系飞机格浏览呈现 -->
			<!-- <content-presentation /> -->
		<!-- 实现拖拽效果实验 -->
			<!-- <tuo-zhuai></tuo-zhuai> -->
			<preview-couerse></preview-couerse>
  	</div>
</template>

<script>
import CourseTab from './components/Course-Tab/CourseTab.vue'
// import ContentPresentation from './components/ContentPresentation/content.vue'
import PreviewCouerse from './components/PreviewOfCourse/PreviewCourse.vue'
export default {
	components: {
		CourseTab,
		// ContentPresentation,
		PreviewCouerse
	}
}
</script>

<style>

</style>
