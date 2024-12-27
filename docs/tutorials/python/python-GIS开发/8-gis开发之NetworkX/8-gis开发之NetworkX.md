
- author:天朝宇​
# 1、NetworkX介绍

NetworkX是一个用于创建、操作和研究复杂网络的结构、动力学和功能的Python包。它提供：

- ## 1.1、图的类型

- Graph类是无向图的基类，无向图能有自己的属性或参数，不包含重边，允许有回路，节点可以是任何hash的python对象，节点和边可以保存key/value属性对。该类的构造函数为Graph(data=None，**attr)，其中data可以是边列表，或任意一个Networkx的图对象，默认为none；attr是关键字参数，例如key=value对形式的属性。
- MultiGraph是可以有重边的无向图，其它和Graph类似。其构造函数MultiGraph（data=None, *attr）。
- DiGraph是有向图的基类，有向图可以有数自己的属性或参数，不包含重边，允许有回路；节点可以是任何hash的python对象，边和节点可含key/value属性对。该类的构造函数DiGraph(data=None,**attr)，其中data可以是边列表，或任意一个Networkx的图对象，默认为none；attr是关键字参数，例如key=value对形式的属性。
- MultiDiGraph是可以有重边的有向图，其它和DiGraph类似。其构造函数MultiDiGraph（data=None, *attr# 2、图形基本构造
## 2.1、构造

```python
import networkx as nx
G = nx.Graph()
```
## 2.2、添加点

```python
G.add_node(1)
G.add_nodes_from([2, 3])  # 添加多个
```
## 2.3、添加边

```python
G.add_edge(1, 2)
e = (2, 3)
G.add_edge(*e)  # unpack edge tuple*
G.add_edges_from([(1, 2), (1, 3)])
```
## 2.4、图元素的检查

```python
list(G.nodes)
[1, 2, 3, 'spam', 's', 'p', 'a', 'm']
list(G.edges)
[(1, 2), (1, 3), (3, 'm')]
list(G.adj[1])  # or list(G.neighbors(1))
[2, 3]
G.degree[1]  # the number of edges incident to 1
2
```
## 2.5、向图形、节点和边添加属性

```python
G = nx.Graph(day="Friday")
G.graph
{'day': 'Friday'}

G.add_node(1, time='5pm')
G.add_nodes_from([3], time='2pm')
G.nodes[1]
{'time': '5pm'}
G.nodes[1]['room'] = 714
G.nodes.data()
NodeDataView({1: {'time': '5pm', 'room': 714}, 3: {'time': '2pm'}})

G.add_edge(1, 2, weight=4.7 )
G.add_edges_from([(3, 4), (4, 5)], color='red')
G.add_edges_from([(1, 2, {'color': 'blue'}), (2, 3, {'weight': 8})])
G[1][2]['weight'] = 4.7
G.edges[3, 4]['weight'] = 4.2
```
## 2.6、图的绘制

```python
import matplotlib.pyplot as plt
G = nx.petersen_graph()
subax1 = plt.subplot(121)
nx.draw(G, with_labels=True, font_weight='bold')
subax2 = plt.subplot(122)
nx.draw_shell(G, nlist=[range(5, 10), range(5)], with_labels=True, font_weight='bold')
```
# 3、图的常用算法

