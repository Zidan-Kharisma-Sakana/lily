import { FIndustry } from "./FIndustry";
import { FJobType } from "./FJobType";
import { FLocation } from "./FLocation";
import { FRemote } from "./FRemote";
import { Searchbar } from "./Searchbar";

export const FilterBody: React.FC = () => {
  return (
    <>
      <Searchbar />
      <FJobType />
      <FRemote />
      <FLocation />
      <FIndustry />
    </>
  );
};
