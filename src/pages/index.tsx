import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import {
  FaVideo,
  FaClock,
  FaDownload,
  FaSpotify,
  FaYoutube,
  FaTiktok,
  FaArrowDown,
  FaInstagram,
} from 'react-icons/fa';

import classNames from 'classnames';

import { PlayerProps } from '@vime/react/dist/types/components/Player';
import { YoutubeProps } from '@vime/react/dist/types/components/Youtube';
import { DefaultUiProps } from '@vime/react/dist/types/components/DefaultUi';

import { animated, useSpring } from '@react-spring/web';
import { Badge } from '../components/Badge';
import { Social } from '../components/Social';

import { vimeImport } from '../utils/vimeImport';

import aboutImage from '../../public/strange-mike.png';

import '@vime/core/themes/default.css';
import { CirclePattern } from '../components/CirclePattern';
import { SocialDesktop } from '../components/SocialDesktop';
import { Embeds } from '../components/Embeds';
import ScrollTransition from '../components/ScrollTransition';

const Player = vimeImport<PlayerProps>('Player');
const Youtube = vimeImport<YoutubeProps>('Youtube');
const DefaultUi = vimeImport<DefaultUiProps>('DefaultUi');

const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), {
  ssr: false,
});

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
});

const MOBILE_CONTAINER_WIDTH = '330px';
const TABLET_CONTAINER_WIDTH = '500px';

const TIKTOK_LINK = 'https://www.tiktok.com/@strangemikesounds';
const YOUTUBE_LINK = 'https://www.youtube.com/c/StrangeMike';
const INSTAGRAM_LINK = 'https://www.instagram.com/strangemikesounds';
const SPOTIFY_LINK = 'https://open.spotify.com/artist/5eX0epLy551uFsC45QUtnQ';
const COURSE_LINK = 'https://sun.eduzz.com/1669653';

