/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { onClickFilter, restoreFilter } from "../helper";

export const Multiselect: FC<{
  title: string;
  section: string;
  items: { text: string; code: string }[];
  collapsible?: boolean;
}> = ({ title, section, items, collapsible = false }) => {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean[]>(
    Array(items.length).fill(false)
  );
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    restoreFilter(router, items, section, setChecked);
  }, [router, items, section]);

  return (
    <div className={`w-full relative`}>
      <div
        onClick={() => collapsible && setCollapsed(!collapsed)}
        className="flex justify-between items-center mb-3 cursor-pointer"
      >
        <h5 className="font-medium ">{title}</h5>
        {collapsible && (
          <img
            src="/icons/chevron-up.svg"
            alt=""
            className={`h-5 w-5 transform transition-all ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      <div
        className={`w-full overflow-hidden transform transition-all ${
          collapsed ? "max-h-0 ease-out" : "max-h-[500px] ease-in"
        }`}
      >
        {items.map((data, idx) => (
          <div
            onClick={() => onClickFilter(router, section, data.code)}
            key={data.code}
            className="flex items-center gap-x-2 mb-3 w-full cursor-pointer text-sm"
          >
            <div
              className={`w-4 h-4 text-white flex justify-center items-center rounded-md border border-ink-light ${
                checked[idx] && "bg-primary-base border-none"
              }`}
            >
              {checked[idx] && <img src="/icons/check-white.svg" alt="" />}
            </div>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
