import { FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

import classNames from 'classnames';
import { useState } from 'react';
import { IconBase } from 'react-icons';
import { animated } from '@react-spring/web';

import { PlayerProps } from '@vime/react/dist/types/components/Player';
import { YoutubeProps } from '@vime/react/dist/types/components/Youtube';
import { DefaultUiProps } from '@vime/react/dist/types/components/DefaultUi';

import ScrollTransition from './ScrollTransition';
import { vimeImport } from '../utils/vimeImport';

const Player = vimeImport<PlayerProps>('Player');
const Youtube = vimeImport<YoutubeProps>('Youtube');
const DefaultUi = vimeImport<DefaultUiProps>('DefaultUi');

interface EmbedTabProps {
  onClick: () => void;
  icon: typeof IconBase;
  active?: boolean;
}

const EmbedTab = ({ onClick, icon: Icon, active = false }: EmbedTabProps) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames(
      'flex flex-1 items-center justify-center p-8 text-white',
      {
        'bg-[#08080B]': active,
        'hover:bg-[#0c0c11]': !active,
      },
    )}
  >
    <Icon size={64} />
  </button>
);

export const Embeds = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
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
      delay={400}
    >
      {props => (
        <animated.div
          className={classNames(
            'hidden w-[33%] flex-1 overflow-hidden rounded-[32px] bg-black/30',
            '2xl:flex',
          )}
          style={props}
        >
          <div className="flex h-full flex-col bg-[#101119]">
            <EmbedTab
              icon={FaSpotify}
              onClick={() => setActiveTab(0)}
              active={activeTab === 0}
            />

            <EmbedTab
              icon={FaSoundcloud}
              onClick={() => setActiveTab(1)}
              active={activeTab === 1}
            />

            <EmbedTab
              icon={FaYoutube}
              onClick={() => setActiveTab(2)}
              active={activeTab === 2}
            />

            <EmbedTab
              icon={FaSpotify}
              onClick={() => setActiveTab(3)}
              active={activeTab === 3}
            />
          </div>

          <div className="flex w-full flex-1 items-center justify-center">
            <iframe
              style={{
                borderRadius: '12px',
                display: activeTab === 0 ? 'block' : 'none',
              }}
              src="https://open.spotify.com/embed/artist/5eX0epLy551uFsC45QUtnQ?utm_source=generator"
              width="300"
              height="380"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />

            <div
              className="px-2"
              style={{ display: activeTab === 1 ? 'block' : 'none' }}
            >
              <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1530228088&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true%22%3E"
              />
            </div>

            <Player
              aspectRatio="9:16"
              style={{ display: activeTab === 2 ? 'block' : 'none' }}
            >
              <Youtube videoId="PCKfOckq4IE" />
              <DefaultUi />
            </Player>
          </div>
        </animated.div>
      )}
    </ScrollTransition>
  );
};
