import LazyLoad from 'react-lazy-load';

import Head from 'next/head'
import Link from 'next/link'
import ImageLoader from './ImageLoader'

import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css';

const name = 'Austin McCalley'
export const siteTitle = 'Austin McCalley'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Austin McCalley -- Hardworking and motivated computer science student with proven leadership and organizational skills. Passionate about development, coding with modern languages."
        />
        <meta
          property="og:image"
          content="https://quedev.xyz/images/profile.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <LazyLoad debounce={false}>
              <ImageLoader
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </LazyLoad>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
