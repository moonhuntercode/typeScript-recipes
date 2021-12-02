// var numero=5//tipo int
// let nombre='pablo'//tipo string
// const edad=37 //tipo entero
// //variable
// let name2:string='diamante'
// console.log(name2)
// name2: 'dueño'
// //no olvidar let y const
// let play:boolean//declaro aquí que será booleano con let
// play:'true'//nombre y asignacion de su valor de la varialbe
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let digito:number=10
// console.log(digito)
// let numero:number[]=[1,2,3]
// let names:string[]=['lagarto-chan','inocencio','santuso']
// let coleccionnumber:Array<number>=[1,2,3]
// // let coleccionnnames:Array<string>=['lagarto-chan','inocencio','santuso']
// let platu:[boolean,number,string]
// platu=[false,23,'michiSan']
// console.log(platu[2])
// function sum(z:number,x:number):number{
//     return z+x
// }
// const suma:number=
// sum(1.5,1.5);
// console.log(suma);
//this is a arrow functions
// function show():void{
//     console.log('Function 1')
// }
// const show2=():void=>{
//     console.log('function2')
// }
// show();
// show2();
// // PARAMETROS OPCIONALES
// // CON SIMBOLO ?
// const opcionales=(name:string,apellido:string,edad?:number)=>{
//     if (edad) {
//         console.log(`se llama ${name} su apellido es ${apellido} y su edad es ${edad}`)
//     }
//     else
//     console.log(`se llama ${name} su apellido es ${apellido}`)
// }
// opcionales('pablo','roca',25)
// PARAMETROS POR DEFECTO
// CON SIMBOLO =
// const opcionales=(name:string,apellido:string,edad:number=55)=>{
//     if (edad) {
//         console.log(`se llama ${name} su apellido es ${apellido} y su edad es ${edad}`)
//     }
//     else
//     console.log(`se llama ${name} su apellido es ${apellido}  y su edad es ${edad}`)
// }
// opcionales('pablo','roca') 
// opcionales('maria','peta',19) 
// // PARÁMETROS REST
// const cartadepostres=(namefrompastel:string,...recipesfromfruits:string[])=>{
// console.log(`el postre es ${namefrompastel} y parte de sus recetas son ${recipesfromfruits}`)
// }
// cartadepostres('tartadelimon','limon','harina','polvodehornear','polvodegalleta');
// class Vehiculo{
//     marca:string
//     fecha:string
//     puertas:number
//     constructor(marca_:string,fecha_:string,puertas_:number){
//         this.marca=marca_
//         this.fecha=fecha_
//         this.puertas=puertas_
//     }
//     aceleracion():void{
//         console.log('vamo a acelerando')
//     }
//     frenando():void{
//         console.log('gua  a frenar')
//     }
// }
// const coche=new Vehiculo('lamborghini','06/01/1992',6)
// const coches=coche.marca
//     coche.fecha
//     coche.aceleracion()
//     console.log("marca:"+coches)
var Madre = /** @class */ (function () {
    function Madre(_personalidad, _edad) {
        this.personalidad = _personalidad;
        this.edad = _edad;
    }
    Madre.prototype.showthepersonality = function () {
        console.log(this.personalidad);
    };
    return Madre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(_personalidad, _edad) {
        var _this = _super.call(this, _personalidad, _edad) || this;
        _this.aspectofisico;
        return _this;
    }
    return Hijo;
}(Madre));
