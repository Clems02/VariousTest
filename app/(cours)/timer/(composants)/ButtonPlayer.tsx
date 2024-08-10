import { Button } from "@/src/components/ui/button";
import { Pause, Play, Repeat2 } from "lucide-react";
import { useTimerStore } from "../store/useTimerStore";

type ButtonPlayerProps = {
  isRunning: boolean;
  timeLeft: number;
  id: string;
};

export const ButtonPlayer = ({
  isRunning,
  timeLeft,
  id,
}: ButtonPlayerProps) => {
  const toggleTimer = useTimerStore((state) => state.toggleTimer);

  if (timeLeft === 0) {
    return (
      <Button variant={"ghost"} onClick={() => toggleTimer(id)}>
        <Repeat2 color="#027428" strokeWidth={3} />
      </Button>
    );
  }

  return (
    <Button variant={"ghost"} onClick={() => toggleTimer(id)}>
      {isRunning ? (
        <Pause size={28} color="#c77b10" strokeWidth={2.5} />
      ) : (
        <Play color="#027428" strokeWidth={3} />
      )}
    </Button>
  );
};
