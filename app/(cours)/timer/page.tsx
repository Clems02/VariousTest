import { ButtonClear } from "./(composants)/ButtonClear";
import { PickDelay } from "./(composants)/PickDelay";
import { TimersList } from "./(composants)/TimersList";

export default async function ComponentPage() {
  return (
    <div className="w-full justify-center flex flex-col items-center gap-6 my-40">
      <PickDelay />
      <TimersList />
      <ButtonClear />
    </div>
  );
}
