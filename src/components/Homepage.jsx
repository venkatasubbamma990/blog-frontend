import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./header";

let Homepage = () =>{
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://blog-backend-spti.onrender.com/data" ,{method:"GET",mode:'cors'}).then((res) => {
        return res.json()
      }).then((info) => {
        console.log(info);
        setData(info);
      }).catch((err) => {
        console.log(err);
      })
    }, [])

    return(
        <div className="main">
            <Header/>
                {data.length ? data.map((item, id) => {
                    return (
                      <Card key={id} item={item} />)
                  }) : null}
            


        </div>
    )
}
export default Homepage;