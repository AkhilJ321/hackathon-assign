/* eslint-disable @typescript-eslint/no-explicit-any */
import Papa from "papaparse";

export type ClusterSummary = {
    Cluster: number;
    name: string;
    Count: number;
    percent?: string;
};

export async function getClusterSummaryData(): Promise<ClusterSummary[]> {
    return new Promise((resolve, reject) => {
        fetch("/age_wise_spend/cluster_summary.csv")
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const rows = results.data as any[];
                        const total = rows.reduce((sum, row) => sum + Number(row["Count"]), 0);
                        const data = rows.map((row) => ({
                            Cluster: Number(row["Cluster"]),
                            name: row["Cluster Name"],
                            Count: Number(row["Count"]),
                            percent: total ? ((Number(row["Count"]) / total) * 100).toFixed(1) : "0",
                        }));
                        resolve(data);
                    },
                    error: (err: any) => reject(err),
                });
            })
            .catch(reject);
    });
}