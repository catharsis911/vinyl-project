
import { FC, useState } from 'react';
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
      <div className=" wrap flex max-w-[900px] my-10 mx-auto flex-col items-center">
        <span className="heading text-[40px] z-1 items-center">Vinyl Catalog</span>
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
