// import { Box, Grid, Button } from "@mui/material";
// import KPIBox from "./KPIBox";
// import TimeRangeDropdown from "./TimeRangeDropdown";
// import { Box, Button } from "@mui/material";
import UserSegments from "./UserSegments";
import Papa from "papaparse";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
// import Dropdown from "./Dropdown";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Overview from "./Overview";
import ClusterWiseData from "./ClusterWiseData";

const xAxisOptions = [
  { key: "ScreenTime", label: "Screen Time" },
  { key: "DataUsage", label: "Data usage" },
  { key: "NumberOfApps", label: "Number of apps" },
  {
    key: "TotalExpenditure",
    label: "Total expenditure (Monthly Recharge+E-commerse spent)",
  },
  { key: "GamingTime", label: "Gaming Time" },
  { key: "SocialMediaTime", label: "Social Media Time" },
  { key: "StreamingTime", label: "Streaming Time" },
];

const datasets: Record<string, any[]> = {
  ScreenTime: [
    { label: "A", male: 30, female: 25, others: 10 },
    { label: "B", male: 35, female: 28, others: 15 },
    { label: "C", male: 40, female: 30, others: 20 },
  ],
  DataUsage: [
    { label: "X", male: 22, female: 18, others: 12 },
    { label: "Y", male: 28, female: 24, others: 16 },
    { label: "Z", male: 33, female: 27, others: 19 },
  ],
  // ... add up to 7 categories
};

const lineData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 80 },
  { name: "May", value: 60 },
];

const barData = [
  { name: "Realme", value: 47 },
  { name: "Vivo", value: 40 },
  { name: "Oneplus", value: 40 },
 
  { name: "Motorola", value: 39 },
  { name: "Xiomi", value: 39 },
  { name: "Nokia", value: 36 },
  { name: "Apple", value: 35 },
  { name: "GooglePixel", value: 33 },
  { name: "Oppo", value: 32 }
];

// function transformData(data) {
//   // Map column names from your CSV to dataset keys
//   const mapping = {
//     "Screen Time (hrs/day)": "ScreenTime",
//     "Data Usage (GB/month)": "DataUsage",
//     "Number of Apps Installed": "NumberOfApps",
//     "Gaming Time (hrs/day)": "GamingTime",
//     "Monthly Recharge Cost (INR)": "MonthlyRecharge",
//     "Total Expenditure": "TotalExpenditure",
//     // "Social Media":"SocialMediaTime",
//     // "Streaming Time":"StreamingTime"
//   };

//   const datasets = {};

//   Object.entries(mapping).forEach(([csvKey, datasetKey]) => {
//     // Group by Location
//     const grouped = {};
//     data.forEach(row => {
//       const label = row.Location;
//       const gender = row.Gender.toLowerCase();
//       const value = parseFloat(row[csvKey]) || 0;

//       if (!grouped[label]) grouped[label] = { label, male: 0, female: 0, others: 0 };

//       if (gender === "male") grouped[label].male += value;
//       else if (gender === "female") grouped[label].female += value;
//       else grouped[label].others += value;
//     });

//     datasets[datasetKey] = Object.values(grouped);
//   });

//   return datasets;
// }

// Example usage:
console.log("helo");
fetch("../datsets_1/gaming_users.csv")
  .then((res) => res.text())
  .then((csv) => {
    const parsed = Papa.parse(csv, { header: true }).data;
    console.log("11111111111111111");
    const datasets = transformData(parsed);
    console.log("hi");
    console.log(datasets);
  });

export default function Dashboard() {
  const [dropdown1, setDropdown1] = useState("Option A");
  const [dropdown2, setDropdown2] = useState("Option 1");
  const [lineChartFilter, setLineChartFilter] = useState("ScreenTime");
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          Analytics Dashboard
        </Typography>
        <Button variant="contained" onClick={() => window.print()}>
          Download
        </Button>
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
      {/* <Card sx={{ mb: 4 }}>
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
      </Card> */}

      {/* Filters Card */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box display="flex" gap={2}>
            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel>Primary Use</InputLabel>
              <Select
                value={dropdown1}
                onChange={(e) => setDropdown1(e.target.value)}
              >
                <MenuItem value="Option A">Gaming</MenuItem>
                <MenuItem value="Option B">Education</MenuItem>
                <MenuItem value="Option C">Social Media</MenuItem>
                <MenuItem value="Option D">Work</MenuItem>
                <MenuItem value="Option E">Entertainment</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel>Location</InputLabel>
              <Select
                value={dropdown2}
                onChange={(e) => setDropdown2(e.target.value)}
              >
                <MenuItem value="Option 1">Ahmedabad</MenuItem>
                <MenuItem value="Option 2">Banglore</MenuItem>
                <MenuItem value="Option 3">Chennai</MenuItem>
                <MenuItem value="Option 4">Delhi</MenuItem>
                <MenuItem value="Option 5">Hyderabad</MenuItem>
                <MenuItem value="Option 6">Jaipur</MenuItem>
                <MenuItem value="Option 7">Kolkata</MenuItem>
                <MenuItem value="Option 8">Lucknow</MenuItem>
                <MenuItem value="Option 9">Mumbai</MenuItem>
                <MenuItem value="Option 10">Pune</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mb={4}>
        {/* <Box
        display="flex" justifyContent="justify" gap={2}
        
      >  */}
        {/* {Array.from({ length: 7 }).map((_, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Line Chart {index + 1}
              </Typography>
              <ResponsiveContainer width={300} height={300}>
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
        ))} */}

        {/* Dynamic Line Chart */}
        {/* Dynamic Line Chart */}
        <Card sx={{ height: "100%" }}>
          <CardContent sx={{ height: "100%" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Age Distribution Comparision
              </Typography>

              {/* Dropdown for X-axis selection */}
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <InputLabel>X-Axis Category</InputLabel>
                <Select
                  value={lineChartFilter}
                  onChange={(e) => setLineChartFilter(e.target.value)}
                >
                  {xAxisOptions.map((opt) => (
                    <MenuItem key={opt.key} value={opt.key}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={datasets[lineChartFilter]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="label"
                  label={{
                    value: `X Axis: ${lineChartFilter}`, // dynamic label
                    position: "insideRight",
                    offset: 15,
                  }}
                />
                <YAxis
                  label={{ value: "Age", angle: -90, position: "insideLeft" }}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="male"
                  stroke="#3f51b5"
                  name="Male"
                />
                <Line
                  type="monotone"
                  dataKey="female"
                  stroke="#f50057"
                  name="Female"
                />
                <Line
                  type="monotone"
                  dataKey="others"
                  stroke="#9e9e9e"
                  name="Others"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card sx={{ height: "100%" }}>
          <CardContent sx={{ height: "100%" }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Number Of Users vs PhoneBrand
            </Typography>
            <ResponsiveContainer width="100%" height={350}>
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

      <Overview />
      <ClusterWiseData />
    </Box>
  );
}
