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
          code: "Tech",
        },
        {
          text: "Education",
          code: "Education",
        },
        {
          text: "Entertainment",
          code: "Entertainment",
        },
        {
          text: "Finance and Economic",
          code: "Finance",
        },
        {
          text: "Manufacturing",
          code: "Manufacturing",
        },
      ]}
    />
  );
};
