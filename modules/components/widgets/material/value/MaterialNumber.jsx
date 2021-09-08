import React from "react";
import { FormControl, TextField } from "@mui/material";

export default (props) => {
  const {
    value,
    setValue,
    config,
    readonly,
    min,
    max,
    step,
    placeholder,
    customProps,
  } = props;

  const onChange = (e) => {
    let val = e.target.value;
    if (val === "" || val === null) val = undefined;
    else val = Number(val);
    setValue(val);
  };

  const numberValue = value == undefined ? "" : value;

  return (
    <FormControl>
      <TextField
        type="number"
        value={numberValue}
        placeholder={!readonly ? placeholder : ""}
        InputProps={{
          readOnly: readonly,
        }}
        inputProps={{
          min: min,
          max: max,
          step: step,
        }}
        disabled={readonly}
        onChange={onChange}
        {...customProps}
      />
    </FormControl>
  );
};
