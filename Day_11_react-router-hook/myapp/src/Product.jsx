import React from "react";

const Product = (props) => {
  return (
    <>
    <div className="card">
        <div className="card-header text-center" >
            <h2>{props.name}</h2>
        </div>
    </div>
    </>
  );
}