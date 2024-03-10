import axiosInstance from './useAxios'

// Fetch all rooms from db
export const getAllRooms = async () => {
  const { data } = await axiosInstance('/alljobs')
  return data
}
 