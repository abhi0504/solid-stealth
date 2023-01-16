import { useState, useEffect } from 'react';
import Rows from './Rows';


const FirstPageData = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    function millisToMinutesAndSeconds(ms) {
        // 1- Convert to seconds:
        var seconds = ms / 1000;

        // 2- Extract hours:
        var hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
        seconds = seconds % 3600; // seconds remaining after extracting hours

        // 3- Extract minutes:
        var minutes = parseInt(seconds / 60); // 60 seconds in 1 minute

        // 4- Keep only seconds not extracted to minutes:
        seconds = seconds % 60;

        //alert( hours+":"+minutes+":"+seconds);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        var hms = minutes;
        return hms;
    }

    useEffect(() => {
        fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
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
        return (
            <div>
                {
                    items.hits.map(item => {

                        // console.log("HERE!!!!!!!!!");
                        var d1 = new Date(); //"now"
                        var d2 = new Date(item.created_at);  // some date
                        var diff = Math.abs(d1 - d2);  // difference in milliseconds
                        let minTime = millisToMinutesAndSeconds(diff);

                         console.log(props.item);

                        // props.dataFetcher(items);
                        return (
                            <div>
                                <Rows
                                    sno={items.hits.indexOf(item) + 1}
                                    title={item.title}
                                    url={item.url}
                                    points={item.points}
                                    author={item.author}
                                    tags={item._tags}
                                    time={minTime}
                                />
                            </div>
                        )
                    })
                }
            </div>

        );
    }
}

export default FirstPageData;