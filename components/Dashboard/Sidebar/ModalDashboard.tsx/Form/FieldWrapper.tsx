import React from "react";

export const FieldWrapper: React.FC<{
  children: React.ReactNode;
  py: "8" | "16";
}> = ({ children, py }) => {
  return (
    <div
      className={`w-full mb-3 border border-sky-light rounded-lg px-4 ${
        py === "8" ? "py-2" : "py-4"
      }`}
    >
      {children}
    </div>
  );
};
