import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";

interface KPIBoxProps {
  title: string;
  value: string;
  change: string;
  changeText: string;
  progress: number;
  isPositive: boolean;
}

export default function KPIBox({
  title,
  value,
  change,
  changeText,
  progress,
  isPositive,
}: KPIBoxProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
        <Typography
          variant="body2"
          color={isPositive ? "success.main" : "error.main"}
        >
          {change} {changeText}
        </Typography>
        <Box mt={1}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: 6, borderRadius: 5 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
