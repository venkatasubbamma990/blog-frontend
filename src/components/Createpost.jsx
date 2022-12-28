import React from "react";
import Header from "./header";
import './Createpost.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
let Createpost = ()=>{
    const [img, setimg] = useState("");
    const [Author, setauthor] = useState("");
    const [Title, settitle] = useState("");
    const [Description, setdes] = useState(""); 
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', img)
        formData.append('Author', Author)
        formData.append('Title', Title)
        formData.append('Description', Description);
        await fetch("https://blog-backend-spti.onrender.com/createpost", { method: 'post', body: formData }).then((res) => res.json()).then((data) => { console.log(data); }).catch((e) => console.log(e))
        navigate('/homepage')
    }
    return(
        <div>
           
           <Header/>
           <div className="post-container">
           <div className="new">
            <h4>Create new post</h4>
           </div>
           <form action="" onSubmit={handleSubmit}>
           
            <div>
                <input type="text" placeholder="title" onChange={(e)=>{settitle(e.targetavlue)}} />
            </div>
            <div>
                <input type="text" placeholder="author" onChange={(e)=>{setauthor(e.targetavlue)}} />
            </div>
            <div>
                <input type="text" placeholder="description"  onChange={(e)=>{setdes(e.targetavlue)}}/>
            </div>
            <div>
                <input type="file" placeholder=""  onChange={(e) => { setimg(e.target.files[0]) }} />
            </div>
            <div>
                <button className="buttonz">Post</button>
            </div>
           
           </form>
           </div>
        </div>
    )
}
export default Createpost