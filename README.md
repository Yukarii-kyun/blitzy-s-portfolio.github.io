# EduPortfolio Pro

Academic portfolio and teaching resources for Dr. Eleanor Vance, built with plain HTML, CSS, and JavaScript.

**Live site:** https://yukarii-kyun.github.io/blitzy-s-portfolio.github.io/

Open `index.html` directly for local development or publish the repository with GitHub Pages.

## Deployment and DNS

The project is configured as a GitHub Pages project site. Keep the Pages source on
the deployed branch and use the repository URL above as the canonical route. For a
custom domain, configure the domain at the registrar before adding a `CNAME` file:

- `www` CNAME -> `Yukarii-kyun.github.io`
- Apex domain A records -> `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`

Allow DNS propagation, then enable the custom domain in the repository's Pages
settings and turn on HTTPS. Do not add a `CNAME` file until the intended domain is
known; an incorrect value routes the site to the wrong host.
