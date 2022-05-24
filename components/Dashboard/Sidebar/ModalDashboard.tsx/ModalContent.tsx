import { FC } from "react";
import { DashboardModalProps } from ".";
import { DashboardEditState } from "../..";
import { AccountForm, JobFairForm, ProfileForm } from "./Form";

export const ModalContent: FC<DashboardModalProps> = ({
  currentState,
  data,
  showModal,
}) => {
  switch (currentState) {
    case DashboardEditState.PROFILE:
      return (
        <ProfileForm
          data={data.profile}
          close={() => showModal(DashboardEditState.NOSHOW)}
        />
      );
    case DashboardEditState.ACCOUNT:
      return (
        <AccountForm
          data={data.account}
          close={() => showModal(DashboardEditState.NOSHOW)}
        />
      );
    case DashboardEditState.JOBFAIR:
      return (
        <JobFairForm
          data={data.jobfairProfile}
          close={() => showModal(DashboardEditState.NOSHOW)}
        />
      );
    default:
      return null;
  }
};
