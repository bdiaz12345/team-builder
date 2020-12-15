import React, { useState } from 'react'
import Form from './Form'
import styled from 'styled-components/macro'
import Person from './Person'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E7E7E7;
`

const SuperWrapper = styled.div``

const PersonWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
`

const defaultPerson = {
    name: '',
    email: '',
    role: ''
}


const App = () => {
  const [person, setPerson] = useState(defaultPerson)
  const [people, setPeople] = useState([])

  const change = (event) => {
    const { name, value } = event.target
    setPerson({ ...person, [name]: value })
  }

  const submit = (event) => {
    event.preventDefault()

    const newPerson = {
      name: person.name,
      email: person.email,
      role: person.role
    }

    setPeople([...people, newPerson])

    setPerson(defaultPerson)

    
  }
  
  

  return(
    <SuperWrapper>
      <Wrapper>
        <Form person={person} change={change} submit={submit} />
      </Wrapper>
      <PersonWrapper>
        {people.map((user) => {
          return (<Person name={user.name} email={user.email} role={user.role} />)
        })}
      </PersonWrapper>
    </SuperWrapper>
  )
}

export default App;