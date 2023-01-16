import logo from './assets/logo.svg';
import { useState } from 'react';

const Header = (props) => {

    const [searchData, setSearchData] = useState('');

    const searchChangeHandler = (event) => {
        setSearchData(event.target.value);
    }

const submitHandler = (event) => {
    event.preventDefault();
    console.log(searchData);
    setSearchData('');
}

    return (
        <div style={{width: "69%"}}>
            <nav class="navbar" style={{ backgroundColor: "#ff6600" }}>
                <div style={{ justifyContent: "space-between" }} class="container-fluid">
                    <div>
                        <img src={logo} height="40px" width="40px" alt="Logo" style={{ border: '2px solid white', marginRight: "10px" }} />
                        <a style={{ fontFamily: "fantasy" }} class="navbar-brand">{props.title}</a>
                    </div>
                    <div>
                        <form onSubmit={submitHandler} class="d-flex" role="search">
                            <input style={{width: "500px"}} class="form-control me-3" type="search" placeholder="Search" aria-label="Search" value={searchData} onChange={searchChangeHandler}/>
                            <button style={{color:"white",border: '2px solid white'}}  class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default Header;