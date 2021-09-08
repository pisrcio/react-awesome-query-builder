import React from "react";
import { FormControl, TextField } from "@mui/material";

export default (props) => {
  const {
    value,
    setValue,
    config,
    readonly,
    placeholder,
    customProps,
    maxLength,
  } = props;

  const onChange = (e) => {
    let val = e.target.value;
    if (val === "") val = undefined; // don't allow empty value
    setValue(val);
  };

  const textValue = value || "";

  return (
    <FormControl>
      <TextField
        value={textValue}
        placeholder={!readonly ? placeholder : ""}
        InputProps={{
          readOnly: readonly,
        }}
        inputProps={{
          maxLength: maxLength,
        }}
        disabled={readonly}
        onChange={onChange}
        {...customProps}
      />
    </FormControl>
  );
};
