interface ContributionDay {
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export async function GET(request: Request) {
  const username = "TheSciCoder3000";
  const year = 2025;
  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  console.log("testing");
  console.log(process.env.GITHUB_TOKEN);

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { login: username } }),
    });

    const data = await response.json();

    if (data.errors) {
      return Response.json({ error: data.errors }, { status: 500 });
    }

    const colors = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

    const weeks =
      data.data.user.contributionsCollection.contributionCalendar.weeks.map(
        (week: ContributionWeek) => ({
          contributionDays: week.contributionDays.map((day) => {
            let level = 0;
            if (day.contributionCount > 0 && day.contributionCount <= 3)
              level = 1;
            else if (day.contributionCount > 3 && day.contributionCount <= 6)
              level = 2;
            else if (day.contributionCount > 6 && day.contributionCount <= 9)
              level = 3;
            else if (day.contributionCount > 9) level = 4;

            return {
              ...day,
              color: colors[level],
            };
          }),
        })
      );

    return Response.json({ weeks }, { status: 200 });
  } catch (err) {
    return Response.json(
      { error: "Failed to fetch contributions" },
      { status: 500 }
    );
  }
}
