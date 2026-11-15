import Image from "next/image";
import { AppPreview } from "@/components/app-preview";
import { Legal } from "@/components/legal";
import { LegalLinks } from "@/components/legal-links";
import { Companion } from "@/components/companion";
import { Feather } from "@/components/feather";
import { PrayerIcon } from "@/components/prayer-icon";
import { site, supportLink } from "@/lib/site";

const appLink = site.appStoreUrl ?? "#app";

export default function Home() {
  return (
    <>
      <LegalLinks />
      <div className="night-sky" aria-hidden="true" />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header section-shell">
        <a className="brand" href="#" aria-label="Saint Central home"><Image src="/app-icon.png" alt="" width={38} height={38} priority /><span>Saint Central</span></a>
        <nav aria-label="Main navigation"><a href="#app">The app</a><a href="#support">Support</a><a className="nav-privacy" href="#privacy">Privacy</a></nav>
        <a className="header-download" href={appLink}>Get the app <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span aria-hidden="true">✦</span> A LITTLE LIGHT FOR YOUR EVERYDAY</p>
            <h1 id="hero-heading">A little prayer<br />goes a <span className="hope">long way<svg viewBox="0 0 300 16" aria-hidden="true"><path d="M3 9q12-10 24 0t24 0t24 0t24 0t24 0t24 0t24 0t24 0t24 0t24 0t24 0t24 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>.</h1>
            <p className="hero-description">Share what’s on your heart. Lift someone else in prayer. Find a little light in the everyday.</p>
            <div className="hero-actions"><a className="button button-primary" href={appLink}>{site.appStoreUrl ? "Download for iPhone" : "Explore the app"}<span aria-hidden="true">↗</span></a><a className="quiet-link" href="#app">Step inside <span aria-hidden="true">↓</span></a></div>
            <p className="hero-footnote"><span aria-hidden="true">♡</span> Anonymous prayer. Meaningful connection.</p>
          </div>
          <AppPreview />
        </section>
        <div className="verse-strip"><div className="section-shell"><span aria-hidden="true">✦</span><p>“Where two or three gather, there am I.”</p><span className="verse-reference">MATTHEW 18:20</span><span aria-hidden="true">✦</span></div></div>
        <section id="app" className="app-section section-shell" aria-labelledby="app-heading">
          <div className="section-heading"><div><p className="eyebrow">COME AS YOU ARE</p><h2 id="app-heading">A small moment.<br />A meaningful connection.</h2></div><p>A place to pause, pray, and walk<br className="desktop-break" /> a little further together.</p></div>
          <div className="feature-grid">
            <article className="feature"><div className="feature-symbol symbol-prayer"><PrayerIcon name="heart" /></div><h3>Bring what you carry.</h3><p>Share a prayer request anonymously and make room for encouragement from others.</p><span className="feature-note">A place to be heard</span></article>
            <article className="feature"><div className="feature-symbol symbol-connection"><PrayerIcon name="leaf" /></div><h3>Be someone’s little light.</h3><p>Pray for others, leave a kind word, or gather your circle in a prayer group.</p><span className="feature-note">A little kindness goes a long way</span></article>
            <article className="feature"><div className="feature-symbol symbol-growth"><PrayerIcon name="star" /></div><h3>Let your practice grow.</h3><p>Return to your prayers, reflect in your journal, and grow alongside a little companion.</p><span className="feature-note">One day, one prayer at a time</span></article>
          </div>
          <div className="pals-section">
            <div className="pals-copy"><p className="eyebrow">MEET YOUR PRAYER PALS</p><h2>A little company.<br />A little encouragement.</h2><p>Build a gentle rhythm of prayer with a companion by your side. As you show up, your little friend grows with you.</p><span className="pals-signoff"><span aria-hidden="true">✦</span> Small moments. Room to grow.</span></div>
            <div className="pals-art"><div className="pal-card pal-card-pip"><span className="pal-card-number">001 <span aria-hidden="true">✦</span></span><Companion /><div><h3>Pip</h3><p>A little lamb. A little light.</p></div></div><div className="pal-card pal-card-feather"><span className="pal-card-number">A SEASONAL FRIEND <span aria-hidden="true">✧</span></span><Feather /><div><h3>Feather</h3><p>Your little prayer companion.</p></div></div></div>
          </div>
        </section>
        <section id="support" className="support-section" aria-labelledby="support-heading">
          <div className="support-grid section-shell">
            <div className="support-intro"><p className="eyebrow">WE’RE HERE TO HELP</p><h2 id="support-heading">Need a<br />helping hand?</h2><p>Questions, feedback, or something<br className="desktop-break" /> that needs a little care.</p><a className="support-email" href={supportLink("Saint Central support") ?? "#support"}>{site.supportEmail ?? "Contact support"}<span aria-hidden="true">↗</span></a><p className="support-note">For app issues, include your device model,<br className="desktop-break" /> app version, and what happened.</p></div>
            <div className="faq-list">
              <details className="faq"><summary>How do I manage my subscription?<span className="expand-icon" aria-hidden="true" /></summary><div><p>On your iPhone, open Settings → your name → Subscriptions → Saint Central. You can review your plan or cancel renewal there. Your current access continues through the paid period shown by Apple.</p><a href="https://support.apple.com/en-us/118428" target="_blank" rel="noopener noreferrer">Apple subscription help ↗</a></div></details>
              <details className="faq"><summary>How do I restore a purchase?<span className="expand-icon" aria-hidden="true" /></summary><div><p>Sign in to the Apple account used for the original purchase, open the Saint Central Store, and tap Restore purchases. Sign in to your Saint Central account as well so your access can sync.</p><p>If access is still missing, email us with your app version and the product you purchased.</p></div></details>
              <details id="delete-account" className="faq"><summary>How do I delete my account and data?<span className="expand-icon" aria-hidden="true" /></summary><div><p>In Saint Central, go to Me → the Settings gear → Delete account. Follow the confirmation steps. If your account has an email address, enter the code sent to that address.</p><p>This permanently removes your account and associated prayers and notes. Cancel any active subscription separately through your Apple account. For help accessing or deleting an account, email us.</p><a href={supportLink("Saint Central account deletion request") ?? "#support"}>Get help with account deletion ↗</a></div></details>
              <details className="faq"><summary>How do I report a problem or concern?<span className="expand-icon" aria-hidden="true" /></summary><div><p>Email support with a description and enough context to locate the issue. For a content concern, include when and where it appeared. Share only the personal information needed to investigate.</p><p>For purchase refunds, submit a request through Apple.</p><a href="https://support.apple.com/en-us/118223" target="_blank" rel="noopener noreferrer">Apple refund help ↗</a></div></details>
            </div>
          </div>
        </section>
        <Legal />
        <section className="closing section-shell" aria-labelledby="closing-heading"><span aria-hidden="true">✦</span><h2 id="closing-heading">There’s room for you here.</h2><a className="button button-primary" href={appLink}>Find your little moment<span aria-hidden="true">↗</span></a></section>
      </main>
      <footer className="footer section-shell"><div><a className="brand footer-brand" href="#"><Image src="/app-icon.png" alt="" width={30} height={30} /><span>Saint Central</span></a><p>© {new Date().getUTCFullYear()} Saint Central</p></div><nav aria-label="Legal and support"><a href="#privacy">Privacy policy</a><a href="#terms">Terms</a><a href={site.appleEula} target="_blank" rel="noopener noreferrer">Apple EULA ↗</a><a href="#support">Support</a></nav><a className="back-top" href="#">Back to top ↑</a></footer>
    </>
  );
}
