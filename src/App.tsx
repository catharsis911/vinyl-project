
import React, { FC, useState } from 'react';
import AddVinylForm from './Components/AddVinylForm';
import Vinyl from './models/Vinyl';
import DisplayVinyl from './Components/DisplayVinyl';

const App: FC = () => {
  const [vinylList, setVinylList] = useState<Vinyl[]>([])

  const addVinyl = (newVinyl: Vinyl) => {
    setVinylList([...vinylList, newVinyl]);
  }

  const updateVinyl = (newVinyl: Vinyl) => {
    setVinylList(vinylList.map((vinyl) => 
    (vinyl.id === newVinyl.id ? newVinyl : vinyl)));
  }

  const deleteVinyl = (id: number) => {
    const newVinylList = vinylList.filter(vinyl => vinyl.id !== id);
    setVinylList(newVinylList);
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
        updateVinyl={updateVinyl}
        deleteVinyl={deleteVinyl}
        />
      </div>
    </>
  )
}

export default App
