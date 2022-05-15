import { FC } from "react";
import { Multiselect } from "./Multiselect";

export const FLocation: FC = () => {
  return (
    <Multiselect
      collapsible
      title={"Location"}
      section={"location"}
      items={[
        {
          text: "Jakarta",
          code: "JKT",
        },
        {
          text: "Medan",
          code: "MED",
        },
        {
          text: "Yogyakarta",
          code: "JOG",
        },
        {
          text: "Bandung",
          code: "BDG",
        },
        {
          text: "Surabaya",
          code: "SBY",
        },
      ]}
    />
  );
};
