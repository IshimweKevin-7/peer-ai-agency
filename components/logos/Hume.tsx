import type { FC, ImgHTMLAttributes } from "react";

export type HumeLogoProps = ImgHTMLAttributes<HTMLImageElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <img
      src="/components/logos/icon (2).png"
      alt="Hume Logo"
      {...props}
    />
  );
};

export default HumeLogo;
