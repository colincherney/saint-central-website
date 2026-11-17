import { site, supportLink } from "@/lib/site";

export function ContentPolicy() {
  return (
    <details id="content-policy" className="legal-item">
      <summary><span><h3>Content policy</h3><span className="legal-description">What to know before you post</span></span><span className="expand-icon" aria-hidden="true" /></summary>
      <div className="legal-body">
        <p className="updated">Last updated {site.communityUpdated}</p>
        <p>Saint Central is a space for prayer and encouragement. These community guidelines apply to shared prayer requests, paired prayer intentions, prayer updates, and encouragement notes, including content shared in groups. By posting, you agree to follow them.</p>

        <h4>Before you post</h4>
        <ul>
          <li><strong>Share with care.</strong> Keep your post connected to prayer, your prayer journey, or sincere encouragement. Share only content you have the right to share.</li>
          <li><strong>Keep it within the limit.</strong> Prayer requests, paired intentions, and prayer updates can contain up to 1,000 characters. Encouragement notes have shorter limits; follow the character limit shown in the app. Your message must contain more than spaces.</li>
          <li><strong>Use the right space.</strong> Posting requires an active account or supported guest session. You must be a member to post prayers or encouragement in a group, and you can only add updates to your own prayers.</li>
          <li><strong>Check your audience.</strong> Community prayers can be seen by other app users. Group prayers are shared with that group. Anonymous sharing does not prevent someone from recognizing details or saving a copy.</li>
        </ul>

        <h4>You can be honest about hard things</h4>
        <p>You are welcome to share grief, illness, abuse you have experienced, addiction struggles, relationship difficulties, doubt, or anger toward God. Asking for support with suicidal thoughts or urges to self-harm is allowed. Honest setbacks, unanswered prayers, gratitude, scripture, and celebrations of progress belong here too.</p>
        <p>You do not need to sound cheerful or certain in your faith. Strong emotions and occasional profanity in genuine distress are not, by themselves, reasons to reject a prayer. Describe your experience without explicit sexual detail or instructions for harming anyone.</p>

        <h4>Protect everyone’s anonymity</h4>
        <p>In prayer requests, do not name private individuals, including their first names, surnames, nicknames, or initials that could identify them. Use “my friend,” “my brother,” or “a coworker” instead. References to God, Jesus, biblical figures, saints, and public figures prayed for in good faith are allowed.</p>
        <p>Leave out phone numbers, email addresses, home addresses, social handles, and other identifying or private details. Do not expose another person’s private circumstances or try to identify the author of an anonymous prayer. An encouragement note may end with your own first name or nickname alone; leave out your surname and contact details.</p>
        <ul>
          <li><strong>A helpful prayer:</strong> “Please pray for my friend, who is going through a difficult time.”</li>
          <li><strong>A helpful reply:</strong> “I’m praying for you. You deserve care and support.”</li>
        </ul>

        <h4>Content we do not allow</h4>
        <ul>
          <li><strong>Hate or harassment.</strong> Attacks on people because of their race, religion, nationality, gender, sexuality, or other identity; bullying, mocking, shaming, or targeting another member.</li>
          <li><strong>Threats or encouragement of harm.</strong> Threats of violence; encouragement, approval, or ridicule of suicide, self-harm, abuse, or violence; and specific methods or instructions for harming yourself or others.</li>
          <li><strong>Explicit sexual content or exploitation.</strong> Sexually explicit descriptions and any sexual content involving minors. You may ask for support about abuse or personal struggles without explicit detail.</li>
          <li><strong>Spam, promotion, or scams.</strong> Advertising, fundraising solicitations, recruitment, repeated promotional messages, or unrelated content. Encouragement is not a place to recruit someone to a church, group, product, or service.</li>
          <li><strong>Privacy violations or impersonation.</strong> Doxxing, identifying private individuals, sharing someone else’s confidential information, or pretending to be someone else.</li>
        </ul>

        <h4>Reply to the person with kindness</h4>
        <p>Read the prayer before sending encouragement. Offer compassion, solidarity, prayer, or gentle, non-condemning words. Never dismiss someone’s suffering, shame them for struggling, or suggest they deserve harm. A reply is assessed in the context of the prayer it answers, so even a short message must not sound like agreement with someone’s intention to hurt themselves or another person.</p>

        <h4>If a post is blocked</h4>
        <p>Automated moderation checks submitted prayers, paired intentions, updates, and encouragement before they are shared. Content that fails a check is not posted. Review your wording, remove identifying details or prohibited content, and try again. A service error can also prevent a submission and does not necessarily mean you broke a rule.</p>
        <p>We may review or remove content and restrict or suspend access to enforce this policy and our <a href="#terms">terms of use</a>. Automated checks can make mistakes. If you believe a post was blocked incorrectly, contact support for review.</p>

        <h4>Report a concern or ask for review</h4>
        <p>Email <a href={supportLink("Saint Central content concern or review request") ?? "#support"}>{site.supportEmail ?? "Support"}</a> with where and when the content appeared, the relevant prayer or group, and a brief explanation of your concern. For your own blocked post, include the message you saw and only the text needed to explain the issue. Avoid sending unnecessary personal information about yourself or anyone else.</p>
        <p>Saint Central is not an emergency service. If you or someone else is in immediate danger, contact local emergency services. Prayer and community encouragement can accompany care from a qualified professional.</p>
        <p>Read our <a href="#privacy">privacy policy</a> for information about how submitted content is handled. We will publish changes to these guidelines here with an updated date.</p>
      </div>
    </details>
  );
}
