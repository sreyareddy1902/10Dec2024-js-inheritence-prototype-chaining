
//inheritence
//prototypical inheritence
/*---without prototype
function person(name,year,gender,place)
{
   
    this.name=name
    this.year=year
    this.gender=gender
    this.place=place

    this.Age=function()
    {
        let age=new Date().getFullYear()-this.year
        console.log(age)
    }
   
}
let p1=new person('john',1999,'male','hyd')
p1.Age()
console.log(p1)
------*/

/*----with prototype------
function person(name,year,gender,place)
{
    this.name=name
    this.year=year
    this.gender=gender
    this.place=place
}

person.prototype.Age=function()
{
    let age=new Date().getFullYear()-this.year
    console.log(age)
}

let p1=new person('merry',2000,'female','goa')
p1.Age()
console.log(p1)
-----*/

/*-----classical inheritence
class person  //parent class
{
    constructor(name,year,gender)
    {
        this.name=name
        this.year=year
        this.gender=gender
    }
    Age()
    {
        console.log(this.name,this.year,this.gender)
    }
}

class employee extends person //child class
{
    constructor(name,year,gender,id,company,salary)
    {
        super(name,year,gender)
        this.id=id
        this.company=company
        this.salary=salary
    }
    Age()
    {
        console.log(this.name,this.salary)
    }
}

let e1=new employee('john',2000,'male',101,'TCS',30000)
e1.Age()
console.log(e1)
---------*/


//prototype chaining
//example1
let user={
    name:'john',
    gender:'male'
}
console.log(user.hasOwnProperty('name'))
//console.log(user.hasOwnProperty('Name'))
//console.log(user.hasOwnProperty(name))
console.log(user.hasOwnProperty('place'))



//prototype chaining examples
function Animal(name)
{
    this.name=name
}

Animal.prototype.speak=function()
{
    console.log(this.name,'makes a sound')
}

//setting prototype

Dog.prototype=Object.create(Animal.prototype)
Dog.prototype.constructor=Animal

function Dog(name,breed)
{
    this.name=name
    this.breed=breed
}

Dog.prototype.sound=function()
{
    console.log(this.name,'bow bow')
}

let d1=new Dog('tom','abc')
d1.speak()
d1.sound()

