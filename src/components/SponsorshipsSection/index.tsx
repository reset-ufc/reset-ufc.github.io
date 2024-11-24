export function SponsorshipsSection() {
  const sponsors = [
    { src: "/CNPQ.png", alt: "CNPq logo" },
    { src: "/funcap.jpg", alt: "FUNCAP logo" },
    { src: "/cidacs.jpg", alt: "CIDACS logo" },
    { src: "/fapesp.webp", alt: "FAPESP logo" },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#270B79] pb-3 text-center">
        Nossos Patrocínios
      </h2>
      <p className="font-medium text-zinc-500 max-w-2xl mx-auto text-center mb-8">
        Os membros do RESET LAB recebem financiamento da CNPQ, FUNCAP, CIDACS e
        FAPESP
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center w-full h-40"
          >
            <div className="relative">
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="object-contain h-32 w-32"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
