import Image from "next/image";

import BlurredShapeImageGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShapeImage from "@/public/images/blurred-shape.svg";
import DiagramImage from "@/public/images/diagram.png";

import CompanyCard from "./components/companyCard";
import BlurredShape from "./components/blurredShape";
import SectionHeader from "./components/sectionHeader";

const CompanyHighlights: React.FC = () => {
  return (
    <section className="relative">
      <BlurredShape
        src={BlurredShapeImageGray}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        alt="Blurred shape"
      />
      <BlurredShape
        src={BlurredShapeImage}
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        alt="Blurred shape"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          <SectionHeader
            subtitle="Trayectoria de la Empresa"
            title="Impulsando la Innovación y el Crecimiento"
          />

          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none rounded-xl opacity-40"
              src={DiagramImage}
              width={400}
              height={200}
              alt="Features"
            />
          </div>

          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <CompanyCard
              icon={
                <svg
                  className="mb-3 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                  <path
                    fillOpacity=".48"
                    d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                  />
                </svg>
              }
              title="Innovación Continua"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <CompanyCard
              icon={
                <svg
                  className="mb-3 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                  <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
                </svg>
              }
              title="Colaboraciones Estratégicas"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              delay={100}
            />
            <CompanyCard
              icon={
                <svg
                  className="mb-3 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                  <path
                    fillOpacity=".48"
                    d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                  />
                </svg>
              }
              title="Compromiso con la Sostenibilidad"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              delay={200}
            />
            <CompanyCard
              icon={
                <svg
                  className="mb-3 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                  <path
                    fillOpacity=".48"
                    d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                  />
                </svg>
              }
              title="Enfoque en el Cliente"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
