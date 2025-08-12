// import { Box, Grid, Button } from "@mui/material";
// import KPIBox from "./KPIBox";
// import TimeRangeDropdown from "./TimeRangeDropdown";
// import { Box, Button } from "@mui/material";
import UserSegments from "./UserSegments";
import { Box, Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Dropdown from "./Dropdown";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

const lineData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 80 },
  { name: "May", value: 60 },
];

const barData = [
  { name: "A", value: 120 },
  { name: "B", value: 200 },
  { name: "C", value: 150 },
  { name: "D", value: 80 },
];

export default function Dashboard() {
  const [dropdown1, setDropdown1] = useState("Option A");
  const [dropdown2, setDropdown2] = useState("Option 1");
  return (
    // <Box p={3}>
    //   {/* Header */}
    //   <Box display="flex" justifyContent="space-between" mb={3}>
    //     <Box fontSize="1.5rem" fontWeight="bold">
    //       Analytics Dashboard
    //     </Box>
    //     <Box display="flex" gap={2}>
    //       {/* <TimeRangeDropdown /> */}
    //       {/* <Button variant="outlined">Filters</Button> */}
    //       <Button variant="contained">Export</Button>
    //     </Box>
    <Box p={3}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Analytics Dashboard
        </Typography>
        <Button variant="contained">Export</Button>
      </Box>


      {/* Dropdowns
      <Box display="flex" gap={2} mb={3}>
        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel>Dropdown 1</InputLabel>
          <Select value={dropdown1} onChange={(e) => setDropdown1(e.target.value)}>
            <MenuItem value="Option A">Option A</MenuItem>
            <MenuItem value="Option B">Option B</MenuItem>
            <MenuItem value="Option C">Option C</MenuItem>
            <MenuItem value="Option D">Option D</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel>Dropdown 2</InputLabel>
          <Select value={dropdown2} onChange={(e) => setDropdown2(e.target.value)}>
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
            <MenuItem value="Option 4">Option 4</MenuItem>
          </Select>
        </FormControl>
      </Box> */}

      {/* Filters Card */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box display="flex" gap={2}>
            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel>Dropdown 1</InputLabel>
              <Select
                value={dropdown1}
                onChange={(e) => setDropdown1(e.target.value)}
              >
                <MenuItem value="Option A">Option A</MenuItem>
                <MenuItem value="Option B">Option B</MenuItem>
                <MenuItem value="Option C">Option C</MenuItem>
                <MenuItem value="Option D">Option D</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel>Dropdown 2</InputLabel>
              <Select
                value={dropdown2}
                onChange={(e) => setDropdown2(e.target.value)}
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
                <MenuItem value="Option 3">Option 3</MenuItem>
                <MenuItem value="Option 4">Option 4</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>


    {/* Charts Grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))"
        gap={2}
        mb={4}
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Line Chart {index + 1}
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3f51b5"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        ))}

        {/* Bar Chart */}
        <Card>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Bar Chart Overview
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Box>


      {/* </Box> */}

      {/* KPI Boxes */}
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <KPIBox
            title="Total Users"
            value="410,000"
            change="+12.5%"
            changeText="from last month"
            progress={91}
            isPositive
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPIBox
            title="Avg Screen Time"
            value="7.2 hrs"
            change="+8.3%"
            changeText="daily average"
            progress={90}
            isPositive
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPIBox
            title="Revenue per User"
            value="₹1,413"
            change="+15.2%"
            changeText="monthly ARPU"
            progress={94}
            isPositive
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPIBox
            title="Engagement Score"
            value="7.8/10"
            change="-2.1%"
            changeText="user engagement"
            progress={92}
            isPositive={false}
          />
        </Grid>
      </Grid> */}

      {/* User Segments */}
      <Box mt={4}>
        <UserSegments />
      </Box>
    </Box>
  );
}
