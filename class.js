// // class is a blueprint of object   // variable function
// class car {
//     constructor(s,c) {
//         this.color = c
//         this.speed = s
//     }

//     createCar() {
//         console.log('car is ready color :'+this.color+" SPEED IS :"+this.speed);
//     }
// }

// var nexa = new car(120, 'black')
// nexa.createCar()
// var verna = new car(220, 'white')
// verna.createCar()



// class sum{
//     constructor(first, second,third) {
//         this.first = first
//         this.second = second
//           this.third = third
//     }

//     sumofNumOftwo() {
//            return this.first+this.second+this.third
//     }

//     sumOfnum() {

     
//         console.log('sum is'+this.sumofNumOftwo()) ;
//     }
// }


// var mysum = new sum(20, 14,12)

// var mysum = new sum(20, 14,5)|
// mysum.sumOfnum()

class EvenOdd{
    constructor(num) { 
        this.num = num
    }

    CheckEvenOdd(n) { 
  
        if (this.num % 2 == 0) {
            console.log('even');
        } else { 
            console.log('odd');
        }


    }
}

var FirstOddE = new EvenOdd(5)

console.log(FirstOddE.num);



