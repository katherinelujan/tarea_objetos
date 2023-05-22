class Animal{
    constructor(nombre,edad,peso,color){
        this.nombre=nombre
        this.edad=edad
        this.peso=peso
        this.color=color
    }
    rangos(){
        if(this.edad > 10){
            return "perrito viejo";
        }
        else{
            return "perrito joven";
        }
    }
}
const perro1= new Animal("chiquita",6,4,"negro")
const perro2= new Animal("Tedy",6,25,"beige")

console.log(perro1)
console.log(perro1.rangos())
