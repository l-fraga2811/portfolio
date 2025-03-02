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
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/codewithsadee-org'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/codewithsadee_'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codewithsadee'
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/codewithsadee'
  }
];


const Footer = () => {
  return (
    <footer className="section">

      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">

            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together!
            </h2>

            <PrimaryButton
              label="Let's work together"
              href="mailto:lucasbelter2805@gmail.com"
              icon="chevron_right"
            />

          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>

              <p className="">sitemap</p>

              <ul>

                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className=""
                    >
                      {label}
                    </a>
                  </li>
                ))}

              </ul>
            </div>

            <div>

              <p className="">Socials</p>

              <ul>

                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className=""
                    >
                      {label}
                    </a>
                  </li>
                ))}

              </ul>
            </div>

          </div>

        </div>

        <div className="">
          <a
            href=""
            className="">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </a>
          <p className="">
            &copy; {new Date().getFullYear()} <span>DevFraga. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer