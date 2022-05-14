import { FC } from "react";
import { DashboardEditState } from "..";

export const SideBarCard: FC<{
  showModal: React.Dispatch<DashboardEditState>;
  type: DashboardEditState;
  text: string;
  children: React.ReactNode;
}> = ({ showModal, type, text, children }) => {
  return (
    <div className="blur4px bgGlass rounded-lg w-full p-4 mb-8">
      <h4 className="text-lg font-bold text-primary-darkest mb-1">{type}</h4>
      {children}
      <div
        onClick={() => showModal(type)}
        className="cursor-pointer text-sm bg-primary-lightest rounded-[48px] w-full p-4 flex justify-center text-primary-base"
      >
        {text}
      </div>
    </div>
  );
};
