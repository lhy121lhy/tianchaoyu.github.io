---
title: bat批命令
permalink: /tutorials/python/bat/
---

# 1、常见路径处理
**1）cmd下进入某磁盘**

- 先敲盘符；
- 在输入cd: E:\pathcmd进入某目录
```bash
C:\Users\Administrator>e:

E:\>cd E:\jupyter_app

E:\jupyter_app>
```
**2）bat常见路径相关命令**

- %~dp0[获取当前路径] “d”为Drive的缩写，即为驱动器，磁盘、“p”为Path缩写，即为路径，目录
```bash
cd %~dp0 ：进入批处理所在目录
cd %~dp0bin\ ：进入批处理所在目录的bin目录
```

- %cd%[执行的路径]> cd /d D:\bat：进入D盘 某目录，如果已经在D盘则不需要/d命令;（/d不是盘符是路径）
执行路径和当前路径不一样；


```bash
@rem cd %~dp0 
cd /d D:\bat
start call print.bat
echo  %cd%
echo hello world
pause
```
# 2、bat常见命令
## 2.1、Echo 命令[#](https://www.cnblogs.com/zhaoqingqing/p/4620402.html#3252836490)
语法: echo [{on|off}] [message]
ECHO [ON | OFF] **打开回显或关闭回显功能**。
ECHO 显示当前回显设置。
ECHO [message] 显示信息。
**echo off 表示在此语句后所有运行的命令都不显示命令行本身**；默认是on，on时会显示如： C:\文件夹路径>命令行。
在实际应用中我们会把这条命令和重定向符号( 也称为管道符号，一般用 > >> ^ )结合来实现输入一些命令到特定格式的文件中。
Sample： echo off
Sample： echo hello world (显示出“hello world”)
## 2.2、@ 命令
表示不显示@后面的命令，(在入侵过程中自然不能让对方看到你使用的命令啦)
@ 与 echo off 相象，但它是**加在每个命令行的最前面**，**表示运行时不显示这一行的命令行**(只能影响当前行)。
Sample： @echo off (**此语句常用于开头，表示不显示所有的命令行信息，包括此句**)
### 2.3.Goto 命令
语法：goto label (label是参数，指定所要转向的批处理程序中的行。)
指定跳转到标签行，找到标签行后，程序将处理从下一行开始的命令。
label标签的名字可以随便起，但是最好是有意义的，字母前必须加个冒号“:”来表示这个字母是标签。
goto命令就是根据这个冒号来寻找下一步跳到到那里。经常与 if 配合使用，根据不同的条件来执行不同的命令组。
### 2.4.Rem 命令：注释
语法：Rem Message...
(小技巧：用::代替rem)
注释命令，在C语言中相当与/*...*/,它并不会被执行，只是起一个注释的作用，便于别人阅读和自己日后修改。
Sample：@Rem Here is the description.
### 2.5.Pause 命令[#](https://www.cnblogs.com/zhaoqingqing/p/4620402.html#2287364603)
会暂停批处理的执行并在屏幕上显示Press any key to continue...的提示，等待用户按任意键后继续。
​
​
