export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Alex Morgan home">
          AM<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:hello@alexmorgan.design">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal">Independent designer / developer</p>
          <h1 className="reveal delay-one">
            I make digital<br />
            <em>things</em> feel human.
          </h1>
          <p className="hero-intro reveal delay-two">
            Alex Morgan is a multidisciplinary creative building thoughtful identities, websites, and products for people with something worth saying.
          </p>
          <a className="text-link reveal delay-three" href="#work">
            See selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-art" aria-label="Abstract composition in coral, cream, and blue" role="img">
          <div className="art-sun" />
          <div className="art-arch" />
          <div className="art-line art-line-one" />
          <div className="art-line art-line-two" />
          <span className="art-caption">Form follows feeling</span>
        </div>
      </section>

      <section className="selected-work" id="work">
        <div className="section-heading">
          <p className="eyebrow">01 / Selected work</p>
          <p className="section-note">A few recent collaborations<br />and personal experiments.</p>
        </div>
        <div className="project-list">
          <a className="project project-featured" href="#project-orbit">
            <div className="project-visual orbit-visual">
              <div className="orbit-ring ring-large" />
              <div className="orbit-ring ring-small" />
              <div className="orbit-dot" />
              <p className="visual-label">ORBIT / 2024</p>
            </div>
            <div className="project-meta">
              <div>
                <h2>Orbit House</h2>
                <p>Brand identity, digital experience</p>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
          </a>
          <div className="project-pair">
            <a className="project" href="#project-moss">
              <div className="project-visual moss-visual">
                <div className="moss-shape" />
                <p className="visual-label">MOSS / 2023</p>
              </div>
              <div className="project-meta">
                <div>
                  <h2>Moss Journal</h2>
                  <p>Editorial platform, art direction</p>
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
            <a className="project" href="#project-sunday">
              <div className="project-visual sunday-visual">
                <span className="sunday-type">Sunday<br />service</span>
                <p className="visual-label">SUNDAY / 2023</p>
              </div>
              <div className="project-meta">
                <div>
                  <h2>Sunday Service</h2>
                  <p>Packaging, campaign, web</p>
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-mark" aria-hidden="true">✳</div>
        <div className="about-content">
          <p className="eyebrow">02 / A little about me</p>
          <h2>Good work lives<br /><em>between</em> worlds.</h2>
          <p className="about-copy">I work across strategy, design, and code to turn big, blurry ideas into clear and memorable experiences. My practice is curious, collaborative, and always looking for the detail that makes something click.</p>
          <a className="text-link" href="mailto:hello@alexmorgan.design">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">Have a good one.</p>
          <p className="footer-title">Let&apos;s make<br /><em>something</em> matter.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@alexmorgan.design">Email <span aria-hidden="true">↗</span></a>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
          <p>© 2024 Alex Morgan</p>
        </div>
      </footer>
    </main>
  );
}
