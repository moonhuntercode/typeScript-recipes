
interface UserProfile{
    readonly firstName:string,
    readonly lastName:string,
    readonly age:number
}
const person:UserProfile={
    firstName:'Victor',
    lastName:'putoski',
    age:50
}
// **  object freeze 🛡️seguridad en compilación + ejecución**
// const person = Object.freeze({
//   firstName: "Victor",
//   lastName: "putoski",
//   age: 50,
// });

person.firstName='alien'
person.lastName='ware'

console.log(person)