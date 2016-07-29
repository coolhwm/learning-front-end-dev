# Bootstrap 学习笔记

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
	<!-- 标题-->
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

### 2.3. 列表
* 无序列表、有序列表
	* `<ul>`,`<ol>`：标签和HTML一样，Bootstrap只在样式上做了一些细微的优化；
	* `.list-unstyled`:取出默认的样式风格和边距；
	* `.list-inline`：内联列表，横向展示；
* 定义列表
	* `<dl>`,`<dd>`,`<dt>`：标签和HTML，Bootstrap调整了行间距、外边距、加粗；
	* `.dl-horizontal`：水平定义列表，在低分辨率时纵向、高分辨率时横向；
```
<!-- 基本列表 -->
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

```
<table class="table table-bordered table-hover">
```

## 3. 表单
### 3.1. 基本表单
* 表单定义
	* 表单使用普通`<form>`表单定义；
	* 可以使用`role="form"`增强语义；
	*  标签和表单元素是垂直排列的；
```
	<!-- 基本表单 -->
	<form role="form">
	</form>
```
* 表单元素
	* `<input>`,`<textarea>`,`<select>`：基本的HTML元素；
	* `.control-lable`：定义表单类的标签，在内联和水平表单时有额外的样式；
	* `.form-control`：设置为表单控件的元素将100%宽度、浅灰色边框、4px圆角、阴影效果、焦点变色等效果；
	* `.form-group`：可以将`label`和表单元素包裹在`div.form-group`中能够获得最好效果；
```
	<!-- 基本控件 -->
	<div class="form-group">
	    <label for="username">用户名：</label>
	    <input type="input" class="form-control" id="username">
	</div>
```
### 3.2. 水平表单
* 表单定义
	* 在普通表单的`<form>`标签上增加`.form-horizontal`；
	* 屏幕宽度较小时会变成垂直表单；
* 表单元素
	* `<form-group>`相当网格定位的`row`；
	* `<lable>`需要使用`.col-`列定义类修饰宽度；
	* `<input>`等需要被`<div>`包裹，并使用`.col-`列定义类修饰宽度；
```
<!-- 水平表单 -->
<form class="form-horizontal">
	<div class="form-group">
		<label for="inputEmail3" class="col-sm-2 control-label">Email</label>
		<div class="col-sm-10">
			<input type="email" class="form-control" id="inputEmail3" >
		</div>
	</div>
</form>
```
### 3.3. 内联表单
* 表单定义
	* 在普通表单的`<form>`标签上增加`.form-inline`；
	* 表单的控件会在一行之内显示，屏幕宽度较小时会变成垂直表单；
* 表单元素
	* 需要指定`<lable>`，可以使用`.sr-only`将其隐藏，节约控空间；
	* 内联表单的元素宽度为`width:auto`，有时可能需要手动设置；
```
<!-- 内联表单 -->
<form class="form-inline" role="form">
  <div class="form-group">
    <label class="sr-only" for="exampleInputEmail2">邮箱</label>
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="请输入你的邮箱地址">
  </div>
</form>
```

### 3.4. 表单控件
* 基本样式
	* 使用`<div class="form-group">`包裹修饰排列；
	* 使用`.form-control`类修饰样式；
* 控件大小
	* 高度：使用`.input-sm`和`.input-lg`修饰表单元素；
	* 宽度：使用网格系统及横向表格`.form-horizontal`，利用`.col-`列定义控制宽度；
* 控件状态
	* 焦点状态：用伪类赋予`.box-shadow`；
	* 禁用状态：给元素增加`disable`属性；也可以给`<fieldset>`增加该属性，禁用所有表单控件；
* 验证状态
	* 边框颜色：在`form-group`后增加`.has-success`，`.has-error`，`.has-warning`，会给边框加上对的颜色；
	* 图标提示：在`form-group`后增加`.has-freeback`，并在input后增加`<span class="glyphicon glyphicon-ok form-control-feedback"></span>`指定需要显示图标；
* 反馈信息
	* 可以使用`<span class="help-block"></span>`在输入框底部展示提示信息；
	* 如果要在一行内显示提示信息需要使用网格系统；

```html
<!-- 控件状态 -->
  <div class="form-group has-success has-feedback">
    <label class="control-label" for="inputSuccess1">成功状态</label>
    <input type="text" class="form-control" id="inputSuccess1" placeholder="成功状态" >
    <span class="help-block">你输入的信息是正确的</span>
    <span class="glyphicon glyphicon-ok form-control-feedback"></span>
  </div>
