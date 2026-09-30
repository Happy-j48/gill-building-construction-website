import Button from './Button';

const constructionVideo = 'https://github.com/balena-io-examples/coral-streaming-object-detector/raw/refs/heads/master/edge-logic/video/construction.mp4';

export default function VideoShowcase({ compact = false }) {
  return (
    <section className={`video-showcase ${compact ? 'video-showcase--compact' : ''}`}>
      <div className="video-showcase-media">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85"
          aria-label="Construction site video"
        >
          <source src={constructionVideo} type="video/mp4" />
        </video>
        <div className="video-showcase-overlay" />
        <div className="video-play-badge" aria-hidden="true">
          <span className="video-play-icon">▶</span>
          <span>PROJECT IN MOTION</span>
        </div>
      </div>
      <div className="video-showcase-content">
        <span className="eyebrow">Built In Motion</span>
        <h2>See construction come to life.</h2>
        <p>
          A professional construction website should feel active, visual and confident — not like a static brochure. This video section brings movement into the experience while keeping the focus on the work.
        </p>
        <div className="video-showcase-actions">
          <Button to="/projects" variant="primary">Explore Projects</Button>
          <Button to="/contact" variant="outline-light">Start a Conversation</Button>
        </div>
      </div>
    </section>
  );
}
