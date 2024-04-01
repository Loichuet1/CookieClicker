import { useState } from 'react'
import './App.css'


function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
         <nav className='Nav'>Nav {count}</nav>
         <div className='mainSection'>
          <img className='playerImg' alt='playerImage' onClick={() => setCount(count+1)} src='https://img.freepik.com/premium-vector/cartoon-business-team-working-startup-project_81522-4573.jpg'></img>  
         </div>

         <div className='flexBox' >
           <div className='bonusSection'>    
              <div className='bonusItem'>Test</div>
              <div className='bonusItem'>Test</div>
              <div className='bonusItem'>Test</div>
              <div className='bonusItem'>Test</div>
           </div>
           <div className='shopSection'>
    
              <div className='shopItem'>Test</div>
              <div className='shopItem'>Test</div>
              <div className='shopItem'>Test</div>
              <div className='shopItem'>Test</div>
              <div className='shopItem'>Test</div>   
              
           </div>
         </div>
      </div>
    </>
  )
}

export default App
