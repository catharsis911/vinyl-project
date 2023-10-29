import { useState } from 'react';
import React, { FC } from 'react';

type Order = {
  title: string,
  quantity: number
}

const App: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
