
JavaScript（JS）是一种广泛使用的编程语言，主要用于增强网页的交互性和动态功能。
​
### 1. JavaScript基础
#### 变量和数据类型
JavaScript有几种基本的数据类型：字符串（String）、数字（Number）、布尔值（Boolean）、未定义（Undefined）、空值（Null）和对象（Object）。

```plain
javascript

let message = "Hello, World!"; // 字符串
const pi = 3.14; // 数字
let isFinished = false; // 布尔值
let x; // 未定义
let y = null; // 空值
let now = new Date(); // 对象
```
#### 操作符
JavaScript提供了算术、比较、逻辑等多种操作符。

```plain
javascript

let a = 5;
let b = 3;
let sum = a + b; // 算术操作符
let isGreater = a > b; // 比较操作符
let isTrue = true && false; // 逻辑操作符
```
#### 控制结构
JavaScript使用```if
```
、```switch
```
、```for
```
、```while
```
等控制结构来控制代码的执行流程。

```plain
javascript

if (isFinished) {
  console.log("Done!");
} else {
  console.log("Not done yet.");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
### 2. 函数和对象
#### 函数
函数是执行特定任务的代码块。

```plain
javascript

function greet() {
  console.log("Hello, World!");
}

greet(); // 调用函数
```
#### 对象
对象是属性和方法的集合。

```plain
javascript

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }
};

person.greet(); // 调用对象的方法
```
### 3. DOM操作
JavaScript可以通过DOM（文档对象模型）与HTML元素交互。
#### 选择元素
使用```document.getElementById
```
、```document.querySelector
```
等方法选择元素。

```plain
javascript

const header = document.getElementById("header");
const buttons = document.querySelectorAll("button");
```
#### 修改内容
使用```textContent
```
或```innerHTML
```
属性修改元素的内容。

```plain
javascript

header.textContent = "New Header";
```
#### 事件处理
为元素添加事件监听器以响应用户操作。

```plain
javascript

button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```
### 4. 异步编程
JavaScript支持异步编程，允许你执行非阻塞的网络请求。
#### Promises
Promises是异步编程的基础。

```plain
javascript

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```
#### Async/Await
```async
```
/```await
```
使异步代码更易于编写和理解。

```plain
javascript复制

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```
