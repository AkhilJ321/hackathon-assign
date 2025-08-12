import React, { useState } from "react";
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

const CLUSTERS = [
  "Mature High Spender",
  "Mature Low Spender",
  "Young High Spender",
  "Young Low Spender",
];

const radarData = [
  { subject: "Age", A: 40, fullMark: 100 },
  { subject: "Social Media", A: 60, fullMark: 100 },
  { subject: "Calls", A: 80, fullMark: 100 },
  { subject: "E-commerce", A: 90, fullMark: 100 },
];

const barData = [
  { name: "Social Media", value: 3.2 },
  { name: "Calls", value: 120 },
  { name: "E-commerce", value: 5000 },
];

const quadrantData = [
  { x: 1, y: 2, label: "A" },
  { x: 2, y: 3, label: "B" },
  { x: 3, y: 1, label: "C" },
  { x: 4, y: 4, label: "D" },
];

const tableRows = [
  "Insight 1",
  "Insight 2",
  "Insight 3",
  "Insight 4",
  "Insight 5",
];

export default function ClusterWiseData() {
  const [selectedCluster, setSelectedCluster] = useState(CLUSTERS[0]);

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2} fontWeight={600}>
        Cluster Wise Data
      </Typography>
      <Box mb={3}>
        <Select
          value={selectedCluster}
          onChange={(e) => setSelectedCluster(e.target.value)}
          sx={{ minWidth: 220 }}
        >
          {CLUSTERS.map((cluster) => (
            <MenuItem key={cluster} value={cluster}>
              {cluster}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
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
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
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
        <Grid item xs={12} md={6} lg={3}>
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
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" align="center" mb={2}>
                Quadrant Chart
              </Typography>
              <svg width={300} height={240} style={{ background: "#f5f5f5" }}>
                {/* Draw axes */}
                <line x1={30} y1={120} x2={270} y2={120} stroke="#888" />
                <line x1={150} y1={30} x2={150} y2={210} stroke="#888" />
                {/* Draw points */}
                {quadrantData.map((pt, idx) => (
                  <circle
                    key={idx}
                    cx={pt.x * 50 + 50}
                    cy={pt.y * 40 + 40}
                    r={8}
                    fill="#8884d8"
                  />
                ))}
                {quadrantData.map((pt, idx) => (
                  <text
                    key={"label-" + idx}
                    x={pt.x * 50 + 50}
                    y={pt.y * 40 + 40 - 12}
                    textAnchor="middle"
                    fontSize={14}
                    fill="#333"
                  >
                    {pt.label}
                  </text>
                ))}
              </svg>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" align="center" mb={2}>
                Insights Table
              </Typography>
              <Table>
                <TableBody>
                  {tableRows.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row}</TableCell>
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
