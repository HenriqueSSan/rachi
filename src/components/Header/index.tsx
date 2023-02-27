import logo from '../../assets/images/logo.svg';

import { Icon } from '@iconify/react';
import { useState } from 'react';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const list = [
    ['Funcionalidade', '/', 'header-item-1'],
    ['App', '/', 'header-item-2'],
    ['Planos', '/', 'header-item-3'],
    ['Contato', '/', 'header-item-4'],
  ];

  function handleOpenMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-header">
      <div className="flex-@center justify-around">
        <nav className="flex-@center w-full max-w-[1150px] justify-between py-5 max-md:px-6">
          <a href="/">
            <img src={logo} alt="This is page logo" />
          </a>

          <div className={`l-header__menu ${isOpenMenu ? 'active' : ''}`}>
            <ul className="l-header__list flex-@center gap-x-[66px]">
              {list.map((item) => {
                const [children, href, key] = item;

                return (
                  <li className="group/item" key={key}>
                    <a
                      className="text-highlight group-last/item:max-md:btn-primary block w-full text-center"
                      href={href}
                    >
                      {children}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            className="h-6 w-6 md:hidden"
            onClick={handleOpenMenu}
            type="button"
          >
            <Icon
              icon={
                isOpenMenu
                  ? 'line-md:menu-to-close-alt-transition'
                  : 'heroicons-solid:menu-alt-3'
              }
              className="h-full w-full"
            />
          </button>
        </nav>
      </div>
    </header>
  );
};
