import { scriptPlan, type Segment } from "../data/script";

const totalMinutes = (seconds: number) => (seconds / 60).toFixed(1);
const formatDuration = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins} मिनट ${secs > 0 ? `${secs} सेकंड` : ""}`.trim();
};

type SegmentCardProps = {
  segment: Segment;
  cumulativeSeconds: number;
};

const SegmentCard = ({ segment, cumulativeSeconds }: SegmentCardProps) => {
  const startMinute = (cumulativeSeconds / 60).toFixed(1);
  const endMinute = ((cumulativeSeconds + segment.durationSeconds) / 60).toFixed(1);

  return (
    <article className="segment-card">
      <header className="segment-header">
        <div className="segment-meta">
          <span className="segment-range">
            {startMinute} → {endMinute} मिनट
          </span>
          <span className="segment-duration">{formatDuration(segment.durationSeconds)}</span>
        </div>
        <h2>{segment.title}</h2>
      </header>
      <p className="segment-narrative">{segment.narrative}</p>
      <div className="segment-columns">
        <div>
          <h3>क्लोज़-अप शॉट्स / विज़ुअल्स</h3>
          <ul>
            {segment.visuals.map((visual) => (
              <li key={visual}>{visual}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>मुख्य बिंदु</h3>
          <ul>
            {segment.keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export const Timeline = () => {
  let cumulativeSeconds = scriptPlan.hook.durationSeconds;

  return (
    <section>
      <div className="timeline-meta">
        <span>कुल अवधि: {totalMinutes(scriptPlan.totalDurationSeconds)} मिनट</span>
        <span>10 मिनट के स्लॉट के लिए आदर्श स्क्रिप्ट</span>
      </div>

      <SegmentCard segment={scriptPlan.hook} cumulativeSeconds={0} />
      {scriptPlan.segments.map((segment) => {
        const card = (
          <SegmentCard
            key={segment.id}
            segment={segment}
            cumulativeSeconds={cumulativeSeconds}
          />
        );
        cumulativeSeconds += segment.durationSeconds;
        return card;
      })}
      <SegmentCard segment={scriptPlan.outro} cumulativeSeconds={cumulativeSeconds} />
    </section>
  );
};
