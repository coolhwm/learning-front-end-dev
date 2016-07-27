# Bootstrap 学习笔记
@(01. 写字台)

[TOC]

## 1. 简介
Bootstrap框架是一个非常受欢迎的前端开发框架，他能让后端程序员和不懂设计的前端人员制作出优美的Web页面或Web应用程序。

## 2. 排版
Bootstrap通过覆写元素的默认样式，实现对页面排版的优化，让页面在用户面前呈现的更佳完美

### 2.1. 标题
* 标题：使用`<h1>`到`<h6>`标签；
* Bootstrap覆盖了默认样式，并继承文本颜色和字体集；
* 使用`.h1`到`.h6`的CSS类名也可以定义标题；
* 使用`<small>`标签可以设置副标题；
* 副标题没有加粗、灰色字体并用略小字体紧随标题其后展现；
``` html
	<h1>Bootstrap标题一</h1>
	<h2>Bootstrap标题二<small>我是副标题</small></h2>
	<h3>Bootstrap标题三<small>我是副标题</small></h3>
	<h4>Bootstrap标题四</h4>
	<h5>Bootstrap标题五</h5>
	<h6>Bootstrap标题六</h6>
```
### 2.2. 段落与文本
* 段落：使用`<p>`标签定义；全局字号为`14px`，深灰色`10px`上下边距；
* 文本修饰：
	* `.lead`：强调字体，大号字体加粗加边距；
	*  `<strong>`,`<b>`：粗体；
	*  `<em>`，`<i>`：斜体；
*  强调颜色：
	*  `.text-muted`：提示，浅灰色；
	*  `.text-primary`：主要，蓝色；
	*  `.text-success`：成功，浅绿色；
	*  `.text-info`：通知，浅蓝色；
	*  `.text-warning`：警告，黄色；
	*  `.text-danger`：危险，褐色；
*  文本对齐分隔：
	*  `.text-left`：左对齐；
	*  `.text-right`：右对齐；
	*  `.text-center`：居中对齐；
* 代码段
	* `<code>`：单个单词；
	* `<pre>`：多行代码；可以使用`.pre-scrollable`过长时会出现滚动条；
	* `<hbd>`：用户键盘输入；
* 可以使用`LESS`或`Sass`等CSS预处理器修重新编译、自定义相关参数；
``` html
<!-- 段落-->
<p class="text-justify">普通段落-两端</p>
<p class="text-right">普通段落-居右</p>
<p class="lead text-left">强调段落-居左</p>
<p class="text-center">
	普通段落-居中
	<strong class="text-muted">加粗文本-提示</strong><br/>
	<b class="text-primary">加粗文本-主要</b><br/>
	<em class="text-success">斜体文本-成功</em><br/>
	<i class="text-info">斜体文本-通知</i><br/>
	<cite class="text-warning">引用文本-警告</cite><br/>
	<small class="text-danger">小文本-危险</small><br/>
</p>
```
>![段落效果图](./1469633696719.png)

### 2.3. 列表
* 无序列表、有序列表
	* `<ul>`,`<ol>`：标签和HTML一样，Bootstrap只在样式上做了一些细微的优化；
	* `.list-unstyled`:取出默认的样式风格和边距；
	* `.list-inline`：内联列表，横向展示；
* 定义列表
	* `<dl>`,`<dd>`,`<dt>`：标签和HTML，Bootstrap调整了行间距、外边距、加粗；
	* `.dl-horizontal`：水平定义列表，在低分辨率时纵向、高分辨率时横向；
```
<ul class="list-unstyled">
	<li>城市：</li>
	<li>
		<ul class="list-inline">
			<li>北京</li>
			<li>上海</li>
			<li>南京</li>
			<li>厦门</li>
		</ul>
	</li>
</ul>
```
### 2.4. 表格
* 表格颜色：
	* `.active`：活动信息，浅灰色；
	* `.success`：成功，浅绿色；
	* `.info`：提示信息，浅蓝色；
	* `.warning`：警告，浅黄色；
	* `.danger`：危险、错误，浅红色；
* 表格样式：
	* `.table`：基础表格，仅有基本样式；
	* `.table-hover`：悬浮高亮的表格；
	* `.table-striped`：隔行换色的表格；
	* `.table-bordered`：有边框的表格；
	* `.table-condensed`:紧凑的表格，单元格内边距比较小；
	* `<div class="table-responsive">`：响应式表格，放在容器中，宽度较小时容器出现滚动条；

>![表格样式](./1469637460944.png)

## 3. 表单
### 3.1. 表单布局
## 网络系统
## 菜单、按钮及导航
## 导航条、分页导航
## 其他内置组件
## JavaScript插件

