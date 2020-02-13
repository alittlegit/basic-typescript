var fn = ()=>'typescript comfile...'


// ts的类型定义， tsc进行编译时会进行类型检查，然后编译为js代码，而js代码执行时才会检查
var a: number;
var b: string;
var c: boolean;
a = 10;
b = 'hello';
c = true;

/**
 * var let const 
 * 1. let const 块级作用域
 * 2. let const 不能重复声明
 * 3.const变量声明同时必须初始化，并且初始化后不能再改变
 */

 ///////1. let const 块级作用域
 // var 函数作用域
 for(var i =0; i < 2; i++){
     console.log(i)
 }
 console.log(i)  //var此时没有在函数中，相当于在全局作用域，作用域范围变大了

 if(true){
     var foo = 'bar'
     console.log(foo) // 同理i没有块级作用域，这里想要foo只能在该块内使用
 }
 console.log(foo)

 for(let j =0; j < 2; j++){
    console.log(j)
 }
 //console.log(j) // error Cannot find name 'j'.

 if(true){
    let bar = 'barbar'
    console.log(bar)  
}
// console.log(bar)  // bar是let声明是块级作用域


///////2. let const 不能重复声明  var可以
var cname:string = 'hello'   
console.log(name)
var cname:string = 'world'
console.log(name)

let hehe:string = 'hello'  //无法重新声明块范围变量“name”。
console.log(hehe)
// let hehe:string = 'world'
// console.log(hehe)

// let 定义和赋值的正确用法
// 1. 声明并初始化，然后赋值
let  wo: string='bihu'
wo='wenzi'
// 2. 先直接声明不初始化，然后赋值
let yi: string;
yi = 'duohereshui'


//////3.const变量声明同时必须初始化，并且初始化后不能再改变
const urlbase:string = 'http://localhost:3000/'
// urlbase='hello'  // const定义的变量不能再改变

// const  url:string; // const变量必须初始化
// url = 'hello'