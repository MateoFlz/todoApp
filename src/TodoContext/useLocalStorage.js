

import React from "react";

function useLocalStore(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {

        setTimeout(() => {
            try {
            
                const localStorageItem = localStorage.getItem(itemName);
                let parseItem;
        
                if (!localStorageItem) {
                    localStorageItem.setItem(itemName, JSON.stringify(initialValue));
                    parseItem = initialValue;
                } else {
                    parseItem = JSON.parse(localStorageItem);
                    setItem(parseItem);
                }
        
                setLoading(false);
    
            } catch (error) {
                setError(false);
                setError(false);
            }
        }, 3000)

    }, [])
 
    const saveItem = (newItem) => {
        setItem(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem));
    }

    return { item, saveItem, loading, error };

}


export { useLocalStore };





// localStorage.setItem('TODO_V1', defaultTodos);
// const defaultTodos = [
//   { text: 'Contar cebolla', completed: true },
//   { text: 'Tomar el curso de intruduccion a react', completed: false },
//   { text: 'Lorar por la llorona', completed: false },
//   { text: 'La La La', completed: false },
//   { text: 'Estado derivado', completed: true },
// ];