export default function Home() {
  const fadeInAndRotate = useSpring({
    from: {
      opacity: 0,
      transform: 'rotate(35deg)',
    },
    to: {
      opacity: 1,
      transform: 'rotate(45deg)',
    },
    delay: 500,
  });

  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });

  const useFadeInAndSlide = (delay: number) =>
    useSpring({
      to: { opacity: 1, transform: 'translateY(0)' },
      from: { opacity: 0, transform: 'translateY(-15px)' },
      delay,
    });

  const fadeInAndSlide1 = useFadeInAndSlide(300);
  const fadeInAndSlide2 = useFadeInAndSlide(400);
  const fadeInAndSlide3 = useFadeInAndSlide(500);
  const fadeInAndSlide4 = useFadeInAndSlide(600);

  return (
    <>
      <Head>
        <title>Strange Mike</title>
        <meta
          name="description"
          content="Remake masterclass por Strange Mike"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Header />

        <article
          className={classNames(
            'mx-auto flex flex-col gap-6',
            `max-w-[330px]`,
            `md:max-w-[500px]`,
            `xl:min-h-[calc(100vh)] xl:w-[90%] xl:max-w-[1650px] xl:items-center xl:pt-[80px]`,
          )}
        >
          <div
            className={classNames(
              'jusitfy-center flex flex-col items-center gap-8',
              'xl:w-full xl:flex-1 xl:flex-row xl:justify-between xl:py-8',
            )}
          >
            <div
              className={classNames(
                'relative flex flex-col gap-5',
                'xl:max-w-[700px] xl:gap-8 xl:pb-6',
              )}
            >
              <animated.div
                id="assets"
                className={classNames(
                  'absolute left-[-30px] bottom-[-15px] h-[220px] w-[220px] overflow-hidden',
                  'xl:left-[-50px] xl:bottom-[-50px] xl:h-[350px] xl:w-[350px]',
                )}
                style={fadeInAndRotate}
              />

              <div className={classNames('flex flex-col gap-1', 'xl:gap-3')}>
                <animated.p
                  className={classNames(
                    'font-text text-sm text-gray-200',
                    'xl:text-xl',
                  )}
                  style={fadeInAndSlide1}
                >
                  Remake masterclass
                </animated.p>

                <animated.h1
                  className={classNames(
                    'text-3xl font-extrabold',
                    'xl:text-6xl xl:leading-[1.15]',
                  )}
                  style={fadeInAndSlide2}
                >
                  Leve suas produções para o{' '}
                  <strong className="font-extrabold text-orange-400">
                    próximo nível.
                  </strong>
                </animated.h1>
              </div>

              <animated.p
                className={classNames(
                  'font-text text-sm text-gray-50',
                  'xl:text-[22px] xl:leading-tight',
                )}
                style={fadeInAndSlide3}
              >
                Aprenda a fazer remakes das suas músicas preferidas passo a
                passo recriando o hit “Move Your Body” do Öwnboss e Sevek do
                início ao fim.
              </animated.p>

              <animated.div
                className={classNames(
                  'flex items-center justify-between',
                  'md:gap-6',
                  'xl:justify-start',
                )}
                style={fadeInAndSlide4}
              >
                <Badge icon={FaVideo} title="10 aulas" />

                <Badge icon={FaClock} title="+4 horas" />

                <Badge icon={FaDownload} title="Projeto e samples" />
              </animated.div>
            </div>

            <animated.div className="relative w-full xl:w-[50%]" style={fadeIn}>
              <div className="absolute top-0 h-full w-full rotate-2 rounded-3xl bg-slate-800" />
              <Player>
                <Youtube videoId="Dvv3FMVjpA0" />
                <DefaultUi />
              </Player>
            </animated.div>
          </div>

          <animated.div
            className={classNames(
              'flex items-center justify-center',
              'xl:mb-8',
            )}
            style={fadeIn}
          >
            <a
              className={classNames(
                'flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 text-base text-gray-900 transition-colors',
                'xl:text-2xl',
              )}
              href={COURSE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Aprenda agora
            </a>
          </animated.div>

          <div
            className={classNames(
              'mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-800 text-slate-800',
              'xl:mb-12',
            )}
          >
            <FaArrowDown />
          </div>
        </article>

        <article
          id="about"
          className={classNames(
            'mt-8 flex flex-col gap-8',
            'xl:mx-auto xl:w-[93%] 2xl:flex-row',
          )}
        >
          <div
            className={classNames(
              'flex items-center justify-center',
              'xl:w-full 2xl:w-[67%]',
            )}
          >
            <div className="flex w-full items-center">
              <ScrollTransition
                once
                from={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                }}
                to={{
                  opacity: 1,
                  transform: 'translateY(0)',
                }}
                delay={200}
              >
                {props => (
                  <animated.span style={props}>
                    <Image
                      src={aboutImage}
                      alt="Strange Mike"
                      className="z-10 hidden xl:block"
                    />
                  </animated.span>
                )}
              </ScrollTransition>

              <div
                className={classNames(
                  'relative flex w-full flex-col justify-center gap-6 overflow-hidden rounded-[32px] bg-black/30 py-6',
                  'xl:ml-[-336px] xl:h-[540px] xl:items-start  xl:pl-[364px] xl:pr-12',
                )}
              >
                <CirclePattern
                  width={320}
                  height={350}
                  className="absolute left-full z-[-1] hidden -translate-x-1/2 -translate-y-1/4 transform xl:block"
                  color="#191B24"
                />

                <CirclePattern
                  width={320}
                  height={350}
                  className="absolute right-full top-full z-[-1] hidden translate-x-1/2 -translate-y-1/4 transform xl:block"
                  color="#191B24"
                />

                <ScrollTransition
                  once
                  from={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                  }}
                  to={{
                    opacity: 1,
                    transform: 'translateY(0)',
                  }}
                  delay={200}
                >
                  {props => (
                    <animated.p
                      className="text-center text-3xl font-semibold text-orange-500"
                      style={props}
                    >
                      Quem sou eu?
                    </animated.p>
                  )}
                </ScrollTransition>

                <ScrollTransition
                  once
                  from={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                  }}
                  to={{
                    opacity: 1,
                    transform: 'translateY(0)',
                  }}
                  delay={300}
                >
                  {props => (
                    <animated.div
                      className={classNames(
                        'mx-auto flex flex-col gap-4 font-text text-sm text-white',
                        `max-w-[330px]`,
                        `md:max-w-[500px]`,
                        'xl:w-full xl:max-w-none xl:text-xl',
                      )}
                      style={props}
                    >
                      <p className="leading-snug">
                        Olá, muito prazer! Me chamo Miguel, e nos últimos anos
                        venho trabalhando no meu projeto de música eletrônica
                        “Strange Mike”. Além de ter mais de 4,5 milhões de
                        streams nas minhas músicas no Spotify, ter colaborado
                        com artistas como Selva e Hawk e ter minhas músicas
                        tocadas por grandes nomes da cena como Alok e Bruno Be,
                        também tenho outra paixão: ensinar.
                      </p>

                      <p className="leading-snug">
                        Com o objetivo de ajudar mais pessoas a melhorar na
                        produção criei meu canal no Youtube, que já passa de
                        mais de 100 mil visualizações nos seus diversos vídeos
                        de remakes, e neste curso pretendo destrinchar essa
                        ferramenta muito poderosa que vai te ajudar a entender
                        melhor como as suas músicas preferidas são feitas.
                      </p>
                    </animated.div>
                  )}
                </ScrollTransition>

                <ScrollTransition
                  once
                  from={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                  }}
                  to={{
                    opacity: 1,
                    transform: 'translateY(0)',
                  }}
                  delay={300}
                >
                  {props => (
                    <animated.div
                      className="hidden items-center gap-6 xl:flex"
                      style={props}
                    >
                      <SocialDesktop icon={FaSpotify} href={SPOTIFY_LINK} />

                      <SocialDesktop icon={FaYoutube} href={YOUTUBE_LINK} />

                      <SocialDesktop icon={FaInstagram} href={INSTAGRAM_LINK} />

                      <SocialDesktop icon={FaTiktok} href={TIKTOK_LINK} />
                    </animated.div>
                  )}
                </ScrollTransition>
              </div>
            </div>
          </div>

          <Embeds />

          <ScrollTransition
            once
            from={{
              opacity: 0,
            }}
            to={{
              opacity: 1,
            }}
            delay={200}
          >
            {props => (
              <animated.div
                className={classNames(
                  'mx-auto flex w-full flex-col gap-4',
                  `max-w-[330px]`,
                  `md:max-w-[500px]`,
                  '2xl:hidden',
                )}
                style={props}
              >
                <Social
                  icon={FaSpotify}
                  title="Perfil no Spotify"
                  color="#00D75D"
                  href={`${SPOTIFY_LINK}?si=wvQyNJLpTMWcbSqg8LCCFw`}
                />

                <Social
                  icon={FaYoutube}
                  title="Canal do Youtube"
                  color="#FF4747"
                  href={YOUTUBE_LINK}
                />

                <Social
                  icon={FaTiktok}
                  title="Perfil no TikTok"
                  color="#69C9D0"
                  href={TIKTOK_LINK}
                />
              </animated.div>
            )}
          </ScrollTransition>
        </article>

        <article
          id="contact"
          className={classNames(
            'my-8 mx-auto flex w-full flex-col justify-center gap-8',
            `max-w-[330px]`,
            `md:max-w-[500px]`,
            'xl:mt-[64px] xl:w-[90%] xl:max-w-[1440px] xl:pb-16 2xl:mt-[200px]',
          )}
        >
          <ScrollTransition
            once
            from={{
              opacity: 0,
              transform: 'translateY(20px)',
            }}
            to={{
              opacity: 1,
              transform: 'translateY(0)',
            }}
            delay={200}
          >
            {props => (
              <animated.div
                className={classNames(
                  'flex flex-col justify-end gap-3',
                  'xl:flex-row xl:items-end xl:justify-between',
                )}
                style={props}
              >
                <div className="flex flex-col gap-2">
                  <p
                    className={classNames(
                      'text-2xl font-medium text-white',
                      'xl:text-4xl',
                    )}
                  >
                    Ficou com alguma dúvida?
                  </p>

                  <p
                    className={classNames(
                      'text-xl font-medium text-white',
                      'xl:text-2xl',
                    )}
                  >
                    Faça sua pergunta no canal do Discord:
                  </p>
                </div>

                <div
                  className={classNames(
                    'hidden flex-col text-center text-2xl',
                    'xl:flex',
                  )}
                >
                  <p className="text-white">Ou, se preferir, mande para</p>
                  <p className="text-orange-500">contato@strangemike.com</p>
                </div>
              </animated.div>
            )}
          </ScrollTransition>

          <div>
            <WidgetBot
              server="798690805464301588"
              channel="798702383919530004"
              width="100%"
              className="h-[300px] border-b-4 border-orange-500 xl:h-[700px]"
            />
          </div>

          <div className="flex flex-col text-center text-base xl:hidden">
            <p className="text-white">Ou, se preferir, mande para</p>
            <p className="text-orange-500">contato@strangemike.com</p>
          </div>
        </article>
      </div>
    </>
  );
}
