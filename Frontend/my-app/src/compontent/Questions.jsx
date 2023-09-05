import'../css/Appl.css'
const Ques=({data,curreentquesId, updatesub ,selectedoption})=>{
      
    return((data.length>0?

        <div ><div className='question'>{data[curreentquesId].title}</div>
        <div>
            <label>
           <input type='radio'  className='radio1' id={data[curreentquesId].title} name={data[curreentquesId].title} value={data[curreentquesId].optionA} onChange={()=>updatesub(curreentquesId,1)}checked={1=== selectedoption}/><div className='option'>{data[curreentquesId].optionA}</div>
           <input type='radio' className='radio1' id= {data[curreentquesId].title}name={data[curreentquesId].title} value={data[curreentquesId].optionB} onChange={()=>updatesub(curreentquesId,2)}checked={2===selectedoption}/><div className='option'>{data[curreentquesId].optionB}</div>
           <input type='radio' className='radio1' id ={data[curreentquesId].title}name={data[curreentquesId].title} value={data[curreentquesId].optionC} onChange={()=>updatesub(curreentquesId,3)} checked={3=== selectedoption}/><div className='option'>{data[curreentquesId].optionC}</div>
           </label> 
           
           </div>
           </div>
        
    :<p>lording</p>))

}
export default Ques;