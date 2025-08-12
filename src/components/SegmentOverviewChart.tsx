import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { segment: "A", users: 120000 },
  { segment: "B", users: 180000 },
  { segment: "C", users: 90000 },
];

export default function SegmentOverviewChart() {
  return (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Typography variant="subtitle1">User Segments Overview</Typography>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="segment" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#3f51b5" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
