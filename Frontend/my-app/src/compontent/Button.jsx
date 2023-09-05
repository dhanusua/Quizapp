import'../css/Appl.css'
import { useNavigate } from "react-router-dom";
import Service from "./data/Service"
const Button =({ data,setcurrentquesId,curreentquesId,username,subiteddta ,score})=>{
    const navigate=useNavigate();
    

    const result=()=>{
        const res={ score:score ,username:username }
         Service.postresult(res)
        navigate('/result',{state:{username:username , score:score}})
        console.log(res)

    }
    return(
        <div>
             <button className="pre-btn"
            onClick={()=>setcurrentquesId(curreentquesId-1)} disabled={curreentquesId===0 }>Previous Question</button> 
            {curreentquesId<data.length -1? <button
            className="pre-btn"
            onClick={()=>setcurrentquesId(curreentquesId+1)
            }disabled={!subiteddta[curreentquesId] }>Next Question</button> : <button className="pre-btn"
            disabled={!subiteddta[curreentquesId]}
            onClick={()=>result()} >Submit</button> }
            
        

        </div>
    )
}
export default Button;