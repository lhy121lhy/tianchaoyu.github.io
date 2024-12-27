---
title: matlpotlib可视化
permalink: /tutorials/python/matlpotlib/
---


## 1、matplotlib


- Matplotlib是python的一个可视化库，用来绘制各种静态，动态，交互式的图表，应用广泛。
- Matplotlib 可以绘制线图、散点图、等高线图、条形图、柱状图、3D 图形、甚至是图形动画等等。
### 1.1、Matplotlib的安装


- pip更新：python -m pip install -U pip
- 安装： pip install -U matplotlib
- 应用：import matplotlib.pyplot as plt
### 1.2、Matplotlib的基本要素


- x轴和y轴
- 水平和垂直的轴线
- x轴和y轴刻度
- 刻度标示坐标轴的分隔，包括最小刻度和最大刻度
- x轴和y轴刻度标签
- 表示特定坐标轴的值
- 绘图区域
- 实际绘图的区域
## 2、Matplotlib基础

Matplotlib有两种画图形式，面向对象和pyplot接口。

### 2.1、pyplot形式

输入：


```plain
import matplotlib.pyplot as plt
import numpy as np

x = np.array([0, 2, 10])
plt.figure()
plt.plot(x, x**2)
plt.xlabel("x")
plt.ylabel("y")
plt.show()
```

![image.png](/assets/images/python/1652165250696-5c6a048b-86fc-4466-9d0d-9a722e674fca.png)


### 2.2、面向对象的形式

输入：


```plain
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2, 10)
fig, ax = plt.subplots()
ax.plot(x, x**2) # 折线图
ax.set_xlabel('x') # 设置横坐标名称
ax.set_ylabel('y') # 设置纵坐标标签
ax.set_title("y = x^2") # 设置标题
plt.show()
```

输出：

![image.png](/assets/images/python/1652165264277-53259f5c-58bf-4540-8678-a14715354dfe.png)



- 注意：plt.subplots() 函数返回fig和ax，分别是Figure对象和Axes对象。前者代表画布，后者代表画布上的绘图区域，很显然画布和绘图区域是一对多的关系。
### 2.3、常见设置

**1)、绘画框设置：figure(num=None，figsize=None，dpi=None，facecolor=None，edgecolor=None，frameon=True)**


- num：表示图形的编号或名称，数字代表编号，字符串表示名称。如果没有提供该参数，则会创建新的图形，并且这个图形的编号会增加；如果提供该参数，并且具有此id的图形已经存在，则会将其激活并返回对其的引用；若此图形不存在，则会创建并返回它。
- figsize：用于设置画布的尺寸，宽度、高度以英寸为单位。
- dpi：用于设置图形的分辨率。
- facecolor：用于设置画板的背景颜色。
- edgecolor：用于显示边框的颜色。
- frameon：表示是否显示边框。
- FigureClass：派生自matplotlib.figure.Figure的类，可以选择使用自定义的图形对象。
- clear：若设为True且改图形已经存在，则它会被清除。
**2)、X轴和Y轴的设置 **官方说明：


```plain
import matplotlib.pyplot as plt

locs,labels  = plt.xticks（）# Get the current locations and labels.
plt.xticks([0,1,2],['January','February','March'],rotation=20)#Set text labels and properties.
plt.yticks([0,1,2],['January','February','March'],rotation=20)#Set text labels and properties.
```

demo:


```plain
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2, 10)
fig, ax = plt.subplots()
ax.plot(x, x**2) # 折线图
ax.set_xlabel('x') # 设置横坐标名称
ax.set_ylabel('y') # 设置纵坐标标签
ax.set_title("y = x^2") # 设置标题

plt.xticks([0,1,2],["a","b","c"],rotation=20)

plt.show()
```

输出：

![image.png](/assets/images/python/1652165283546-14eac8cf-7011-47e6-a0b1-77e19fc7de9f.png)


**3）设置x轴和y轴的标签信息**


```plain
ax.set_xlabel('x') # 设置横坐标名称
ax.set_ylabel('y') # 设置纵坐标标签
```

**4) 显示中文**


```plain
from pylab import *
mpl.rcParams['font.sans-serif'] = ["SimHei"]
```

**5）添加注释**


```plain
ax.annotate('race interrupted', (61, 25),
            xytext=(0.8, 0.9), textcoords='axes fraction',
            arrowprops=dict(facecolor='black', shrink=0.05),
            fontsize=16,
            horizontalalignment='right', verticalalignment='top')
```

## 3、Matplotlib的简单案例

### 3.1、柱状图

1）堆叠柱状


```plain
import matplotlib.pyplot as plt


labels = ['G1', 'G2', 'G3', 'G4', 'G5']
men_means = [20, 35, 30, 35, 27]
women_means = [25, 32, 34, 20, 25]
men_std = [2, 3, 4, 1, 2]
women_std = [3, 5, 2, 3, 3]
width = 0.35       # the width of the bars: can also be len(x) sequence

fig, ax = plt.subplots()

ax.bar(labels, men_means, width, yerr=men_std, label='Men')
ax.bar(labels, women_means, width, yerr=women_std, bottom=men_means,
       label='Women')

ax.set_ylabel('Scores')
ax.set_title('Scores by group and gender')
ax.legend()

plt.show()
```

结果：

