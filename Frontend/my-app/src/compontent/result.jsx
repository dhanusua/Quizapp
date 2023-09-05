import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Result=()=>
{
    const location = useLocation();
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="score-container">
            <p>Thanks for Attending Quiz</p>    
           <div>{location.state.username}</div> 
           <div> your score is {location.state.score}</div>
           <button className="smt-btn" onClick={()=>navigate("/scoreboard") } value="submit"> Score Board</button>
            </div>
        </div>
    )
}
export default Result;