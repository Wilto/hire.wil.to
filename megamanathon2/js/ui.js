(() => {
  // src/js/menu.js
  function menu_default() {
    const toggleEls = document.querySelectorAll("[aria-haspopup]"), init = (el) => {
      el.addEventListener("click", toggleStates);
      document.addEventListener("keyup", keyHandler);
    }, closeTop = (e) => {
      const openToggle = document.querySelector('[aria-haspopup][aria-expanded="true"]');
      let targetEl;
      if (openToggle) {
        targetEl = openToggle.closest(".menu").querySelector('[role="menu"]');
        targetEl.setAttribute("aria-hidden", true);
        openToggle.setAttribute("aria-expanded", false);
      }
    }, clickOut = (e) => {
      const openToggle = document.querySelector('[aria-haspopup][aria-expanded="true"]'), openTarget = document.querySelector('.flyout[aria-hidden="false"]');
      let targetEl;
      e.stopPropagation();
      if (!openTarget) {
        return;
      }
      if (!openTarget.contains(e.target) && !openToggle.contains(e.target)) {
        closeTop(e);
      }
    }, keyHandler = (e) => {
      const current = document.activeElement, openWrap = document.querySelectorAll('[aria-hidden="false"][role="menu"]'), parentWrap = current.closest(".menu"), resultList = parentWrap && parentWrap.querySelector('[role="menu"]'), matchedSibling = (el, sel, dir) => {
        let sibEl = el[dir + "ElementSibling"];
        while (sibEl) {
          if (sibEl.matches(sel)) {
            return sibEl;
          }
          sibEl = sibEl[dir + "ElementSibling"];
        }
      };
      let moveTo;
      if (!current || !openWrap) {
        return;
      }
      if (e.key === "Escape") {
        closeTop(e, true);
        if (parentWrap) {
          parentWrap.querySelector('[aria-haspopup="true"]').focus();
        }
        return;
      }
      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
          moveTo = matchedSibling(current, '[role="menuitem"]', "next") || resultList.querySelector('[role="menuitem"]:first-of-type');
          break;
        case "ArrowUp":
        case "ArrowLeft":
          moveTo = matchedSibling(current, '[role="menuitem"]', "previous") || resultList.querySelector('[role="menuitem"]:last-of-type');
          break;
      }
      if (moveTo !== void 0) {
        moveTo.focus();
        moveTo.parentNode.querySelectorAll("[tabindex]").forEach((el) => el.setAttribute("tabindex", "-1"));
        moveTo.setAttribute("tabindex", "0");
        e.preventDefault();
      }
    }, toggleStates = function() {
      const target = this.closest(".menu").querySelector('[role="menu"]'), nowCollapsed = this.getAttribute("aria-expanded") === "true", firstElement = target.querySelector('[role="menuitem"]:first-of-type');
      target.setAttribute("aria-hidden", nowCollapsed);
      this.setAttribute("aria-expanded", !nowCollapsed);
      if (!nowCollapsed) {
        if (target.querySelectorAll('[tabindex="0"]').length === 0) {
          target.querySelectorAll('[role="menuitem"]').forEach((el) => el.setAttribute("tabindex", "-1"));
          firstElement.setAttribute("tabindex", "0");
        }
      }
    };
    document.addEventListener("click", clickOut);
    toggleEls.forEach((el) => {
      init(el);
    });
  }

  // src/js/bundle.js
  menu_default();
})();
//# sourceMappingURL=ui.js.map
