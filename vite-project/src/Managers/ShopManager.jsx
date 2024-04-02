function ShopItemBehaviour({item, scoreManager, updateClickPower}){

    return (
        <div className={scoreManager.score >= item.value ? 'shopItem' : 'shopItemNotAvailable'}>
          Recette : {item.name}
          {scoreManager.score >= item.value ? (
            <button onClick={() => { scoreManager.updateScore(-item.value);
                                    if (item.boostValue) {
                                       updateClickPower(item.boostValue);}}} >
              value : {item.value} $
            </button>) : (
            <div>value : {item.value} $</div>
          )}
        </div>
      );
} 

export default ShopItemBehaviour