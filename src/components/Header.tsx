import classNames from 'classnames';
import { useRef } from 'react';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  window.onscroll = () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 150) {
      header?.classList.add('header');
    } else {
      header?.classList.remove('header');
    }
  };

  return (
    <header
      ref={headerRef}
      className={classNames(
        'z-20 flex h-20 items-center justify-center transition-all',
        'xl:fixed xl:w-[100%]',
      )}
    >
      <div
        className={classNames(
          'flex h-full items-center justify-center',
          'xl:fixed xl:mx-auto xl:h-20 xl:w-[90%] xl:max-w-[1650px]',
        )}
      >
        <p className="font-text text-2xl font-semibold uppercase text-white">
          Strange Mike
        </p>

        <nav
          className={classNames(
            'ml-[-150px] hidden flex-1 justify-center gap-8 text-xl font-semibold uppercase',
            'xl:flex',
          )}
        >
          <a href="#">Início</a>

          <a href="#about">Sobre</a>

          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
