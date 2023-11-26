import React from 'react'
import Navbar from '../components/navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section class="flex">
        <div className="body">
          <h1><u>Contato</u></h1>
          <div>
            <input type="text" placeholder='Nome'/>
          </div>
          <div>
            <input type="email" placeholder='E-Mail'/>
          </div>
          <div>
            <input type="text" placeholder="Em que podemos ajudar?"/>
          </div>
          <input class="submit" type="submit" value="Submit" />
        </div>
      </section>
    </div>
  )
}

export default Contact