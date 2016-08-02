# Sass - 学习笔记

## 简介
### CSS 预处理器
> CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。
> 可以在 CSS 中使用变量、简单的逻辑程序、函数等在编程语言中的一些基本特性，可以让你的 CSS 更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处

### Sass
> Sass 是一门高于 CSS 的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通 CSS 更加强大的功能。
> Sass 能够提供更简洁、更优雅的语法，同时提供多种功能来创建可维护和管理的样式表。

### Sass 与 SCSS
- 扩展名不同：Sass是`.sass`，SCSS是`.scss`；
- 语法规则不同：Sass是严格缩进语法，不带括号，类似`Ruby`；SCSS是类似CSS的书写语法；

### 安装环境
- 必须成功安装`Ruby`；
- 使用`Ruby gen install`命令安装Sass；
- 国内可能被墙，可以使用离线安装或镜像安装；
- 使用`sass -v`可以检查是否安装成功；
- 使用`gem update sass`可以更新Sass；

## Sass 语法
###  SCSS语法格式
 > SCSS 是 Sass 的新语法格式，从外形上来判断他和 CSS 长得几乎是一模一样，代码都包裹在一对大括号里，并且末尾结束处都有一个分号。其文件名格式常常以“.scss”为扩展名。

### 编译SCSS
> 使用Sass，但在项目中还是引用“.css”文件，Sass 只不过是做为一个预处理工具 

编译操作：
``` bash
//单文件编译
sass style.scss style.css
//单文件监听
sass --watch style.scss:style.css
//文件夹监听
sass --watch sassFileDirectory:cssFileDirectory
```