import Image, { StaticImageData } from "next/image";

type BlurredShapeProps = {
  src: StaticImageData;
  className: string;
  alt: string;
};

const BlurredShape: React.FC<BlurredShapeProps> = ({ src, className, alt }) => {
  return (
    <div className={className} aria-hidden="true">
      <Image
        className="max-w-none"
        src={src}
        width={760}
        height={668}
        alt={alt}
      />
    </div>
  );
};

export default BlurredShape;
