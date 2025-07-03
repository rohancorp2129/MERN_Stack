import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skill: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/User', formData); // POST to json-server
      console.log('Submitted data:', formData);
      alert('User data submitted successfully ✅');
      // Clear the form
      setFormData({
        name: '',
        email: '',
        role: '',
        skill: ''
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data ❌');
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-primary text-center mb-4">User Form</h3>
      <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Role:</label>
          <input
            type="text"
            className="form-control"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Skill:</label>
          <input
            type="text"
            className="form-control"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
