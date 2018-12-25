/*
* 1. 写出运行的结果
*
*/
 [] === 0;
 [] == 0;
 null == 0;
 null === 0;
 null == undefined;

 Number(undefined) == NaN;
NaN === NaN;

isNaN(false) ;
isNaN('1px');
false == 0;

!![];
!!{};
typeof {};
typeof [];// 判断数组的方法1 2
/*
* 2.js 中定义变量的方式有几种
*
* 2.1 函数声明和函数表达式的区别
*
* var a = b = 1; // 出现的问题是什么
*
* 3. typeof x  有多少种结果
*
* 3.1 parseInt parseFloat Number 区别
*
* 3.2 isNaN()  // 存在的问题
*
* 4.实现一个数组的乱序排列
*
* 5.实现数组的排序
*
* 5.1 数组去重
*
* 6.实现两个数组的交集、并集
*
* 7.实现数组的reduce方法
*
* 7.0 实现多层数组的展开
*
* 7.1 深拷贝
*
* 7.2 判断两个对象是否相同
*
* 7.3 Object.create()
*
* 7.4 for...in Object.keys的区别 判断属于自身属性的方法
*
* 8. ../a/b/c  ../a/c 相对路径表示出来
*
* 9. 闭包 作用域链
*
* 9.1 this arguments
*
* 10. jsonp原理(手写jsonp)  跨域的其他方法 axios preflight withcredients
*
* 10.1 fetch xhr
*
* 11. http 的状态码
*
* 11.1 输入url 到页面渲染出来的过程
*
* css js 阻塞html 渲染 defer async type=module
*
* 11.2 首屏加载的优化
*
* 12 常用的图片的格式  webp
*
* */

