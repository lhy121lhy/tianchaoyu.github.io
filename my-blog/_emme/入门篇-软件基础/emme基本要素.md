---
title: 基本要素
permalink: /tutorials/emme/elements-info/
---

# 1、EMME数据基础

EMME的软件的架构，以数据库（路网，小区，场景，矩阵等）为基础，上层支撑桌面可视化，中间使用建模器和API接口衔接和扩展软件功能，底层是基于SQL的数据部库。具体结构如下：

![emme框架](/assets/images/emme/emme-data-base.JPG)

![emme结构](/assets/images/emme/struckture.png)

## 1.1、网络基础

网络是由node、link、turn、centroid、mode、transit segment、transit line、transit vehicles等组成。

### 1.1.1、方式结构（modes）

方式结构共定义了四种大类：

- AUTO：道路私人小汽车
- Auxiliary auto:辅助机动车：非私家车以外，例如共享汽车，货车，出租车等
- Transit:公交车
- Auxiliary Transit:公交接驳方式；

方式结构的定义：
![方式](/assets/images/emme/modes.png)


方式结构需要指定类型：

| 类型 | 说明 | 示例 | 
|---|---|---|
| id | 编号（字母） | a | 
| description | 描述 | Auto | 
| mode_type | 类型 | AUTO | 
| cost_time_coeff | 每小时损耗美元 | 0 | 
| cost_distance_coeff | 每公里损耗美元 | 0 | 
| energy_time_coeff | 每小时损耗能量 | 0 | 
| speed_factor | 速度 | 5 | 


总共支持60种mode,其中AUTO是唯一的一种，其他的方式可以有多种子类型
接驳方式一定要填写速度，单位：km/h

### 1.1.2、node节点

节点包括普通节点，交叉口，小区。

- 普通节点：大规模路网中，emme软件狗会限制node的数量，往往需要扩容； 
  - 标准属性：i,xi,yi,ui1,ui2,ui3,lab,inboa,fiali
- 交通小区：小区形心，创建矩阵的时，默认以小区数量作为矩阵的维度；多个scenario场景共享一套交通小区，小区维度不一样时，可能会报错；
- 交叉口：允许转向的节点，定义形式：i->j->k,由三个点形成。 
  - 交叉口允许添加惩罚和禁止：0表示禁止转向，-1表示允许转向不惩罚
  - 默认禁止U掉头，不惩罚
  - 标准属性：j,i,k,tpf,up1,up2,up3

### 1.1.2、link

-  节点包括普通节点，交叉口，小区。
- link：连接两个node的线路，包括普通道路和小区连杆
- link上含有多个mode，允许多种交通方式使用；
- link本身存储的是连段，想要变成曲线，还需要link shapes文件存储线型。
- node,link的属性有三种：标准属性，额外属性，附加属性 
  - 标准属性(standard att)：emme内置属性，不可删除和修改名称，部分操作（如分配）固定使用字段
  - 额外属性(extra att)：以@开头的字段，不支持大写，数据格式为浮点型数值
  - 附加属性（fields）：字符型属性，可以存放中文字段

emme的组织形式以node为基础的，必须先有node,然后才有link,link的ID是from_node to_node的形式。

### 1.1.3、transit network

#### 1.1.3.1、公交mode

# 公交mode：bus.metro,brt,ferry
# 接驳mode：walk,e-bike,bike

#### 1.1.3.2、公交车辆

- 和一种交通方式关联
- 可以被多个公交线路使用

属性说明：


| 类型 | 说明 | 示例 | 
|---|---|---|
|id|	编号	|1|
|description|	描述|	Bus|
|mode|	方式|	b|
|fleet_size|	车队规模|	999|
|seated_capacity|	总座位数|	20|
|total_capacity	|总容纳数	|70|
|cost_time_coeff|	每小时耗费|	0|
|cost_distance_coeff|	每公里耗费|	0|
|energy_time_coeff|	每小时消耗能量|	0|
|energy_dist_coeff|	每公里消耗能量|	0|
|auto_equivalent|	标准车系数|	2.5|

#### 1.1.3.3、公交车线路

公交线路和公交segemnt是两个独立的文件，公交segment是依附在link上的，from_node，to_node的形式，同一个link上会对应多个segment,因为多个公交线路会经过同一条路

- transit line
- transit segment

### 1.1.4、小区地带 zone partitions

- zone

### 1.1.5、矩阵Matrix

