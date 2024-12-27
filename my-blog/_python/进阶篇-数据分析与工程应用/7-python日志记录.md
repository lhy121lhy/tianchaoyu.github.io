---
title: 日志记录
permalink: /tutorials/python/log-book/
---



python 日志输出记录通常采用内置的模块logging，其提供灵活的方式来输出日志信息，并且可以搭配不同的日志级别和输出格式。

# 1、日志操作基本步骤
## 1.1、模块导入

```python
import logging
```

## 1.2、日志配置


- **设置日志级别**，包括：DEBUG、INFO、WARNING、ERROR和CRITICAL。日志级别不仅用于标识消息的重要性，还用于控制日志的输出。**当你设置一个日志器（Logger）或日志处理器（Handler）的级别时，只有等于或高于该级别的日志消息才会被处理和输出。**
- **DEBUG：级别10，**输出详细的信息，通常用于问题诊断。在开发和测试阶段非常有用，但在生产环境中可能会产生大量日志。
- **INFO：级别20，**输出一般性的信息，如程序运行的状态、处理进度等。适合在生产环境中提供程序运行的概览。
- **WARNING**：**级别**30，输出潜在的问题，但不会立即影响程序运行。例如，当某个操作可能不是最优解或者某些条件未满足时。
- **ERROR**：**级别**40，输出由于严重问题导致的错误，这些错误可能会影响程序的部分功能，但不会导致程序完全停止。
- **CRITICAL**：**级别**50，输出非常严重的问题，如程序无法继续运行的情况。这是最高级别的日志，通常用于报告紧急情况。
- **设置日志的格式**，包括时间戳、日志级别、消息等。日志格式是通过Formatter类来设置的，它允许你指定日志消息的布局。
- %(name)s: 显示日志器的名字。
- %(levelno)s: 显示日志级别数字。
- %(levelname)s: 显示日志级别名称（如INFO、ERROR等）。
- %(pathname)s: 显示日志消息定义的文件的完整路径。
- %(filename)s: 显示日志消息定义的文件的名称。
- %(module)s: 显示包含日志消息的模块的名称。
- %(lineno)d: 显示日志消息定义的代码行号。
- %(funcName)s: 显示日志消息定义的函数的名称。
- %(created)f: 显示当前的时间戳。
- %(asctime)s: 显示时间，格式为%Y-%m-%d %H:%M:%S,uuu。
- %(msecs)d: 显示毫秒。
- %(relativeCreated)d: 显示自Logger创建以来的毫秒数。
- %(thread)d: 显示线程ID。
- %(threadName)s: 显示线程的名称。
- %(process)d: 显示进程ID。
- %(message)s: 显示日志消息。
```python
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
```


- **设置日志的输出位置。**​
​

# 2、日志创建示例
## 2.1、快速路创建日志

```python
import logging
logger = logging.getLogger(__name__)

# 日志设置
logging.basicConfig(filename='./log.txt', level=logging.DEBUG,
                    format='%(asctime)s -  %(filename)s - %(levelname)s - %(message)s')
logging.debug('This is debug message')

# 添加控制台输出
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(filename)s - %(levelname)s - %(message)s')

# 为控制台handler设置formatter
console_handler.setFormatter(formatter)
logger.addHandler(console_handler)



if __name__ == "__main__":
    # logging.info("this is a test")
    logger.info("tets")
```

## 2.2、基于配置文件进行创建
​
### 2.2.1、配置文件：config_log.yaml

```yaml
logging:
  version: 1
  disable_existing_loggers: true

  root:
    level: DEBUG
    handlers: [console, logfile]

  loggers:
    model:
      level: DEBUG
      handlers: [console, logfile]
      propagate: false

  handlers:
    logfile:
      class: logging.FileHandler
      filename: None
      mode: a
      formatter: fileFormatter
      level: DEBUG

    console:
      class: logging.StreamHandler
      stream: ext://sys.stdout
      formatter: simpleFormatter
      #level: WARNING
      level:  INFO

  formatters:
    simpleFormatter:
      class: logging.Formatter
      format: '%(asctime)s - %(levelname)s - %(name)s - %(message)s'
      datefmt: '%Y-%m-%d %H:%M:%S'

    fileFormatter:
      class: logging.Formatter
      format: '%(asctime)s - %(levelname)s - %(name)s - %(message)s'
      datefmt: '%Y-%m-%d %H:%M:%S'
```


### 2.2.2、日志创建

```python
import os
import yaml
import logging
import logging.config
import sys
from log_test import function_test

LOGGING_CONF_FILE_NAME = 'config.yaml'
TOURMODEL_LOGGER = "model"

logger = logging.getLogger(__name__)


def config_logger(outpath, log_name, basic=False):
    """
        配置日志文件，并输出开始信息

        :param outpath: 项目输出位置
        :param log_name: 日志文件名
        :param basic: 需要已拼接，默认否
        :return: None
        """
    log_config_file = None
    if not basic:
        log_config_file = os.path.join(outpath, LOGGING_CONF_FILE_NAME).replace("\\", "/")
        # log_config_file = "./" + LOGGING_CONF_FILE_NAME
        # print(log_config_file)
        if log_config_file:
            with open(log_config_file) as f:
                config_dict = yaml.load(f, Loader=yaml.UnsafeLoader)
                config_dict = config_dict['logging']
                config_dict.setdefault('version', 1)
                config_dict["handlers"]["logfile"]["filename"] = log_name  # 根据任务名创建日志文件

                logging.config.dictConfig(config_dict)
        else:
            logging.basicConfig(level=logging.INFO, stream=sys.stdout)

        logger = logging.getLogger(TOURMODEL_LOGGER)
        if log_config_file:
            logger.info("Read logging configuration from: %s" % log_config_file)
        else:
            print("Configured logging using basicConfig")
            logger.info("Configured logging using basicConfig")


if __name__ == "__main__":
    out_path = "../python-工程应用/2-python日志记录/"
    config_logger(out_path, "log.txt")
    function_test()

```

- 其他文件引用
```python
import logging


def function_test():
    "函数测试"
    logging.info("this is a test in other file")
```


