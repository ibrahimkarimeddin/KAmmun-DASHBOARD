import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import Null from "Mix/Null";
import { history } from "../../../history";
import { GrView } from "react-icons/gr";
import { StatusColumn } from "K_Layout/ColumnLayout";
import { useUpdateUserstatus } from "api/User";

const useTableColumns = (setobjectToEdit, setisOpen) => {
  const t = useTranslation();
  const Dynamic = [{ name: "name", width: "9%" },{ name: "phone" }, { name: "platform", width: "11%" },
  { name: "supported_city", width: "9%" },{ name: "limit_total_cost" }]
  const toggleMutation = useUpdateUserstatus()

  return useMemo(
    () => [
      {
        name: t("name"),
        sortable: true,
        width: '9%',
        maxWidth: 'auto',
       cell: (row)=> <div>{(row?.name === null)? <p style={{color:"red"}}>Gost</p> : row?.name }</div>,
    
        
      },
      {
        name: t("phone"),
        sortable: false,
        center: true,

        selector: "phone",
        
      },
      {
        name: t("platform"),
        sortable: false,
        center: true,
        width: '11%',
        maxWidth: 'auto',
        cell: (row)=> <div>{(row?.platform_type === null)? <Null/> : row?.platform_type }</div>
      },
      {
        name: t("city"),
        sortable: false,
        center: true,
        width: '9%',
        maxWidth: 'auto',
        cell: (row)=> <div>{(row?.supported_city=== null)? <Null/> : row?.supported_city }</div>
      },
      {
        name: t("warehouse"),
        sortable: false,
        center: true,
        width: '9%',
        maxWidth: 'auto',
        cell: (row)=> <div>{(row?.warehouse === null)? <Null/> : row?.warehouse?.name }</div>
      },
      {
        name: t("order_count"),
        sortable: true,
        center: true,
       cell: (row)=> <div>{(row?.order_count === 0)? <p style={{color:"red"}}>أبو نجيب</p> : row?.order_count }</div>

        
      },
      StatusColumn(t,toggleMutation),
  
      {
        name: t("join_at"),
        sortable: false,
        selector: "created_at",
        cell: (row)=>{
          console.log(row)
          return  row.created_at  
        }
      },

      {
        name: "#",
        center: true,
        cell: (row) => {
          return (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "122px",
              }}
            >
               <GrView
                onClick={() => history.push(`/admin/${row?.id}`)}
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
