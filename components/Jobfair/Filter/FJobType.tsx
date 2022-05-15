import { FC } from "react";
import { Multiselect } from "./Multiselect";

export const FJobType: FC = () => {
  return (
    <Multiselect
      title={"Job Type"}
      section={"type"}
      items={[
        {
          text: "Full-time",
          code: "ft",
        },
        {
          text: "Part-time",
          code: "pt",
        },
        {
          text: "Internship",
          code: "int",
        },
        {
          text: "Freelance",
          code: "free",
        },
      ]}
    />
  );
};
