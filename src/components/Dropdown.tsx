import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
}

export default function Dropdown({ label, options }: DropdownProps) {
  const [value, setValue] = useState(options[0]);

  return (
    <FormControl size="small" sx={{ minWidth: 180 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((option, idx) => (
          <MenuItem key={idx} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
