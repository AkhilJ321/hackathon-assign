import Papa from "papaparse";

export type ClusterSummary = {
    Cluster: number;
    name: string;
    Count: number;
    Age: number;
    "Social Media Time (hrs/day)": number;
    "Calls Duration (mins/day)": number;
    "E-commerce Spend (INR/month)": number;
};

export type UserData = {
    Cluster: number;
    Age: number;
    "Screen Time (hrs/day)": number;
    "Data Usage (GB/month)": number;
    "E-commerce Spend (INR/month)": number;
    "Location": string;
    "Total expenditure": number;
};

export async function getClusterSummary(): Promise<ClusterSummary[]> {
    return fetch("/age_wise_spend/cluster_summary.csv")
        .then(res => res.text())
        .then(csv => {
            const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
            return (data as any[]).map(row => ({
                Cluster: Number(row.Cluster),
                name: row["Cluster Name"],
                Count: Number(row.Count),
                Age: Number(row.Age),
                "Social Media Time (hrs/day)": Number(row["Social Media Time (hrs/day)"]),
                "Calls Duration (mins/day)": Number(row["Calls Duration (mins/day)"]),
                "E-commerce Spend (INR/month)": Number(row["E-commerce Spend (INR/month)"]),
            }));
        });
}

export async function getUserData(): Promise<UserData[]> {
    return fetch("/age_wise_spend/Full_Data.csv")
        .then(res => res.text())
        .then(csv => {
            const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
            return (data as any[]).map(row => ({
                Cluster: Number(row.Cluster),
                Age: Number(row.Age),
                "Screen Time (hrs/day)": Number(row["Screen Time (hrs/day)"]),
                "Data Usage (GB/month)": Number(row["Data Usage (GB/month)"]),
                "E-commerce Spend (INR/month)": Number(row["E-commerce Spend (INR/month)"]),
                "Location": row.Location,
                "Total expenditure": Number(row["Total expenditure"]),
            }));
        });
}