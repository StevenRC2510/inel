type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
      <div className="inline-flex items-center gap-3 pb-3">
        <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
          {subtitle}
        </span>
      </div>
      <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
        {title}
      </h2>
      <p className="text-lg text-indigo-200/65">
        Desde nuestros inicios, hemos trabajado incansablemente para ofrecer
        soluciones innovadoras que transformen la manera en que las empresas
        operan y se conectan con sus clientes.
      </p>
    </div>
  );
};

export default SectionHeader;
