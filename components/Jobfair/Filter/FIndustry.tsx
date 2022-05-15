import { FC } from "react";
import { Multiselect } from "./Multiselect";

export const FIndustry: FC = () => {
  return (
    <Multiselect
      collapsible
      title={"Industry"}
      section={"industry"}
      items={[
        {
          text: "Computer and Technology",
          code: "tech",
        },
        {
          text: "Education",
          code: "ed",
        },
        {
          text: "Entertainment",
          code: "ent",
        },
        {
          text: "Finance and Economic",
          code: "finec",
        },
        {
          text: "Manufacturing",
          code: "manufac",
        },
      ]}
    />
  );
};
