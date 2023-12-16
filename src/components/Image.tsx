import { ImageInterface } from "../interface/Image";

const Image = ({ onClick, className, src, alt }: ImageInterface) => {
  return <img onClick={onClick} className={className} src={src} alt={alt} />;
};

export default Image;
