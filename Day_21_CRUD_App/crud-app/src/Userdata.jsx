import React, { useEffect, useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import './assets/Userdata.css'; // Make sure this path is correct

const Userdata = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:3000/User');
      setData(result.data);
    } catch (error) {
      console.error('❌ Error fetching user data:', error);
    }
  };

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
        'service_bhkv6ny',
        'template_3copbf3',
        templateParams,
        'n-nJxDSJiDaIt_niv'
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

      <div className="row g-4">
        {data.length > 0 ? (
          data.map((user) => (
            <div key={user.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card user-card h-100 shadow-sm text-center">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div className="user-emoji mb-3">👤</div>
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
                    <p className="card-text mb-1"><strong>Role:</strong> {user.role}</p>
                    <p className="card-text"><strong>Skill:</strong> {user.skill}</p>
                  </div>
                  <button
                    className="btn btn-sm btn-outline-success mt-3"
                    onClick={() => sendEmail(user)}
                  >
                    ✉️ Send Email
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No user data available.</p>
        )}
      </div>
    </div>
  );
};

export default Userdata;
