import { useState } from 'react'
import { AddCategory, GifGrid } from './components/';
export const GifExpertApp = () => {
    // NO!! poner condicionales los states NUNCA
    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
        <h1> GifExpertApp</h1>

        <AddCategory  onNewCategory = { onAddCategory } />

            { categories.map( category => (
                    <GifGrid category={category} key={category} />
            )) 
            }
        </>
    )
}