# Sass - 学习笔记

## 1. 简介
### 1.1 CSS 预处理器
> CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。
> 可以在 CSS 中使用变量、简单的逻辑程序、函数等在编程语言中的一些基本特性，可以让你的 CSS 更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处

### 1.2 Sass
> Sass 是一门高于 CSS 的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通 CSS 更加强大的功能。
> Sass 能够提供更简洁、更优雅的语法，同时提供多种功能来创建可维护和管理的样式表。

### 1.3 Sass 与 SCSS
- 扩展名不同：Sass是`.sass`，SCSS是`.scss`；
- 语法规则不同：Sass是严格缩进语法，不带括号，类似`Ruby`；SCSS是类似CSS的书写语法；

###  1.4 SCSS语法格式
 > SCSS 是 Sass 的新语法格式，从外形上来判断他和 CSS 长得几乎是一模一样，代码都包裹在一对大括号里，并且末尾结束处都有一个分号。其文件名格式常常以“.scss”为扩展名。

## 2. 安装
### 2.1 安装环境
- 必须成功安装`Ruby`；
- 使用`Ruby gen install`命令安装Sass；
- 国内可能被墙，可以使用离线安装或镜像安装；
- 使用`sass -v`可以检查是否安装成功；
- 使用`gem update sass`可以更新Sass；

### 2.2 编译SCSS
> 使用Sass，但在项目中还是引用“.css”文件，Sass 只不过是做为一个预处理工具 

- 命令编译：直接使用命令行工具编译；
``` bash
//单文件编译
sass style.scss style.css
//单文件监听
sass --watch style.scss:style.css
//文件夹监听
sass --watch sassFileDirectory:cssFileDirectory
```
- GUI编译：通过可视化页面编译；
- Grunt编译：可以配置 Sass 的编译 ；
- 使用WebStorm进行自动监听编译；

### 2.3 编译输出方式

``` bash
//指定一种编译风格
sass --watch test.scss:test.css --style compressed
```

- 嵌套输出方式 nested：后括号不单独占一行（**默认**）；
- 展开输出方式 expanded：后括号单独占一行；
- 紧凑输出方式 compact：单行模式；
- 压缩输出方式 compressed：全部压缩成一行；

### 2.4 Sass 的调试
- 谷歌浏览器支持`sourcemap`功能，可以从`CSS`跳转到`SASS`源文件；
- 会生成`.css.map`的映射文件；
- 编译时增加`--sourcemap`；
``` bash
sass --watch style.scss:style.css
```

## 3. 语法
### 3.1 声明变量
- 使用`$`声明变量，定义之后可以在全局范围内使用；
- 全局变量：在元素外面定义的变量；
- 局部变量：在元素内部定义的变量，局部变量会覆盖全局变量的值；
- 变量值后加`!defaul`表示默认值，在此之前定义过变量则默认值不生效；
- **变量原则：不要声明一个不需要更新且只在一个地方使用的变量**；
- 
``` scss
$test-default-color:red !default;
```
### 3.2 调用变量
- 可以使用`$`调用变量；
``` scss
.btn-primary {
   background-color: $btn-primary-bg;
   color: $btn-primary-color;
   border: 1px solid $btn-primary-border;
}
```

### 3.3 嵌套
- 选择器嵌套
	- 在一个选择器中嵌套另一个选择器来实现继承；
	- 可以使用`&`表示父元素选择器；
	- 可以使用`@at-root`跳出所有父选择器；
``` scss
.table {
  border: solid 1px black;
  //嵌套选择器
  tr td{
    border: solid 1px gray;
  }
  //父选择器
  &{
    padding:20px;
  }
}
```
- 属性嵌套
	- 多个相同前缀的属性可以使用嵌套的方式定义；
``` scss
border: {
	top: {
	    color: red;
	    style: dashed;
	    width: 3px;
	}
    left: dashed 2px blue;
}
```
- 伪类嵌套
> 选择器嵌套最大的问题是将使最终的代码难以阅读，应该尽量避免选择器嵌套

