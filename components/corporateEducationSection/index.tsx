import FirstImageEducationSection from "@/public/images/education-section-01.png";
import SecondImageEducationSection from "@/public/images/education-section-02.png";

import Card from "@/components/shared/card";
import Spotlight from "@/components/spotlight";

export default function CorporateEducationSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Flujos de Trabajo Personalizados
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Mapea tu recorrido de aprendizaje
            </h2>
          </div>
          {/* Elements of Spotlight */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <Card
              href="/"
              imageSrc={FirstImageEducationSection}
              title="Master Class"
              label="Master Class"
              description=" Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Praesent pulvinar efficitur maecenas curabitur massa purus
                            inceptos tortor."
            />

            {/* Card2 2 */}
            <Card
              href="/"
              imageSrc={FirstImageEducationSection}
              title="Programas"
              label="Programas"
              description=" Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Praesent pulvinar efficitur maecenas curabitur massa purus
                            inceptos tortor."
            />

            {/* Card 3 */}
            <Card
              href="/"
              imageSrc={SecondImageEducationSection}
              title="Cursos Coorporativos"
              label="Cursos Coorporativos"
              description=" Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Praesent pulvinar efficitur maecenas curabitur massa purus
                            inceptos tortor."
            />
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
