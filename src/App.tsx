
import React, { FC, useState } from 'react';
import AddVinylForm from './Components/AddVinylForm';
import Vinyl from './models/Vinyl';

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
      </div>
    </>
  )
}

export default App
