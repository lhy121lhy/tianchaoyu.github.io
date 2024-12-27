---
title: numpy应用
permalink: /tutorials/python/numpy/
---

## 1、numpy介绍

pandas的操作就像excel进行数据处理一样，而numpy则是专注了数值计算。

## 2、numpy库的安装与使用
```python
pip install numpy
impor
```

## 3、数学操作
- 数据创建
```python
import numpy as np
a = np.array([1,2,3])
print(a)

# 创建特殊数组
b = np.zeros((3,5))
ones_array = np.ones((2, 2))

full_array = np.full((2, 2), 8)


```
- 数据切片
- 数组形状修改
```python
reshaped_array = a.reshape((1, 5))
```
- 元素级别的加法、数组乘法，矩阵乘法
```python
# 元素级别的加法
c = a + 10
print(c)

# 数组乘法（元素级别）
d = a * b
print(d)

# 矩阵乘法
e = np.dot(b, b.T)  # b 和 b 的转置的点积
print(e)

```
- 统计运算：均值，方差，求和
```python
# 计算平均值
mean_value = np.mean(a)
print(mean_value)

# 计算标准差
std_dev = np.std(a)
print(std_dev)

# 计算最大值和最小值
max_value = np.max(a)
min_value = np.min(a)
print(max_value)
print(min_value)
```
- 线性代数
```python
# 计算矩阵的逆
inverse_b = np.linalg.inv(b)
print(inverse_b)

# 计算矩阵的行列式
det_b = np.linalg.det(b)
print(det_b)
```
- 随机数生成
```python
# 生成一个随机整数数组
random_ints = np.random.randint(0, 10, size=(3, 3))
print(random_ints)

# 生成一个标准正态分布的随机数数组
random_normals = np.random.randn(3, 3)
print(random_normals)
```
- 文件输入输出
```python
# 保存数组到文件
np.save('array.npy', a)

# 从文件加载数组
loaded_array = np.load('array.npy')
print(loaded_array)
```
