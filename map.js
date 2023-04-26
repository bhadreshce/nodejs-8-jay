// map function -> we can loop array one by one value using this function

var std = [ { name: 'jay', age: 20 },
            { name: 'jaydeep', age: 22 },
            { name: 'jaymin', age: 25 }
          ]

var after5 = std.map((v) => { 
    return { name: v.name, age: v.age ,mark: v.mark}
})
// filter : use for remove value from array 

 var afterFilter = after5.filter((v) => { 
         return v.age !== 30 // kevi value nthi joti 
})
//110 [{ name:'jay',age:20,mark:78 },{ name:'jaydeep',age:22,mark:80 },{ name:'jaymin',age:25,mark : 90  }]
//map mark => percentage
// filter mark => 75 >= 
// 
console.log(afterFilter);
var a;
let b;

// var newArr = arr.map(function (v) { 

//       return v+5
// })

// console.log(newArr);