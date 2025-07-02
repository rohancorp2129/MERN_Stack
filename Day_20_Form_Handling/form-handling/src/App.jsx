import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  // Step 1: Create initial state using useState hook
  const [data, setData] = useState({
    username: '',
    useremail: '',
    upass: '',
    useredu: '',
    profile: null,
  });

  // Step 2: Create input handler function (Synthetic Event)
  const dataHandler = (e) => {
    const { name, value, files } = e.target;

    // Handle file input separately
    if (name === 'profile') {
      setData({ ...data, [name]: files[0] }); // store file object
    } else {
      // For all other input fields
      setData({ ...data, [name]: value });
    }
  };

  // Step 3: Handle form submission
  const SaveForm = (e) => {
    e.preventDefault(); // stop page reload

    // Display toast message
    toast.success('Form saved successfully');

    // Optional: Print data in console
    console.log('Form Submitted:');
    
      console.log('name:', data.username);
      console.log('email:', data.useremail);
      console.log('password:', data.upass);
      console.log('education:', data.useredu);
      console.log('profile:', data.profile ? data.profile.name : 'No file uploaded');

    // Step 4: Reset form data
    setData({
      username: '',
      useremail: '',
      upass: '',
      useredu: '',
      profile: null,
    });

    // Step 5: Reset file input manually
    document.getElementById('profile').value = '';
  };

  return (
    <>
      {/* Step 6: Form tag with submit handler */}
      <form onSubmit={SaveForm}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className='text-center p-4 bg-dark text-danger'>
                Form Handling in React
              </h2>

              <div className="row p-5">

                {/* Name Input */}
                <div className="col-md-12 my-3">
                  <label>Enter Your Name</label>
                  <input
                    type="text"
                    name="username"
                    value={data.username} // Step 2: bind value
                    onChange={dataHandler} // Step 3: handle change
                    className="form-control"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="col-md-6">
                  <label>Enter Your Email</label>
                  <input
                    type="email"
                    name="useremail"
                    value={data.useremail}
                    onChange={dataHandler}
                    className="form-control"
                    placeholder="john@gmail.com"
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="col-md-6">
                  <label>Enter Password</label>
                  <input
                    type="password"
                    name="upass"
                    value={data.upass}
                    onChange={dataHandler}
                    className="form-control"
                    placeholder="Password must be 8-10 Characters"
                    required
                  />
                </div>

                {/* Education Dropdown */}
                <div className="col-md-6 my-3">
                  <label>Enter Your Education</label>
                  <select
                    name="useredu"
                    value={data.useredu}
                    onChange={dataHandler}
                    className="form-control"
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="B.Tech">B. Tech</option>
                    <option value="M.Tech">M. Tech</option>
                    <option value="MCA">MCA</option>
                    <option value="BCA">BCA</option>
                  </select>
                </div>

                {/* File Upload */}
                <div className="col-md-12 mb-3">
                  <label>Upload Your Profile</label>
                  <input
                    type="file"
                    name="profile"
                    onChange={dataHandler}
                    className="form-control"
                    id="profile"
                    accept="image/*"
                  />
                </div>

                {/* Submit Button */}
                <div className="col-md-6">
                  <button className="btn btn-primary" type="submit">
                    Register Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Toast container to show notification */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default App;
