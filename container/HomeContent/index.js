import React from 'react'
import './styles.module.scss'
// import './style1.module.css'
// import '@/styles/style2.module.css'

const HomeContent = () => {
    const myIntro = `Hi there, my name is Duong Thanh Toan. I'm 25 years old and I'm a web developer`;
    return (
        <div>
            <div>This is my home page</div>
            <div>{myIntro}</div>
            <div>image</div>
            <div>3 years in programming</div>
            <div>many project</div>
        </div>
    )
}

export default HomeContent
