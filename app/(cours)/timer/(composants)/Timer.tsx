import { getEndDate, getTimeLeftText } from "@/src/lib/utils";
import { Bell } from "lucide-react";
import { PropsWithChildren } from "react";
import { TimerType } from "../store/useTimerStore";
import { ButtonPlayer } from "./ButtonPlayer";
import { ButtonRemove } from "./ButtonRemove";
import { Slider } from "./Slider";

type TimerProps = {
  timer: TimerType;
};

export const Timer = ({ timer }: TimerProps & PropsWithChildren) => {
  return (
    <div className="bg-blue-50 flex flex-col justify-between p-1 rounded-lg items-center border-2 border-blue-300">
      <Slider duration={timer.duration} timeLeft={timer.timeLeft}>
        <div className="flex flex-col gap-4 justify-center items-center h-20 w-40">
          <div className="flex gap-2 items-center bg-background px-2 py-1 rounded-full font-bold ring-blue-500 ring-1">
            <Bell size={18} />
            <span>{getEndDate(timer.endAt)}</span>
          </div>
          <div className="text-3xl inline-block line-clamp-1">
            <span>{getTimeLeftText(timer.timeLeft)}</span>
          </div>
        </div>
      </Slider>
      <div className="flex justify-between w-full">
        <ButtonRemove id={timer.id} />
        <ButtonPlayer
          id={timer.id}
          isRunning={timer.isRunning}
          timeLeft={timer.timeLeft}
        />
      </div>
    </div>
  );
};
