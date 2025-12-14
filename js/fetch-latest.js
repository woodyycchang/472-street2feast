document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("lastUpdated");
  if (!target) return;

  const apiUrl = "https://api.github.com/repos/CS272-F25/p10/commits?per_page=1";

  fetch(apiUrl)
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      const dateStr = data?.[0]?.commit?.committer?.date;
      if (!dateStr) throw new Error("Missing date");
      const dt = new Date(dateStr);
      target.textContent = dt.toLocaleString();
    })
    .catch(() => {
      target.textContent = "Unavailable";
    });
});

