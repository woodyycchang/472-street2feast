document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");
  const cards = document.querySelectorAll("#dishGrid .card");
  if (!form || !input || cards.length === 0) return;

  const KEY = "s2f_query";

  // filter cards by query
  function filterCards(queryRaw) {
    const query = (queryRaw || "").toLowerCase().trim();
    cards.forEach((card) => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  }

  // load saved query
  const saved = localStorage.getItem(KEY);
  if (saved) {
    input.value = saved;
    filterCards(saved);
  }

  // submit search
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem(KEY, input.value);
    filterCards(input.value);
  });

  // optional clear button
  const clearBtn = document.getElementById("clearSearch");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      localStorage.removeItem(KEY);
      filterCards("");
    });
  }
});

