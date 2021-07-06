const Input = ({value, name,type, error,label, onChange,placeholder}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}><b>{label}</b></label>
            <input 
                value={value}
                type={type}
                name = {name}
                className="form-control" 
                id={name}
                onChange={onChange}
                placeholder={placeholder} />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;