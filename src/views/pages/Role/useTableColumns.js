import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import Null from "Mix/Null";
import { history } from "../../../history";
import { GrView } from "react-icons/gr";
import { DynamicColumns, StatusColumn } from "K_Layout/ColumnLayout";

const useTableColumns = () => {
  const t = useTranslation();
  const Dynamic = [{ name: "name" },{ name: "phone" }, { name: "platform_type", width: "11%" },
  { name: "supported_city", width: "9%" },{ name: "limit_total_cost" }]

  return useMemo(
    () => [
      ...DynamicColumns(t, Dynamic),
     
      
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
