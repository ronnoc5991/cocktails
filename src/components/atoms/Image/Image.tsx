import { useState } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.css";

type Props = BaseProps & {
  src: HTMLImageElement["src"];
  alt: HTMLImageElement["alt"];
  height?: HTMLImageElement["height"];
  width?: HTMLImageElement["width"];
};

// TODO: allow us to opt out of fade in behavior?
// could change class name to is=loading
// if isloading, opacity: 0

function Image({ src, alt, height, width, className }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      className={classNames("Image", className, { "is-loaded": isLoaded })}
      src={src}
      alt={alt}
      height={height}
      width={width}
      onLoad={() => setIsLoaded(true)}
    />
  );
}

export default Image;
