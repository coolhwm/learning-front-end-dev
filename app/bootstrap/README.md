# Bootstrap 学习笔记
## 1. 简介
Bootstrap框架是一个非常受欢迎的前端开发框架，他能让后端程序员和不懂设计的前端人员制作出优美的Web页面或Web应用程序。

> 慕课网-玩转Bootstrap（大漠）：http://www.imooc.com/learn/141
> Bootstrap中文网：http://v3.bootcss.com/

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
* 按钮图标
	* 按钮中可以包裹图标，例如`<span class="glyphicon glyphicon-step-backward"></span>`；
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
	* 图标只能引用在空元素上，需要单独在一个`<span>`标签内，可以把它们应用到按钮、工具条中的按钮组、导航或输入框等地方。
	* 其他字体图标： [Font Awesome](http://www.bootcss.com/p/font-awesome/)；
```
<!-- 图标 -->
<span class="glyphicon glyphicon-search"></span>
```

## 4. 网格系统
### 4.1. 基本原理
* 原理概要：通过定义容器大小，平分为12份，调整内外边距，结合媒体查询，实现响应式网格系统；
* 工作原理
	* 数据行`.row`必须包含在容器`.container`或`.container-fluid`中；
	* 在行`.row`可以添加列，列不能超过12；
	* 具体的内容应该放在列容器内，只有列容器才能作为行容器的直接子元素；
	* 通过设置内边距从而创建列和列之间的距离，然后通过为首尾列设置负外边距来抵消内边距；
	* 列使用浮动实现；

### 4.2. 基本用法
* 容器
	* `.container`：宽度是固定的，根据屏幕大小的不同，可能为`750px`,`970px`或`1170px`；
	* `.container-fluid`：宽度始终为父容器的`100%`；列元素的宽度也会随着容器变化；
* 行元素
	* `.row`：定义网格的一行，一行分为`12`个槽位；
	* 如果一行给超过12列，那么多余的部分将会放在新的一行中；
* 列元素
	* `.col-xs-`：适用超小屏幕，总是纵向堆叠；
	* `.col-sm-`：适用小屏幕，小于750像素时纵向队列；
	* `.col-md-`：适用普通电脑屏幕，小于970像素时纵向堆叠；
	* `.col-lg-`：适用高分辨率PC屏幕，小于1170像素时纵向堆叠；
	* 边距：列元素之间总是有30像素的边界，首位列离边框15像素；
	* 高度：列的高度是自动的，根据内容自动拓展；
```
<!-- 网格容器 -->
<div class="container">
  <div class="row">
    <div class="col-xm-4">.col-xm-4</div>
    <div class="col-xm-8">.col-xm-8</div>
  </div>
</div>
```
* 列偏移
	* `.col-md-offset-`：列向右移动多列
* 列排序
	* `.col-md-push-`：列向右移动；
	* `.col-md-pull-`：列向左移动；
* 列嵌套
	* 列可以嵌套，可以把已存在的列单元格当做行元素；
```
<!-- 列嵌套容器 -->
<div class="row">
        <div class="col-md-8">
            <div class="col-md-8">col-md-8</div>
            <div class="col-md-4">col-md-4</div>
        </div>
        <div class="col-md-4">
             <div class="col-md-9">col-md-9</div>
            <div class="col-md-3">col-md-3</div>
        </div>
    </div>
```

## 5. 基础组件
### 5.1. 下拉框
* 基本原理
	* `.dropdown-menu`默认为`display:none`；
	* 点击时会给`.dropdown`增加`.open`；
```
.open > .dropdown-menu {
  display: block;
}
```
* 下拉框容器
	* `.dropdown`或`position: relative;`的元素；
	* 容器里包含父菜单的按钮`<button>`及子菜单的列表`<ul>`；
```
<!-- 下拉框容器 -->
<div class="dropdown"></div>
```
* 父菜单
	* 父菜单为按钮元素`<button type="button">`；
	* 父菜单需要使用`.btn`，可以加上按钮的修饰类`.btn-primary`等；
	* 父菜单需要增加`.dropdown-toggle`，修饰样式及方便调用JS；不加不影响样式；
	* 父菜单需要增加属性`data-toggle="dropdown"`，否则无法触发事件；
	* 父菜单需要增加子元素`<span class="caret"></span>`，否则无法展现右侧的小箭头；
```
<!-- 下拉父菜单 -->
<button class="btn btn-default dropdown-toggle" type="button" id="test" data-toggle="dropdown">
     父菜单名称
     <span class="caret"></span>
</button>
```
* 菜单项
	* 菜单项容器为列表元素`<ul>`；
	* 菜单项容器需要增加`.dropdown-menu`；
	* 菜单项为链接元素`<a>`，无需增加特别的样式；
	* `dropdown-menu-right`：可以使菜单项与父容器右侧对齐；
	* `.disabled`：禁用菜单项；但不会禁用点击事件；
```
<!-- 下拉菜单项 -->
<ul class="dropdown-menu">
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
  <li><a href="#">Something else here</a></li>
  <li><a href="#">Separated link</a></li>
</ul>
```
* 菜单分隔符
	* `<li class="divider"></li>`：分隔符‘；
* 菜单头部
	* `<li class="dropdown-header">分类1</li>`:菜单头部；

### 5.2. 按钮
* 按钮组
	* 使用`.btn-group`包裹多个菜单；
	* 连续的多个按钮会紧密相连，中间按钮会被取消圆角；
	* 尺寸：使用`btn-group-sm`，`btn-group-xs`，`btn-group-lg`设置按钮组尺寸，不需要给每个按钮设置大小；
```
<!-- 按钮组 -->
<div class="btn-group">
    <button type="button" class="btn btn-default">按钮1</button>
    <button type="button" class="btn btn-default">按钮2</button>
</div>
```
* 按钮工具栏
	* 使用`btn-toolbar`来包裹多个按钮组；
	* 按钮工具栏会设置按钮组之间距离、多个按钮组浮动、顶部对其；
```
<!-- 按钮工具栏 -->
<div class="btn-toolbar">
  <div class="btn-group"></div>
  <div class="btn-group"></div>
</div>
```
* 嵌套按钮组
	* 实现把下拉菜单和普通的按钮组排列在一起；
	* 在按钮组中嵌套按钮组，并用嵌套组的`.btn-group`代替下拉菜单的`.dropdown`；
	* 在`.btn-group`元素上增加`.dropup`，可以让下拉框向上弹出；
```
<!-- 嵌套按钮组 -->
<div class="btn-group">
	<div class="btn-group">
		<!-- 下拉菜单 -->
	</div>
</div>
```
* 分裂按钮组
	* 按钮组中变为一个普通按钮和一个下拉按钮，图标放在下拉按钮中；
```
<!-- 分裂按钮组 -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
	   <!-- 下拉菜单项 -->
  </ul>
</div>
```

* 垂直分组
	* 使用`.btn-group-vertiacl`让按钮组中的按钮垂直排列；
* 两端对齐
	* 使用`.btn-group-justified`让按钮组中的按钮占满父容器的宽度的100%；
	* 按钮的宽度会被等分；

### 5.3. 导航
* 基础导航
	* `.nav`：所有导航样式都依赖这个类；
	* 导航的本质是无序列表`<ul>`；
	* 导航在小分辨率下自动变成堆叠导航；
* 导航样式
	* `.nav-tabs`：标签页导航条；
	* `.nav-pills`：胶囊式导航条；
	* `.nav-stacked`：堆叠导航条，要和`.nav-pills`配合，可以使用`  <li class="nav-divider"></li>`增加分隔符；
	* `.nav-justified`：自适应导航，宽度为父容器100%；
* 导航状态
	* 在`<li>`上增加`.active`即可将该项设为激活状态；
	* 在`<li>`上更增加`.disabled`可以将标签置为禁用状态；
	* 另外还有悬浮状态和点击状态；
	* 点击事件需要配合JS插件实现；
```
<!-- 堆叠导航 -->
<ul class="nav nav-pills nav-stacked">
  <li class="active"><a href="#">菜单项</a></li>
  <li class="disabled"><a href="#">菜单项</a></li>
  <li><a href="#">菜单项</a></li>
  <li class="nav-divider"></li>
  <li><a href="#">菜单项</a></li>
</ul>
```
* 二级导航
	* 将一个`<li>`设置为`.dropdown`即可定义一个二级菜单，方式基本和下拉菜单一致；
	* 主菜单项使用`<a>`标签，并且只需要`.dorpdown-toggle`即可；
```
<!-- 二级导航 -->
<ul class="nav nav-pills">
  <li class="dropdown">
    <a class="dropdown-toggle"  href="#" data-toggle="dropdown">
      下拉菜单项
      <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
      <li><a href="#">子菜单</a></li>
      <li><a href="#">子菜单</a></li>
      <li class="nav-divider"></li>
      <li><a href="#">子菜单</a></li>
      <li><a href="#">子菜单</a></li>
    </ul>
  </li>
</ul>
```
* 面包屑导航
	* 使用`<ol>`标签，并加上`.breadcurmb`属性；
	* 当前激活的标签加上`.active`并且不需要嵌套`<a>`标签；
```
<ol class="breadcrumb">
  <li><a href="#">面包屑</a></li>
  <li><a href="#">面包屑</a></li>
  <li><a href="#">面包屑</a></li>
  <li class="active">面包屑</li>
</ol>
```
### 5.4. 导航条
* 导航条`navbar` 与导航`nav`的区别
	* 导航条是在应用或网站中作为导航页头的**响应式基础组件**，移动设备上可以折叠（并且可开可关），且在视口（viewport）宽度增加时逐渐变为水平展开模式；
	* 导航条可以是纯链接（类似导航），也可以是表单，还有就是表单和导航一起结合等多种形式；
	* 导航条中有背景色；
	* 导航条不应该放在有内边距的容器内，否则在窄屏幕下可能展现异常；
* 基础导航条
	* 导航条容器：在`<div>`上增加`.navbar`；
	* 导航条容器样式：在`.navbar`上增加`.navbar-default`,`.navbar-inverse`等风格属性；
	* 导航：在导航条容器中增加导航`.nav`，并标注是导航条的导航`.navbar-nav`；
```
<!-- 基础导航条 -->
<div class="navbar navbar-default">
  <ul class="nav navbar-nav">
    <li class="active"><a href="#">菜单项</a></li>
    <li><a href="#">菜单项</a></li>
    <li><a href="#">菜单项</a></li>
    <li><a href="#">菜单项</a></li>
  </ul>
</div>
```
* 导航条标题
	* 可以在`.navbar-nav`前加入`.navbar-header`，作为导航条标题；
	* 标题内容放在`<a>`标签内，并且加上`.navbar-brand`；
	* 可以使用图标；
```
<!-- 导航条标题 -->
<div class="navbar-header">
	 <a href="#" class="navbar-brand">
      <span class="glyphicon glyphicon-eye-open"></span>
    </a>
	<a href="#" class="navbar-brand">标题</a>
</div>
```
* 二级菜单
	* 和`.nav`中的代码格式一致；
```
<!-- 二级菜单 -->
<ul class="nav navbar-nav">
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        菜单名称
        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
	      <!-- 二级菜单项 -->
      </ul>
    </li>
  </ul>
```
* 导航条中的表单
	*	可以在`.navbar`中加入`<form>`并加上`.navbar-form`，内嵌表单会呈现良好的垂直对齐；
	*	可以使用`.navbar-right`或`.navbar-left`控制表单的对齐方式；
	*	某些表单组件，例如输入框组，可能需要设置一个固定宽度；
	*	表单在小屏幕时会折叠展现；
	*	表单中可以内嵌按钮；
```
<!-- 导航条表单 -->
<form action="##" class="navbar-form navbar-right">
  <div class="form-group">
    <input type="text" class="form-control" placeholder="请输入标题">
  </div>
  <button type="submit" class="btn btn-default">检索</button>
</form>
```
* 其他元素
	* `.nav-text`：文本；；
	* `.nav-btn`：按钮；
	* `.nav-link`：链接；
* 固定导航栏
	*  `.navbar-fixed-top`：导航条固定在浏览器窗口顶部；
	*  `.navbar-fixed-bottom`：导航条固定在浏览器窗口底部；
*  响应式导航栏
	*  响应式导航条依赖 `collapse` 插件；
	*  收缩按钮：在`.navbar-header`增加一个收缩按钮，其中三个`<span>`是图标的固定写法，还需增加`.navbar-toggle`,`data-toggle="collaps"`, `data-taget="收缩元素标识"`；按钮在小屏幕时才会出现；
	*  标题：标题还是使用`navbar-brand`定义，始终会显示；
	*  主菜单部分：需要在小屏时隐藏的部分需要用`<div>`包裹并加上`.collapse`,`.navbar-collapse`；样式类名或ID要和`data-target`匹配；
```
<!-- 响应式导航 -->
<div class="navbar navbar-default">
  <div class="navbar-header">
    <!-- 菜单按钮，小屏时显示 -->
    <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".nav-main-menu">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <!-- 主标题，始终显示 -->
    <a href="#" class="navbar-brand">主标题</a>
  </div>
  <!-- 主菜单部分，小屏时不显示 -->
  <div class="navbar-collapse collapse nav-main-menu">
    <ul class="nav navbar-nav">
      <li><a href="#">菜单项</a></li>
      <li><a href="#">菜单项</a></li>
    </ul>
  </div>
</div>
```

### 5.5. 分页
* 页码分页
	* 基本结构：`<ul>`无序列表使用`.pagination`修饰；
	* 尺寸大小：`pagination-lg`,`pagination-sm`；
	* 状态：`.active`，`.disabled`;
	* 默认是左对齐的；
```
<!-- 页码分页 -->
<ul class="pagination">
  <li class="disabled"><a href="#">&laquo;</a></li>
  <li class="active"><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">&raquo;</a></li>
</ul>
```
* 翻页分页
	* 基本结构：`<ul>`无序列表使用`.pager`修饰；
	* 左右对齐：使用`.previous`和`.next`修饰分页按钮；
	* 默认是居中的；
```
<!-- 翻页分页 -->
<ul class="pager">
  <li ><a href="#">上一页</a></li>
  <li class="disabled"> <a href="#">下一页</a></li>
</ul>
```

### 5.6. 标注
* 标签
	* 添加一个标签用来告诉用户一些额外的信息；
	* 基本结构： 使用`<span>`标签和`.label`修饰；
	* 样式颜色：使用`.lable-primary`，`.lable-default`等进行修饰；
	* **标签会被父元素的样式影响，定位可能存在问题**
```
<!-- 标签 -->
<span class="label label-warning">重要</span>
```
* 徽章
	* 添加一个徽章用来告诉用户一些额外的信息；
	* 基本结构： 使用`<span>`标签和`.badge`修饰；
```
<!-- 徽章 -->
<span class="badge">10</span>
```

## 6. 扩展组件
### 6.1. 缩略图
* 基本缩略图
	* 缩略图配合网格系统实现；
	* 缩略图需要将`<img>`用`<a href="#" class="thumbnail"></a>`包裹；

```
<!-- 缩略图 -->
<a href="#" class="thumbnail">
	<img alt="" src="#" style="" >
</a>
```
* 缩略图说明
	* 缩略图`.thumbnail`标签内嵌套`<div class="caption">`可以实现缩略图说明区域；

### 6.2. 提示框
* 基本提示框
	* 使用`<div>`标签并用`.alert`修饰;
	* 样式：`.alert-info`，`alert-success`，`.alert-dnager`，`alert-warning`；
* 可关闭提示框
	* 增加`.alert-dismissable`；
	* 增加关闭按钮；
* 提示框链接
	* 需要用`.alert-link`修饰；
```
<!-- 可关闭提示框 -->
<div class="alert alert-success alert-dismissable">
	成功信息<a href="#" class="alert-link">查看详情</a>
	<button class="close" type="button" data-dismiss="alert">&times;</button>
</div>
```

### 6.3. 进度条
* 基本进度条
	* 进度条外框：使用`.progress`修饰；
	* 进度条：使用`progress-bar`修饰，需要指定具体的百分比；
	* 颜色：使用`progress-bar-info`等类进度条；
	* 条纹：使用`progress-bar-striped`修饰进度条；增加`.active`可以让条纹动起来；
	* 文本：在进度条中可以增加说明文本；
```
<!-- 基本进度条 -->
<div class="progress">
	<div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:80%;">下载中</div>
</div>
```
* 层叠进度条
	* 进度条外框可以嵌套多个进度条；

### 6.4. 列表组
* 基本列表组
	* 列表组容器：`<ul>`标签使用`.list-group`修饰；
	* 列表项目：`.list-group-item`；
	* 徽章：列表组上可以增加`.badge`徽章；
	* 状态：`.disabled`，`.active`；
	* 样式：`.list-group-item-success`等；
* 链接列表组
	* 列表组容器：`<div>`标签使用`.list-group`修饰；
	* 列表项目：`<a>`标签`.list-group-item`修饰；
* 	自定义列表组
	* 	列表组标题：`<h>`标签使用`.list-group-item-heading`修饰；
	* 	列表组内容：`<p>`标签使用`.list-group-item-text`修饰；
```
<!-- 列表组 -->
<div class="list-group">
	<a href="#" class="list-group-item list-group-item-success">列表项目1<span class="badge">30</span></a>
	<a href="#" class="list-group-item active">
		<h3 class="list-group-item-heading">标题 <span class="badge">12</span></h3>
		<p class="list-group-item-text">列表组内容</p>
	</a>
	<a href="#" class="list-group-item">列表项目3 <span class="badge">1</span></a>
</div>
```

### 6.5. 面板
* 基础面板
	* 面板外框：`<div>`标签使用`.panel`修饰；
	* 面板主体：`<div>`标签使用`.panel-body`修饰；
	* 面板头部：`<div>`标签使用`.panel-heading`修饰；
	* 面板尾部：`<div>`标签使用`.panel-footer`修饰；
	* 面板颜色：`panel-default`,`panel-primary`等；
* 面板嵌套
	* 表格：直接嵌套或与`.panel-body`平级（无边距）；
	* 列表组：同表格；
```
<!-- 面板 -->
<div class="panel panel-primary">
	<div class="panel-heading">
		面板标题
	</div>
	<div class="panel-body">
		默认主题的基础面板
	</div>
	<table class="table table-bordered">
		<tr>
			<td>内容1</td>
			<td>内容2</td>
			<td>内容3</td>
			<td>内容4</td>
		</tr>
	</table>
	<div class="panel-footer">
		面板尾部
	</div>
</div>
```