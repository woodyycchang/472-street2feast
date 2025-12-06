document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");
  const cards = document.querySelectorAll("#dishGrid .card");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.toLowerCase().trim();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });
});
