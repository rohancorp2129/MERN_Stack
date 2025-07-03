import React, { useEffect, useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const Userdata = () => {
  const [data, setData] = useState([]);

  // Fetch user data from local API
  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:3000/User');
      setData(result.data);
    } catch (error) {
      console.error('❌ Error fetching user data:', error);
    }
  };

  // Send email using EmailJS
  const sendEmail = (user) => {
    const templateParams = {
      name: user.name,
      email: user.email,
      role: user.role,
      skill: user.skill,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_bhkv6ny',         // ✅ Your EmailJS Service ID
        'template_3copbf3',        // ✅ Your Template ID
        templateParams,
        'n-nJxDSJiDaIt_niv'        // ✅ Your Public Key
      )
      .then(() => alert(`✅ Email sent successfully to ${user.email}`))
      .catch((err) => alert(`❌ Failed to send email: ${err.text}`));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary mb-4">User Data</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle shadow">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Skill</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.skill}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => sendEmail(user)}
                    >
                      Send Email
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-muted">No user data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userdata;
