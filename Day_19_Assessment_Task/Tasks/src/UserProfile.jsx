import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserProfile = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>User ID: {params.id}</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserProfile;
