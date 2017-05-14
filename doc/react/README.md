# React - 学习笔记

# 1. 环境准备

# 1. 1 NodeJS

## 1.1.1 安装NodeJS
- 下载安装包：[nodejs](https://nodejs.org/en/)；
- 检查安装：`node -v`, `npm -v`；
- 配置国内源： 淘宝镜像`http://npm.taobao.org/`；使用`cnpm`进安装；可以修改`npmrc`改变耐默认地址；

## 1.1.2 初始化React环境
1）初始化npm
``` 
npm init
```
2）初始化依赖包
```
npm install --save react react-dom babelify babel-preset-react
```
3）安装es2015依赖
```
npm install babel-loader --save
npm install --save babel-preset-es2015 
```

# 1.2 webpack
1）增加`webpack.config.js`文件
``` javascript
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: "./js/index.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      },
    ]
  },
  output: {
    path: __dirname + '/src/',
    filename: "bundle.js"
  }
}
```
2）下载安装webpack
```
npm install -g webpack
npm install -g webpack-dev-server
```
3）在项目路径下安装webpack
```
npm install webpack --save
```
4）打包项目
```
webpack
```
5）热部署

```
webpack --watch
```
6）启动调试服务器

```
webpack-dev-server
http://localhost:8080/webpack-dev-server/
```

# 1.3 Atom

- `atom-ternjs`：ES5/ES6支持，NodeJS，Angular等支持；
- `atom-beautify`：格式化支持；
- `open-in-browser`：在浏览器中打开；
- `emmet`：zencoding；
- `file-icons`：文件图标；
- `highlight-selected`
- `Highlight Line`

# 2. React 基础组件
## 2.1 虚拟DOM
![DOM](./1494522440223.png)

- 架构：在`DOM`及`APP`之间，增加一层`Virtual DOM`；
- 快速：虚拟DOM可以将页面变更损耗的代价从`O(n^3)`降低到`O(n)`；
- 实现：可以快速对变化的子树做`Patch`，只针对变更的节点处理，减少损耗；


## 2.2 React 组件
**知识点**
- 组件的`return`函数里返回的`HTML`节点必须是一个；
- 可以给外部使用的组件需要加上`export default`；
- 入口定义使用`ReactDOM.render([JSX], [DOM])`；
- 可以使用`{变量名}`引用一个组件，可以通过参数的形式 ；

**基础依赖**
定义`React`组件时，一般都需要依赖两个模块：
```
var React = require('react');
var ReactDom = require('react-dom')
```

**定义一个基本组件**
```
export default class ComponentHeader extends React.Component{
  render(){
    return(
      <header>
        <h1>这里是头部</h1>
      </header>
    );
  }
}
```

**定义一个复合组件**
```
class Index extends React.Component {
  render() {
    var component = <ComponentHeader/>
    return (
      <div>
        {component}
        <BodyIndex/>
        <ComponentFooter/>
      </div>
    )
  }
}
```

## 2.3 JSX内置表达式

**三元表达式 **
``` jsx
<p>{userName=='' ? '用户还没有登录' : '用户名：' + userName}</p>
```

**动态绑定**
- 使用单花括号进行绑定；
- 绑定HTML属性时不需要引号；
``` jsx
<p><input type="button" value={userName} disabled={boolInput}/></p>
```

**注释**
- 注释的语法比较特殊；
``` jsx
{/* 这是一些注释 */}
```

**绑定HTML代码**
- 如果绑定的变量中含有转义符，需要使用`dangerouslySetInnerHTML`参数绑定；
- 危险绑定可能造成`XSS`攻击；
- 也可以进行`unicode`转码；
```
<p dangerouslySetInnerHTML={{__html : html}}></p>
```

## 2.4 生命周期

**生命周期流程图**
- `componentWillMount`：组件将要加载；
- `componentDidMount`：组件加载完成；

![生命周期流程图](./1494741163699.png)

**生命周期步骤**
![过程图](./1494741294893.png)


# 3. React 属性与事件

## 3.1 state 属性
- `state`属性作为组件自身的信息承载体；
- 初始化可以放在构造函数`constructor`中；
- 修改`state`需要使用函数`this.setState(obj);`；
- 可以使用`this.state.xxx`引用`state`中的值；
- `state`的作用域只在当前类中，不污染其他模块；

## 3.2 props 属性
- 和`state`不同，可以从外来传入属性参数；
- 可以通过JSX标签的属性传入`props`；
-可以通过`this.props.xxx`引用`props`中的值；

``` html
<BodyIndex userid='123' username="456"/>
<p>{this.state.username} {this.props.userid} {this.props.username}</p>
```

## 3.3 事件与数据的双向绑定

**子组件向父组件传递参数**
- 父组件向子页面传递处理函数；
- 子组件将值传递到处理函数中；
- 父组件在处理函数中获得值的变化，对自身属性进行修改；
- 需要注意对`this`进行绑定；
- 通过`event.target.value`可以引用事件中的参数；

```
//处理函数
handleChildValueChange(event) {
  //引用事件中的参数
  this.setState({age: event.target.value});
}
  
//引用子组件
<BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)} />

//子组件内容
<p>子页面输入:<input type='text' onChange={this.props.handleChildValueChange} /></p>
```

## 3.4 可复用组件

**Prop 验证**
- 可以对字段类型及必填校验进定义；

```
//导入
import PropTypes from 'prop-types';

//配置校验
BodyIndex.propTypes = {
  userid: PropTypes.number.isRequired
}
```

**Prop 默认值**
- 可以给`props`属性定义默认值，若没有传递参数，则使用默认值；
```
//定义
const defaultProps = {
  username: '这是一个默认的用户名'
};
//应用
BodyIndex.defaultProps = defaultProps;
```

**传递所有参数**
- 使用`{...this.props}`可以一次性传递所有参数；

```
  <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
```

## 3.5 组件的Refs

**原生方式获取DOM节点**
- 不推荐，可能导致性能或安全问题； 
```
var mySubmitBotton = document.getElementById('submitBotton');
ReactDOM.findDOMNode(mySubmitBotton).style.color = 'red';
```

**Ref 方式获取DOM节点 **
- 访问到组件内部DOM节点的唯一可靠方法；
- 不要在`render`之前对`Refs`进行调用；
- 不要滥用；
```
//定义
<input type='button'  ref="submitBotton" />

//引用
this.refs.submitBotton.style.color = 'red';
```

## 3.6 独立组件间共享Mixins
- 在不同的组件之间共享代码；
- 和页面具有类似的生命周期；
- 在`ES6`环境下需要安装插件；

```
//安装插件
npm install --save react-mixin@2

//定义
const MixinLog = {
  componentDidMount() {
    console.log("Mixin 加载完毕");
  },

  log() {
    console.log('abscdfa......');
  }
};
export default MixinLog;

//引入包
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

//引用
ReactMixin(BodyIndex.prototype, MixinLog);

//调用方法
MixinLog.log();
```

# 4. React 样式

## 4.1 内联样式
**JS样式**
- 会解析成页面的内联样式，不推荐使用；
- 样式要在`render`函数中定义；
- 可能在`ReactNative`中使用到；
- 有一些局限，比如`hover`、动画不能使用；

```
//定义
const styleComponentHeader = {
  header: {
    backgroundColor: '#333333',
    color: '#FFFFFF',
    paddingTop: '15px',
    paddingBottom: '15px'
  }
};

//应用
<header style={styleComponentHeader.header}>
  <h1>这里是头部</h1>
</header>
```

**引用样式**
- 使用`className`关键字进行应用；

```
<header className="smallFontSize">
  <h1>这里是头部</h1>
</header>
```

**表达式**
- 在内联样式中可以使用表达式的形式，动态控制样式对象；
```
paddingTop: (this.state.miniHeader) ? '3px' : '15px'
```

## 4.2 CSS模块化

**模块化的原因**
- 全局污染；
- 命名混乱；
- 依赖管理不彻底；
- 无法共享变量；
- 代码压缩不彻底；

**模块化的优点**
- 所有样式都是local的，解决了命名冲突和全局污染；
- `class`名称生成规则灵活，可以压缩；
- 只需引用组件的JS就可以搞定所有的JS和CSS；

**CSS Module 模块化**
```
//安装插件
//style-loader
//css-loader

//配置Webpack 的loader
{
	test: /\.css$/,
	loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
}

//引用CSS模块
var footerCss = require("../../css/footer.css");

//使用样式
<footer className={footerCss.miniFooter}>
  <h1>这里是页脚，一般放置一些版权信息</h1>
</footer>
```

## 4.3 JSX与CSS样式互转
[在线转换工具](http://staxmanade.com/CssToReact/)


## 4.5 Ant Design 样式框架

**常见的React样式框架**
[Material-UI](http://www.material-ui.com/#/)
[Ant Design](https://ant.design/index-cn)
[React-Bootstrap](https://react-bootstrap.github.io/)
[Amaze UI React](http://amazeui.org/react/components/)

**基础使用**
```
//安装
npm install antd --save

//引入样式
import 'antd/dist/antd.css'

//引入组件
import { DatePicker } from 'antd';

//渲染组件
ReactDOM.render(<DatePicker />, mountNode);
```