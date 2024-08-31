import { useContext } from "react";
import "./Radio.scss"
import { RadioContext } from "./RadioContext";

const Radio = ({value, name, defaultChecked, disabled }) => {
    const group = useContext(RadioContext)
    return (
      <>
        <label>
          <input
            type="radio"
            value={value}
            name={name}
            defaultChecked={defaultChecked}
            disabled={disabled || group.disabled}
            checked={
              group.value !== undefined ? value === group.value : undefined
            }
            onChange={(e) => group.onChange && group.onChange(e.target.value)}
            className="radio-input"
          />
        </label>
      </>
    );
};

export default Radio