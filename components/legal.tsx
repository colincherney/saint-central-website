import { site, supportLink } from "@/lib/site";

function PrivacyContact() {
  return <a href={supportLink("Saint Central privacy request") ?? "#support"}>{site.supportEmail ?? "Contact support"}</a>;
}

export function Legal() {
  return (
    <section id="legal" className="legal-section section-shell" aria-labelledby="legal-heading">
      <div className="section-heading legal-heading">
        <div><p className="eyebrow">THE IMPORTANT DETAILS</p><h2 id="legal-heading">A little clarity.<br />Peace of mind.</h2></div>
        <p>How we care for your information,<br className="desktop-break" /> and the terms for sharing this space.</p>
      </div>
      <div className="legal-list">
        <details id="privacy" className="legal-item">
          <summary><span><h3>Privacy policy</h3><span className="legal-description">Your information, your choices</span></span><span className="expand-icon" aria-hidden="true" /></summary>
          <div className="legal-body">
            <p className="updated">Last updated {site.updated}</p>
            <p>Saint Central (“we,” “us,” or “our”) provides a mobile app for anonymous prayer, encouragement, groups, and personal reflection. This policy explains how we handle information in the app and on this website. Contact us with privacy questions at <PrivacyContact />.</p>
            <h4>Information we handle</h4>
            <ul>
              <li><strong>Account information.</strong> An internal user identifier, authentication records, and the email address and credentials you provide when creating an account. Guest sessions also have an internal identifier.</li>
              <li><strong>Content you create.</strong> Prayer requests, encouragement, prayer updates, journal or biography entries, and information you share in groups. This content can contain sensitive information about your beliefs, health, or personal circumstances.</li>
              <li><strong>Activity and preferences.</strong> Prayer interactions, group membership, companion progress and names, quests, saved room decorations, appearance choices, and notification settings. Some information is cached on your device and some is synced to your account.</li>
              <li><strong>Notifications.</strong> If you enable notifications, we process a device push token, your time zone, reminder times, and notification preferences.</li>
              <li><strong>Purchases.</strong> App user identifiers, product and transaction identifiers, purchase history, and subscription status used to provide or restore paid features. Apple handles payment details for App Store purchases.</li>
              <li><strong>Support and technical records.</strong> Messages you send to support and technical information processed when the services run, such as IP addresses, request timestamps, device or app information, and error or security logs.</li>
            </ul>
            <h4>How we use information</h4>
            <p>We use this information to authenticate accounts, deliver and save prayers, facilitate groups and encouragement, sync progress, send requested notifications, manage purchases, answer support requests, moderate content, prevent misuse, and operate and troubleshoot the services.</p>
            <p>Where applicable law requires a legal basis, we rely on providing the service you request, our legitimate interests in operating and protecting the service, compliance with legal obligations, or your consent where required. You can withdraw permission for optional notifications in your device settings.</p>
            <h4>Anonymous sharing and your audience</h4>
            <p>Prayer requests and encouragement are presented anonymously to other members. Community prayers can be shown to other app users. Group prayers are shared with the relevant group. Private entries and private updates are associated with your account for your own use. Your content remains associated with an internal account identifier for delivery, history, safety, and deletion.</p>
            <p>Choose what you share carefully. Leave out names, contact details, and identifying information about yourself or others. People who can see shared content may save or share a copy.</p>
            <h4>Service providers and content moderation</h4>
            <p>We use service providers to operate the app. Supabase provides authentication, database storage, and server functions. Expo and Apple provide push-notification delivery. RevenueCat and Apple help process purchase records and subscription access. Submitted prayers, updates, and encouragement may be sent to OpenAI for automated safety moderation. Moderating a reply may include the prayer it responds to. Content may also appear in operational or moderation logs.</p>
            <p>These providers process information needed for their functions, subject to their terms and applicable data-protection arrangements. Their privacy information is available below.</p>
            <ul className="provider-links">
              <li><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase privacy policy ↗</a></li>
              <li><a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">Expo privacy policy ↗</a></li>
              <li><a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer">RevenueCat privacy policy ↗</a></li>
              <li><a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">OpenAI privacy policy ↗</a></li>
              <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple privacy policy ↗</a></li>
            </ul>
            <p>We may also disclose information when required by law, to respond to valid legal requests, to protect people or the service, or as part of a business transfer subject to applicable privacy protections.</p>
            <h4>Website hosting and local storage</h4>
            <p>This website uses Vercel for hosting. Vercel may process request information, including IP addresses and technical logs, to deliver and protect the website. This website has no analytics or advertising integrations. The mobile app uses local storage for sessions, remembered-device preferences, cached content, and app settings. External links open services governed by their own policies.</p>
            <p><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel privacy policy ↗</a></p>
            <h4>Retention, deletion, and security</h4>
            <p>We retain account information and content as needed to provide the service, resolve support issues, protect the service, and meet legal obligations. You can request account deletion in the app from Me → Settings → Delete account. Email accounts require an emailed confirmation code. The deletion flow removes your account and associated prayers and notes. Some records may remain temporarily in backups or provider logs, or where retention is required for legal, security, or transaction purposes.</p>
            <p>We use access controls and protected connections to safeguard information. The security of any internet service depends on several factors, including your device and account credentials. Providers may process information in countries other than your own, under their applicable transfer and security arrangements.</p>
            <h4>Your choices and privacy rights</h4>
            <p>You can change notification permissions, update your account email, edit or delete supported personal entries, and delete your account in the app. Depending on where you live, you may also have rights to request access, correction, a copy, deletion, restriction, or objection to processing of your personal information, withdraw consent, or complain to your local data-protection authority.</p>
            <p>To make a request or get help with deletion, contact <PrivacyContact />. We may ask you to verify your control of the account before acting on a request. Include only the information needed to identify your request.</p>
            <h4>Children and family privacy</h4>
            <p>Parents and guardians who believe a child has shared personal information without the consent required by applicable law can contact us to request review and removal. Please avoid posting identifying information about children in prayers or notes.</p>
            <h4>Changes to this policy</h4>
            <p>We will update this page and its revision date when our practices change. Where required, we will provide additional notice or obtain consent for material changes.</p>
          </div>
        </details>
        <details id="terms" className="legal-item">
          <summary><span><h3>Terms & community guidelines</h3><span className="legal-description">Sharing this space with care</span></span><span className="expand-icon" aria-hidden="true" /></summary>
          <div className="legal-body">
            <p className="updated">Last updated {site.updated}</p>
            <p>These terms govern your use of Saint Central’s community features and this website. By using them, you agree to these terms. Apple’s Standard End User License Agreement governs the license for the iOS app. Contact the Saint Central team at <a href={supportLink("Saint Central terms question") ?? "#support"}>{site.supportEmail ?? "Support"}</a>.</p>
            <h4>Using the service</h4>
            <p>Use Saint Central lawfully and respectfully. Keep your login credentials secure and provide accurate account information. If you need a parent or guardian’s permission under the laws where you live, obtain that permission before using the service.</p>
            <h4>Care for the community</h4>
            <p>Share prayers and encouragement in good faith. Harassment, hate, threats, exploitation, sexual content involving minors, spam, scams, impersonation, and encouragement of self-harm or violence are prohibited. Respect anonymity and avoid sharing identifying or private information about anyone else. Only submit content you have the right to share.</p>
            <p>We use automated moderation and may review, restrict, or remove content and suspend access when needed to enforce these terms, protect users, or comply with law. To report a concern, email support with enough context to locate the content.</p>
            <h4>Your content</h4>
            <p>You retain your rights in the content you submit. You give us permission to host, store, process, moderate, and display it as needed to provide the features and sharing audience you choose. You are responsible for your submissions. Removing content or deleting your account ends this permission as the content is removed, subject to the retention described in the privacy policy and copies already saved by others.</p>
            <h4>Purchases and subscriptions</h4>
            <p>Optional purchases and Saint Central+ subscriptions are offered through the app. The price, billing period, included access, and any trial terms are shown before purchase. Subscriptions renew automatically unless canceled through your Apple account. Manage or cancel subscriptions in iPhone Settings → your name → Subscriptions. Use Restore purchases in the app’s Store to check eligible purchases.</p>
            <p>Deleting the app or your Saint Central account leaves your Apple subscription active until you cancel it through Apple. Apple administers App Store billing and refund requests, subject to its terms and applicable consumer law.</p>
            <p><a href="https://support.apple.com/en-us/118428" target="_blank" rel="noopener noreferrer">Apple subscription help ↗</a><br /><a href="https://support.apple.com/en-us/118223" target="_blank" rel="noopener noreferrer">Apple refund help ↗</a></p>
            <h4>Prayer, support, and service availability</h4>
            <p>Saint Central offers spiritual reflection and community encouragement. For medical, mental-health, or other professional advice, contact a qualified professional. If someone is in immediate danger, contact local emergency services. Community content reflects its author’s views.</p>
            <p>Features and content may change as the service develops. Availability and accuracy can vary. Warranties, liability, termination, and governing-law provisions for the app are covered by Apple’s Standard EULA, subject to your mandatory consumer rights.</p>
            <h4>Changes and contact</h4>
            <p>We may update these terms and will publish the revised version and date here. Material changes will be communicated where required by law. You can stop using the service and request account deletion at any time.</p>
          </div>
        </details>
        <details id="eula" className="legal-item">
          <summary><span><h3>End user license agreement</h3><span className="legal-description">Apple’s standard agreement</span></span><span className="expand-icon" aria-hidden="true" /></summary>
          <div className="legal-body">
            <p>The Saint Central iOS app is licensed under Apple’s Standard Licensed Application End User License Agreement. Read the full agreement on Apple’s website.</p>
            <a className="text-link" href={site.appleEula} target="_blank" rel="noopener noreferrer">Read Apple’s standard EULA <span aria-hidden="true">↗</span></a>
          </div>
        </details>
      </div>
    </section>
  );
}
