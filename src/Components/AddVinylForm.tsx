import React, {FC, useState, ChangeEvent, FormEvent} from 'react'

  const initState = {
    title: '',
    price: '',
    img: '',
  }
  
  const AddVinylForm: FC = () => {

    const[newVinyl, setNewVinyl] = 
    useState<{title: string, price: string, img: string,}>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('handle change >>', e.target)
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log('handle change >>', e.target)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={newVinyl.title}
        />

        <input
          name="price"
          type="text"
          placeholder="Price"
          onChange={handleChange}
          value={newVinyl.price}
        />

        <input
          name="img"
          type="text"
          placeholder="Image"
          onChange={handleChange}
          value={newVinyl.img}
        />
        <button type="submit">+ Добавить в каталог</button>
    </form>
  )
}

export default AddVinylForm