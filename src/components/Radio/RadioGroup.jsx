import { RadioContext } from "./RadioContext"
import "./RadioGroup.scss"

const RadioGroup = ({ label, children, ...rest }) => {
  return (
    <>
      <fieldset className="radio-container">
        <legend>{label}</legend>
        <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
      </fieldset>
    </>
  );
};
export default RadioGroup