import { useGetQuery ,useGetQuery2 } from "./helpers";
const API=`/api/admin/get_dashboard_statistics`
export const useGetStatistics=(params)=>useGetQuery2("STATISTICS",API, params);