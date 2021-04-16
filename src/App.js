import { useState } from 'react';
import './App.css';

function App({initialList = []}) {
  const [displayedList, updateDisplayedList] = useState(initialList)

  const removeListElement = clickedIndex => {
    let updatedDisplayedList = [...displayedList];
    updatedDisplayedList = updatedDisplayedList.filter((li, index) => {
      return clickedIndex !== index
    })

    updateDisplayedList(updatedDisplayedList)
  }


  return (
    <section className='container'>
      <ul data-testid='list'>
        {displayedList.map((li, index) => {
          return (
            <li 
            key={`list-element-${index}`} 
            data-testid={`list-element-${index}`}>
              {li}
              <button 
                data-testid={`remove-${index}`}
                onClick={() => removeListElement(index)}
                className="btn btn--danger"
              >
                Remove
              </button>
            </li>
            
          )
        })}
      </ul>
    </section>
  );
}

export default App;
