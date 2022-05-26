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
          code: "Jakarta",
        },
        {
          text: "Medan",
          code: "Medan",
        },
        {
          text: "Yogyakarta",
          code: "Yogyakarta",
        },
        {
          text: "Bandung",
          code: "Bandung",
        },
        {
          text: "Surabaya",
          code: "Surabaya",
        },
      ]}
    />
  );
};
