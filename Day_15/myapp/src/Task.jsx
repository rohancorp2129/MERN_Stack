import React, { useEffect, useRef, useState } from 'react'

const Task = () => {


    const emp1 = [{ emp_id: 1, emp_avatar: 'data:image/png;base64,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', emp_name: 'Rohan', emp_email: 'rohan@gmail.com', emp_CTC: '20LPA' }];
    const emp2 = [{ emp_id: 2, emp_avatar: 'data:image/png;base64,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', emp_name: 'Rahul', emp_email: 'rahul@gmail.com', emp_CTC: '40LPA' }];
    const emp3 = [{ emp_id: 3, emp_avatar: 'data:image/png;base64,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', emp_name: 'Rekha', emp_email: 'rekha@gmail.com', emp_CTC: '10LPA' }];


    // state defined - default emp1 
    const [data, setData] = useState(emp1)

    console.log(data)


    // 
    const result = useRef(null)

    const FetchEmp = () => {
        // alert(result.current.value)

        if (result.current.value === 'emp1') {
            setData(emp1)

        }

        else if (result.current.value === 'emp2') {
            setData(emp2)
        }

        else if (result.current.value === 'emp3') {
            setData(emp3)
        }

        else {
            setData('')
        }


    }

    // side effect

    useEffect(() => {
        // alert('User Data Updated Successfully')
    }, [data])

    return (
        <>

        <center>
            <h1 className='text-center fw-bold bg-dark text-warning mb-4 p-3'>Task EMP</h1>
            <hr />
            
            <label htmlFor="" className='fw-bold text-center' >Choose emp</label>

            <select name="" id="" className='form-control' ref={result} onChange={() => FetchEmp()}>
                <option value="emp1">emp1</option>
                <option value="emp2">emp2</option>
                <option value="emp3">emp3</option>
            </select>

            <br />
            <br />


            {


                data.map((val, index, array) => {

                    // console.log(val)
                    return (

                        <div className="card w-25 m-auto" key={index || val.emp_id}>
                            <div className="card-header">
                                <h3 className='text-center'>{val.emp_name}</h3>
                            </div>
                            <div className="card-body text-center">
                                <img src={val.emp_avatar} className='img-fluid' style={{ height: '100px' }} alt="" />

                                <p><span className='fw-bold'>ID </span> {val.emp_id}</p>
                                <p><span className='fw-bold'>Email </span> {val.emp_email}</p>
                                <p><span className='fw-bold'>Salary Expectation: </span>{val.emp_CTC}</p>
                            </div>

                            <div className="card-footer text-center">
                                <button className='btn btn-dark btn-sm fw-bold'>Hire Me </button>
                            </div>
                        </div>
                    )




                })


            }



            </center>

        </>
    )
}

export default Task
