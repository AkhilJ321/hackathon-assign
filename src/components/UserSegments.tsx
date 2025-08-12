import { Tabs, Tab, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import SegmentOverviewChart from "./SegmentOverviewChart";
import SegmentPerformanceChart from "./SegmentPerformanceChart";

export default function UserSegments() {
  const [tab, setTab] = useState(0);

  return (
    <Box>
      {/* Tabs */}
      <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)}>
        <Tab label="User Segments" />
        <Tab label="Demographics" />
        <Tab label="Engagement" />
        <Tab label="Devices" />
        <Tab label="Monetization" />
      </Tabs>

      {/* Content */}
      {tab === 0 && (
        <Box mt={2}>
          <Typography variant="h6">User Segments</Typography>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="subtitle1">8 segments</Typography>
            <Box display="flex" gap={1}>
              <Button variant="outlined">Compare</Button>
              <Button variant="contained">Create Segment</Button>
            </Box>
          </Box>
          <Box display="flex" gap={2}>
            <SegmentOverviewChart />
            <SegmentPerformanceChart />
          </Box>
        </Box>
      )}
    </Box>
  );
}
