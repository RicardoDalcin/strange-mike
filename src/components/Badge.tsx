import classNames from 'classnames';
import { IconBase } from 'react-icons';

interface BadgeProps {
  icon: typeof IconBase;
  title: string;
}

export const Badge = ({ icon: Icon, title }: BadgeProps) => (
  <div
    className={classNames(
      `flex flex-col justify-center gap-2 rounded bg-slate-800 p-3 text-gray-100`,
      'md:w-full',
      '2xl:w-auto 2xl:flex-row 2xl:justify-center 2xl:rounded-full',
    )}
  >
    <div className="flex items-center justify-center text-lg 2xl:text-xl">
      <Icon />
    </div>

    <span className="text-center text-sm 2xl:text-xl">{title}</span>
  </div>
);
