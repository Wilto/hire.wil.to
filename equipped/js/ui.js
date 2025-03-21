(() => {
  // src/js/collapsible.js
  function collapsible_default() {
    let details = document.querySelectorAll("details");
    details.forEach((el) => {
      el.addEventListener("toggle", (e) => {
        let summary = e.target.querySelector("summary"), detailEls = e.target.querySelectorAll(":not(summary)");
        detailEls.forEach((el2) => {
          el2.setAttribute("aria-hidden", !e.target.open);
        });
        summary.setAttribute("aria-expanded", e.target.open);
      });
      el.addEventListener("keyup", (e) => {
        if (e.key.toLowerCase() === "escape") {
          e.target.closest("[open]").removeAttribute("open");
        }
      });
    });
  }

  // src/js/bundle.js
  collapsible_default();
})();
//# sourceMappingURL=ui.js.map
