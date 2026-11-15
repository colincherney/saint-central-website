type IconName = "heart" | "leaf" | "users" | "journal" | "star" | "home" | "person" | "edit";

export function PrayerIcon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "heart" && <path d="M20.8 4.9a5.5 5.5 0 0 0-7.8 0L12 6l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.3a5.5 5.5 0 0 0 0-7.8Z" />}
      {name === "leaf" && <><path d="M12 2C8 7 5 10 5 14a7 7 0 0 0 14 0c0-4-3-7-7-12Z" /><path d="M12 9v13" /></>}
      {name === "users" && <><circle cx="9" cy="7" r="3.5" /><path d="M2 21v-2a7 7 0 0 1 14 0v2M17 4a3.5 3.5 0 0 1 0 7M19 15a6 6 0 0 1 3 6" /></>}
      {name === "journal" && <><path d="M5 3h12a3 3 0 0 1 3 3v15H7a3 3 0 0 1-3-3V3Z" /><path d="M4 18a3 3 0 0 1 3-3h13M9 7h6M9 11h4" /></>}
      {name === "star" && <path d="m12 2 3 6.3 7 .9-5.1 4.9 1.2 6.9-6.1-3.3L5.9 21l1.2-6.9L2 9.2l7-.9L12 2Z" />}
      {name === "home" && <path d="m3 10 9-8 9 8v12h-6v-7H9v7H3V10Z" />}
      {name === "person" && <><circle cx="12" cy="6" r="4" /><path d="M4 22v-2a8 8 0 0 1 16 0v2" /></>}
      {name === "edit" && <path d="m16 3 5 5M3 21l5-1L21 7a3.5 3.5 0 0 0-5-5L3 15l-1 7Z" />}
    </svg>
  );
}
