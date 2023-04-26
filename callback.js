// var arr = [12, 13,]
// var arr1 = [1,11]
// array method

//   console.log(arr.length);
// // console.log(arr.join(arr1));
// var std = [{name:'jatin',age:21}]
// arr.push('hii')
// arr.push('1')
// console.log(arr);
// std.push({ name: 'jay', age: 34 })
 
// console.log(std);

var arr = [12, 13, 14, 15, 16]
var arr1 = ['one', 'two', 'three', 'four', 'five']

// arr.pop()
// arr.pop()
// arr.pop()
// 

var a = arr.concat(arr1)
// var a= arr.reverse()
// var a = arr.slice(0,2)

// console.log(a);
// console.log("welcome" + (10 + 20));
// console.log(10 + 20 + "welcome");
var string = 'hey this is'
// var string1 = 544   ''\


//  var str =  string.concat(string1)
// var str = string + string1
// var r = string.repeat(3)

// var r = string.indexOf('this')
// var r = string.endsWith('is')
    
var std = [{ name: 'jay baara', age: 34 }, { name: 'jaymin patel', age: 34 }]

var r = std.filter((std) => {
    return   std.name.endsWith('patel') == true
})
console.log(r);


