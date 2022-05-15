import { NextRouter } from "next/router";

export const restoreFilter = (
  router: NextRouter,
  items: { text: string; code: string }[],
  section: string,
  setChecked: any
) => {
  const queries = router.query;
  let filtered: string[] = Array.isArray(queries[section])
    ? (queries[section] as string[])
    : Array(queries[section] as string);
  const newChecked = items.map((item) => filtered.includes(item.code));
  setChecked(newChecked);
};
export const onClickFilter = (router: NextRouter, section: string, code: string) => {
  const queries = router.query;
  let filtered: string[] = Array.isArray(queries[section])
    ? (queries[section] as string[])
    : Array(queries[section] as string);

  if (filtered.includes(code)) {
    filtered = filtered.filter((obj) => obj !== code);
  } else {
    filtered.push(code);
  }
  const newQuery = queries;
  newQuery[section] = filtered;
  router.push(
    {
      query: newQuery,
    },
    undefined,
    { scroll: false }
  );
};
