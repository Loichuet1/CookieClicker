import { useState, useEffect } from 'react'
import './App.css'
import ShopItemBehaviour from './Datas/ShopsItems'
import CreateShopItem from './Managers/ShopManager'
import ScoreManager  from './Managers/ScoreManager'

function App() {

  const [items, SetItems] = useState(ShopItemBehaviour);
  const scoreManager = ScoreManager();
  const [clickPower, setclickPower]  = useState(1);

  const updateClickPower = (value) => {
    setclickPower(clickPower +value);
  }

  return (
    <>
      <div>
         <nav className='Nav'></nav>
         <div className='flexBoxMain'>
          <div className='flexboxImage'>
          <div className='shakerSection'> 
             <img className='playerImg' alt='Shaker to shake' onClick={ () => scoreManager.updateScore(clickPower)} src='https://i.pinimg.com/originals/48/5d/4d/485d4d5f6b04ec7d83abf58839a76a76.jpg'/> 
            </div>
            <div className='scoreText'>{scoreManager.score}  $</div>
          </div>
             <div className='flexboxShop'>
              <div className='bonusSection'>    
                    <div className='bonusItem'>Test</div>
                    <div className='bonusItem'>Test</div>
                    <div className='bonusItem'>Test</div>
                    <div className='bonusItem'>Test</div>
              </div>  

              <div className='shopSection'>   
              {items.map(item => (
                  <CreateShopItem
                  key={item.id}
                  item={item}
                  scoreManager={scoreManager}
                  updateClickPower={updateClickPower}/> 
                  ))} 
              </div>  
             </div>
                   
          </div>
      </div>
    </>
  )
}

export default App
