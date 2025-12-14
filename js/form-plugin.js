(function () {
  function safeParse(json, fallback) {
    try { return JSON.parse(json); } catch (e) { return fallback; }
  }

  function init(options) {
    const form = document.getElementById(options.formId);
    const listEl = document.getElementById(options.listId);
    const msgEl = document.getElementById(options.msgId);
    if (!form || !listEl || !msgEl) return;

    const key = options.storageKey || "s2f_form_submissions";
    const saved = safeParse(localStorage.getItem(key), []);

    function render(items) {
      listEl.innerHTML = "";
      items.slice().reverse().forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.dish} — ${item.city} (${item.when})`;
        listEl.appendChild(li);
      });
    }

    render(saved);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const dish = String(fd.get("dish") || "").trim();
      const city = String(fd.get("city") || "").trim();
      const note = String(fd.get("note") || "").trim();

      if (!dish || !city) {
        msgEl.textContent = "Please enter both a dish and a city.";
        return;
      }

      const when = new Date().toLocaleString();
      saved.push({ dish, city, note, when });
      localStorage.setItem(key, JSON.stringify(saved));

      msgEl.textContent = "Thanks! Your suggestion was saved.";
      form.reset();
      render(saved);
    });
  }

  window.FormPlugin = { init };
})();

