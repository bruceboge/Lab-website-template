import type { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
};

/** Plain <img> replacement for the previous framework's Image component. */
export default function Image({ fill, priority, style, loading, ...rest }: Props) {
  return (
    <img
      {...rest}
      loading={priority ? "eager" : (loading ?? "lazy")}
      decoding="async"
      style={
        fill
          ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }
          : style
      }
    />
  );
}
