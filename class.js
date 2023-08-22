// class Car{
//     constructor(name,year){
//         this.name=name
//         this.year=year
//     }
//     age(){
//         const date= new Date();
//         return date.getFullYear()-this.year;
//     }
// }
// const MyCar= new Car("qww",2013)
// document.getElementById("demo").innerHTML="my car is" +MyCar.age()+"years old";

//  class Car{
//     constructor(name,year){
//         this.name=name
//         this.year=year
//     }
//     sayHello(){
//     console.log(`my car name is  ${this.name} year is ${this.year}`)
//     }
    
// }
// const Myveh= new Car("as",2001)
// Myveh.sayHello()

class Circle{
    constructor(radius){
        this.radius=radius
    }
    myCircle(){
        const area=( Math.PI*this.radius*this.radius);
        console.log('area= '+area)

    }
 
}
const myArea = new Circle(6)
myArea.myCircle() 

