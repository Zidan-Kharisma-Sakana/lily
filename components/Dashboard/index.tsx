import { FC } from "react";
import { AccountFormProps, JobFairFormProps, ProfileFormProps } from "./Sidebar/ModalDashboard.tsx/Form";

export enum DashboardEditState {
  PROFILE = "Profile",
  ACCOUNT = "Account",
  JOBFAIR = "Job Fair Profile",
  NOSHOW = "noshow",
}
export interface UserInfo {
  profile: ProfileFormProps
  account:AccountFormProps
  jobfairProfile: JobFairFormProps[]
}

export * from "./Card/AppliedCard";
export * from "./Card/RegisteredCard";
export * from "./Sidebar";
