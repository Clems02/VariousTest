"use client";

import { useTimerInterval } from "../hook/useTimerInterval";
import { useTimerStore } from "../store/useTimerStore";
import { Timer } from "./Timer";

type TimersListProps = {};

export const TimersList = (props: TimersListProps) => {
  useTimerInterval();
  const timers = useTimerStore((state) => state.timers);

  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {Timer.length > 0 &&
        timers.map((timer) => <Timer key={timer.id} timer={timer} />)}
    </div>
  );
};
