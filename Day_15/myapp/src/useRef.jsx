// import all code from react
import React, { useRef } from 'react';


const UseRef = () => {
    const date=useRef(null);
    return (
        <>
            <h1>React commonly Hooks : useRef</h1>

            <hr />
            <input type="email" name='username'  ref={date} />

        </>
    );
}
export default UseRef;
/*



Task 
3 array object 
const emp1=[{emp_id: 1, emp_name:'rohan',emp_email:'rohan@gmail.com',emp_ctc:'2.4lpa'
const emp1=[{emp_id: 2, emp_name:'rahul',emp_email:'rahul@gmail.com',emp_ctc:'2.8lpa'
const emp1=[{emp_id: 3, emp_name:'rekha',emp_email:'rekha@gmail.com',emp_ctc:'3.4lpa'


const [data,setData]=useState(emp1)

const result=useref()



label : choos emp  apply bootstrap make in center bold backcolor text-center fw-bold bg-dark text-warning mb-4 p-3  > Task EMP 
< select classname form-control ref=result  onchange={()=>fetchemp()}>
option : emp1 
option : emp2 
option : emp3
select/>

<br/>
<br/>

data.map((val , index, array)=>{
    // console.log(val)
    return (
        // <div key={index}>
        //     <h1>{val.emp_name}</h1>
        //     <h1>{val.emp_email}</h1>
        //     <h1>{val.emp_ctc}</h1>
        // </div>
        <div classname=card-header text-center>
            <h1>Task EMP</h1>
            </div>
        <div classname=card-footer text-center>
            <button classname=btn btn-primary>Apply</button>
        
        </div>

    )
    })

we have to show the data of selected emp in the input field

input type='text',emp_avatar='paste_link-img', name='emp_id' value={emp_id} ref={emp_id}
input type='text',emp_avatar='paste_link-img', name='emp_name' value={emp_name} ref={emp_name}
input type='text',emp_avatar='paste_link-img', name='emp_email' value={emp_email} ref={emp_email}
input type='text',emp_avatar='paste_link-img', name='emp_ctc' value={emp_ctc} ref={emp_ctc}

*/