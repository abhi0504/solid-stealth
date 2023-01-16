import logo from './assets/logo.svg';
import { useState } from 'react';

const Header = (props) => {

    const [searchData, setSearchData] = useState('');

    const searchChangeHandler = (event) => {
        setSearchData(event.target.value);
        props.dataFetcher(event.target.value);
    }

const submitHandler = (event) => {
    event.preventDefault();
    console.log(searchData);
    setSearchData('');
}

    return (
        <div style={{width: "74.5%" , marginBottom: "20px"}}>
            <nav class="navbar" style={{ backgroundColor: "#ff6600" }}>
                <div style={{ justifyContent: "space-between" }} class="container-fluid">
                    <div style={{display: "flex", alignItems: "center" , justifyContent: "center"}}>
                        <img src={logo} height="25px" width="25px" alt="Logo" style={{ border: '2px solid white', marginRight: "10px" }} />
                        <a style={{ fontFamily: "fantasy", fontSize:"18px" }} class="navbar-brand">{props.title}</a>
                    </div>
                    <div>
                        <form onSubmit={submitHandler} class="d-flex" role="search">
                            <input style={{width: "300px" , height: "30px", display: "flex", alignItems: "center" , justifyContent: "center"}} class="form-control me-3" type="search" placeholder="Search" aria-label="Search" value={searchData} onChange={searchChangeHandler}/>
                            <button style={{color:"white",border: '2px solid white', height: "30px", display: "flex", alignItems: "center" , justifyContent: "center"}}  class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default Header;