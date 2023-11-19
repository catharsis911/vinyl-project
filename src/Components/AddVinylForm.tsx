import React, {FC, useState, ChangeEvent, FormEvent} from 'react'
import Vinyl from '../models/Vinyl';


 interface AddVinylFormProps {
  addVinyl: (newVinyl: Vinyl) => void;
 }

  const initState = {
    title: '',
    price: '',
    img: '',
  }
  
  const AddVinylForm: FC<AddVinylFormProps> = ({addVinyl}) => {

    const[newVinyl, setNewVinyl] = 
    useState<{title: string, price: string, img: string,}>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const {name, value} = e.target;
        
        setNewVinyl({
          ...newVinyl,
          [name]: value
        });

    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const {title, price, img} = newVinyl;

        if(title && price && img) {
          addVinyl({
            title,
            price: Number(price),
            img,
            id: Date.now()
          });
          setNewVinyl(initState);
        }
    }

    console.log('new vinyl', newVinyl)

  return (
    <form onSubmit={handleSubmit} className='flex border-[2px] border-[#000] max-w-[520px] overflow-hidden flex-wrap mt-5 shadow-xl focus:outline-none text-blue-900 text-lg rounded-xl'>
        <input className="border-black border-b-2 border-r-2"
          name="title"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={newVinyl.title}
        />

        <input className='border-black border-b-2'
          name="price"
          type="text"
          placeholder="Price"
          onChange={handleChange}
          value={newVinyl.price}
        />

        <input className='w-[100%] border-black border-b-2'
          name="img"
          type="text"
          placeholder="Image"
          onChange={handleChange}
          value={newVinyl.img}
        />
        <button type="submit" className='width-[100%] border-0 text-[16px] p-[15px]'>+ Add to catalog</button>
    </form>
  )
}

export default AddVinylForm