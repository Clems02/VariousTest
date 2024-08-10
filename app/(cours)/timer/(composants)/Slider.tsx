import { PropsWithChildren } from "react";
import { CircularSliderWithChildren } from "react-circular-slider-svg";

type SliderProps = {
  duration: number;
  timeLeft: number;
} & PropsWithChildren;

export const Slider = ({ duration, timeLeft, ...other }: SliderProps) => {
  return (
    <CircularSliderWithChildren
      size={240}
      trackWidth={12}
      minValue={0}
      maxValue={duration / 1000}
      startAngle={0}
      endAngle={360}
      angleType={{
        direction: "ccw",
        axis: "+y",
      }}
      handle1={{
        value: Math.floor(timeLeft / 1000),
        onChange: () => undefined,
      }}
      arcColor="#568bd1"
      arcBackgroundColor="#aaa"
      {...other}
    />
  );
};
