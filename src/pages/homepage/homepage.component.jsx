import React from 'react'
import Directory from '../../components/directory/directory.component'

import './homepage.styles.scss'


const HomePage = (props) => {
  console.log(props)

  return (
    <div className='homepage'>
  
      <Directory />
  
      {/* <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>HATS</h1>
            <span className='subtitle'>SHOP</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>JACKETS</h1>
            <span className='subtitle'>SHOP</span>
          </div>
        </div><div className='menu-item'>
          <div className='content'>
            <h1 className='title'>SNEAKERS</h1>
            <span classNaBme='subtitle'>SHOP</span>
          </div>
        </div><div className='menu-item'>
          <div className='content'>
            <h1 className='title'>WOMENS</h1>
            <span className='subtitle'>SHOP</span>
          </div>
        </div><div className='menu-item'>
          <div className='content'>
            <h1 className='title'>MENS</h1>
            <span className='subtitle'>SHOP</span>
          </div>
        </div>
      </div> */}
  
  
  
    </div>
  )

}



export default HomePage;