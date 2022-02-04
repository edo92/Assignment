import axios from "axios";

export const getPhysicians = async (): Promise<any> => {
  return await axios.get("api/phisitians");
};

export const getSchedule = async (id: string): Promise<any> => {
  return await axios.get(`/get/schedule/${id}`);
};
