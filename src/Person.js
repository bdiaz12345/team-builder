import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    background-color: #fff;
    border-radius: .375rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    padding: 1rem 2rem;
`

const Header = styled.h1`
`

const Email = styled.p``

const Role = styled.p``

const Person = (props) => {
    const { name, email, role } = props;
    
        return (
        <Wrapper>
            <Header>{name}</Header>
            <Email>{email}</Email>
            <Role>{role}</Role>
        </Wrapper>
    )
}

export default Person