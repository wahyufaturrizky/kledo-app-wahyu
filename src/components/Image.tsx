import { ImageInterface } from "../interface/Image";

const Image = ({ onClick, className, src, alt, width, height }: ImageInterface) => {
  return (
    <img
      width={width}
      height={height}
      onClick={onClick}
      className={className}
      src={src}
      alt={alt}
    />
  );
};

export default Image;
