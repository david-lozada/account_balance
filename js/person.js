class Person {
  constructor(firstName, lastName, age, nationality){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.nationality = nationality
  } 

  get getName() {
    return `${this.firstName} ${this.lastName}`
  }
}

export default Person