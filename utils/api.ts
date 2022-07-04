import Axios, { AxiosInstance } from "axios";
import { NextApiRequest } from "next";

export const baseURL = (url: string) => `${process.env.NEXT_PUBLIC_BE_ENDPOINT}/${url}`;
export const baseURLFE = (url: string) =>
  `${process.env.NEXT_PUBLIC_BE_ENDPOINT}/${url}`;

export const poster = (url: string, req: NextApiRequest): Promise<Response> => {
  return fetch(baseURL(url), {
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const analytics = async (eventId: number) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BE_ENDPOINT}/api/statistic/${eventId}/`,
    {
      method: "GET",
    }
  );
};

export const patcher = (
  url: string,
  req: NextApiRequest,
  ismulti?: boolean
): Promise<Response> => {
  return fetch(baseURL(url), {
    body: ismulti ? req.body : JSON.stringify(req.body),
    headers: {
      "Content-Type": ismulti
        ? "multipart/form-data; boundary=xxx"
        : "application/json",
      Authorization: req.headers.authorization ?? "",
    },
    method: "PATCH",
  });
};

export const posterFormData = (
  url: string,
  formData: any
): Promise<Response> => {
  return fetch(baseURL(url), {
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data; boundary=XXX",
    },
    method: "POST",
  });
};
export const fetcher = (url: string, token: string): Promise<Response> => {
  return fetch(baseURL(url), {
    headers: {
      Authorization: token,
    },
    method: "GET",
  });
};

const api: AxiosInstance = Axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
