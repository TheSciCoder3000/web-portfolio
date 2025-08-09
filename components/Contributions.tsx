import { useEffect, useState } from "react";
import contribStyles from "@/app/styles/contribution.module.scss";
import styles from "@/app/styles/global.module.scss";

type ContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

export default function Contributions({
  data,
  year,
}: {
  data?: Week[];
  year: string;
}) {
  const [weeks, setWeeks] = useState<Week[]>(data || []);
  const [loading, setLoading] = useState(!data);

  useEffect(() => {
    if (data) return;
    async function fetchData() {
      setLoading(true);
      const res = await fetch(`/contribution`);
      const data = await res.json();
      setWeeks(data.weeks || []);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p className={styles.p}>Loading latest contributions…</p>;

  return (
    <div className={contribStyles.contributionsContainer}>
      <h3 className={styles.h3}>{year}</h3>
      <div className={contribStyles.contributionBox}>
        <div className={contribStyles.contributionsContent}>
          <div className={contribStyles.weeks}>
            {weeks.map((week, wIndex) => (
              <div key={wIndex} className={contribStyles.week}>
                {week.contributionDays.map((day, dIndex) => (
                  <div
                    key={dIndex}
                    className={contribStyles.day}
                    style={{ backgroundColor: day.color }}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
