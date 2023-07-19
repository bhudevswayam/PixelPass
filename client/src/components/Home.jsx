import React, { useEffect, useRef, useState } from 'react'
import homeImg from "../assets/2918084.png"
import logo from "../assets/Screenshot 2023-07-19 191130.png"
import './home.css'
import { uploadFile } from '../services/api'
const Home = () => {

    const [file,setFile]= useState('');
    const [result,setResult] = useState('');
    const fileRef = useRef();
    const handleUpload = () => {
        fileRef.current.click();
    };

    useEffect(()=>{
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('name', file.name);
                data.append('file', file);

                let res = await uploadFile(data);
                setResult(res.path);
            }
        }
        getImage();
    },[file])
    return (
        <div className='container'>
            <img id='homeImg' src={homeImg} />
            <div className='uploadContainer'>
                {/* <img id='pp' src={logo} /> */}
                <h1>Share it easily!!!</h1>
                <h2>A lil bit  of sharing is never harmful</h2>
                {/* <button id='upload' onClick={()=>handleUpload()}>Upload</button> */}
                {/* <div class="container-btn"> */}
                <a id='upload' onClick={()=>handleUpload()} class="button">
                  <div class="button__line"></div>
                  <div class="button__line"></div>
                  <span class="button__text">UPLOAD</span>
                  <div class="button__drow1"></div>
                  <div class="button__drow2"></div>
                </a>
                <input type='file'
                    ref={fileRef}
                    onChange={(e)=>setFile(e.target.files[0])}
                    style={{'display': 'none'}}
                />
                <a id='link' href={result} target="_blank">{result}</a>
            </div>
        </div>
    )
}

export default Home