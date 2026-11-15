import { Companion } from "./companion";
import { Feather } from "./feather";
import { PrayerIcon } from "./prayer-icon";

export function AppPreview() {
  return (
    <figure className="preview">
      <div className="preview-arch" aria-hidden="true"><span className="arch-cross">✝</span></div>
      <span className="preview-moon" aria-hidden="true" />
      <span className="preview-spark spark-one" aria-hidden="true">✦</span>
      <span className="preview-spark spark-two" aria-hidden="true">✧</span>
      <span className="preview-spark spark-three" aria-hidden="true">✦</span>
      <div className="phone" aria-label="Illustrated preview of the app’s Pray screen">
        <div className="phone-status" aria-hidden="true"><span>9:41</span><span className="phone-island" /><span>▮▮▮ ▰</span></div>
        <div className="phone-content">
          <div className="preview-topline">Saint <span>Central</span><span className="phone-streak">✦ 1 DAY STREAK</span></div>
          <h3 className="phone-heading">How will you pray?</h3>
          <p className="phone-subheading">Choose where your heart is right now.</p>
          <div className="phone-level"><span>LV <strong>2</strong></span><span>▤ &nbsp; Quests <b>0/4</b></span></div>
          <div className="phone-pal">
            <svg className="pal-progress" viewBox="0 0 220 145" aria-hidden="true"><path d="M13 134a99 99 0 1 1 194 0" fill="none" stroke="#535461" strokeWidth="2.5" strokeLinecap="round" /><path d="M13 134A99 99 0 0 1 145 15" fill="none" stroke="#f5cba2" strokeWidth="2.5" strokeLinecap="round" /><circle cx="145" cy="15" r="4.5" fill="#f4ead5" /></svg>
            <div className="phone-feather"><Feather /></div>
          </div>
          <p className="pal-name">Feather <span aria-hidden="true">⌁</span></p>
          <div className="phone-xp"><span /></div>
          <p className="phone-xp-label">30 / 50 XP · Little Poult</p>
          <div className="phone-prayer-actions" aria-hidden="true">
            <div><span><PrayerIcon name="edit" /></span><p>Share request</p><small>+20 XP</small></div>
            <div className="phone-pray-now"><span><PrayerIcon name="heart" /></span><p>Pray right now</p><small>+15 XP</small></div>
            <div><span><PrayerIcon name="leaf" /></span><p>Pray for others</p><small>+10 XP</small></div>
          </div>
          <div className="phone-secondary-actions" aria-hidden="true"><span><PrayerIcon name="users" />Pray with group</span><span><PrayerIcon name="journal" />Journal</span><span><PrayerIcon name="star" />Meet the pals</span></div>
          <div className="phone-tabs" aria-hidden="true"><span><PrayerIcon name="home" /><small>Home</small></span><span className="active"><PrayerIcon name="leaf" /><small>Pray</small></span><span><PrayerIcon name="person" /><small>Me</small></span></div>
          <div className="phone-home-indicator" aria-hidden="true" />
        </div>
      </div>
      <div className="companion-note"><div className="companion-art"><Companion /></div><div><span className="eyebrow">A LITTLE COMPANY</span><p>A friend for your<br />prayer journey.</p><span className="companion-note-stars" aria-hidden="true">✦ · ✧</span></div></div>
      <figcaption>A little glimpse inside Saint Central</figcaption>
    </figure>
  );
}
