import NextImage, { ImageProps } from "next/image";
import { Box, styled, BoxProps } from "@mui/material";

const defaultBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

type WrapperImageProps = {
  WrapperProps?: BoxProps;
  src: string;
};

type ConditionalProps =
  | { fill?: true; width: number | string; height: number | string }
  | { fill: false; width: ImageProps["width"]; height: ImageProps["height"] };

const WrapperImage = (
  props: WrapperImageProps &
    ConditionalProps &
    Omit<ImageProps, "width" | "height">
) => {
  const {
    WrapperProps = {},
    src,
    width,
    height,
    fill,
    placeholder = "blur",
    sizes = "100%",
    blurDataURL = defaultBlurDataURL,
    style,
    ...restProps
  } = props;

  if (fill === true || fill === undefined) {
    return (
      <Wrapper width={width} height={height} {...WrapperProps}>
        <NextImage
          {...{
            src,
            fill: true,
            placeholder,
            blurDataURL,
            sizes,
            style: {
              objectFit: "contain",
              ...style,
            },
            ...restProps,
          }}
        />
      </Wrapper>
    );
  } else if (fill === false) {
    return (
      <NextImage
        {...{
          src,
          placeholder,
          blurDataURL,
          width,
          height,
          sizes,
          style: {
            objectFit: "contain",
            ...style,
          },
          ...restProps,
        }}
      />
    );
  }

  return null;
};

export default WrapperImage;

const Wrapper = styled(Box)(() => {
  return {
    position: "relative",
  };
});
