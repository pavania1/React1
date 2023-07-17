import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id:1,
            name:"Pavanii",
            age:20,
            skill:"React"
        },
        {
            id:2,
            name:"Pavs",
            age:21,
            skill:"Angular"
        },
        {
            id:3,
            name:"Pav",
            age:22,
            skill:"Javascript"
        },
        {
            id:4,
            name:"Pavan",
            age:23,
            skill:"Vue"
        },
    ]
     const personList = persons.map(person => (
       <Person key ={person.id} person={person}></Person>
     ))
  return (
    <div>{personList}</div>
  )
}

export default NameList