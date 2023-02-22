import heroImg from '../../assets/images/illustration1.svg';

export function Hero() {
  return (
    <section>
      <div
        className="mx-auto flex w-full flex-col justify-between px-6 pt-[41px] md:w-[81.75%] md:flex-row md:items-center md:px-0 md:py-[70px]"
        data-md="(1440 - 132 * 2) / 1440 * 100 = 81.666...."
      >
        <div>
          <h1 className="mb-3 text-[24px] font-semibold leading-[30.24px] text-gray-200 md:mb-[50px] md:text-[48px] md:leading-[60.48px]">
            Rachi,
            <br /> é tudo que você
            <br /> precisa em um só lugar.
          </h1>
          <a
            className="flex h-[32px] w-[144px] items-center justify-center rounded-full bg-blue px-[27px] py-[7.5x] text-[14px] font-semibold leading-[16.94px] text-common-white transition duration-300 ease-in hover:bg-gray-200 md:h-[50px] md:w-[200px] md:py-4 md:px-9 md:text-[20px] md:leading-[24.2px]"
            href="/"
          >
            Cadastrar-se
          </a>
        </div>
        <figure className="mt-[25px] flex min-h-[183px] w-[58.40%] min-w-[210px] justify-center self-center md:mt-0 md:w-[42.517%] md:self-auto">
          <img
            className="w-full md:min-h-[500px]"
            data-sm="210 / 360 * 100 = 58.333333333333336"
            data-md="(500 / (1440 - 132 * 2)) * 100 = 42.517006802721085"
            width={210}
            height={183}
            src={heroImg}
            alt=""
          />
        </figure>
      </div>
    </section>
  );
}

/*section>div.container>div>h1+a^figure>img*/
