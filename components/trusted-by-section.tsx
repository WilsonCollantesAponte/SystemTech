export function TrustedBySection() {
  const companies = ["TechCorp", "InnovateMX", "DataPro", "CloudSystems", "SmartBiz", "FutureTech"]

  return (
    <section className="py-12 bg-white border-y border-[#b4c2d2]/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-[#062546]/50 text-sm font-medium mb-8 uppercase tracking-wider">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company) => (
            <div
              key={company}
              className="text-2xl font-bold text-[#b4c2d2] hover:text-[#062546] transition-colors cursor-default"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
