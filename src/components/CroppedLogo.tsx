type CroppedLogoProps = {
  src: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
  cropX: number;
  cropY: number;
  cropWidth: number;
  cropHeight: number;
  className?: string;
};

export default function CroppedLogo({
  src,
  alt,
  imageWidth,
  cropX,
  cropY,
  cropWidth,
  cropHeight,
  className,
}: CroppedLogoProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: `${cropWidth} / ${cropHeight}`,
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{
          position: "absolute",
          maxWidth: "none",
          height: "auto",
          width: `${(imageWidth / cropWidth) * 100}%`,
          left: `${-(cropX / cropWidth) * 100}%`,
          top: `${-(cropY / cropHeight) * 100}%`,
        }}
      />
    </div>
  );
}
