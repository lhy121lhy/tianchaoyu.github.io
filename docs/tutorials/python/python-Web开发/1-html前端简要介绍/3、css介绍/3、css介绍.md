

### 1. CSS基础
#### 选择器：3类，标签选择，类选择，ID选择
CSS选择器用于选择你想要样式化的HTML元素。

- **标签选择器**：选择所有相同标签的元素。
```plain
css

p { color: red; } /* 所有<p>标签的文本颜色将变为红色 */
```

- **类选择器**：使用点号```.
```
后跟类名选择具有特定类的元素。
```plain
css

.highlight { background-color: yellow; } /* 所有class="highlight"的元素背景色将变为黄色 */
```

- **ID选择器**：使用井号```#
```
后跟ID名选择具有特定ID的元素。
```plain
css

#header { font-size: 24px; } /* ID为header的元素字体大小将变为24px */
```
#### 属性
CSS属性用于定义样式，属性由名称和值组成。

```plain
css

selector {
  property: value;
}
```
### 2. CSS盒模型
CSS盒模型包括：内容（content）、内边距（padding）、边框（border）和外边距（margin）。

```plain
css

div {
  width: 200px; /* 内容的宽度 */
  height: 100px; /* 内容的高度 */
  padding: 20px; /* 内边距 */
  border: 5px solid black; /* 边框 */
  margin: 10px; /* 外边距 */
}
```
### 3. 定位
CSS提供了不同的定位属性，如```static
```
、```relative
```
、```absolute
```
、```fixed
```
和```sticky
```
。

```plain
css

.positioned {
  position: absolute; /* 绝对定位 */
  top: 20px;
  right: 15px;
}
```
### 4. 布局
CSS布局可以通过多种方式实现，包括Flexbox和Grid。
#### Flexbox

```plain
css

.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.item {
  flex: 1; /* 弹性增长 */
}
```
#### Grid

```plain
css

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 创建三列 */
}

.item {
  grid-column: 2; /* 放在第二列 */
}
```
### 5. 响应式设计
使用媒体查询来为不同屏幕尺寸设置不同的样式。

```plain
css

@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```
### 6. 动画和过渡
CSS也可以用来创建简单的动画和过渡效果。

```plain
css

button {
  transition: background-color 0.5s; /* 背景色渐变 */
}

button:hover {
  background-color: green; /* 鼠标悬停时背景色变为绿色 */
}
```
### 7. 高级技巧
随着CSS的发展，新的属性和功能不断被引入，比如CSS变量、自定义属性、伪元素等。

```plain
css复制

:root {
  --main-color: #3498db;
}

body {
  -webkit-font-smoothing: antialiased;
  color: var(--main-color);
}
```
