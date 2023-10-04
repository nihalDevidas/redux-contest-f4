// making api call in component
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import "./styles/hello.css";
//import { fetchPostRequestStarted,fetchPostFailure,fetchPostSuccess } from "../redux/actions/postAction";
import { useSelector, useDispatch} from 'react-redux';
import {fetchPost} from "../redux/actions/postAction";


const Hello = () => {
    const {loader,data,error} = useSelector(state=>state);
    const [val, setValue] = useState("");
    const [btn, setbtn] = useState("");

    const dispatch = useDispatch();

        useEffect(()=>{
             dispatch(fetchPost(val))
            
        },[btn]);

        let word,meanings,def1,def2,part;

            if(data.length !== 0){
            word = data[0].word
            def1 = data[0].meanings[0].definitions[0].definition;
            def2 = data[0].meanings[0].definitions[1].definition;
            part = data[0].meanings[0].partOfSpeech;
            }

    return (
        <div>
           <div>{data.length === 0?console.log(" "):console.log(data)}</div>
           
           <div className='con'>
              <input onChange = {(event)=>setValue(event.target.value)}/>
               <button onClick = {()=>setbtn(val)}>find word</button>
           </div>

           <div className='content'>
                 <h3>{word?"Word: "+word:""}</h3>
                 <div className='def1'>{def1 ? def1:""}</div>
                 <div className='def2'>{def2 ? def2:" "}</div>
                 <div className='sp'> {part?"PartOfspeech: "+part:""}</div>
               </div> 
        </div>
    )
}

export default Hello;






// async function getPosts(){
            //     dispatch(fetchPostRequestStarted());
            //     try{
            //         const posts = await axios.get("https://guaravgitacc.github.io/postAppData/posts.json");
            //         dispatch(fetchPostSuccess(posts.data));

            //     }
            //     catch(error){
            //         dispatch(fetchPostFailure(error.message));
            //     }
            // }
            // getPosts();
