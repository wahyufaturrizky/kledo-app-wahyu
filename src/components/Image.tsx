import { ImageInterface } from "../interface/Image";

const Image = ({ ...props }: ImageInterface) => {
  return <img {...props} />;
};

export default Image;
