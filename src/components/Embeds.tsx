import { FaSpotify } from 'react-icons/fa';

import classNames from 'classnames';
import { useState } from 'react';

interface EmbedTabProps {
  onClick: () => void;
  active?: boolean;
}

const EmbedTab = ({ onClick, active = false }: EmbedTabProps) => (
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
    <FaSpotify size={64} />
  </button>
);

export const Embeds = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={classNames(
        'hidden w-[33%] flex-1 overflow-hidden rounded-[32px] bg-black/30',
        '2xl:flex',
      )}
    >
      <div className="flex h-full flex-col bg-[#101119]">
        <EmbedTab onClick={() => setActiveTab(0)} active={activeTab === 0} />

        <EmbedTab onClick={() => setActiveTab(1)} active={activeTab === 1} />

        <EmbedTab onClick={() => setActiveTab(2)} active={activeTab === 2} />

        <EmbedTab onClick={() => setActiveTab(3)} active={activeTab === 3} />
      </div>

      <div className="flex w-full flex-1 items-center justify-center">
        {activeTab === 0 && (
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/artist/5eX0epLy551uFsC45QUtnQ?utm_source=generator"
            width="300"
            height="380"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};
