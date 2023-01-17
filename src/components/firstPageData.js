import { useState, useEffect } from 'react';
import Rows from './Rows';
import Filter from './filter';


const FirstPageData = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([]);
    const [filter, setFilter] = useState('All');
    const [filter2, setFilter2] = useState('Popularity');
    const [filter3, setFilter3] = useState('All Time');
    const [value2, setValue2] = useState('Popularity');



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

    const filterHandler = (data) => {
        setFilter(data);
    }

    const filterHandler2 = (data) => {
        setFilter2(data);
    }

    const filterHandler3 = (data) => {
        setFilter3(data);
    }

    function arrayUnion(arr1, arr2, equalityFunc) {
        var union = arr1.concat(arr2);

        for (var i = 0; i < union.length; i++) {
            for (var j = i + 1; j < union.length; j++) {
                if (equalityFunc(union[i], union[j])) {
                    union.splice(j, 1);
                    j--;
                }
            }
        }

        return union;
    }

    function areGamesEqual(g1, g2) {
        return g1.title === g2.title;
    }



    const options2 = [ 'Time'];
    const onOptionChangeHandler2 = (event) => {
        // console.log("User Selected Value - ", event.target.value)
        setValue2(event.target.value)
        setFilter2(event.target.value)
    }



    useEffect(() => {

        console.log("TRIGGREING");

        if (filter2 === 'Time') {
            let res = items;
            console.log(items);
            res.sort((a, b) => b.time - a.time)
            setItems(res)
            console.log(items);

        } else if (filter2 === 'Popularity') {

            let res = items;
            console.log(items);
            res.sort((a, b) => b.points - a.points)
            setItems(res)
            console.log(items);
        }

        console.log("Filter2 changed " + filter2);
    }, [filter2])

    useEffect(() => {

        console.log("Filter2 changed " + filter3);
    }, [filter3])

    useEffect(() => {


        if (filter === 'All') {
            let updatedList = items2;
            updatedList = updatedList.filter((item) => {
                return (
                    item.title.toLowerCase().indexOf(props.item.toLowerCase()) !== -1
                )
            })

            let updatedList2 = items2;
            updatedList2 = updatedList2.filter((item) => {
                return (
                    item.author.toLowerCase().indexOf(props.item.toLowerCase()) !== -1
                )
            })

            console.log("HEHEH");
            console.log(arrayUnion(updatedList, updatedList2, areGamesEqual));


            setItems(arrayUnion(updatedList, updatedList2, areGamesEqual))
        }

        else if (filter === 'Stories') {
            let updatedList = items2;
            updatedList = updatedList.filter((item) => {
                return (
                    item.title.toLowerCase().indexOf(props.item.toLowerCase()) !== -1
                )
            })
            setItems(updatedList)
        }

        else if (filter === 'Authors') {
            let updatedList = items2;
            updatedList = updatedList.filter((item) => {
                return (
                    item.author.toLowerCase().indexOf(props.item.toLowerCase()) !== -1
                )
            })
            setItems(updatedList)
        }



    }, [props.item, filter])

    useEffect(() => {
        fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);

                    let res = result.hits;
                    // res.sort((a, b) => a.points - b.points);
                    setItems(res);
                    setItems2(res);


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
                <Filter filter={filterHandler} filter2={filterHandler2} filter3={filterHandler3} />
                <select onChange={onOptionChangeHandler2}>
                    <option>Popularity</option>
                    {options2.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
            </select>
                {
                    items.map(item => {

                        // console.log("HERE!!!!!!!!!");
                        var d1 = new Date(); //"now"
                        var d2 = new Date(item.created_at);  // some date
                        var diff = Math.abs(d1 - d2);  // difference in milliseconds
                        let minTime = millisToMinutesAndSeconds(diff);

                        // console.log(props.item);

                        // props.dataFetcher(items);
                        return (
                            <div>
                                <Rows
                                    sno={items.indexOf(item) + 1}
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
                {console.log(items)}
            </div>

        );
    }
}

export default FirstPageData;