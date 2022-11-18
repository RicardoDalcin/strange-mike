import { IconBase } from 'react-icons';

interface SocialProps {
  icon: typeof IconBase;
  title: string;
  color: string;
  href: string;
}

export const Social = ({ icon: Icon, title, color, href }: SocialProps) => (
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
