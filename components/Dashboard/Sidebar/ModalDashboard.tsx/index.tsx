import { DashboardEditState, UserInfo } from "../..";
import { ModalContent } from "./ModalContent";

export interface DashboardModalProps {
  data: UserInfo;
  showModal: React.Dispatch<DashboardEditState>;
  currentState: DashboardEditState;
}

export const DashboardModal: React.FC<DashboardModalProps> = (props) => {
  if (props.currentState == DashboardEditState.NOSHOW) return null;
  return (
    <div
      onClick={() => props.showModal(DashboardEditState.NOSHOW)}
      className="fixed z-[100] top-0 left-0 w-screen h-screen flex justify-center items-center blur16px bg-[rgba(0,0,0,0.1)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-4 md:p-8 w-full mx-4 sm:w-[391px] "
      >
        <ModalContent {...props} />
        <div
          onClick={() => props.showModal(DashboardEditState.NOSHOW)}
          className="text-center p-2 cursor-pointer text-primary-base font-medium text-sm"
        >
          Cancel
        </div>
      </div>
    </div>
  );
};
