/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useState } from "react";

export const Searchbar: FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const onSearch = () =>
    router.push(
      {
        query: {
          ...router.query,
          search: searchTerm,
        },
      },
      undefined,
      {
        scroll: false,
      }
    );
  return (
    <div className="border-sky-base border rounded-lg px-2 py-2.5 flex gap-x-3 items-center mb-7 w-full">
      <img
        onClick={onSearch}
        src="/icons/search.svg"
        alt=""
        className="cursor-pointer w-4 h-4"
      />
      <input
        onKeyUp={(e) => {
          if (e.key === "Enter") onSearch();
        }}
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        className="text-ink-light w-full bg-transparent"
        placeholder="Search"
      />
    </div>
  );
};
