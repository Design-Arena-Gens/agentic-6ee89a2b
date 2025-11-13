import { Timeline } from "./components/Timeline";
import { scriptPlan } from "./data/script";

const secondsToClock = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <p className="tagline">YouTube वीडियो ब्लूप्रिंट · हिंदी नैरेशन</p>
        <h1>बिग बैंग से पहले क्या था?</h1>
        <p className="intro">
          यह 10 मिनट की वीडियो योजना आपके दर्शकों को बिग बैंग से पहले की संभावनाओं पर
          रोमांचक यात्रा कराएगी। नीचे आपको हुक, मुख्य खंडों और आउट्रो सहित पूरा नैरेटिव,
          विज़ुअल गाइड और समय विभाजन मिलेगा।
        </p>
        <div className="duration-chip">
          कुल अवधि · {secondsToClock(scriptPlan.totalDurationSeconds)} मिनट
        </div>
      </header>

      <section className="voiceover-section">
        <h2>वॉइसओवर स्क्रिप्ट (पूरा नैरेटिव)</h2>
        <p>
          आप इस स्क्रिप्ट को सीधे टेलीप्रॉम्प्टर में उपयोग कर सकते हैं या अपनी शैली के अनुसार
          मामूली बदलाव कर सकते हैं। नैरेशन गति ~125 शब्द प्रति मिनट के हिसाब से तैयार किया गया है।
        </p>
        <div className="voiceover-grid">
          {[scriptPlan.hook, ...scriptPlan.segments, scriptPlan.outro].map((segment) => (
            <article key={segment.id} className="voiceover-card">
              <header>
                <h3>{segment.title}</h3>
                <span className="time">{secondsToClock(segment.durationSeconds)}</span>
              </header>
              <p>{segment.narrative}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2>सीन-दर-सीन प्लान</h2>
        <Timeline />
      </section>

      <section className="production-notes">
        <h2>प्रोडक्शन नोट्स</h2>
        <ul>
          <li>
            <strong>ध्वनि डिजाइन:</strong> आरंभ में रहस्यमय, मध्य में उर्जावान और अंत में प्रेरक
            बैकग्राउंड स्कोर रखें। ब्रह्मांडीय एंबिएंस साउंड का मिश्रण करें।
          </li>
          <li>
            <strong>ग्राफिक्स:</strong> 3D एनिमेशन या मोशन ग्राफिक टेम्पलेट्स के लिए ब्लेंडर या
            आफ्टर इफेक्ट्स का उपयोग करें। बबल यूनिवर्स और क्वांटम फोम दृश्यों पर विशेष ध्यान दें।
          </li>
          <li>
            <strong>भाषा शैली:</strong> सरल लेकिन वैज्ञानिक शब्दावली का सम्मान रखें। प्रत्येक जटिल
            अवधारणा के साथ रोजमर्रा के उदाहरण जोड़ें।
          </li>
          <li>
            <strong>CTA:</strong> आउट्रो में दर्शकों को प्रश्न पूछने और सब्सक्राइब करने के लिए प्रेरित
            करें। स्क्रीन पर टेक्स्ट ओवरले दिखाएँ।
          </li>
        </ul>
      </section>
    </main>
  );
}
