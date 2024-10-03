type CompanyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
};

const CompanyCard: React.FC<CompanyCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <article
      className="transition-transform transform group hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={delay}
    >
      <div className="mb-3 fill-indigo-500">{icon}</div>
      <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
        {title}
      </h3>
      <p className="text-indigo-200/65">{description}</p>
    </article>
  );
};

export default CompanyCard;
