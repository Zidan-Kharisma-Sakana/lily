import { FC } from "react";

export interface RegisteredEventsData {
  event: string;
  date?: Date;
}

export const RegisteredCard: FC<RegisteredEventsData> = ({ event, date }) => {
  return (
    <div className="glassCard flex justify-between items-center w-full mb-3">
      <p>{event}</p>
      <p className="text-xs font-bold">2 - 3 July</p>
    </div>
  );
};
