import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
const Scoreboard=()=>{
    
    const url = "http://localhost:8080/score";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return axios.get(url).then((res) => setData(res.data));
    };
            
  
  
    useEffect(() => {
      fetchInfo();
    }, []); 
    return((data.length>0?<div><div  className=' score-container'>
         <table>
          <thead><tr><th>Name</th>
          <th>Score</th>
          </tr></thead>
          <tbody>
         {data.map((result, index) => {
        return (
          
            <tr>
            <td >{result.username}</td>
            <td>{result.score}</td>
            </tr>
         
          )
        }
        
    )}
    </tbody>
 </table>
    </div> </div>:<p>loading</p> ))

} 
export default Scoreboard