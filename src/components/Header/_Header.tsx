/* eslint-disable prettier/prettier */
import { useState } from 'react';
import logoImg from '../../assets/images/logo.svg';

import hamburgerIcon from '../../assets/images/hamburger.svg';
import crossXIcon from '../../assets/images/cross.svg';

export function Header() {
  const [openIsMenu, setIsOpenMenu] = useState(false);

  function handleSetOpenMenu() {
    setIsOpenMenu(!openIsMenu);
  }

  return (
    <>
      <header className="w-100 sticky top-0 left-0 bg-common-white">
        <nav
          className="relative mx-auto flex w-full items-center justify-between p-6 md:w-[81.75%] md:py-4 md:px-0"
          data-md="(1440 - 132 * 2) / 1440 * 100 = 81.666...."
        >
          <a href="/">
            <img
              className="md:min-h-[30px] md:min-w-[100px]"
              src={logoImg}
              alt=""
              width={72}
              height={20}
            />
          </a>

          <button
            className="md:hidden"
            type="button"
            onClick={handleSetOpenMenu}
          >
            <img
              width={24}
              height={24}
              src={openIsMenu ? crossXIcon : hamburgerIcon}
              alt=""
            />
          </button>

          <div
            className={`max-[1024px]: right-[-100%] top-[72px] flex justify-center px-6 max-[1024px]:fixed max-[1024px]:w-full ${
              openIsMenu ? 'pull-right right-0' : ''
            }`}
          >
            <ul className="flex flex-col items-center bg-common-white max-[1024px]:w-full max-[1024px]:items-end max-[1024px]:gap-y-[24px] max-[1024px]:rounded-b-2xl max-[1024px]:p-12  max-[1024px]:shadow-[4px_4px_20px_#00000048] md:flex-row md:gap-x-[66px]">
              <li className="max-[1024px]:w-full">
                <a
                  className="text-gray transition duration-300 ease-in hover:text-blue max-[1024px]:flex max-[1024px]:justify-center"
                  href="/"
                >
                  Funcionalidades
                </a>
              </li>
              <li className="max-[1024px]:w-full">
                <a
                  className="text-gray transition duration-300 ease-in hover:text-blue max-[1024px]:flex max-[1024px]:justify-center"
                  href="/"
                >
                  App
                </a>
              </li>
              <li className="max-[1024px]:w-full">
                <a
                  className="text-gray transition duration-300 ease-in hover:text-blue max-[1024px]:flex max-[1024px]:justify-center"
                  href="/"
                >
                  Planos
                </a>
              </li>
              <li className="max-[1024px]:w-full">
                <a
                  className="flex items-center justify-center rounded-2xl bg-blue px-4 py-2 text-common-white transition duration-300 ease-in hover:bg-gray-200 hover:text-blue md:bg-transaparent md:p-0 md:text-gray md:hover:bg-transaparent"
                  href="/"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
