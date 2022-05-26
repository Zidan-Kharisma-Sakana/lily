import { FC } from "react";
import { Multiselect } from "./Multiselect";

export const FJobType: FC = () => {
  return (
    <Multiselect
      title={"Job Type"}
      section={"employment_type"}
      items={[
        {
          text: "Full-time",
          code: "Full Time",
        },
        {
          text: "Part-time",
          code: "Part Time",
        },
        {
          text: "Internship",
          code: "Intern",
        },
        {
          text: "Freelance",
          code: "Freelance",
        },
      ]}
    />
  );
};