-  基于起点的矩阵：Origin Matrix,1*n,mo_#(ex:mo1)
-  基于终点的矩阵:Destination Marix,n*1,md_#(ex:md1)
-  全矩阵:Full Matrix,n*n,mf_#(ex:mf1)
-  种子矩阵:Scalar Matrix,1*1,ms_#(ex:ms1)

### 1.1.6、函数function

-  vdf
-  ttf
-  tpf

## 1.2、属性字段说明

-  emme属性有三种：标准属性，额外属性，附加属性 
  - 标准属性(standard att)：emme内置属性，不可删除和修改名称，部分操作（如分配）固定使用字段
  - 额外属性(extra att)：以@开头的字段，不支持大写，数据格式为浮点型数值
  - 附加属性（fields）：字符型属性，可以存放中文字段

### 1.2.1、node的属性

| 字段 | 类型 | 说明 | 
|----|----|----|
|id|	标准属性|	node的ID|
|xi|	标准属性|	node的经度，x坐标|
|yi|	标准属性|	node的纬度，y坐标|
|ui1	|标准属性|	node的预留字段1，用户自定义功能|
|ui2	|标准属性|	node的预留字段2，用户自定义功能|
|ui3	|标准属性|	node的预留字段3，用户自定义功能|
|inboa|	标准属性|	initial boarding,初始登车量，分配结果|
|fiali|	标准属性|	final alightings,最后下车量,分配结果|

### 1.2.2、link的属性


| 字段 | 类型 | 说明 | 
|----|----|----|
|i|	标准属性|	from node的ID|
|j|	标准属性|	to node的ID|
|id|	标准属性|	link的ID,from-to的形式|
|length|	标准属性|	link的长度，本身没有单位，需要和vdf时间计算保持一致|
|type|	标准属性|	link的类型|
|lanes|	标准属性|	车道数|
|vdf|	标准属性|	延误函数编号|
|ul1|	标准属性|	link的预留字段1，用户自定义功能|
|ul2|	标准属性|	link的预留字段2，用户自定义功能|
|ul3|	标准属性|	link的预留字段3，用户自定义功能|
|volau|	标准属性|	volumes of auto,道路流量，分配结果|
|volad|	标准属性|	volumes of additionail,公交车等折算的标准车,分配结果|
|timau|	标准属性|	time of auto,小汽车的时间,分配结果|
|speedau|	标准属性|	speed of auto,小汽车的速度,分配结果|

### 1.2.3、transit line的属性


| 字段 | 类型 | 说明 | 
|----|----|----|
|line|	标准属性|	线路名|
|id|	标准属性	|line的ID|
|description|	标准属性|	描述说明|
|mode|	标准属性|	公交mode|
|veh|	标准属性|	线路车辆类型|
|hdw|	标准属性|	线路发车间隔|
|speed|	标准属性|	线路行驶速度|
|ut1|	标准属性|	line的预留字段1，用户自定义功能|
|ut2|	标准属性|	line的预留字段2，用户自定义功能|
|ut3|	标准属性|	line的预留字段3，用户自定义功能|

1.2.4、transit segment的属性

| 字段 | 类型 | 说明 | 
|----|----|----|
|line|	标准属性|	线路名|
|id|	标准属性	|line的ID|
|i|	标准属性|	from node的ID|
|j	|标准属性|	to node的ID|
|dwt|	标准属性|	站间停留时长|
|ttf|	标准属性	|公交车延误函数|
|us1|	标准属性	|line的预留字段1，用户自定义功能|
|us2|	标准属性	|line的预留字段2，用户自定义功能|
|us3|	标准属性	|line的预留字段3，用户自定义功能|
|voltr|	标准属性	|volume of transit,线路客流,分配结果|
|board|	标准属性	|站点上车客流,分配结果|
|timtr|	标准属性	|transit segement time,分配结果|

1.3、 Scenarios场景管理

一个场景scenario由完整的网络数据集组成，即描述交通基础设施的mode、node、link 、turn（如果有）、公交车辆和公交线路（如果有）。
Emme 数据库可能包含多个场景。 例如，一种情景可能对应于基准年，而其他情景可能代表为未来几年设想的不同网络变体。
当以交互方式使用时，Modeller 工具通常假设它们将针对当前场景运行。 通常，这将是桌面的主要场景，并且始终可以通过检查工具的工具上下文摘要来确认如果您需要在不同的场景中运行您的工具，
您必须首先替换资源管理器中的主要场景，然后 重新打开工具。

主要操作：

- 替换为主操作scenario
- 创建scenario
- 复制scenario
- 删除scenario
- 导入scenario
- 导出scenario