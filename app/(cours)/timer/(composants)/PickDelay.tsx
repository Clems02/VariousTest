"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { leadingZero, numberTimerPickFormat } from "@/src/lib/utils";
import { useState } from "react";
import { useTimerStore } from "../store/useTimerStore";

type PickDelayProps = {};

export const initPickerDelay = {
  hours: 0,
  minutes: 2,
  secondes: 0,
};

export const PickDelay = (props: PickDelayProps) => {
  const addTimer = useTimerStore((state) => state.addTimer);
  const [delay, setDelay] = useState(initPickerDelay);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    maxValue: number
  ) => {
    const type = e.target.name;
    const value = numberTimerPickFormat(e.target.value, maxValue);

    setDelay((curr) => ({ ...curr, [type]: value }));
  };

  const addNewTimer = () => {
    console.log(delay);
    const { hours, minutes, secondes } = delay;
    if (isNaN(hours)) return;

    const delayMs = hours * 3600000 + minutes * 60000 + secondes * 1000;
    addTimer(delayMs);
  };

  const resetTimer = () => {
    setDelay(initPickerDelay);
  };

  return (
    <div className="space-y-5">
      <div className="bg-gray-200 flex border-2 border-gray-600 rounded-md p-6 justify-center text-3xl gap-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <Input
            className="w-16 text-center text-2xl flex gap-4 tracking-widest bg-inherit focus:bg-background"
            min={0}
            max={23}
            name="hours"
            value={leadingZero(delay.hours)}
            onChange={(e) => handleChange(e, 23)}
          />
          <div className="text-muted-foreground text-xs text-center">hours</div>
        </div>
        <div>:</div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Input
            className="w-16 text-center text-2xl flex gap-4 tracking-widest bg-inherit focus:bg-background"
            min={0}
            max={24}
            name="minutes"
            value={leadingZero(delay.minutes)}
            onChange={(e) => handleChange(e, 59)}
          />
          <div className="text-muted-foreground text-xs text-center">
            minutes
          </div>
        </div>
        <div>:</div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Input
            className="w-16 text-center text-2xl flex gap-4 tracking-widest bg-inherit focus:bg-background"
            min={0}
            max={24}
            name="secondes"
            value={leadingZero(delay.secondes)}
            onChange={(e) => handleChange(e, 59)}
          />
          <div className="text-muted-foreground text-xs text-center">
            secondes
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <Button onClick={addNewTimer}>Add timer</Button>
        <Button onClick={resetTimer}>Reset timer</Button>
      </div>
    </div>
  );
};
