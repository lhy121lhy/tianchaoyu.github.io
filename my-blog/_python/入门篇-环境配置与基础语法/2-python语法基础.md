---
title: 基础语法
permalink: /tutorials/python/basic-yufa/
---

# 数据类型
python 除了通用的数值、字符、布尔值等外，常见的就是列表、元组、字典、集合等，不同的数据类型具有不同的特性。

- **列表（Lists）**，有序的元素集合，可以包含不同类型的元素，用方括号[]表示，例如[1, 'a', 3.14]，可以按照序号进行索引，切片。
- **元组（Tuples）**：类似于列表，但是不可变，用圆括号() 表示，例如(1, 'a', 3.14)，不可变的是说元素值不能修改。
- **字典（Dictionaries）**：键值对集合，用花括号{}表示，{'name': 'Alice', 'age': 25}。
- **集合（Sets）**：无序的元素集合，元素唯一，用花括号 {1,2,3}，可以利用集合特性进行数据去重。

# 类与继承
在Python中，类（class）是一种创建对象和封装数据的方式。类可以包含属性（变量）和方法（函数）。继承是面向对象编程的一个核心概念，它允许我们创建一个类（称为子类或派生类）来继承另一个类（称为基类或父类）的属性和方法。

## 类的定义与使用：
```python
class ClassName:
    def __init__(self, param1, param2):
        self.param1 = param1
        self.param2 = param2

    def method1(self):
        # 方法体
        pass

# 创建类的实例
obj = ClassName('value1', 'value2')

```
ClassName是一个类名，__init__是一个特殊的方法，称为构造函数，用于初始化新创建的对象的状态。self参数是对当前对象实例的引用。method1是类的一个普通方法.

## 类继承：
```python
# 定义基类
class BaseClass:
    def __init__(self, value):
        self.value = value

    def base_method(self):
        print("这是基类的方法")

# 定义子类，继承自BaseClass
class SubClass(BaseClass):
    def __init__(self, value, extra_value):
        super().__init__(value)  # 调用父类的构造函数
        self.extra_value = extra_value

    def sub_method(self):
        print("这是子类的方法")

# 创建子类的实例
sub_obj = SubClass('value', 'extra_value')
sub_obj.base_method()  # 调用继承自基类的方法
sub_obj.sub_method()   # 调用子类自己的方法
```
SubClass继承自BaseClass。SubClass的构造函数中使用super().__init__(value)来调用父类的构造函数。SubClass可以访问BaseClass的所有属性和方法，并且可以定义自己的属性和方法。

## 多继承
```python
class ClassA:
    def method_a(self):
        print("方法A")

class ClassB:
    def method_b(self):
        print("方法B")

class MultiSubClass(ClassA, ClassB):
    pass

multi_obj = MultiSubClass()
multi_obj.method_a()  # 调用ClassA的方法
multi_obj.method_b()  # 调用ClassB的方法
```

通常情况下，python通过模块和函数来进行代码重用，但是，在某些情况下，需要使用类来完成一些高级操作。类和继承的操作适用于需求较复杂的场景，
类和继承可以实现内部的变量共享，和代码复用，减少代码的冗余。

# 高级操作

## 列表推导式:[expression for item in iterable if condition]
```python
original_list = [1, 2, 3, 4, 5]

# 简单列表推导
squared_list = [x**2 for x in original_list]
print(squared_list)  # 输出: [1, 4, 9, 16, 25]

#  带条件的列表推导
[x**2 for x in range(10) if x % 2 == 0]  # 输出: [0, 4, 16, 36, 64]

# 循环嵌套的列表推导
numbers = [1, 2, 3]
pairs_sums = [x + y for x in numbers for y in numbers]
print(pairs_sums)  # 输出: [2, 3, 4, 3, 4, 5, 4, 5, 6]

# 带函数的推导
def absolute(value):
    return abs(value)

# 创建一个新列表，包含原始列表中每个元素的绝对值
original_list = [-1, -2, 3, -4]
absolute_list = [absolute(x) for x in original_list]
print(absolute_list)  # 输出: [1, 2, 3, 4]

# 字典的推导式
list1 = [1, 2, 3]
list2 = [4, 5, 6]
sum_dict = {i: x + y for i, (x, y) in enumerate(zip(list1, list2))}
print(sum_dict)  # 输出: {0: 5, 1: 7, 2: 9}

```

## Lambda函数，lambda arguments: expression
函数可以接受任意数量的参数，但只能有一个表达式。
Lambda 函数的返回值是表达式的值，因此不需要使用 return 关键字
```python

add = lambda x, y: x + y
print(add(3, 4))  # 输出: 7

# 作为参数传递
# 使用Lambda函数作为filter()函数的参数，过滤出列表中的偶数
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # 输出: [2, 4, 6]

```

##  enumerate内建函数
enumerate() 函数用于将一个可遍历的数据对象(如列表、元组或字符串)组合为一个索引序列，同时列出数据和数据下标，一般用在 for 循环当中。

```python
for i, item in enumerate(['A', 'B', 'C']):
    print(i, item)

```




