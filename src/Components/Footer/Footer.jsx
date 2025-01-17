import React from 'react'
import Header from '../Header/Header'
import cl from './Footer.module.css'
import Button from '../../UI/Button'
import Input from '../../UI/Input'


export default function Footer() {
  return (
    <section className={cl.section}>
      <h1 style={{fontSize:"1px", visibility:"hidden"}}>Address</h1> 
       <Header isFooter={true}/>
       
        <div className={cl.footerFormContainer}>
          <div className={cl.addressContainer}>
           <span className={cl.title}>Contact us:</span>
            <address>
              <span>Email:<a href="mailto:info@positivus.com">info@positivus.com</a><br/></span>
              <span>Phone:<a href="tel:555-567-8901"> 555-567-8901</a><br/></span>
              <span>
                Address: 1234 Main St<br/>
                Moonstone City, Stardust State 12345<br/>
              </span>
            </address>
            </div>
          <div className={cl.subcribeContainer}>
            <Input className='input footer' type="text" placeholder='Email'/>
            <Button className="footerButton">Subscribe to news</Button>
          </div>
        </div>
        <div className={cl.policy}>
          <span>© 2023 Positivus. All Rights Reserved.</span>
          <span><a href="/">Privacy Policy</a></span>
        </div>
       
    </section>
  )
}
