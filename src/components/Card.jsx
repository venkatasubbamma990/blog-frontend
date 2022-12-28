import React from "react";
let Card = ({item}) =>{
    return(
        <div>
            <div className="card-container">
                <h1>{item.Title}</h1>
                <h4>{item.Author}</h4>
                <div><img src={item.file} alt="" /></div>
                <h4>{item.Description}</h4>
                <h5>{item.Date}</h5>
        

            </div>
        </div>

    )
}
export default Card;