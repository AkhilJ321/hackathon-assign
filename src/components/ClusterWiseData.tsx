import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  MenuItem,
  Select,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  getClusterSummary,
  getUserData,
  type ClusterSummary,
  type UserData,
} from "../utils/clusterWiseDistribution";

export default function ClusterWiseData() {
  const [clusters, setClusters] = useState<ClusterSummary[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);
  const [selectedCluster, setSelectedCluster] = useState<number>(0);

  useEffect(() => {
    getClusterSummary().then(setClusters);
    getUserData().then(setUsers);
  }, []);

  // Map cluster number to name
  const clusterOptions = clusters.map((c) => ({
    value: c.Cluster,
    label: c.name,
  }));

  // Filtered cluster summary
  const clusterSummary = clusters.find((c) => c.Cluster === selectedCluster);

  // Filtered users
  const clusterUsers = users.filter((u) => u.Cluster === selectedCluster);

  // Radar chart data
  const radarData = clusterSummary
    ? [
        { subject: "Age", A: clusterSummary.Age, fullMark: 100 },
        {
          subject: "Social Media",
          A: clusterSummary["Social Media Time (hrs/day)"],
          fullMark: 10,
        },
        {
          subject: "Calls",
          A: clusterSummary["Calls Duration (mins/day)"],
          fullMark: 300,
        },
        {
          subject: "E-commerce",
          A: clusterSummary["E-commerce Spend (INR/month)"],
          fullMark: 10000,
        },
      ]
    : [];

  // Bar chart data
  const barData = clusterUsers.slice(0, 20).map((u) => ({
    name: u.Location,
    "Monthly Spend": u["Total expenditure"],
    "E-commerce Spend": u["E-commerce Spend (INR/month)"],
  }));

  // Quadrant chart data
  const quadrantData = clusterUsers.slice(0, 20).map((u) => ({
    x: u["Screen Time (hrs/day)"],
    y: u["Total expenditure"],
    label: u.Location,
  }));

  // Top 5 cities
  const cityCount: Record<string, number> = {};
  clusterUsers.forEach((u) => {
    cityCount[u.Location] = (cityCount[u.Location] || 0) + 1;
  });
  const topCities = Object.entries(cityCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2} fontWeight={600}>
        Cluster Wise Data
      </Typography>
      <Box mb={3}>
        <Select
          value={selectedCluster}
          onChange={(e) => setSelectedCluster(Number(e.target.value))}
          sx={{ minWidth: 220 }}
        >
          {clusterOptions.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" align="center" mb={2}>
                Radar Chart
              </Typography>
              <RadarChart
                cx={150}
                cy={120}
                outerRadius={80}
                width={300}
                height={240}
                data={radarData}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="Cluster"
                  dataKey="A"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" align="center" mb={2}>
                Bar Chart
              </Typography>
              <BarChart width={300} height={240} data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Monthly Spend" fill="#8884d8" />
                <Bar dataKey="E-commerce Spend" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" align="center" mb={2}>
                Quadrant Chart
              </Typography>
              <svg width={300} height={240} style={{ background: "#f5f5f5" }}>
                <line x1={30} y1={120} x2={270} y2={120} stroke="#888" />
                <line x1={150} y1={30} x2={150} y2={210} stroke="#888" />
                {quadrantData.map((pt, idx) => (
                  <circle
                    key={idx}
                    cx={pt.x * 10 + 50}
                    cy={240 - pt.y / 100 + 30}
                    r={8}
                    fill="#8884d8"
                  />
                ))}
                {quadrantData.map((pt, idx) => (
                  <text
                    key={"label-" + idx}
                    x={pt.x * 10 + 50}
                    y={240 - pt.y / 100 + 20}
                    textAnchor="middle"
                    fontSize={12}
                    fill="#333"
                  >
                    {pt.label}
                  </text>
                ))}
              </svg>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" align="center" mb={2}>
                Top 5 Cities
              </Typography>
              <Table>
                <TableBody>
                  {topCities.map(([city, count], idx) => (
                    <TableRow key={idx}>
                      <TableCell>{city}</TableCell>
                      <TableCell>{count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
