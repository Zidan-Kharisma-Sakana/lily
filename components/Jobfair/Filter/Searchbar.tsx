/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";

export const Searchbar: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="border-sky-base border rounded-lg px-2 py-2.5 flex gap-x-3 items-center mb-7 w-full">
      <img src="/icons/search.svg" alt="" className="cursor-pointer w-4 h-4" />
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        className="text-ink-light w-full bg-transparent"
        placeholder="Search"
      />
    </div>
  );
};
