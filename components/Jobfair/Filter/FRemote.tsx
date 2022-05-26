import Router, { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

export const FRemote: FC = () => {
  const [isRemote, setRemote] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const remote_available =
      String(router.query["remote_available"]) === "true";
    setRemote(remote_available);
  }, [router]);

  const onClick = (isRemote: boolean) => {
    const queries = router.query;
    let newQuery = {};
    for (const key in queries) {
      if (key !== "remote_available") {
        newQuery = {
          ...newQuery,
          [key]: queries[key],
        };
      }
    }
    if (isRemote) {
      newQuery = {
        ...queries,
        remote_available: String(isRemote),
      };
    }
    console.log(newQuery);
    router.push(
      {
        query: newQuery,
      },
      undefined,
      { scroll: false }
    );
  };
  return (
    <div
      onClick={() => onClick(!isRemote)}
      className="cursor-pointer flex justify-between mb-3"
    >
      <p>Remote</p>
      <Toggle isRemote={isRemote} toggle={setRemote} />
    </div>
  );
};

const Toggle: FC<{ isRemote: boolean; toggle: any }> = ({
  isRemote,
  toggle,
}) => {
  return (
    <div
      className={`rounded-[32px] p-1.5 w-12 ${
        isRemote ? "bg-primary-base" : "bg-ink-dark"
      }`}
    >
      <div
        className={`bg-white rounded-full w-3 h-3 transition-all ${
          isRemote ? "translate-x-[200%]" : ""
        }`}
      />
    </div>
  );
};
