import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { IconBase } from 'react-icons';
import {
  FaVideo,
  FaClock,
  FaDownload,
  FaSpotify,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

import scrollIndicator from '../../public/assets/scroll-indicator.svg';

import '@vime/core/themes/default.css';

const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), {
  ssr: false,
});

function vimeDynamic(module: string) {
  return dynamic(
    () =>
      import('@vime/react').then((mod: any) => mod[module]) as Promise<
        React.FC<any>
      >,
    {
      ssr: false,
    },
  );
}

const Player = vimeDynamic('Player');
const Youtube = vimeDynamic('Youtube');
const DefaultUi = vimeDynamic('DefaultUi');

interface BadgeProps {
  className?: string;
  icon: typeof IconBase;
  title: string;
}

const Badge = ({ className = '', icon: Icon, title }: BadgeProps) => (
  <div
    className={`flex flex-col justify-center gap-2 rounded bg-slate-800 p-3 text-gray-100 ${className}`}
  >
    <div className="align-center flex justify-center">
      <Icon size={18} />
    </div>

    <span className="text-center text-sm">{title}</span>
  </div>
);

interface SocialProps {
  icon: typeof IconBase;
  title: string;
  color: string;
  href: string;
}

const Social = ({ icon: Icon, title, color, href }: SocialProps) => (
  <a
    className={`align-center flex h-[72px] justify-center gap-3  rounded-full border-[1px]`}
    style={{ borderColor: color }}
    href={href}
  >
    <div className="align-center my-auto flex justify-center">
      <Icon size={40} color={color} />
    </div>

    <span
      className={`my-auto font-text text-2xl font-semibold`}
      style={{ color }}
    >
      {title}
    </span>
  </a>
);

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
        <header className="align-center flex justify-center py-6">
          <p className="flexfont-text text-2xl font-semibold uppercase text-white">
            Strange Mike
          </p>
        </header>

        <article className="mx-auto flex max-w-[330px] flex-col gap-6 md:max-w-[500px]">
          <div className="jusitfy-center align-center flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="font-text text-sm text-gray-200">
                  Remake masterclass
                </p>

                <h1 className="text-3xl font-extrabold">
                  Leve suas produções para o{' '}
                  <strong className="font-extrabold text-orange-400">
                    próximo nível.
                  </strong>
                </h1>
              </div>

              <p className="font-text text-sm text-gray-50">
                Aprenda a fazer remakes das suas músicas preferidas passo a
                passo recriando o hit “Move Your Body” do Öwnboss e Sevek do
                início ao fim.
              </p>

              <div className="align-center flex justify-between md:gap-6">
                <Badge className="md:w-full" icon={FaVideo} title="10 aulas" />
                <Badge className="md:w-full" icon={FaClock} title="+4 horas" />
                <Badge
                  className="md:w-full"
                  icon={FaDownload}
                  title="Projeto e samples"
                />
              </div>
            </div>

            <div className="">
              <Player>
                <Youtube videoId="Dvv3FMVjpA0" />
                <DefaultUi />
              </Player>
            </div>
          </div>

          <div className="align-center flex justify-center">
            <button className="align-center flex justify-center rounded-2xl bg-orange-500 px-6 py-4 text-base text-gray-900">
              Aprenda agora
            </button>
          </div>

          <div className="align-center flex justify-center">
            <Image src={scrollIndicator} alt="Scroll down" />
          </div>
        </article>

        <article className="mt-8 flex flex-col gap-8">
          <div className="align-center flex justify-center">
            <div className="flex w-full flex-col justify-center gap-6 rounded-[32px] bg-black/30 py-6">
              <p className="text-center text-3xl font-semibold text-orange-500">
                Quem sou eu?
              </p>

              <div className="mx-auto flex max-w-[330px] flex-col gap-4 font-text  text-sm text-white md:max-w-[500px]">
                <p>
                  Olá, muito prazer! Me chamo Miguel, e nos últimos anos venho
                  trabalhando no meu projeto de música eletrônica “Strange
                  Mike”. Além de ter mais de 4,5 milhões de streams nas minhas
                  músicas no Spotify, ter colaborado com artistas como Selva e
                  Hawk e ter minhas músicas tocadas por grandes nomes da cena
                  como Alok e Bruno Be, também tenho outra paixão: ensinar.
                </p>

                <p>
                  Com o objetivo de ajudar mais pessoas a melhorar na produção
                  criei meu canal no Youtube, que já passa de mais de 100 mil
                  visualizações nos seus diversos vídeos de remakes, e neste
                  curso pretendo destrinchar essa ferramenta muito poderosa que
                  vai te ajudar a entender melhor como as suas músicas
                  preferidas são feitas.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[330px] flex-col gap-4 md:max-w-[500px]">
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

        <article className="my-8 mx-auto flex w-full max-w-[330px] flex-col justify-center gap-8 md:max-w-[500px]">
          <div className="flex flex-col justify-end gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-medium text-white">
                Ficou com alguma dúvida?
              </p>

              <p className="text-xl font-medium text-white">
                Faça sua pergunta no canal do Discord:
              </p>
            </div>
          </div>

          <div>
            <WidgetBot
              server="798690805464301588"
              channel="798702383919530004"
              width="100%"
              className="border-b-4 border-orange-500"
              height={300}
            />
          </div>

          <div className="flex flex-col text-center text-base">
            <p className="text-white">Ou, se preferir, mande para</p>
            <p className="text-orange-500">contato@strangemike.com</p>
          </div>
        </article>
      </div>
    </>
  );
}
