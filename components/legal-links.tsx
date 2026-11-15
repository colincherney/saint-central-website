"use client";

import { useEffect } from "react";

/** Keep the one-page legal sections readable from App Store and in-app links. */
export function LegalLinks() {
  useEffect(() => {
    function revealSection() {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
      }
    }

    revealSection();
    function followSectionLink(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      const hash = link?.getAttribute("href");
      if (hash?.startsWith("#") && hash === window.location.hash) revealSection();
    }

    window.addEventListener("hashchange", revealSection);
    document.addEventListener("click", followSectionLink);
    return () => {
      window.removeEventListener("hashchange", revealSection);
      document.removeEventListener("click", followSectionLink);
    };
  }, []);

  return null;
}
