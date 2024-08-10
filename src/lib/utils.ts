import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const numberTimerPickFormat = (
  value: string | number,
  maxValue: number
) => {
  const valueNbr = Number(value);
  if (!Number.isFinite(valueNbr)) return "";
  return String(Math.min(valueNbr, maxValue));
};

export const leadingZero = (num: number) => num.toString().padStart(2, "0");

export const dateEnd = (endAt: Date) => {
  return endAt.toLocaleTimeString();
};

export const getEndDate = (endAt: number) => {
  const date = new Date(endAt);

  const heures = date.getHours();
  const minutes = date.getMinutes();

  const heuresFormattees = heures.toString().padStart(2, "0");
  const minutesFormattees = minutes.toString().padStart(2, "0");

  const formatHoraire = `${heuresFormattees}h${minutesFormattees}`;

  return formatHoraire;
};

export const getTimeLeftText = (timeLeft: number) => {
  const totalSecondes = Math.floor(timeLeft / 1000);

  const heures = Math.floor(totalSecondes / 3600);
  const minutes = Math.floor((totalSecondes % 3600) / 60);
  const secondes = totalSecondes % 60;

  const heuresFormattees =
    heures > 0 ? heures.toString().padStart(2, "0") + "h " : "";

  const minutesFormattees =
    heures === 0 && minutes === 0
      ? ""
      : minutes.toString().padStart(2, "0") + "m ";

  const secondesFormattees =
    heures <= 0 ? secondes.toString().padStart(2, "0") + "s" : "";

  return heuresFormattees + minutesFormattees + secondesFormattees;
};
