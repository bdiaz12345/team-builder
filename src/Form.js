import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: .375rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    min-width: 600px;
    width: 80%;
`

const Title = styled.h1`
    color: lightgrey;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SectionTitle = styled.h2`
    text-align: center;
`

const Input = styled.input`
    padding: .5rem 1rem;
    border-radius: .375rem;
    border: 1px solid #e2e8f0;
    flex: 1;
`

const Submit = styled.button`
    border: 1px solid lightgrey;
    background-color: lightgrey;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    padding: .5rem 2rem;
    transition: all .25s ease-in-out;
    color: black;
    border-radius: .375rem;
    margin: 2rem 0;

    &:focus {
        outline: 0;
    }

    &:hover {
        cursor: pointer;
        border: 1px solid white;
        background-color: white;
    }
`


const Form = (props) => {
    const { person, change, submit } = props;

    return (
        <Wrapper>
            <Title>Add a Team Member</Title>
            <form onSubmit={submit}>
                <Section>
                    <SectionTitle>Name</SectionTitle>
                    <Input type='text' name='name' placeholder='Name' value={person.name} onChange={change} />
                </Section>
                <Section>
                    <SectionTitle>Email</SectionTitle>
                    <Input type='text' name='email' placeholder='Email' value={person.email} onChange={change} />
                </Section>
                <Section>
                    <SectionTitle>Role</SectionTitle>
                    <Input type='text' name='role' placeholder='Role' value={person.role} onChange={change} />
                </Section>
                <Section>
                    <Submit>Submit</Submit>
                </Section>
            </form>
        </Wrapper>
    )
}

export default Form
