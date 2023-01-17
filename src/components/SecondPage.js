import { useState,useEffect } from 'react'

const SecondPage = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [currItems, setCurrItems] = useState([]);
    let totalPages = items.length / 10;
    let currPage = 1;

     async function fetchCurrItems(currPage) {
        let start = currPage - 1;
        let end = start + 9
        let data = []

         while(end >= start){
            
                await fetch(`https://hacker-news.firebaseio.com/v0/item/` + items[start] + `.json?print=pretty`)
                    .then(res => res.json())
                    .then(
                        (res) => {
                            data.push(res)
        
                        },
                        (error) => {
                            console.log(error);
                        }
                    )

            start++;
        }

        setCurrItems(data);
        console.log(currItems);
    }

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res);

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

            
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        console.log("rerererere" + items);
        // fetchCurrItems(1)
        
        return (
            <div>
                hehehehe
            </div>

        );
    }

}

export default SecondPage;