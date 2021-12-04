// // // var numero=5//tipo int
// // // let nombre='pablo'//tipo string
// // // const edad=37 //tipo entero
// // // //variable
// // // let name2:string='diamante'
// // // console.log(name2)
// // // name2: 'dueño'
// // // //no olvidar let y const
// // // let play:boolean//declaro aquí que será booleano con let
// // // play:'true'//nombre y asignacion de su valor de la varialbe

// // // let digito:number=10
// // // console.log(digito)
// // // let numero:number[]=[1,2,3]
// // // let names:string[]=['lagarto-chan','inocencio','santuso']
// // // let coleccionnumber:Array<number>=[1,2,3]
// // // // let coleccionnnames:Array<string>=['lagarto-chan','inocencio','santuso']
// // // let platu:[boolean,number,string]
// // // platu=[false,23,'michiSan']
// // // console.log(platu[2])
// // // function sum(z:number,x:number):number{
// // //     return z+x
// // // }
// // // const suma:number=
// // // sum(1.5,1.5);
// // // console.log(suma);
// // //this is a arrow functions
// // // function show():void{
// // //     console.log('Function 1')
// // // }
// // // const show2=():void=>{
// // //     console.log('function2')
// // // }
// // // show();
// // // show2();
// // // // PARAMETROS OPCIONALES
// // // // CON SIMBOLO ?
// // // const opcionales=(name:string,apellido:string,edad?:number)=>{
// // //     if (edad) {
// // //         console.log(`se llama ${name} su apellido es ${apellido} y su edad es ${edad}`)
// // //     }
// // //     else
// // //     console.log(`se llama ${name} su apellido es ${apellido}`)
// // // }
// // // opcionales('pablo','roca',25)
// // // PARAMETROS POR DEFECTO
// // // CON SIMBOLO =
// // // const opcionales=(name:string,apellido:string,edad:number=55)=>{
// // //     if (edad) {
// // //         console.log(`se llama ${name} su apellido es ${apellido} y su edad es ${edad}`)
// // //     }
// // //     else
// // //     console.log(`se llama ${name} su apellido es ${apellido}  y su edad es ${edad}`)
// // // }
// // // opcionales('pablo','roca') 
// // // opcionales('maria','peta',19) 
// // // // PARÁMETROS REST
// // // const cartadepostres=(namefrompastel:string,...recipesfromfruits:string[])=>{
// // // console.log(`el postre es ${namefrompastel} y parte de sus recetas son ${recipesfromfruits}`)
// // // }
// // // cartadepostres('tartadelimon','limon','harina','polvodehornear','polvodegalleta');
// // // class Vehiculo{
// // //     marca:string
// // //     fecha:string
// // //     puertas:number
// // //     constructor(marca_:string,fecha_:string,puertas_:number){
// // //         this.marca=marca_
// // //         this.fecha=fecha_
// // //         this.puertas=puertas_
// // //     }
// // //     aceleracion():void{
// // //         console.log('vamo a acelerando')
// // //     }
// // //     frenando():void{
// // //         console.log('gua  a frenar')
// // //     }
// // // }
// // // const coche=new Vehiculo('lamborghini','06/01/1992',6)
// // // const coches=coche.marca
// // //     coche.fecha

// // //     coche.aceleracion()
// // //     console.log("marca:"+coches)
// // // class Madre{
// // //     personalidad:string
// // //     edad:number
// // //     constructor(_personalidad:string,_edad:number){
// // //         this.personalidad=_personalidad
// // //         this.edad=_edad
// // //     }
// // //     showthepersonality(){
// // //         console.log(this.personalidad)
// // //     }
// // // }
// // // class Hijo extends Madre {
// // //     aspectofisico:string
// // //     constructor(_personalidad:string,_edad:number) {
// // //         super(_personalidad,_edad)
// // //         this.aspectofisico
// // //     }
// // // }
// // // class Saiyayin{
// // //     private raza:string
// // //     protected poder:string='genkidama'
// // //     protected mana:number=100

// // //     constructor(raza_:string){
// // //         this.raza=raza_
// // //     }
// // //     mensajederaza():void{
// // //         console.log(`esta es la raza más poderosa llamada: ${this.raza}`)
// // //     }
// // //     modificarRaza(raza_:string):string{
// // // return `la raza evolucionó a ${this.raza=raza_}`;
// // //     }
// // //     CallingAttributes():void{
// // //         console.log('Calling attributes!!')
// // //     }
// // // }
// // // class SubclaseGuerrera extends Saiyayin{
// // //     nombrePersonaje:string="goku"
// // //     poder="hamaha!"
// // //     mana=90
// // // }

