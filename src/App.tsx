
import React, { FC, useState } from 'react';
import AddVinylForm from './Components/AddVinylForm';
import Vinyl from './models/Vinyl';
import DisplayVinyl from './Components/DisplayVinyl';

const App: FC = () => {
  const [vinylList, setVinylList] = useState<Vinyl[]>([])

  const addVinyl = (newVinyl: Vinyl) => {
    setVinylList([...vinylList, newVinyl]);
  }

  
  return (
    <>
      <div className="wrap">
        <span className="heading">Vinyl Catalog</span>
        <AddVinylForm
         addVinyl={addVinyl}
        />
        <DisplayVinyl 
        vinylList={vinylList}
        />
      </div>
    </>
  )
}

export default App