```

* `<input>` 输入框
	* `placeholder=xxx`：空白占位符；
	* `type=input`：普通输入框；
	* `type=email`：邮件输入框；
* `<select>` 选择框
	* 使用`multiple`修饰为多行选择框；
* `<textarea>` 文本域
	* 无需设置`cols`，因为`form-control`为100%宽度；
* `<input type="chcekbox">` 多选框
	* 需要被`.checkbox`的`<div>`包裹；
	* 需要被`<lable>`包裹，解决了对齐困难的问题；
	* 内联时需要使用`.checkbox-inline`，不要被div包裹；
* `<input type="radio">` 单选框
	* 需要被`.radio`的`<div>`包裹；
	* 需要被`<lable>`包裹，解决了对齐困难的问题；
	* 内联时需要使用`.radio-inline`，不要被div包裹；
```
<!-- 单选框和复选框 -->
<div class="checkbox">
    <label>
      <input type="checkbox" value="">
      记住密码
    </label>
</div>
<div class="radio">
    <label>
      <input type="radio" value="" checked>
      喜欢
    </label>
</div>
```
### 3.5. 按钮
* 基本按钮：可以使用`<button>`,`<input>`,`<a>`标签增加`.btn`定义按钮，推荐使用`<button>`按钮；
* 按钮风格
	* `.btn-default`：默认按钮风格；灰色；
	* `.btn-primary`：主要操作按钮，蓝色；
	* `.btn-info`：信息按钮，浅蓝色，可以替代默认按钮；
	* `.btn-success`：表示积极操作，浅绿色；
	* `.btn-warning`：表示谨慎操作，浅黄色；
	* `.btn-danger`：表示危险操作，浅红色；
	* `.btn-link`：链接样式按钮，看起来想一个超链接；
* 按钮状态
	* `:hover`：悬浮状态；
	* `:active`：点击状态；
	* `:focus`：焦点状态；
* 禁用按钮
	* `disabled="disabled`：使用属性禁用，禁用默认行为；
	* `.disable`：使用类，在低版本IE中不会禁用提交等行为；
* 按钮大小
	* `.btn-lg`：大型按钮；
	* `.btn-sm`：小型按钮；
	* `.btn-xs`：超小按钮；
* 块状按钮
	* `.btn-block`：按钮会充满整个父容器，按钮变成块级元素，并没有边距；
```
<!-- 按钮 -->
<button class="btn btn-primary btn-lg btn-block" type="button" disabled="disabled">按钮</button> 
```
### 3.6. 图片、图标
* 图片
	* `.img-responsive`：响应式图片，主要针对于响应式设计；
	* `.img-rounded`：圆角图片；
	* `.img-circle`：圆形图片；
	* `.img-thumbnail`：缩略图片；
```
<!-- 图片 -->
<img  class="img-rounded " alt="140x140" src="http://placehold.it/140x140"> 
```
* 图标
	* 原理：字体图片、`@font-face`属性、`fonts`目录；
	* 在内联元素上使用`.glyphicon`类；
	* 其他字体图标： [Font Awesome](http://www.bootcss.com/p/font-awesome/)；
```
<!-- 图标 -->
<span class="glyphicon glyphicon-search"></span>
```

## 4. 网格系统
### 4.1 基本原理
* 原理概要：通过定义容器大小，平分为12份，调整内外边距，结合媒体查询，实现响应式网格系统；
* 工作原理
	* 数据行`.row`必须包含在容器`.container`或`.container-fluid`中；
	* 在行`.row`可以添加列，列不能超过12；
	* 具体的内容应该放在列容器内，只有列容器才能作为行容器的直接子元素；
	* 通过设置内边距从而创建列和列之间的距离，然后通过为首尾列设置负外边距来抵消内边距；
## 菜单、按钮及导航
## 导航条、分页导航
## 其他内置组件
## JavaScript插件