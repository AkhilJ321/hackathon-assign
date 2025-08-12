import { FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function TimeRangeDropdown() {
  const [range, setRange] = useState("Last Month");

  return (
    <FormControl size="small">
      <Select value={range} onChange={(e) => setRange(e.target.value)}>
        <MenuItem value="Last Month">Last Month</MenuItem>
        <MenuItem value="Last 3 Months">Last 3 Months</MenuItem>
        <MenuItem value="Last 6 Months">Last 6 Months</MenuItem>
        <MenuItem value="Last Year">Last Year</MenuItem>
      </Select>
    </FormControl>
  );
}
