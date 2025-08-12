import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
  Legend as ReLegend,
} from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { getGenderDistributionData } from "../utils/genderDistribution";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const genderData = [
  { name: "Mature High ", Male: 1500, Female: 1523 },
  { name: "Mature Low ", Male: 1434, Female: 1429 },
  { name: "Young High ", Male: 1386, Female: 1531 },
  { name: "Young Low ", Male: 1505, Female: 1486 },
];

const Overview = () => {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    fetch("/age_wise_spend/cluster_summary.csv")
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const data = results.data;
            const totalCount = data.reduce(
              (sum: number, c: any) => sum + Number(c.Count),
              0
            );
            const pie = data.map((c) => ({
              name: c["Cluster Name"],
              value: (Number(c.Count) / totalCount) * 100,
            }));
            setPieData(pie);
          },
        });
      });
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0e7ff 0%, #f5f7fa 100%)",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        padding: "2rem",
        margin: "2rem auto",
        maxWidth: "1200px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "black",
        }}
      >
        Overview
      </h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          background: "#f8fafc",
          borderRadius: "12px",
          padding: "1.5rem 1rem",
          overflowX: "auto",
          maxWidth: "100%",
        }}
      >
        {/* Cluster wise Percentage Pie Chart */}
        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            padding: "0.4rem",
            minWidth: "250px",
          }}
        >
          <h4 style={{ textAlign: "center", color: "black" }}>
            Cluster Percentage
          </h4>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ value }) =>
                value !== undefined ? `${Number(value).toFixed(1)}%` : ""
              }
            >
              {pieData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <ReTooltip
              formatter={(value) =>
                typeof value === "number" ? `${value.toFixed(2)}%` : value
              }
            />
            <ReLegend />
          </PieChart>
        </div>

        {/* <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            padding: "1rem",
            minWidth: "250px",
          }}
        >
          <h4 style={{ textAlign: "center", color: "#6366f1" }}>
            Stacked Bar Chart
          </h4>
          <BarChart width={250} height={200} data={stackedBarData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" stackId="a" fill="#8884d8" />
            <Bar dataKey="pv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </div> */}

        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            padding: "1rem",
            minWidth: "300px", // <-- Increased minWidth for better visibility
          }}
        >
          <h4 style={{ textAlign: "center", color: "#black" }}>
            Gender Wise Distribution
          </h4>
          <BarChart
            width={600}
            height={300}
            data={genderData}
            margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Male" fill="#0088FE" />
            <Bar dataKey="Female" fill="#FFBB28" />
          </BarChart>
        </div>
        {/* Pareto Chart */}
        {/* <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            padding: "1rem",
            minWidth: "250px",
          }}
        >
          <h4 style={{ textAlign: "center", color: "#6366f1" }}>
            Pareto Chart
          </h4>
          <BarChart width={250} height={200} data={paretoWithCum}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="value" fill="#82ca9d" />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cum"
              stroke="#ff7300"
              dot={false}
            />
          </BarChart>
        </div> */}
      </div>
    </div>
  );
};

export default Overview;
