# HTML5 - 学习笔记

## 1. HTML5 语法
`DOCTYPE`及字符编码：
```
<!-- 文档头部 -->
<!DOCTYPE html>
<!-- 字符编码 -->
<html lang="en"></html>
```
大小写都可以：
```
<Input tYpe="text"/>
```
布尔值，不需要重复属性：
```
<input type="checkbox" checked>
```
省略引号：
```
<input type=checkbox checked>
```
可以进行省略的标签：
```
<p>xxxxxx
```

## 2. 标签
### 2.1 新增标签
- 结构标签
	- `section`：表示页面中的一个内容区块,比如章节、页眉、页脚或页面的其他部分；
	- `article`：表示页面中一块与上下文不相关的独立内容；
	- `aside`：与article元素内容相关的辅助信息；
	- `header`：标题或头部信息；
	- `hgroup`：标题组合；
	- `footer`：脚注信息；
	- `nav`：导航部分；
	- `figure`：表示一段独立的流内容，一般表示文档主体流内容中的一个独立单元；
- 表单标签
	- `email`
	- `url`
	- `number`
	- `range`
	- `search`
	- `color`
- 媒体标签
	- `video`：定义视频；
	- `audio`：定义音频；
- 其他功能标签
	- `mark`：高亮；
	- `progress`：进度条；
	- `time`
	- `ruby`：某个字进行注释；
	- `wbr`：软换行；
	- `canvas`：画布，图形绘制；
	- `cmmand`：命令；
	- `details`
	- `datalist`：自动匹配输入内容；
	- `keygen`：加密，RSA；
	- `output`
	- `menu`：菜单的语义；

### 2.2 删除标签
 能用css代替的元素： 
> basefont、big、center、font、s、strike、tt、u。这些元素纯粹是为画面展示服务的，HTML5中提倡把画面展示性功能放在css中统一编辑。

不再使用frame框架：
> frameset、frame、noframes。HTML5中不支持frame框架，只支持iframe框架，或者用服务器方创建的由多个页面组成的符合页面的形式，删除以上这三个标签

只有部分浏览器支持的元素：
> applet、bgsound、blink、marquee等标签。

## 3. 属性
### 3.1 新增属性
- 表单属性
- 链接属性
	- `<a media="handheld">`：超链接设备优化；	
	- `<a hreflang="zh">`：超链接语言；	
	- `<a ref="external">`：外部超链接；	
- 其他属性
	- `<html manifest="cache.manifest">`：离线应用文件；
	- `<meta charset="utf-8">`：页面字符集；
	- `<line rel="icon" sizes="16x16">`：小图标的大小；
	- `<base href="#" target="_blank">`：所有链接新窗口打开；加上相对地址；
	- `<script defer/async>`：`defer`延迟执行，页面全部加载完后才执行；`async`异步执行不会阻塞；
	- `<style type="text/css" scoped>`：对本标签内部有效；
	- `<ol revered>`：倒序列表；
	- `<menu type="toolbar">`：菜单语义类型；
	- `<iframe seamless>`：取消边框；
	- `<iframe sandbox>`：安全级别，严格安全控制，禁止提交表单/禁止脚本/异源；
### 3.2 删除属性
- CSS代替
- 多余属性

### 3.3 全局属性
- `data-xxx`：自定义属性，统一使用`data-xxx`作为属性的名称；
- `hidden`：隐藏标签；
- `spellcheck`：拼写检查；
- `tableindex`：tab按键的切换顺序；
- `contenteditable`：元素的内容可编辑；
- `window.document.designMode`：整个网页可以进行编辑；