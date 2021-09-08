import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import AddIcon from "@material-ui/icons/Add";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";

import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

export default ({ type, label, onClick, config }) => {
  const typeToOnlyIcon = {
    delGroup: <Delete />,
    delRuleGroup: <Delete />,
    delRule: <Delete />,
    addRuleGroup: <Add />,
    addRuleGroupExt: <Add />,
  };
  const typeToIcon = {
    addRule: <Add />,
    addGroup: <Add />,
  };
  const typeToColor = {
    addRule: "default",
    addGroup: "primary",
    delGroup: "secondary",
    delRuleGroup: "secondary",
    delRule: "secondary",
  };
  if (typeToOnlyIcon[type])
    return (
      <IconButton size="small" onClick={onClick} color={typeToColor[type]}>
        {typeToOnlyIcon[type]}
      </IconButton>
    );
  else
    return (
      <Button
        size="small"
        onClick={onClick}
        color={typeToColor[type]}
        startIcon={typeToIcon[type]}
      >
        {label}
      </Button>
    );
};
