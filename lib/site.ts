function httpsUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : undefined;
  } catch {
    return undefined;
  }
}

const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "support@saint-central.com";

export const site = {
  name: "Saint Central",
  description: "A quiet place for anonymous prayer, words of encouragement, and a little hope. Share what’s on your heart with Saint Central.",
  supportEmail: email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined,
  appStoreUrl: httpsUrl(process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com/tr/app/saint-central/id6742437524"),
  url: httpsUrl(process.env.NEXT_PUBLIC_SITE_URL),
  appleEula: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  updated: "November 14, 2026"
};

export function supportLink(subject: string) {
  return site.supportEmail
    ? `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}`
    : undefined;
}
