"use client";

import { Button } from "@/src/components/ui/button";
import { useTimerStore } from "../store/useTimerStore";

type ButtonClearProps = {};

export const ButtonClear = (props: ButtonClearProps) => {
  const { timers, clearTimer } = useTimerStore((state) => ({
    timers: state.timers,
    clearTimer: state.clearTimer,
  }));

  if (timers.length === 0) return;

  return <Button onClick={() => clearTimer()}>Clear all timers</Button>;
};
