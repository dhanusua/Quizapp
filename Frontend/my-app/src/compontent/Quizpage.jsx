import { useState } from "react";
import Ques from "./Questions";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import axios from 'axios';
import { useEffect } from "react";
import'../css/Appl.css'

const Quizpage=()=>{
    const url = "http://localhost:8080/";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };
          


  useEffect(() => {
    fetchInfo();
  }, []); 
    const loacation = useLocation();  
    const [subiteddta,setsubmiteddata]=useState({});
    const updatesub =(index,value)=>{
        setsubmiteddata({...subiteddta,[index]:value})

 }    
let score =0
    data.forEach((elem,i)=>{
      
      if(elem.ans===subiteddta[i]){
       score +=1
      }
    })   
     const[curreentquesId,setcurrentquesId]=useState(0)
    return(
      
        <div className="container">
            <Ques 
            data={data}
            curreentquesId={curreentquesId}
            updatesub={updatesub}
            selectedoption={subiteddta[curreentquesId]}/>
            <Button data ={data} setcurrentquesId={setcurrentquesId} curreentquesId={curreentquesId}subiteddta={subiteddta} username={loacation.state.username} score={score}/>
        </div>
        
        
    );
}
export default Quizpage;