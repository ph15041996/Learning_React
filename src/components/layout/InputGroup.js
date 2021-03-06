import React from 'react'
import PropTypes from'prop-types'
import classnames from 'classnames';

const InputGroup = ({
    name,
    // className,
    type,
    label,
    value,
    placeholder,
    onChange,
    error,
})=> {
  return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
            type={type}
            name={name}
            className={classnames("form-control form-control-md",{'is-invalid':error})}
            placeholder={placeholder}
            value = {value}
            onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
  )
}
InputGroup.PropTypes ={
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    naplaceholde:PropTypes.string.isRequired,
    onChabge:PropTypes.func.isRequired,
    error:PropTypes.string,
}
export default InputGroup;