![image.png](/assets/images/python/1652165300640-f0ee607d-37f3-4f00-9edd-f8ffb41102ad.png)


2）并列柱状


```plain
import matplotlib.pyplot as plt
import numpy as np


labels = ['G1', 'G2', 'G3', 'G4', 'G5']
men_means = [20, 34, 30, 35, 27]
women_means = [25, 32, 34, 20, 25]

x = np.arange(len(labels))  # the label locations
width = 0.35  # the width of the bars

fig, ax = plt.subplots()
rects1 = ax.bar(x - width/2, men_means, width, label='Men')
rects2 = ax.bar(x + width/2, women_means, width, label='Women')

# Add some text for labels, title and custom x-axis tick labels, etc.
ax.set_ylabel('Scores')
ax.set_title('Scores by group and gender')
ax.set_xticks(x)
ax.set_xticklabels(labels)
ax.legend()

ax.bar_label(rects1, padding=3)
ax.bar_label(rects2, padding=3)

fig.tight_layout()

plt.show()
```

输出：

![image.png](/assets/images/python/1652165312082-9a6cb3e5-b99a-4967-ac71-05710ae8fe46.png)


### 3.2、曲线图

1）序列图


```plain
import numpy as np
import matplotlib.pyplot as plt


fig, (ax1, ax2) = plt.subplots(2, 1)
# make a little extra space between the subplots
fig.subplots_adjust(hspace=0.5)

dt = 0.01
t = np.arange(0, 30, dt)

# Fixing random state for reproducibility
np.random.seed(19680801)


nse1 = np.random.randn(len(t))                 # white noise 1
nse2 = np.random.randn(len(t))                 # white noise 2
r = np.exp(-t / 0.05)

cnse1 = np.convolve(nse1, r, mode='same') * dt   # colored noise 1
cnse2 = np.convolve(nse2, r, mode='same') * dt   # colored noise 2

# two signals with a coherent part and a random part
s1 = 0.01 * np.sin(2 * np.pi * 10 * t) + cnse1
s2 = 0.01 * np.sin(2 * np.pi * 10 * t) + cnse2

ax1.plot(t, s1, t, s2)
ax1.set_xlim(0, 5)
ax1.set_xlabel('time')
ax1.set_ylabel('s1 and s2')
ax1.grid(True)

cxy, f = ax2.csd(s1, s2, 256, 1. / dt)
ax2.set_ylabel('CSD (db)')
plt.show()
```

输出：

![image.png](/assets/images/python/1652165323071-ccb2b13a-32e6-402b-bcd9-290bb675d199.png)


2） 曲线图


```plain
import numpy as np
import matplotlib.pyplot as plt


fig = plt.figure()
x = np.arange(10)
y = 2.5 * np.sin(x / 20 * np.pi)
yerr = np.linspace(0.05, 0.2, 10)

plt.errorbar(x, y + 3, yerr=yerr, label='both limits (default)')

plt.errorbar(x, y + 2, yerr=yerr, uplims=True, label='uplims=True')

plt.errorbar(x, y + 1, yerr=yerr, uplims=True, lolims=True,
             label='uplims=True, lolims=True')

upperlimits = [True, False] * 5
lowerlimits = [False, True] * 5
plt.errorbar(x, y, yerr=yerr, uplims=upperlimits, lolims=lowerlimits,
             label='subsets of uplims and lolims')

plt.legend(loc='lower right')
```

输出：

![image.png](/assets/images/python/1652165332786-c2d0c71d-67aa-4f3b-9894-8a0ecdf6dfba.png)


### 3.3 饼图

1）比例图


```plain
import numpy as np
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(6, 3), subplot_kw=dict(aspect="equal"))

recipe = ["375 g flour",
          "75 g sugar",
          "250 g butter",
          "300 g berries"]

data = [float(x.split()[0]) for x in recipe]
ingredients = [x.split()[-1] for x in recipe]


def func(pct, allvals):
    absolute = int(np.round(pct/100.*np.sum(allvals)))
    return "{:.1f}%\n({:d} g)".format(pct, absolute)


wedges, texts, autotexts = ax.pie(data, autopct=lambda pct: func(pct, data),
                                  textprops=dict(color="w"))

ax.legend(wedges, ingredients,
          title="Ingredients",
          loc="center left",
          bbox_to_anchor=(1, 0, 0.5, 1))

plt.setp(autotexts, size=8, weight="bold")

ax.set_title("Matplotlib bakery: A pie")

plt.show()
```

输出：

![image.png](/assets/images/python/1652165342689-7ebe2397-9d8f-49fb-bf81-8dde1b37d7e3.png)


2） 饼图2


```plain
import numpy as np
import matplotlib.pyplot as plt


# Fixing random state for reproducibility
np.random.seed(19680801)

# Compute pie slices
N = 20
theta = np.linspace(0.0, 2 * np.pi, N, endpoint=False)
radii = 10 * np.random.rand(N)
width = np.pi / 4 * np.random.rand(N)
colors = plt.cm.viridis(radii / 10.)

ax = plt.subplot(projection='polar')
ax.bar(theta, radii, width=width, bottom=0.0, color=colors, alpha=0.5)

plt.show()
```

输出：

![image.png](/assets/images/python/1652165353419-5e901e16-dcc8-49c3-b7fd-2812f8f399d7.png)

