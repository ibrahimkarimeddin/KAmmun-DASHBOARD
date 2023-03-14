import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import Null from "Mix/Null";
import { history } from "../../../history";
import { GrView } from "react-icons/gr";
import { DynamicColumns, StatusColumn } from "K_Layout/ColumnLayout";
import { useUpdateUserstatus } from "api/User";

const useTableColumns = () => {
  const t = useTranslation();
  const Dynamic = [{ name: "name", width: "9%" },{ name: "phone" }, { name: "platform_type", width: "11%" },
  { name: "supported_city", width: "9%" },{ name: "limit_total_cost" }]
  const toggleMutation = useUpdateUserstatus()

  return useMemo(
    () => [
      ...DynamicColumns(t, Dynamic),
     
      {
        name: t("warehouse"),
        sortable: false,
        center: true,
        width: '11%',
        maxWidth: 'auto',
        cell: (row)=> <div>{(row?.warehouse?.name === null)? <Null/> : row?.warehouse?.name }</div>
      },
      {
        name: t("order_count"),
        sortable: true,
        center: true,
       cell: (row)=> <div>{(row?.order_count === 0)? <p style={{color:"red"}}>أبو نجيب</p> : row?.order_count }</div>

        
      },
      StatusColumn(t,toggleMutation),
  
    
      {
        name: "#",
        center: true,
        cell: (row) => {
          return (
            <span className="Actions">
               <GrView
                onClick={() => history.push(`/dashboard/user/${row?.id}`)}
                size={22}
                style={{ cursor: "pointer" }}
              />
        
            </span>
          );
        },
      },
    ],
    [t]
  );
};

export default useTableColumns;
