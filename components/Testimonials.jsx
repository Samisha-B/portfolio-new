import "@/app/testimonials.css";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section id="reviews" className="section alt">
      <div className="wrap">
        <p className="eyebrow">Kind Words</p>
        <h2>What clients <em>say.</em></h2>
        <div className="reviews">
          {testimonials.map((t) => (
            <figure key={t.id} className="card review">
              <div className="stars" role="img" aria-label={`${t.rating} out of 5 stars`}>
                <span aria-hidden="true">{"★".repeat(t.rating)}</span>
                <b>{t.rating.toFixed(1)}</b>
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>{t.attribution}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
