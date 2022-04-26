export const scrollKe = (element_id: string) => {
  if (typeof window !== "undefined") {
    let element = document.getElementById(element_id);
    if (element) {
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }
};
