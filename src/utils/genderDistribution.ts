import Papa from "papaparse";

export type GenderDistribution = {
    Cluster: number;
    Female: number;
    Male: number;
    Other: number;
    Total: number;
    "Male (%)": number;
    "Female (%)": number;
};

export async function getGenderDistributionData(): Promise<GenderDistribution[]> {
    return new Promise((resolve, reject) => {
        fetch("/age_wise_spend/male_female_distribution_by_cluster.csv")
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const rows = results.data as any[];
                        const data = rows.map((row) => ({
                            Cluster: Number(row["Cluster"]),
                            Female: Number(row["Female"]),
                            Male: Number(row["Male"]),
                            Other: Number(row["Other"]),
                            Total: Number(row["Total"]),
                            "Male (%)": Number(row["Male (%)"]),
                            "Female (%)": Number(row["Female (%)"]),
                        }));
                        resolve(data);
                    },
                    error: (err) => reject(err),
                });
            })
            .catch(reject);
    });
}
