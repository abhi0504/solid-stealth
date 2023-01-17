import up from "./assets/up.svg"

const Rows = (props) => {
    return (
        <div>

            <div style={{ display: "flex", flex: "1", flexDirection: "row", backgroundColor: "#FFFFE0", fontSize: "10pt", padding: "2px" }}>
                <div style={{ display: "flex", flex: "0.01", marginLeft: "10px", marginRight: "5px" }}>
                    {props.sno}.
                </div>

                <div style={{ display: "flex", flex: "0.99", flexDirection: "column", fontSize: "10pt" }}>
                    <div style={{ display: "flex", flexDirection: "row", paddingLeft: "2px" }}>

                        <div>
                            <img src={up} height="20px" width="20px" alt="Logo" style={{ border: '2px solid white', marginRight: "2px" }} />

                            {props.title}
                        </div>

                        <div style={{ color: "#828282", fontSize: "8pt", paddingLeft: "2px", paddingTop: "2px" }}>
                            ({props.url})
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", color: "#828282", fontSize: "8pt", paddingTop: "2px", marginLeft: "25px" }}>

                        {props.points} points by {props.author} {props.time} minutes ago

                        <div style={{ display: "flex", flexDirection: "row", paddingLeft: "2px" }}>

                            {props.page === "first" ?
                                props.tags.map(tag => {
                                    return (<div style={{ marginLeft: "2px" }}> {tag} | </ div>)
                                }) : <></>
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rows;