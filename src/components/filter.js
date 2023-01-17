import { useState, useEffect } from 'react';


const Filter = (props) => {

    const [value, setValue] = useState('All');

    const [value2, setValue2] = useState('Popularity');

    const [value3, setValue3] = useState('All Time');

    const options = ['Stories', 'Authors'];
    const onOptionChangeHandler = (event) => {
        // console.log("User Selected Value - ", event.target.value)
        setValue(event.target.value)
        props.filter(event.target.value)
    }

    const options2 = [ 'Time'];
    const onOptionChangeHandler2 = (event) => {
        // console.log("User Selected Value - ", event.target.value)
        setValue2(event.target.value)
        props.filter2(event.target.value)
    }

    const options3 = [ '24hrs', 'week'];
    const onOptionChangeHandler3 = (event) => {
        // console.log("User Selected Value - ", event.target.value)
        setValue3(event.target.value)
        props.filter3(event.target.value)
    }


    return (
        <div>
            <select onChange={onOptionChangeHandler}>
                    <option>All</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
            </select>

            {/* <select onChange={onOptionChangeHandler2}>
                    <option>Popularity</option>
                    {options2.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
            </select> */}

            <select onChange={onOptionChangeHandler3}>
                    <option>All Time</option>
                    {options3.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
            </select>
        </div>
    )
}

export default Filter;