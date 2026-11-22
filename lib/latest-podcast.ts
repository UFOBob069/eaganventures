type LatestPodcast = {
  title: string;
  name: string;
  description: string;
  number: number | null;
  date: string;
  notesUrl: string;
};

const fallback: LatestPodcast = {
  title: "Episode 191: Joe Brayton, Pickler Universe",
  name: "Joe Brayton",
  description: "Building a country club experience around pickleball.",
  number: 191,
  date: "2026-09-15T17:28:39.000Z",
  notesUrl:
    "https://www.moontowerbusiness.com/episodes/191-joe-brayton-pickler-universe",
};

export async function getLatestPodcast(): Promise<LatestPodcast> {
  try {
    const response = await fetch(
      "https://www.moontowerbusiness.com/api/latest-episode",
      {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!response.ok) return fallback;
    const data = await response.json();
    if (
      ![
        data.title,
        data.name,
        data.description,
        data.date,
        data.notesUrl,
      ].every((value) => typeof value === "string" && value.trim()) ||
      !Number.isFinite(Date.parse(data.date))
    )
      return fallback;
    const link = new URL(data.notesUrl);
    if (
      link.protocol !== "https:" ||
      ![
        "www.moontowerbusiness.com",
        "podcasters.spotify.com",
        "creators.spotify.com",
        "open.spotify.com",
        "anchor.fm",
      ].includes(link.hostname)
    )
      return fallback;
    return {
      ...data,
      number:
        Number.isInteger(data.number) && data.number > 0 ? data.number : null,
    };
  } catch {
    return fallback;
  }
}
