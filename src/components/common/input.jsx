import React from 'react'

const Input = ({type, name, label, value, error, onChange}) => {
    return (
      <div> 

        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            value={value}
            onChange={onChange}
            id={name}
            name={name}
            className="form-control"
          />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>



      </div>
    );
}

export default Input
