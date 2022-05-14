export const scrollKe = (element_id: string) => {
  if (typeof window !== "undefined") {
    let element = document.getElementById(element_id);
    if (element) {
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }
};
export const shortenName = (name: string, max: number) => {
  if (name.length > max) {
    return name.slice(0, max) + "..";
  }
  return name;
};