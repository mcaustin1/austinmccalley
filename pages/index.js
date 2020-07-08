import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd}`}>
        <div className={utilStyles.center}>
          <p>
            Hardworking and motivated computer science student with proven
            leadership and organizational skills. Passionate about development,
            coding with modern languages.
          </p>
        </div>
        <div className={utilStyles.contact}>
          <small className={utilStyles.lightText}>
            <a
              className={utilStyles.contactLink}
              href="mailto:austin@austinmccalley.com"
            >
              E-Mail
            </a>
            <a
              className={utilStyles.contactLink}
              href="https://github.com/austinmccalley"
            >
              GitHub
            </a>
            <a
              className={utilStyles.contactLink}
              href="https://www.linkedin.com/in/austin-mccalley/"
            >
              LinkedIn
            </a>
          </small>
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects & Experience</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="https://www.npmjs.com/package/stockfinder">
              <a target="_blank">StockFinder</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              A light weight query tool for the IEX Cloud stock database. <br />
              Key Features:
              <ul className={utilStyles.smallList}>
                <li className={utilStyles.smallListItem}>TypeScript</li>
                <li className={utilStyles.smallListItem}>Node Fetch</li>
              </ul>
            </small>
          </li>

          <li className={utilStyles.listItem}>
            <Link href="https://discord.gg/devcord">
              <a target="_blank">Devcord &mdash; Admin</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <small className={utilStyles.bold}>Sept. 2019 - Present </small>
              <br />A discord community that unites web developers
            </small>
          </li>

          <li className={utilStyles.listItem}>
            <Link href="https://htcolab.org/">
              <a target="_blank">
                Diabetes Connect-A-Thon &mdash; Volunteer Software Engineer
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <small className={utilStyles.bold}>Mar. 2018 - Jun. 2018 </small>
              <br />
              A volunteer software engineer working with modern websites and
              mobile applications. In partnership with the Digital Health
              Collaborative.
              <br />
              Stack Used:
              <ul className={utilStyles.smallList}>
                <li className={utilStyles.smallListItem}>TypeScript</li>
                <li className={utilStyles.smallListItem}>KoaJS</li>
                <li className={utilStyles.smallListItem}>MongoDB</li>
                <li className={utilStyles.smallListItem}>NativeScript</li>
                <li className={utilStyles.smallListItem}>Flutter</li>
              </ul>
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
