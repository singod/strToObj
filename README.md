# strToObj
把json格式的字符串转换为对象

在开发JavaScript插件过程中，发现调用插件总是需要写JS代码来调用，而不能自动根据HTML的属性来自动判断调用。

后来看到<a href="https://github.com/allmobilize/amazeui">Amazeui</a>的书写方式，顿时豁然开朗，在HTML元素上添加data-name属性来自定义参数，
这样做很方便，使用插件的朋友学习成本也低，所以就借鉴了这种方式。
