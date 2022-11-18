import { IconBase } from 'react-icons';

interface SocialProps {
  icon: typeof IconBase;
  href: string;
}

export const SocialDesktop = ({ icon: Icon, href }: SocialProps) => (
  <a
    className="flex h-9 w-9 items-center justify-center rounded bg-gray-200 text-xl text-[#101218] hover:bg-gray-50"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon />
  </a>
);
