/**
 * @copyright 2024 DevFraga
 * @license Apache-2.0
 */

/***********
 * IMPORTS *
 ***********/
import { PrimaryButton } from './Button'

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'Sobre',
    href: '#about'
  },
  {
    label: 'Projetos',
    href: '#work'
  },
  {
    label: 'Entre em Contato',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/l-fraga2811'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/devfraga'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/lcf_cs'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_lfraga/'
  }
];


const Footer = () => {
  return (
    <footer className="section">

      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">

            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Vamos trabalhar!
            </h2>

            <PrimaryButton
              label="Envie-me um e-mail"
              href="mailto:lucasbelter2805@gmail.com"
              icon="chevron_right"
              classes="reveal-up"
            />

          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>

              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>

                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up "
                    >
                      {label}
                    </a>
                  </li>
                ))}

              </ul>
            </div>

            <div>

              <p className="reveal-up">Redes Sociais</p>

              <ul>

                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up "
                    >
                      {label}
                    </a>

                  </li>
                ))}

              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8 reveal-up">
          <a
            href=""
            className="reveal-up">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </a>
          <p className="text-sm text-zinc-500 reveal-up">
            &copy; {new Date().getFullYear() + " "}
            <span 
            className="text-zinc-200"
            >
              DevFraga. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer