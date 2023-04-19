import React from 'react'
// import './styles.module.scss'
// import './style1.module.css'
// import '@/styles/style2.module.css'
import styled from 'styled-components';


const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid blue;
  border-radius: 4px;
`;

const HomeContent = () => {
    const myIntro = `Hi there, my name is Duong Thanh Toan. I'm 25 years old and I'm a web developer`;
    return (
        <Button>
            <div>This is my home page</div>
            <div>{myIntro}</div>
            <div>image</div>
            <div>3 years in programming</div>
            <div>many project</div>
        </Button>
    )
}

export default HomeContent
