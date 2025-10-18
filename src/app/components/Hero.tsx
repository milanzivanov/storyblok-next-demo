interface HeroParams {
  blok: {
    headline: string;
    content: string;
  };
}

function Hero(params: HeroParams) {
  // console.log("Hero component params:", params);

  return (
    <section className="h-[100vh] max-w-5xl mx-auto px-4 w-full pt-42 pb-16">
      <h1 className="text-center text-5xl md:text-7xl font-extrabold">
        {params.blok.headline}
      </h1>
      <p className="max-w-xl mx-auto text-center text-lg mt-8 font-medium">
        {params.blok.content}
      </p>
    </section>
  );
}
export default Hero;
