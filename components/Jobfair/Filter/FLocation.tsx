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
          text: "DKI Jakarta",
          code: "DKI Jakarta",
        },
        {
          text: "Jawa Barat",
          code: "Jawa Barat",
        },
        {
          text: "Jawa Timur",
          code: "Jawa Timur",
        },
        {
          text: "Jawa Tengah",
          code: "Jawa Tengah",
        },
        {
          text: "DI Yogyakarta",
          code: "DI Yogyakarta",
        },
        {
          text: "Sumatera",
          code: "Sumatera",
        },
        {
          text: "Remote",
          code: "Remote",
        },
        {
          text: "Others",
          code: "Others",
        },
      ]}
    />
  );
};
