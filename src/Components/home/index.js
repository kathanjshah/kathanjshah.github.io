import React from 'react'
import './home.css'
import Header from '../header/index'
import Body from '../body/index'

function Home() {
  return (
    <div className='whole'>
        <div>
            <Header/>
        </div>
        <div>
            <Body/>
        </div>
    </div>
  )
}

export default Home
