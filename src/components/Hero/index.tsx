import illustration from '../../assets/images/illustration1.svg';

export const Hero = () => {
  return (
    <section className="">
      <div className="flex-@center justify-around py-[70px]">
        <div className="flex-@center container flex-col justify-between md:flex-row">
          <div className="max-md:self-start">
            <h1 className="max-[320px]:text-sm-400 mb-4 whitespace-nowrap font-secondary text-md-100 font-semibold text-gray-200 md:mb-[50px] md:text-lg-300">
              Rachi,
              <br /> é tudo que você
              <br /> precisa em um só lugar.
            </h1>

            <div className="max-w-[200px] max-md:max-w-[144px]">
              <a
                className="btn-primary font-primary text-sm-100 font-bold md:h-[56px] md:text-sm-400 max-md:mb-[25px]"
                href="/"
              >
                Cadastrar-se
              </a>
            </div>
          </div>

          <figure className="md:ml-auto md:mr-0 md:w-[43.4792%] lg:w-[48%] max-md:mx-auto max-md:w-[67.3076923076923%]">
            <img
              className="h-auto w-full"
              src={illustration}
              alt="This is a people using "
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