### 3.4 混合宏
- 基本概念
	- 用途：可以将多个样式包装成混合宏，从而复用大段的样式；
- 定义混合宏
	- 使用`@mixin`定义混合宏；
	- 混合宏可以带参数，参数可以有默认值：`@mixin opacity($opacity:50)`；
	- 混合宏可以带不定个数的参数：`@mixin box-shadow($shadow...)`；
- 使用混合宏
	- 使用`@include`使用混合宏；
	- 宏的内容会被替换；
- `@content`：可以接受一整块样式，使用内嵌方式传递；
- 混合宏编译后可能产生冗余的代码段；
``` scss
@mixin border-radius($radius:5px){
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
.box{
    @include border-radius(20px);
}
```

### 3.5 继承
-	基本概念
	-	选择器继承可以让选择器继承另一个选择器的所有样式，并**联合声明**；
-	使用继承
	-	使用`@extend`声明继承关系，随后紧跟需要继承的选择器；
	-	使用`%`选择器占位符，如果不调用则不会生成CSS，相当于`抽象类`；
	-	继承关系生成CSS时会合并代码块，但是不能传递参数；

``` scss
%basic-box{
    border:solid 1px red;
    background-color: green;
}
.box{
    @extend %basic-box;
    font-size: 20px;
}
```
### 3.6 插值
- 基本概念
	- 插值可以将变量替换在置顶的位置，而不仅仅是CSS的值；
``` scss
$margin-location:right;
.box{
    margin-#{$margin-location} : 100px;
}
```
### 3.7 数据类型
- 数字；
- 字符串：分为有引号和无引号，使用插值时固定为无引号；
- 颜色；
- 布尔；
- 空值；
- 值列表：通过空格或者逗号分隔的一系列的值；

``` scss
//值列表
margin: 10px 15px 0 0;
font-face: Helvetica, Arial, sans-serif;
```

### 3.8 运算
- 基本运算
	- 支持加减乘除基本运算；
	- 不同单位的数字无法计算；
	- 可以使用变量或数字进行运算；
- 颜色运算
	- 颜色可以互相加减，可以和数字进行乘法运算；
	- 色值直接可以直接进行运算；
- 字符运算
	- 字符之间可以使用`+`加号进行连接；
	- 连接结果是否有引号，由左边的字符决定；

### 3.9 控制指令
#### 3.9.1 @if
`@if` 指令是一个 `SassScript`，它可以根据条件来处理样式块，可以配合 `@else if` 和 `@else` 一起使用。
``` scss
//@if
@mixin box-style($content-width){
    @if $content-width > 200px {
        background-color: red;
        border: solid 1px black;
    }
    @else {
        background-color: yellow;
        border: dashed 2px red;
    }
}
```
#### 3.9.2 @for
`@for`指令可以重复某一个代码段：
- `$i` 表示变量
- `start` 表示起始值
- `end` 表示结束值
- `through`：包括`end`；
- `to`：不包括`end`；
``` scss
//@for
@for $i from 1 through 12{
    .col-md-#{$i}{
        width:percentage(1 - 1 * (12 - $i)/12);
    }
}
```
#### 3.9.3 @while
`@while` 指令是 SassScript 表达式，只要 @while 后面的条件为 true 就会执行。
``` scss
//@while
@while $col-num  > 0{
    .col-xs-#{$col-num}{
        width:percentage($col-num * 1/$max-col-num);
        @extend %grid;
    }
    $col-num : $col-num - 1;
}
```

#### 3.9.4 @each
`@each` 循环就是去遍历一个列表，然后从列表中取出对应的值。
``` scss
//@each
$pic-list : success primary danger default warning;
@mixin pic-location{
    @each $pic-name in $pic-list{
        .pic-#{pic-name}{
            background-image: url("img/pic/#{$pic-name}.png");
        }
    }
}
```

### 3.10 函数