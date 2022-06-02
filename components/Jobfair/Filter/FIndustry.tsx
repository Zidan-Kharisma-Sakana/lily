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
          text: "FMCG",
          code: "FMCG",
        },
        {
          text: "Finance",
          code: "Finance",
        },
        {
          text: "Consulting",
          code: "Consulting",
        },
        {
          text: "Creative",
          code: "Creative",
        },
        {
          text: "Startups",
          code: "Startups",
        },
        {
          text: "Others",
          code: "Others",
        },
      ]}
    />
  );
};
