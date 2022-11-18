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

import { Badge } from '../components/Badge';
import { Social } from '../components/Social';

import { vimeImport } from '../utils/vimeImport';

import aboutImage from '../../public/strange-mike.png';

import '@vime/core/themes/default.css';
import { CirclePattern } from '../components/CirclePattern';
import { SocialDesktop } from '../components/SocialDesktop';
import { Embeds } from '../components/Embeds';

const Player = vimeImport<PlayerProps>('Player');
const Youtube = vimeImport<YoutubeProps>('Youtube');
const DefaultUi = vimeImport<DefaultUiProps>('DefaultUi');

const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), {
  ssr: false,
});

const MOBILE_CONTAINER_WIDTH = '330px';
const TABLET_CONTAINER_WIDTH = '500px';

export default function Home() {
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
        <header className="flex h-20 items-center justify-center py-6">
          <p className="flexfont-text text-2xl font-semibold uppercase text-white">
            Strange Mike
          </p>
        </header>

        <article
          className={classNames(
            'mx-auto flex flex-col gap-6',
            `max-w-[330px]`,
            `md:max-w-[500px]`,
            `2xl:min-h-[calc(100vh_-_80px)] 2xl:w-[90%] 2xl:max-w-[1650px] 2xl:items-center`,
          )}
        >
          <div
            className={classNames(
              'jusitfy-center flex flex-col items-center gap-8',
              '2xl:w-full 2xl:flex-1 2xl:flex-row 2xl:justify-between 2xl:py-8',
            )}
          >
            <div
              className={classNames(
                'relative flex flex-col gap-5',
                '2xl:max-w-[700px] 2xl:gap-8 2xl:pb-6',
              )}
            >
              <div
                id="assets"
                className={classNames(
                  'absolute left-[-30px] bottom-[-15px] h-[220px] w-[220px] overflow-hidden',
                  '2xl:left-[-50px] 2xl:bottom-[-50px] 2xl:h-[350px] 2xl:w-[350px]',
                )}
              />

              <div className={classNames('flex flex-col gap-1', '2xl:gap-3')}>
                <p
                  className={classNames(
                    'font-text text-sm text-gray-200',
                    '2xl:text-xl',
                  )}
                >
                  Remake masterclass
                </p>

                <h1
                  className={classNames(
                    'text-3xl font-extrabold',
                    '2xl:text-6xl 2xl:leading-[1.15]',
                  )}
                >
                  Leve suas produções para o{' '}
                  <strong className="font-extrabold text-orange-400">
                    próximo nível.
                  </strong>
                </h1>
              </div>

              <p
                className={classNames(
                  'font-text text-sm text-gray-50',
                  '2xl:text-[22px] 2xl:leading-tight',
                )}
              >
                Aprenda a fazer remakes das suas músicas preferidas passo a
                passo recriando o hit “Move Your Body” do Öwnboss e Sevek do
                início ao fim.
              </p>

              <div
                className={classNames(
                  'flex items-center justify-between',
                  'md:gap-6',
                  '2xl:justify-start',
                )}
              >
                <Badge icon={FaVideo} title="10 aulas" />

                <Badge icon={FaClock} title="+4 horas" />

                <Badge icon={FaDownload} title="Projeto e samples" />
              </div>
            </div>

            <div className="relative w-full 2xl:w-[50%]">
              <div className="absolute top-0 h-full w-full rotate-2 rounded-3xl bg-slate-800" />
              <Player>
                <Youtube videoId="Dvv3FMVjpA0" />
                <DefaultUi />
              </Player>
            </div>
          </div>

          <div
            className={classNames(
              'flex items-center justify-center',
              '2xl:mb-8',
            )}
          >
            <a
              className={classNames(
                'flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 text-base text-gray-900',
                '2xl:text-2xl',
              )}
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aprenda agora
            </a>
          </div>

          <div
            className={classNames(
              'mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-800 text-slate-800',
              '2xl:mb-12',
            )}
          >
            <FaArrowDown />
          </div>
        </article>

        <article
          className={classNames(
            'mt-8 flex flex-col gap-8',
            '2xl:mx-auto 2xl:w-[93%] 2xl:flex-row',
          )}
        >
          <div
            className={classNames(
              'flex items-center justify-center',
              '2xl:w-[67%]',
            )}
          >
            <div className="flex w-full items-center">
              <Image
                src={aboutImage}
                alt="Strange Mike"
                className="z-10 hidden 2xl:block"
              />

              <div
                className={classNames(
                  'relative flex w-full flex-col justify-center gap-6 overflow-hidden rounded-[32px] bg-black/30 py-6',
                  '2xl:ml-[-336px] 2xl:h-[540px] 2xl:items-start  2xl:pl-[364px] 2xl:pr-12',
                )}
              >
                <CirclePattern
                  width={320}
                  height={350}
                  className="absolute left-full z-[-1] hidden -translate-x-1/2 -translate-y-1/4 transform 2xl:block"
                  color="#191B24"
                />

                <CirclePattern
                  width={320}
                  height={350}
                  className="absolute right-full top-full z-[-1] hidden translate-x-1/2 -translate-y-1/4 transform 2xl:block"
                  color="#191B24"
                />

                <p className="text-center text-3xl font-semibold text-orange-500">
                  Quem sou eu?
                </p>

                <div
                  className={classNames(
                    'mx-auto flex flex-col gap-4 font-text text-sm text-white',
                    `max-w-[330px]`,
                    `md:max-w-[500px]`,
                    '2xl:w-full 2xl:max-w-none 2xl:text-xl',
                  )}
                >
                  <p className="leading-snug">
                    Olá, muito prazer! Me chamo Miguel, e nos últimos anos venho
                    trabalhando no meu projeto de música eletrônica “Strange
                    Mike”. Além de ter mais de 4,5 milhões de streams nas minhas
                    músicas no Spotify, ter colaborado com artistas como Selva e
                    Hawk e ter minhas músicas tocadas por grandes nomes da cena
                    como Alok e Bruno Be, também tenho outra paixão: ensinar.
                  </p>

                  <p className="leading-snug">
                    Com o objetivo de ajudar mais pessoas a melhorar na produção
                    criei meu canal no Youtube, que já passa de mais de 100 mil
                    visualizações nos seus diversos vídeos de remakes, e neste
                    curso pretendo destrinchar essa ferramenta muito poderosa
                    que vai te ajudar a entender melhor como as suas músicas
                    preferidas são feitas.
                  </p>
                </div>

                <div className="hidden items-center gap-6 2xl:flex">
                  <SocialDesktop
                    icon={FaSpotify}
                    href="https://www.google.com"
                  />

                  <SocialDesktop
                    icon={FaYoutube}
                    href="https://www.google.com"
                  />

                  <SocialDesktop
                    icon={FaInstagram}
                    href="https://www.google.com"
                  />

                  <SocialDesktop
                    icon={FaTiktok}
                    href="https://www.google.com"
                  />
                </div>
              </div>
            </div>
          </div>

          <Embeds />

          <div
            className={classNames(
              'mx-auto flex w-full flex-col gap-4',
              `max-w-[330px]`,
              `md:max-w-[500px]`,
              '2xl:hidden',
            )}
          >
            <Social
              icon={FaSpotify}
              title="Perfil no Spotify"
              color="#00D75D"
              href="https://open.spotify.com/artist/5eX0epLy551uFsC45QUtnQ?si=wvQyNJLpTMWcbSqg8LCCFw"
            />

            <Social
              icon={FaYoutube}
              title="Canal do Youtube"
              color="#FF4747"
              href="https://www.youtube.com/c/StrangeMike"
            />

            <Social
              icon={FaTiktok}
              title="Perfil no TikTok"
              color="#69C9D0"
              href="https://www.youtube.com/c/StrangeMike"
            />
          </div>
        </article>

        <article
          className={classNames(
            'my-8 mx-auto flex w-full flex-col justify-center gap-8',
            `max-w-[330px]`,
            `md:max-w-[500px]`,
            '2xl:mt-[200px] 2xl:max-w-[1440px] 2xl:pb-16',
          )}
        >
          <div
            className={classNames(
              'flex flex-col justify-end gap-3',
              '2xl:flex-row 2xl:items-end 2xl:justify-between',
            )}
          >
            <div className="flex flex-col gap-2">
              <p
                className={classNames(
                  'text-2xl font-medium text-white',
                  '2xl:text-4xl',
                )}
              >
                Ficou com alguma dúvida?
              </p>

              <p
                className={classNames(
                  'text-xl font-medium text-white',
                  '2xl:text-2xl',
                )}
              >
                Faça sua pergunta no canal do Discord:
              </p>
            </div>

            <div
              className={classNames(
                'hidden flex-col text-center text-2xl',
                '2xl:flex',
              )}
            >
              <p className="text-white">Ou, se preferir, mande para</p>
              <p className="text-orange-500">contato@strangemike.com</p>
            </div>
          </div>

          <div>
            <WidgetBot
              server="798690805464301588"
              channel="798702383919530004"
              width="100%"
              className="h-[300px] border-b-4 border-orange-500 2xl:h-[700px]"
            />
          </div>

          <div className="flex flex-col text-center text-base 2xl:hidden">
            <p className="text-white">Ou, se preferir, mande para</p>
            <p className="text-orange-500">contato@strangemike.com</p>
          </div>
        </article>
      </div>
    </>
  );
}
