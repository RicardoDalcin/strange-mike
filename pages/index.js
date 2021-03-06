import Head from 'next/head';

import { AiFillInstagram } from 'react-icons/ai';
import { BsSpotify, BsYoutube, BsInstagram } from 'react-icons/bs';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strange Mike</title>
        <meta
          name="description"
          content="Strange Mike's official page for music and education"
        />
        <meta
          name="keywords"
          content="Strange, Mike, Strange Mike, Music, Remakes, Música"
        />
        <meta name="author" content="Strange Mike" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&family=Quicksand:wght@500&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          em breve
          <div className={styles.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </h1>

        <ul className={styles.socialmedia}>
          <li>
            <a
              title="Instagram"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/strangemikesounds/"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a
              title="Spotify"
              rel="noopener noreferrer"
              target="_blank"
              href="https://open.spotify.com/artist/5eX0epLy551uFsC45QUtnQ?si=egy3D-QKQk65nMJW8qd8Jg"
            >
              <BsSpotify />
            </a>
          </li>
          <li>
            <a
              title="YouTube"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com/c/StrangeMike"
            >
              <BsYoutube />
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
