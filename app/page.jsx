import "./extras.css";
import Nav from "@/components/Nav";
import Preview from "@/components/Preview";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import HeroShowcase from "@/components/HeroShowcase";
import ContactForm from "@/components/ContactForm";
import { site, demos, services, plans, reasons, steps } from "@/data/site";

const Browser = ({ d, className = "" }) => (
  <div className={`browser ${className}`}>
    <div className="bar"><i /><i /><i /><b>{d.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</b></div>
    <Preview url={d.url} image={d.image} title={d.title} label={d.industry} />
  </div>
);
const Phone = ({ d, className = "" }) => (
  <div className={`phone ${className}`}>
    <Preview url={d.url} image={d.mobileImage} title={`${d.title} mobile`} baseW={390} baseH={800} label={d.industry} />
  </div>
);

export default function Home() {
  const c = site.contact;
  return (
    <>
      <a href="#work" className="skip">Skip to work</a>
      <Nav />
      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">Web Design & Development Studio</p>
            <h1>Your Business Deserves More Than Just an <em>Instagram Page.</em></h1>
            <p className="lead">I design beautiful, strategic websites that help small businesses build credibility, attract customers and turn visitors into bookings.</p>
            <div className="cta">
              <a className="btn" href="#work">Explore My Work</a>
              <a className="btn btn-ghost" href="#contact">Let&apos;s Build Your Website</a>
            </div>
            <p className="cred">Websites crafted for beauty, cleaning &amp; real estate businesses.</p>
          </div>
          <HeroShowcase />
        </section>

        <section id="about" className="section wrap">
          <div className="about-solo">
            <p className="eyebrow">About</p>
            <h2>Thoughtful design, <em>practical</em> functionality.</h2>
            <p>Hi, I&apos;m Simran. I help businesses establish a professional online presence through beautifully designed, easy-to-use websites.</p>
            <p>From beauty studios to service-based businesses, I create websites that reflect your brand, showcase your services and make it easier for customers to take the next step.</p>
            <p>No cookie-cutter experiences. Just thoughtful design built around your business.</p>
          </div>
        </section>

        <section id="work" className="section alt">
          <div className="wrap">
            <p className="eyebrow">Selected Work</p>
            <h2>Websites for <em>real businesses.</em></h2>
            <Portfolio />
          </div>
        </section>

        <section id="demos" className="section wrap">
          <p className="eyebrow">Live Demonstrations</p>
          <h2>Don&apos;t Just Take My Word For It. <em>Explore The Websites.</em></h2>
          <div className="demos">
            {demos.map((d) => (
              <article key={d.id} className="card demo">
                <div className="demo-art">
                  <Browser d={d} />
                  <Phone d={d} className="demo-phone" />
                </div>
                <div className="demo-body">
                  <p className="eyebrow">{d.industry}</p>
                  <h3>{d.title}</h3>
                  <p className="muted">{d.description}</p>
                  <a className="btn" href={d.url} target="_blank" rel="noopener noreferrer">Explore Live Website ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="wrap">
            <p className="eyebrow">Services</p>
            <h2>Everything your site <em>needs.</em></h2>
            <div className="grid3">
              {services.map((s, i) => (
                <article key={s.title} className="card svc">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p className="muted">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <section id="plans" className="section wrap">
          <p className="eyebrow">Website Plans</p>
          <h2>Choose the plan that <em>fits your business.</em></h2>
          <div className="plans">
            {plans.map((p) => (
              <article key={p.id} className={p.featured ? "card plan feat" : "card plan"}>
                {p.badge && <span className="badge">{p.badge}</span>}
                <h3>{p.name}</h3>
                <p className="muted">{p.tagline}</p>
                <p className="price">{p.price}</p>
                <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <a className="btn" href="#contact">Enquire about this plan</a>
              </article>
            ))}
          </div>
          <p className="plan-note">Every project is scoped to your business. Send an enquiry for a tailored quote.</p>
        </section>

        <section className="section alt why-wrap">
          <div className="wrap why">
            <div>
              <p className="eyebrow">Why Work With Me</p>
              <h2>Design that feels <em>like you.</em></h2>
            </div>
            <ul className="reasons">{reasons.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
        </section>

        <section id="process" className="section wrap">
          <p className="eyebrow">My Process</p>
          <h2>Four simple <em>steps.</em></h2>
          <ol className="steps">
            {steps.map((p) => (
              <li key={p.n} className="card"><span className="big">{p.n}</span><h3>{p.title}</h3><p className="muted">{p.text}</p></li>
            ))}
          </ol>
        </section>

        <section className="final">
          <div className="wrap">
            <h2>Your Next Customer Could Be Looking For You Right Now.</h2>
            <p>Let&apos;s give them a website worth finding.</p>
            <div className="cta c">
              <a className="btn btn-light" href="#contact">Let&apos;s Build Something Beautiful.</a>
              <a className="btn btn-outline" href={c.instagram} target="_blank" rel="noopener noreferrer">DM on Instagram</a>
            </div>
          </div>
        </section>

        <section id="contact" className="section wrap contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s talk about <em>your website.</em></h2>
            <p className="muted">Tell me a little about your business and I&apos;ll get back to you personally.</p>
            <ul className="direct">
              <li><a href={c.instagram} target="_blank" rel="noopener noreferrer">Instagram {c.instagramLabel}</a></li>
            </ul>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <div><strong className="logo">Simran <em>B.</em></strong><p>Web Design &amp; Development</p><p className="tag">Thoughtfully designed. Beautifully built.</p></div>
          <nav aria-label="Footer"><a href="#work">Portfolio</a><a href="#services">Services</a><a href="#contact">Contact</a><a href={c.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></nav>
        </div>
        <p className="copy">© {new Date().getFullYear()} Simran B. All rights reserved.</p>
      </footer>
    </>
  );
}
