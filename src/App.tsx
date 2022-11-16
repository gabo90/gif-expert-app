import { useState } from "react"
import { AddCategory, GifGrid } from './components';


const App = () => {

    const [categories, setcategories] = useState(['Marvel']);

    const onAddCategory = (newCategory:any) => {
        setcategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory onNewCategory={onAddCategory}/>

            {
                categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                )
            }
        </>
    )
}

export default App