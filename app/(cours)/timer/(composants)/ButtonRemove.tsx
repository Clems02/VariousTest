import { Button } from "@/src/components/ui/button";
import { Trash2 } from "lucide-react";
import { useTimerStore } from "../store/useTimerStore";

type ButtonRemoveProps = {
  id: string;
};

export const ButtonRemove = ({ id }: ButtonRemoveProps) => {
  const removeTimer = useTimerStore((state) => state.removeTimer);

  return (
    <Button variant={"ghost"} onClick={() => removeTimer(id)}>
      <Trash2 color="#e60000" strokeWidth={2} />
    </Button>
  );
};
