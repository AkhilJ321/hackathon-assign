import { Box, Grid, Button } from "@mui/material";
import KPIBox from "./KPIBox";
import TimeRangeDropdown from "./TimeRangeDropdown";
import UserSegments from "./UserSegments";

export default function Dashboard() {
  return (
    <Box p={3}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Box fontSize="1.5rem" fontWeight="bold">
          Analytics Dashboard
        </Box>
        <Box display="flex" gap={2}>
          <TimeRangeDropdown />
          <Button variant="outlined">Filters</Button>
          <Button variant="contained">Export</Button>
        </Box>
      </Box>

      {/* KPI Boxes */}
      <Grid container spacing={2}>
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
      </Grid>

      {/* User Segments */}
      <Box mt={4}>
        <UserSegments />
      </Box>
    </Box>
  );
}
