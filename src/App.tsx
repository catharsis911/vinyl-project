
import React, { FC, useState } from 'react';
import AddVinylForm from './Components/AddVinylForm';
/*
type Order = {
  title: string,
  quantity: number
}*/

const App: FC = () => {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
      <div className="wrap">
        <span className="heading">Vinyl Catalog</span>
        <AddVinylForm/>
      </div>
    </>
  )
}

export default App
