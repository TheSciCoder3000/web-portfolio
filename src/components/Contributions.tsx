"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

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
  className,
}: {
  data?: Week[];
  year: string;
  className?: string;
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
  }, [data]);

  if (loading) return <p>Loading latest contributions…</p>;

  return (
    <div className={clsx("mb-10", className)}>
      <h3>{year}</h3>
      <div className="bordr-1 w-full overflow-auto rounded-md border-[#3d444d]">
        <div className="m-4">
          <div className="flex gap-0.5">
            {weeks.map((week, wIndex) => (
              <div
                key={wIndex}
                className="flex flex-col gap-0.5 [&:first-child]:justify-end"
              >
                {week.contributionDays.map((day, dIndex) => (
                  <div
                    className="aspect-square h-fit w-3 cursor-pointer rounded-xs hover:outline-1 hover:outline-[#0000004d]"
                    key={dIndex}
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
