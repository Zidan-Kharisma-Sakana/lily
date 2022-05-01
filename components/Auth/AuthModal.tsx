import { FC } from "react";

export const AuthModal: FC<{
  children: React.ReactNode;
  close: () => void;
  open: boolean;
  preventClose?: boolean;
}> = ({ children, close, open, preventClose }) => {
  if (!open) return <></>;
  return (
    <div
      onClick={() => {
        if (!preventClose) close();
      }}
      style={{
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
      }}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="md:rounded-3xl w-full sm:w-auto overflow-hidden relative md:px-10 lg:px-0 "
      >
        <div
          onClick={close}
          className="text-black text-3xl md:hidden font-medium absolute right-7 top-7 cursor-pointer"
        >
          &#x2715;
        </div>
        {children}
      </div>
    </div>
  );
};
