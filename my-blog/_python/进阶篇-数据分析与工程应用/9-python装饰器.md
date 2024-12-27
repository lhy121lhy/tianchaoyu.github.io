---
title: 装饰器
permalink: /tutorials/python/decorator/
---


# 1、装饰器定义
装饰器(Decorators)是 Python 的一个重要部分。简单地说：他们是修改其他函数的功能的函数。
要理解装饰器，首先理解对象，函数的嵌套
## 1.1、万物皆对象

```python
def hi(name="yasoob"):
    return "hi " + name
 
print(hi())
# output: 'hi yasoob'
 
# 我们甚至可以将一个函数赋值给一个变量，比如
greet = hi
# 我们这里没有在使用小括号，因为我们并不是在调用hi函数
# 而是在将它放在greet变量里头。我们尝试运行下这个
 
print(greet())
# output: 'hi yasoob'
 
# 如果我们删掉旧的hi函数，看看会发生什么！
del hi
print(hi())
#outputs: NameError
 
print(greet())
#outputs: 'hi yasoob'
```
## 1.2、函数中定义函数

```python
def hi(name="yasoob"):
    print("now you are inside the hi() function")
 
    def greet():
        return "now you are in the greet() function"
 
    def welcome():
        return "now you are in the welcome() function"
 
    print(greet())
    print(welcome())
    print("now you are back in the hi() function")
 
hi()
#output:now you are inside the hi() function
#       now you are in the greet() function
#       now you are in the welcome() function
#       now you are back in the hi() function
 
# 上面展示了无论何时你调用hi(), greet()和welcome()将会同时被调用。
# 然后greet()和welcome()函数在hi()函数之外是不能访问的，比如：
 
greet()
#outputs: NameError: name 'greet' is not defined
```
## 1.3、函数中返回函数

```python
def hi(name="yasoob"):
    def greet():
        return "now you are in the greet() function"
 
    def welcome():
        return "now you are in the welcome() function"
 
    if name == "yasoob":
        return greet
    else:
        return welcome
 
a = hi()
print(a)
#outputs: <function greet at 0x7f2143c01500>
 
#上面清晰地展示了`a`现在指向到hi()函数中的greet()函数
#现在试试这个
 
print(a())
#outputs: now you are in the greet() function
```
在 if/else 语句中我们返回 greet 和 welcome，而不是 greet() 和 welcome()。为什么那样？这是因为当你把一对小括号放在后面，这个函数就会执行；然而如果你不放括号在它后面，那它可以被到处传递，并且可以赋值给别的变量而不去执行它。
## 1.4、将函数作为参数进行传递

```python
def hi():
    return "hi dasda!"
 
def doSomethingBeforeHi(func):
    print("I am doing some boring work before executing hi()")
    print(func())
 
doSomethingBeforeHi(hi)
#outputs:I am doing some boring work before executing hi()
#        hi yasoob!
```
# 2、装饰器

```python
def a_new_decorator(a_func):
 
    def wrapTheFunction():
        print("I am doing some boring work before executing a_func()")
 
        a_func()
 
        print("I am doing some boring work after executing a_func()")
 
    return wrapTheFunction
 
def a_function_requiring_decoration():
    print("I am the function which needs some decoration to remove my foul smell")
 
a_function_requiring_decoration()
#outputs: "I am the function which needs some decoration to remove my foul smell"
 
a_function_requiring_decoration = a_new_decorator(a_function_requiring_decoration)
#now a_function_requiring_decoration is wrapped by wrapTheFunction()
 
a_function_requiring_decoration()
#outputs:I am doing some boring work before executing a_func()
#        I am the function which needs some decoration to remove my foul smell
#        I am doing some boring work after executing a_func()
```
## 2.1、装饰器执行

- 装饰器在编译阶段就可是执行；
- import 阶段，registry中就已经含有变量了
```python
registry = []
funtion_name = []

def register(func):
    print('running register(%s)' % func)
    funtion_name.append(func.__name__)
    registry.append(func)
    return func

@register
def f1():
    print('running f1()')

@register
def f2():
    print('running f2()')

def f3():
    print('running f3()')

def main():
    print('running main()')
    print('registry ->', registry)
    # f1()
    # f2()
    # f3()

if __name__ == '__main__':
    # main()
    print("123")
    print(funtion_name)
```