// // // const usuario1=new Saiyayin('pokemon');
// // // usuario1.mensajederaza()
// // // const razacambiada=usuario1.modificarRaza('digimon');
// // // console.log(razacambiada)
// // // // usuario1.CallingAttributes()
// // // // const jugador=new SubclaseGuerrera()
// // // // console.log(`este es un saiyayin: ${jugador.nombrePersonaje} su ki es de ${jugador.mana} y su poder es ${jugador.poder}`)  
// // //clases abstractas
// // // abstract class Sueños {
// // //     abstract objetivo1():void
// // //     abstract objetivo2():void
// // // }
// // // class Oficio  extends Sueños{
// // //     constructor() {
// // //         super()
// // //     }
// // //     objetivo1(): void {
// // //         console.log('haciendo tarea1')
// // //     }
// // //     objetivo2(): void {
// // //         console.log('haciendo tarea 2')
// // //     }
// // // }
// // // const haciendo=new Oficio()
// // // haciendo.objetivo1()
// // // haciendo.objetivo2()
// // // INTERFACES
// // // interface Persona{
// // //     nombre:string
// // //     raza:string
// // // }
// // // una vez creada la interface
// // // // la podemos usar las veces que queramos
// // // // en cualquier parte de nuestra aplicación
// // // function caminar(persona:Persona):void{
// // // console.log(`el ser humano llamado: ->${persona.nombre} con raza:-> ${persona.raza}`)
// // // }
// // // let persona_dada={nombre:'Gabriel',raza:"humana",edad:28}
// // // caminar(persona_dada)
// // // // pasandole el tipo interface persona lo estamos obligando
// // // // a solo tomar los objetos ya declarados
// // // // // let persona_dada2:Persona={nombre:'Gabriel',raza:"humana"}
// // // interface Beast{
    
// // //     skill:string
// // //     level:number
// // //     name:string
// // //     inmortal?:boolean
// // // }
// // // // podemos tener tantos
// // // // paramatros opcionales
// // // // como queramos
// // // // function showBeast(beast:Beast):void{
// // // // if (beast.inmortal) {
// // // //     console.log('is a beast boss!!, flees!')
// // // // } else 
// // // //     console.log('no es un boss!,puedes matarlo')
// // // // }
// // // // let result={name:'Dragon',level:19,skill:'fire'}
// // // // showBeast(result)   
// // // interface Game{
// // //     readonly OpeningDate:string
// // //     readonly antiquity:string
// // // }
// // // let Gamer:Game={antiquity:'decadas',OpeningDate:'06 de enero'}
// // // // Gamer.antiquity="nanananana!!"
// // // console.log(Gamer)
// // // interface General{
// // //     (name:string,lastname:string):void
// // // }
// // // let function1:General
// // // function1=function (name:string,lastname:string):void{
// // //     console.log(`the friend with name: ${name} and ${lastname}`)
// // // }
// // // function1('INOCENCIO','EMPERADOR')
// // // function ShowData(data1:string):string{
// // //     return data1
// // // }
// // // function ShowGeneric<T>(data:T):T{
// // //     return data
// // // }
// // // console.log(ShowGeneric(2))
// // // function method1<t>(datos:t):t{
// // // return datos
// // // }
// // // console.log(method1('bienvenidos al olimpo con programacion avanzada'))

// // interface People{
// // nombre:string,
// // edad:number
// // }

// // let numero:People={nombre:"dario",edad:23}
// // console.log(numero.edad)
// // // class Madre<T>{
// // //     name:T
// // //     edad:number
// // //     method2:(dato:T)=>{
// // //         "hola":T
// // //     }
// // // }

// //   let edad;
// //   export default edad=39
// //   export class Universe{
// //       NameOfPlanet:string
// //   }
// //   export interface planeta{
// //       name:string
// //   }
// //   export const  MensajeDePlaneta=(dato:string) :void=>{
// //       console.log( `mensaje de la super raza ${dato}`)
// //   }
// interface ValidacionExitosa{
//     esvalido:true
//     reason:null
// }
// interface ValidacionFallida{
//     esvalido:false
//     reason:string
// }
// type ResultadoValidacion=ValidacionExitosa| ValidacionFallida;
// const result:ResultadoValidacion={
//     esvalido:false,//true->exitosa->false->fallida
//     reason:'esto es dato de validacion fallida'
// }
// console.log(result)
// type Color='negro'|'blanco'
// const color:Color='negro'
interface Bird{
fly():void;
layEggs():void
}
interface Fish{
swim():void
layEggsOfFish():void
layEggs():void
}

declare function GetDatas(): (Bird | Fish)

const datos=GetDatas()
datos.swim()