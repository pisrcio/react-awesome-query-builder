import React from "react";
import { DateTimePicker } from "@mui/lab";
import { FormControl } from "@mui/material";

export default (props) => {
  const {value, setValue, use12Hours, readonly, placeholder, dateFormat, timeFormat, valueFormat, customProps, useKeyboard} = props;

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined;
  };

  const handleChange = (value) => {
    setValue(formatSingleValue(value));
  };

  const Picker = DateTimePicker;
  const dateTimeFormat = dateFormat + " " + timeFormat;
  
  return (
    <FormControl>
      <Picker
        readOnly={readonly}
        disabled={readonly}
        ampm={!!use12Hours}
        placeholder={!readonly ? placeholder : ""}
        format={dateTimeFormat}
        value={value || null}
        onChange={handleChange}
        {...customProps}
      />
    </FormControl>
  );
};
