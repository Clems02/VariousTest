import { useEffect } from "react";
import { useTimerStore } from "../store/useTimerStore";

export const useTimerInterval = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (useTimerStore.getState().timers.length === 0) return;

      useTimerStore.setState((state) => ({
        timers: state.timers.map((timer) => {
          if (!timer.isRunning) return timer;

          const newTime =
            new Date(timer.endAt).getTime() - new Date().getTime();

          if (newTime < 0) {
            return {
              ...timer,
              timeLeft: 0,
              isRunning: false,
            };
          }

          return {
            ...timer,
            timeLeft: newTime,
          };
        }),
      }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
};
