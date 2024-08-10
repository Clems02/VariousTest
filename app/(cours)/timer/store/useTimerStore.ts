import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TimerType = {
  id: string;
  duration: number;
  timeLeft: number;
  endAt: number;
  isRunning: boolean;
};

type TimerStore = {
  timers: TimerType[];
  addTimer: (duration: number) => void;
  removeTimer: (id: string) => void;
  toggleTimer: (id: string) => void;
  clearTimer: () => void;
};

// export const useTimers = create(
//   persist<TimerStore>((set) => ({

export const useTimerStore = create(
  persist<TimerStore>(
    (set) => ({
      timers: [],

      addTimer: (duration) => {
        const now = new Date();
        const endAt = now.getTime() + duration;
        const timeLeft = endAt - now.getTime();

        set((state) => ({
          timers: [
            ...state.timers,
            {
              id: window.crypto.randomUUID(),
              duration: duration,
              timeLeft: timeLeft,
              endAt: endAt,
              isRunning: true,
            },
          ],
        }));
      },

      removeTimer: (id) => {
        set((state) => ({
          timers: state.timers.filter((timer) => timer.id !== id),
        }));
      },

      toggleTimer: (id) => {
        set((state) => ({
          timers: state.timers.map((timer) => {
            if (timer.id === id) {
              /**Relance le timer quand il est à 0 */
              if (timer.timeLeft === 0) {
                const endAt = new Date().getTime() + timer.duration;
                return {
                  ...timer,
                  isRunning: !timer.isRunning,
                  endAt: endAt,
                  timeLeft: timer.duration,
                };
              }

              /**Relance le timer quand il est seulement en pause */
              const endAt = new Date().getTime() + timer.timeLeft;
              return {
                ...timer,
                isRunning: !timer.isRunning,
                endAt: endAt,
              };
            } else return timer;
          }),
        }));
      },

      clearTimer: () => {
        set((state) => ({
          timers: [],
        }));
      },
    }),
    { name: "timers" }
  )
);
