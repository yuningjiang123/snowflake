# 使用css3及原生js实现雪花飘落的效果

## 演示地址: http://120.79.160.213:5500

## css3负责让雪花做摆动运动，js控制雪花的随机生成以及位置、速度、透明度等

## 可嵌进自己的网页。由于里面使用requestAnimationFrame控制雪花下落的动画

## (requestAnimationFrame为h5提供的动画API)，所以比较适用于静态网页，

## 需要用户频繁操作的网页则不太适合

## 嵌入方法：

1. 准备一张png格式的雪花图片，命令为snow.png，放至项目目录
2. 将snow.js拷贝至项目目录
3. html页面的body中增加class为snow的div，再其后通过标签引入snow.js
4. html页面的style中(或者引入外部样式)设置：
### *{
###		margin:0;
###		padding:0;
###	}
###	body{
###		width:100%;
###		height:100vh;
###		overflow: hidden;
###	}
###	.snow{
###		position:absolute;
###		width:100%;
###		height:100vh;
###		background: (linear-gradient(black 80%, white 100%))
###	}
5. 然后在样式中设置@keyframes spin，这个是雪花摆动的动画，是逐帧设置雪花
的旋转角度来实现的，这里为了方便我用python写了一个脚本生成每一帧的具体语句。
当然你也可以用其它语言，最近刚好复习一下python所以用的python写。里面可以设置
你想要雪花的摆动角度，然后运行脚本就会输出雪花摆动动画的css语句，拷贝进@keyframes 
spin {}里即可。

## 如此即可基本完成雪花飘落动画的引入。当然你为了能够更好地嵌入你自己的网页肯定还需要做一些更进一步的工作比如调节z-index等。有兴趣者欢迎加我QQ与我一起讨论前端技术。1004456916。
