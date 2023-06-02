import './Input.css';

export function Input(props) {
    return (
        <div className="div-inputs div-column">
            <div className="label-form">
                <label htmlFor={props.id}>{props.label}</label>
                <label className="required">*</label>
            </div>

            <input 
                {...props}
                className={props.disabled ? "input-form diseblad" : "input-form"}
            />
        </div>
    )
}