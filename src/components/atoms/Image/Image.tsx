import { useState } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.scss";

export type ImageProps = BaseProps & {
  src: HTMLImageElement["src"];
  alt: HTMLImageElement["alt"];
  height?: HTMLImageElement["height"];
  width?: HTMLImageElement["width"];
  loading?: HTMLImageElement["loading"];
};

function Image({
  src,
  alt,
  height,
  width,
  loading = "lazy",
  className,
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      className={classNames("Image", className, { "is-loaded": isLoaded })}
      src={src}
      alt={alt}
      height={height}
      width={width}
      loading={loading}
      onLoad={() => setIsLoaded(true)}
    />
  );
}

export default Image;
