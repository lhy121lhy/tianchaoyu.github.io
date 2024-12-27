var store = [{
        "title": "道路交通分配",
        "excerpt":"以下，以emme的交通分配为例 1、EMME常规交通分配 1.1、常见交通分配方法 交通分配分为Highway分配和公交分配，两者独立运行。Hightway分配方法主要包括：Sola traffic assignment、PToll traffic assignment、Stochastic traffic assignment、Standard traffic assignment、Path-based traffic assignment、Space-time traffic assignment、system-optimal assignment等。EMME中的交通分配问题都是基于传统标准的用户均衡理论的快速收敛的网络平衡模型。不同的方法主要在于考虑的对象内容，收敛速度以及快速求解过程的区别。 SOLA traffic assignment一种基于线性近似方法的快速收敛的用户最优均衡交通分配。 它可以在共享内存计算平台上的单个处理器或多个处理器上运行,推荐使用。 PToll Traffic Assignment部分基于快速收敛的SOLA流量分配，PToll流量分配提供了更简单，更全面的收费模型。 Stochastic Traffic Assignment随机用户均衡（SUE）分配，它计算多个多类均衡分配的平均值，使用某种分配函数来影响link的cost。 用于不仅仅由于拥塞而导致多径效应的应用，或者用于UE分配可能导致全有或全部分配的应用，例如在农村，区域等。 Standard Traffic Assignment基于线性逼近算法[FrankWolfe1956]的改进的标准用户最佳均衡交通分配。 它也可以在单个处理器或多个处理器上执行。 Path-based Traffic Assignment快速收敛的用户最佳均衡流量分配可提供更好的性能，更好的收敛和更快的基于路径的结果分析。 它基于投影梯度方法的求解。 Space-time Traffic Assignment一种准动态流量分配方法，它利用现有的网络拓扑和延迟功能来执行与时间有关的网络加载。 需求矩阵可能是经过时间配置的，并且网络负载随着流量在网络中的流动而随时间变化。 推荐用于州，国家或长途旅行的模型，在这些模型中，长途旅行不应同时加载所有时间段。 System-optimal assignment系统最优分配，基于Wardrop的第二原理 2、Sola traffic assignment的原理 2.1、原理 该算法基于用户均衡理论，满足wardrop原理，即网络平衡时，每个OD对的径路具有相等和最小的费用阻抗。 2.2、计算过程 3、EMME设置操作方法...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/traffic%20assignment/",
        "teaser": null
      },{
        "title": "公交分配",
        "excerpt":"以下，以emme的交通分配为例 1、EMME常见公交分配方法 Emme提供了一系列的交通任务，以评估交通政策，包括车辆容量，拥挤，票价计划，班次，时间表等，并用于模拟世界上一些最复杂的公共交通系统。Emme传输分配包括发布时可用的最快和唯一的基于多线程的基于频率的交通分配。 Extended Transit Assignment多模式，多路径的交通分配，可以概括标准的交通分配（最佳策略），从而可以明确建模起点连接器的选择，对在公共站点选择交通服务的行进时间（除了行进路程）的敏感性等 。 还节省了策略并提供了复杂的分配后分析功能. Congested Transit Assignment:使用流量相关成本函数对车辆拥堵进行建模的公交分配。 link成本对运输量的依赖性可能表示由于乘客数量而导致运输车辆的速度降低，或者包括随车辆变得拥挤而增加的不舒适项的广义成本。 Capacitated Transit Assignment使用连续平均法（MSA）来获得与交通路段拥堵相对应的交通流量的交通分配。 车辆拥挤功能（如在拥挤的交通分配工具中一样）以及由于过境车辆的容量而导致的停车等待时间增加被用于建模降低的舒适度水平以及停车等待时间的增加. Stochastic Transit Assignment一种随机交通分配，可计算多个基于策略的分配的平均值，其中使用选择的分配因子中的一个来干扰路段的行驶时间，感知的行进距离和/或感知因子。 Deterministic Transit Assignment完整的时间表分配，其中将详细的出发和到达信息合并到最佳路径中。 它明确考虑了有关早退和迟到的选择。 对于在整个郊区和城际应用的计划时间内在不同的行程上运行的服务（例如国家或地区服务）很有用。 这对于运筹学也很有用。 尚未在Modeller中实现。 有关更多信息，请参见Emme Prompt手册4.5.9，确定性运输分配。 Disaggregate Transit Assignment允许对各个过境旅行进行详细分析的分配，其中将起点和终点指定为精确的坐标或节点号，而不是区域号。 尚未在Modeller中实现。 有关更多信息，请参见《 Emme Prompt手册4.5.8，公交行程的详细分析》。 2、公交分配设置方法—Extended transit assignment 2.1、网络和需求设置——network and demand 可选多种transit,接驳mode如果多选，可能会出现只选最快速度的那种方式 说明：mode的设置主要包括transit和aux_transit，transit为main modes,aux为辅助公交，即接驳。操作时，根据实际情况进行选择。例如： 2.2、时间和费用——Times and costs 1) 等车时间——waiting time...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit%20assignment/",
        "teaser": null
      },{
        "title": "api开发方法",
        "excerpt":"1、EMME的二次开发  EMME是基于python语言构建的，其内部内置python解释器和Jupyter notebook编译器。 ​  1.1、软件入口      tools-&gt;notebook      1.2、手册与案例      Desktop API guide：桌面接口指引   Modeller API Guide：建模器接口指引   Data Table API Guide：数据表接口指引   Matrix API Guide：矩阵接口指引   Network API Guide：网络接口指引   Emme API Reference：EMME所有接口手册   2、其他编译器开发  EMME自带python解释器，默认带有EMME的接口包，可使用其他编译器，构建基于emme编译器版本的python虚拟环境，同时可在其他编译器中调用EMME接口。    ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/api/",
        "teaser": null
      },{
        "title": "开发实例",
        "excerpt":"1、Emme API contents  常见对象：      Desktop   Data Table   Modeller   Network   Matrix   2、基于jupyter notebook入口的开发  jupyter notebook的入口在Emme 的Desktop下，该模式下，已经链接了EMME bank数据库，因此在jupyter notebook下，不需要重新链接，就可以直接操作。  2.1、主要操作方法      根据需要查看样例；   复制样例，更改输入，直接运行。      3、基于pycharm编译器的程序开发  emme提供纯脚本的接口，可以直接调用EMME的程序接口，绕过desktop,直接访问和读取数据库。  3.1、主要操作方法      访问emme 工程文件，构建emme对象，访问内部函数 ```python   ```  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/api_example/",
        "teaser": null
      },{
        "title": "环境配置",
        "excerpt":"emme软件：功能，作用，优缺点   核心内容      emme软件基础   网络编辑与计算   道路交通分配   道路分析   公交分配   公交分析   主要案例   1、EMME软件   Emme由INRO开发的一款综合性交通规划软件系统，INRO的主营产品有EMME（宏观交通规划），dynameq(中观动态仿真)，cityphy(GIS可视化)，本部在加拿大，于21年被奔特利收购。 emme为用户提供了一套需求分析及网络分析与评价工具和方法。      早期的EMME使用广泛的是emme2,通过宏命令，问答式操作和批量脚本处理。   emme4全面拥抱python语言，向下兼容宏命令处理；   emme4.5以后支持python3，新增人口合成模块，新增agent base;      使用感受：路网编辑操作，没有Transcad方便，在算法，扩展接口方面，性能优秀。    2、EMME软件重大模块      桌面（Desktop）:可视化，数据管理，分析与编辑；   建模器（modeller）:交通规划管理组件，用于模型基础处理和模型构建工具包；   API（开发接口）：基于python语言，支持jupyter notebook，自动化运行接口，脚本开发；   日记本（LogBook）:日志查看和检查   宏命令（Prompt）:宏命令接口，低版本版时的API接口语言；   3、EMME学习的工具和手册      EMME实操软件   emme_prompt_manual:宏命令操作手册   EMME help手册   EMME API接口：Desktop API;Modeller API;Data Table Api;Matrix API;Network API;EMME API Reference;   INRO官网论坛  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/basic-info/",
        "teaser": null
      },{
        "title": "基本要素",
        "excerpt":"1、EMME数据基础 EMME的软件的架构，以数据库（路网，小区，场景，矩阵等）为基础，上层支撑桌面可视化，中间使用建模器和API接口衔接和扩展软件功能，底层是基于SQL的数据部库。具体结构如下： 1.1、网络基础 网络是由node、link、turn、centroid、mode、transit segment、transit line、transit vehicles等组成。 1.1.1、方式结构（modes） 方式结构共定义了四种大类： AUTO：道路私人小汽车 Auxiliary auto:辅助机动车：非私家车以外，例如共享汽车，货车，出租车等 Transit:公交车 Auxiliary Transit:公交接驳方式； 方式结构的定义： 方式结构需要指定类型： 类型 说明 示例 id 编号（字母） a description 描述 Auto mode_type 类型 AUTO cost_time_coeff 每小时损耗美元 0 cost_distance_coeff 每公里损耗美元 0 energy_time_coeff 每小时损耗能量 0 speed_factor 速度 5 总共支持60种mode,其中AUTO是唯一的一种，其他的方式可以有多种子类型 接驳方式一定要填写速度，单位：km/h 1.1.2、node节点 节点包括普通节点，交叉口，小区。 普通节点：大规模路网中，emme软件狗会限制node的数量，往往需要扩容； 标准属性：i,xi,yi,ui1,ui2,ui3,lab,inboa,fiali 交通小区：小区形心，创建矩阵的时，默认以小区数量作为矩阵的维度；多个scenario场景共享一套交通小区，小区维度不一样时，可能会报错； 交叉口：允许转向的节点，定义形式：i-&gt;j-&gt;k,由三个点形成。 交叉口允许添加惩罚和禁止：0表示禁止转向，-1表示允许转向不惩罚...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/elements-info/",
        "teaser": null
      },{
        "title": "工程创建",
        "excerpt":"1、starting emme emme工程的创建方法： 软件界面创建 脚本语言 2、脚本化创建emme工程 2.1、主要步骤 创建emme工程数据库（emme bank） 创建空的emme工程，设置工程位置，名称，定义工程参数维度， dimensions = { \"scalar_matrices\":999, 'origin_matrices':999, 'destination_matrices':999, 'full_matrices':9999, 'scenarios':30, 'centroids':5000, 'regular_nodes':57499, 'links':250000, 'turn_entries':400000, 'transit_vehicles':30, 'transit_lines':20000, 'transit_segments':800000, 'extra_attribute_values':40000000, 'functions':99,\"operators\":2000 } 创建基础scenario 数据加载： 加载函数 创建矩阵 添加mode 添加车辆信息 添加小区 添加小区地带属性（zone partition） 添加基础网络（node,link) 添加线性文件 添加公交文件 添加额外属性（node,link,transit line,transit segment） 空间坐标系指定 设定vdf function参数指定 结束 3、EMME工程文件结构 Database:为基础数据库，存放emmebank，matrix等文件； logbook:为日志记录文件夹，存放执行记录；...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/create_project/",
        "teaser": null
      },{
        "title": "操作界面",
        "excerpt":"1、EMME软件   1.1、EMME操作界面   1.1.1、deskptop界面        菜单栏：            File:工程系统设置，结果打印输出；       Edit：网络编辑，在编辑路网下，激活；       View:视野，查看工具，放大，放小；       Tools:工具：进入modeller(仿真器)，LogBook(日志记录)，Notebook(python脚本)，网络编辑，宏命令等入口       Window:窗口设计       help:参考手册           工具栏：主要工具的快捷入口   工程项目管理窗口：可以快速打开工程文件，打开设定好的样式，结果表，搜索网络节点等；   显示窗口：可以创建多个TAZ，便于管理；   数据管理：叠加多种数据，点，线，面等数据图层，调整格式样式；   1.1.2、 Modeller工具箱    emme的核心工具，封装了关于数据管理，网络计算，矩阵计算，交通分配，公交分配，需求计算，方式选择，子区域分析等多种方法；   1.1.3、LogBook日志工具     emme的日志功能，可以查看历史时刻，使用了什么工具，执行了什么操作，成功与失败，计算的经过与结果，便于追溯。   1.1.4、NoteBook脚本工具    emme的API接口，以notebook的形式，使用python语言，和modeller,desktop等模块调试使用非常便捷。  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/software/",
        "teaser": null
      },{
        "title": "图标展示",
        "excerpt":"功能描述：查看交通分配结果和模板保存 1、 基本图层 emme的desktop上面以tab的形式，会展示多个页面图，表等。利用不同的图层和表和数据，可以配置出不同的效果图，自由度比较高。 图层操作位置： 保存为模板 叠加新图层，或者背景 GIS:叠加互联网地图，OSM,需要软件在维护期才可以 node:节点图层 link:link图层 公交：公交图层 其他：直方图，函数曲线等 图例显示:以link为例 link filter:link筛选，通过属性筛选，内置类别：auto道路，公交道路，连杆connector,接驳连杆等 offset:link之间的间隔设置， links:不同link不同的颜色渲染 bar value:link的粗细形态，选择link的属性，根据属性调整粗细，常用来显示道路流量； scale:粗细比例尺 Bars:属性值的颜色调整：可以归一化处理也可以分段处理 link test:link属性文字显示 test values:属性选择，可以选择多个字段，用逗号分隔 Text:显示字段大小，格式调整 2、结果展示与模板保存 2.1、charts图表 显示函数，直方图，散点图等图表 2.2、矩阵操作 常用的操作： desire line for select zone:画期望线 zone volaus from aggregations:查看矩阵分布 2.2、 网络展示 网络图层展示，含有固定的模板，常用是不同场景的对比，用于不同方案测试结果比对。 2.3、结果分析 道路结果分析 速度，时间，流量等分配结果显示 公交结果分析：图和表，非格子图表为图，格子图表为表 线路信息，线路流量，站点流量； 线路流量表，segement 上下客流表等；&gt;...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/image_table/",
        "teaser": null
      },{
        "title": "字段计算",
        "excerpt":"1、字段计算方法  EMME的字段大致分为三类：     默认属性：创建工程会自动创建，默认为0，ex：i,j；   额外属性：操作人员自己创建的属性字段，以@符合开始，不支持大写，只支持数据，ex：@a，@b；   标记属性：字符字段，以#开始；ex：#company；   针对默认属性和额外属性的计算和填充有三个入口：     网络编辑模式下，手动修改；   网络计算模型下，按条件计算；   在Modeller下，进行字段属性值计算；      EMME不允许直接在属性表上编辑字段值；    2、网络计算：  2.1、网络计算模式     工具栏选择网络计算；   结果类型选择：计算类型      ● （1）填充字段选择； ● （2）计算方法或计算表达式； ● （3）筛选条件； ● （4）计算；    3、Modeller计算  3.1、Modeller启动     3.2、Modeller计算    ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/field_calculate/",
        "teaser": null
      },{
        "title": "属性与矩阵",
        "excerpt":"1、属性表操作  1.1、属性表查看      1.2、属性表复制     filter：条件筛选；   Select All：选择所有，构建选择集；   Copy Selected Items：复制选择集对象；   粘贴到excel文件中；      1.3、属性表导出     文件：以数字表格形式打开；   保存在Data Table中；   保存为csv文件；      2、Matrix操作  2.1、矩阵读取     起点筛选：p==2；   终点筛选：q==2;      2.2、其他操作    ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/field_matrix/",
        "teaser": null
      },{
        "title": "网络编辑",
        "excerpt":"1、 手动编辑  1.1、编辑状态      选择工具栏选择路网编辑  进去路网编辑状态，注意，此时数据库处理被锁定状态，无法使用moddeler。经常在意外断电的情况下，再次启动emme。会发现，无法操作数据库，可能原因就是数据库被锁，需要手动删除emme bank下的elock文件。   路网编辑状态如下             在下方选择编辑对象，mode、node、link等；       编辑设置中：添加node默认ID设置，是node从默认值开始往上编号，防止和小区ID区号交叉；            1.2、批量复制粘贴  1.2.1、构建选择集     条件筛选；   构建选择集；  1.2.2、复制粘贴 ● 复制某一行属性列：copy(this row) ● 粘贴：ctrl+v ● 选择 填充字段    2、编辑历史 编辑完成后，所有操作过程都将记录在文本文件中，假如不同场景下的路网需要进行同样操作，则只需重复执行操作记录脚本文件即可。   2.1、找到编辑历史文件 不同工程之间可将Network Build文件夹下的文件进行共享 ● 点击编辑历史 ● 点击文件夹 ● 双击历史记录文件 ● 点击run all      ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/network-edit/",
        "teaser": null
      },{
        "title": "道路分配-溯源分析",
        "excerpt":"1、功能  分析关键通道，出行需求来源。  2、实现方法  1）创建额外标记属性（默认参数为0），选择分析对象，将额外参数赋值为1； 2）使用道路交通分配方法，默认使用sola traffic assignent; 3）根据分析类型（车辆类型），选择需求分析矩阵； 4）路径分析：统计path上额外属性值的总和，根据阈值统计该路径上的出行需求矩阵； 5）结果输出与分析；   3、示例：  3.1、路段选择：以某过江桥梁为例     3.2、额外属性创建与赋值     3.3、需求分析     3.4、路径分析     3.5、结果分析   ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/suyuan_analysis/",
        "teaser": null
      },{
        "title": "道路分配-道路管控",
        "excerpt":"1、功能  展示道路禁行前后，原道路流量在道路禁行后新的路径规划；  2、实现方法  1）选择具体道路，进行道路溯源分析，提取该道路出行需求矩阵，并保存该道路的流量； 2）复制场景，禁行该道路，在溯源基础上添加需求分析，保存道路流量； 3）场景对比，打开两个场景，显示同样道路额外属性字段，进行效果展示；  3、案例  3.1、复制场景，并进行道路溯源分析           3.2、道路禁行     3.3、道路交通分配        3.4、场景对比     ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/network-manager/",
        "teaser": null
      },{
        "title": "道路分配-差异化收费",
        "excerpt":"1、功能  特定通道或区域，对不同类型车辆类型进行收费，提取不同需求的平均费用； 典型场景如：CBD，小货车进入收费；桥梁过桥收费；   2、实现方法  1）提取不同类别下的出行需求：小汽车、货车； 2）同一道路设置不同的费用标准； 3）道路交通分配，不同类别下的差异化费率，提供不同时间价值； 4）道路skim，提取费用矩阵；   3、案例实施  3.1、出行需求与费用参数设置     3.2、总费用统计与单项费用统计              3.3、结果分析   ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/chayihua_fare/",
        "teaser": null
      },{
        "title": "合乘车道分析",
        "excerpt":"1、功能  合乘车道（HOV）分析 ​  2、实现方法  1）提取合乘需求矩阵HOV和非合乘需求矩阵LOV 2）对道路进行编辑，将HOV车道和LOV车道分离为两个link，允许HOV车辆进入LOV车道，LOV车道不允许进入HOV车道; 3）通过交通分配，路径搜索，分析HOV车道出行需求与HOV道路流量分布； ​  3、案例实施  3.1、路网编辑     3.2、需求分配     3.3、路径分析        ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/hecheng_road/",
        "teaser": null
      },{
        "title": "道路分配-出行距离分析",
        "excerpt":"1、功能  不同出行距离下的出行矩阵   2、实现方法  1）道路交通分配； 2）按路径距离聚合需求矩阵   3、案例实施     ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/trip_length/",
        "teaser": null
      },{
        "title": "道路分配-截断分析",
        "excerpt":"1、功能  分析路径前部分（冷启动），中间部分，最后部分（停车）的出行需求与车公里数。    ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/jieduan_analysis/",
        "teaser": null
      },{
        "title": "道路分配-遍历分析",
        "excerpt":"1、功能  获取不同起终点之间的出行需求，例如      子区域需求分析：CBD的出行需求；   高速公路廊道，匝道到匝道的出行需求；   高速公路收费站到收费站的出行需求矩阵；     2、实现方法      1）选择区域，标记进口和出口 2）遍历分析，结果统计       3、实施案例   3.1、区域标记     3.2、进出口     3.3、路径分析      ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/list_analysis/",
        "teaser": null
      },{
        "title": "道路分配-道路收费模型",
        "excerpt":"1、功能      Emme支持两种类型的收费系统:基于上限距离和匝道到匝道。这两种类型都需要定义一个或多个收费设施。收费设施有两个组成部分:由所有类共享的收费拓扑和依赖于类/收费类型的收费成本。有关详细信息，请参见定义收费设施。   基于路径收费；   基于起终点收费；​     2.1、基于路径收费                   3、基于起终点收费                 ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/road_fare/",
        "teaser": null
      },{
        "title": "公交分配-多模式交通分配",
        "excerpt":"1、功能  emme的交通分配允许多种交通方式同时分配，也可以不同交通方式单独分配，并将不同方式的交通流量进行叠加。 不同的方式对应于不同的分析场景。      一票制公交适用于多种交通方式综合分配，在需求模型中使用综合交通进行需求分析，无需进行子类别选择。子交通方式的选择在交通分配模型中实现。   不同交通方式单独分配，可以skim出不同方式的出行阻抗，便于需求模型单独控制不同方式的出行总量。## 2、多交通方式同时分配     2.1、选择多种交通方式及交通需求矩阵             2.2、设置换乘规则和换乘参数     2.3、其他参数设置     3、不同方式单独分配  3.1、分配第一种公交模式  3.2、分配第二种公交模型      允许在存在的公交客流基础上进行分配   ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/multi_assigment/",
        "teaser": null
      },{
        "title": "公交分配-必须使用某种交通方式",
        "excerpt":"1、功能      公交分配过程中，在起终点路径中必须使用某种交通方式​     2、功能设置             ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/must_mode/",
        "teaser": null
      },{
        "title": "公交分配-公交阻抗分析",
        "excerpt":"1、功能  获取子方式的公交阻抗    2、阻抗类型      距离矩阵   平均换乘次数   第一次等车时间   总等车时间   第一次登车时间   总登车时间   车内时间   车外时间  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit_skim_analysis/",
        "teaser": null
      },{
        "title": "公交分配-公交应用",
        "excerpt":"1、功能      公交线路分析（公交溯源）   换乘次数分析   公交出行距离分析   公交类型分析   接驳距离分析   线路与线路换乘分析（单站或多站）   站点不同公交类型的换乘（枢纽）   子区域出行需求提取（CBD）   站点到站点之间的需求分析   小区到小区之间全路径分析；   换乘站点分离（轨道站点换乘，多个物理点，站名相同）分析线路之间的换乘；   多模式换乘优惠，基于换乘次数的区间优惠；  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit_yingyong/",
        "teaser": null
      },{
        "title": "公交分配-公交网络分析",
        "excerpt":"1、功能  分析小区之间或者区域之间的道路，线路，站点等之间的流量，惩罚。   2、分析指标  2.1、link      接驳客流        接驳时间### 2.2、公交segment       断面客流   总登车客流   初次登车客流   总下车客流        最后下车客流### 2.3、节点       等车时间（最小，最大，平均）      ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit_network/",
        "teaser": null
      },{
        "title": "快速创建emme工程",
        "excerpt":"emme 工程创建 1、创建emme bank 在file文件下，选择新建工程：create a new project 新建工程的名称和位置 工程类型 创建威尼派克的样例工程：内置样例，初学者可以 创建strategy city project:用于测试和教学，规模范围小 创建空的工程：没有数据 导入存在数据库：可以兼容旧版本工程 选择工程规模 控制工程参数，影响工程空间大小，转移是否方便 不同的emme key，能接受的参数最大限制不一样； 空间索引选择 选择地图服务器osm,鼠标移动到指定区域，系统自动生成UTM zone; 工程空间概要，用于检查设置参数,确认，则完成了工程创建。 2、通过shpfile完成emme数据导入 2.1、从shpfile到数据库 工具入口：shapefile to emme conversion 选择文件: polyline shapefile:只有线层，会自动生成link的from_node to_node; nodes and link:添加需要指定inode,jnode 标准属性选择：指定标准属性对应的字段 direction:方向，emme中不含有方向，都是from_node,to_node,Transcad的link含有dir,具有AB和BA区别，因此shp文件转化为emme的link时，需要指定是转化为两个link(two way)和一个link(one-way) length:道路长度，EMME中需要设定尺寸单位； modes:link上运行使用的交通方式 type:道路类别 lanes:车道数，无法区分ab,ba的车道数； vdf:延误函数 ul1,ul2,ul3:辅助字段 在某种情况下回报错，可能是两个点之间含有多个link,这样会出现两个from_to的link,不允许出现两个点的环形 连通性和线路长度选择：next 创建数据库：指定转化的文件 base...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/create-emme-project/",
        "teaser": null
      },{
        "title": "路径检测分析",
        "excerpt":"   功能描述：道路分配结果分析，通过分析最短路径上的时间距离和费用，从而检查分配结果的正确与否。     1、shortest path analysis       功能入口：   ​  2、指标分析        （1）路径显示；   （2）起终点对于node id;   （3）路径统计指标：距离，时间，费用等，允许统计路径上多个指标，选择第一个指标最短的路径；   （4）指标统计结果，依次对于link cost的选定的指标；  ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/path_analysis/",
        "teaser": null
      },{
        "title": "select link分析",
        "excerpt":"emme支持单独对某个link进行OD溯源分析，具体操作如下： ​  1、LINK选择      基于link构建额外属性，@select_link,属性默认值为0；   选择待分析link，属性赋值为1；      2、道路交通分配      1）使用sola traffic assignment,选择待分配的出行需求；               2）路径分析               link component：选择额外属性@select_link;   operater:选择max;   阈值上下选择1；   path:选择analyzed demand on selected paths;   OD values:选择结果保存矩阵，该矩阵为经过该link的总需求；   3）结果统计与分析        3、结果展示             ","categories": [],
        "tags": [],
        "url": "/tutorials/emme/select_link/",
        "teaser": null
      },{
        "title": "公交skim分析",
        "excerpt":"emme支持起终点之间的公交路径选择分析，可详细查阅起终点之间经过的路径，时间，费用，换乘参数等，用户可通过路径分析，来检查公交分配参数是否合理。 具体操作如下： 1、modeller使用path detail工具 2、输出参数勾选 3、结果分析 参数说明： c orig dest nbpath demand imped tottim fwaitime twaitime fboatime tboatime tinvtime tauxtime fboacost tboacost tinvcost tauxcost dist nboa 123 4653 1 0.001 66.31 42.29 2.50 4.00 2.00 4.00 23.11 11.18 2.00 2.00 0.00 0.00 20.37 2.00 | orig | 起点id | |—|—|...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/transit_skim/",
        "teaser": null
      },{
        "title": "路网更新",
        "excerpt":"背景与路线 背景与问题 emme软件因为其在路网编辑方面功能弱，门槛高，技术复杂；在遇到局部路网更新，线路线型调整，属性赋值粘贴等问题时，工程技术人员往往需要在这方面投入巨大工作量，基于此，本文提出一种更新emme工程技术网络的方法。 技术路线与方法 三方软件编辑道路网络：可使用arcgis,gsis,Transcad等GIS软件 通过三方软件或者自定义脚本接口，将路网文件转化为中间脚本文件：线路拓扑及线型走向文件； 新建test sceneria 场景，通过EMME modduller工具文件，导入拓扑和线型文件；（也可以直接通过emme工具，将shp文件导入到emme中）； 坐标系转化，将导入的文件从经纬度左边转化为投影坐标； 利用modeller，将文件导出； 更新场景，将拓扑和线型文件导入新场景中， 手动编辑局部区域网络； 道路额外属性更新；# 基础网络处理 1）基于TC、arcgis、路网处理 2）EMME新建空工程； 3）使用工具shapefile to emme conversion 4）选择shp文件 5）属性选择 6）中间文件保存 node id编号，最好绕过已有编号区段； 基础文件保存basenet.in，点层和线层文件； shape线型文件保存:link_shp.db； emme文件导入和转换 1）定义方式类型 2）导入基础base文件，见上面basenet.in 3）修改线型数据： 将上文link_shp.db文件拷贝到emme工程文件目录Database下； 将link_shp.db文件名称修改为对于sceneria_id的名称，并覆盖之前的db文件； 4）线型文件坐标系转换 从shp导入的坐标系为WGS84的经纬度坐标要转化为墨卡托坐标系，转化方法如下： 源坐标：WGS1984.PRJ 目标坐标系：WGS 1984 UTM Zone 49N.prj 路径：emme安装路径下，coordinate systems/project coordinate systems/ 导入结果： ​ emme文件导出...","categories": [],
        "tags": [],
        "url": "/tutorials/emme/network_add/",
        "teaser": null
      },,{
    "title": "About",
    "excerpt":"This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at jekyllrb.com You can find the source code for Minima at GitHub: jekyll / minima You can find the source code for Jekyll at GitHub: jekyll...","url": "https://tianchaoyu.github.io/about/"
  },{
    "title": "关于",
    "excerpt":"交通行业从业十年，精通多款交通规划软件和交通模型与仿真业务，擅长python数据分析。 职业经历 时间段 雇主公司 职位 2018 ~ 至今 深城交 模型与仿真 技能 分类 技能 熟练程度 编程语言       python ⭐️⭐️⭐️⭐️⭐️   C++ ⭐️⭐️   c ⭐️⭐️⭐️   js/css ⭐️⭐️️   嵌入式系统 ⭐️⭐️⭐️   cv ⭐️⭐️⭐️️ 软件工具       transcad ⭐️⭐️⭐️⭐️⭐️   emme ⭐️⭐️⭐️⭐️⭐️   qgis ⭐️⭐️⭐️⭐️⭐️   Arcgis ⭐️⭐️⭐️...","url": "https://tianchaoyu.github.io/about/"
  },{
    "title": "分类",
    "excerpt":" ","url": "https://tianchaoyu.github.io/categories/"
  },{
    "title": "标签",
    "excerpt":" ","url": "https://tianchaoyu.github.io/tags/"
  },{
    "title": "工具",
    "excerpt":"设计工具          图片处理工具              支持调整图片大小       支持添加水印       rgb转灰度图像           资源下载   ","url": "https://tianchaoyu.github.io/tools/"
  },{
    "title": "技术教程",
    "excerpt":"                                                                                                                     python中文教程                                                    python入门教程及交通行业应用实践。                                                   开始学习                                                                                                                                                    emme从入门到精通                                                    由【入门篇、进阶篇和高级篇】三个章节组成，由浅入深，快速使用规划软件emme。                                                   开始学习                                        ","url": "https://tianchaoyu.github.io/tutorials/"
  }]
