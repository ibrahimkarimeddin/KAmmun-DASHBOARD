import React, { useMemo } from "react";
import {  useTranslation } from "utility/language";
import { history } from "../../../history";
import { GrView,GrUserAdmin } from "react-icons/gr";
import { AiFillStar, AiFillUnlock } from "react-icons/ai";
import { useUpdateAdminstatus } from "api/admin.js";
import { MdAddBusiness } from "react-icons/md";
import './Admin.scss'
import { ToggleStatus } from "components/ToggleStatus";

const useTableColumns = (setIsOpen ,  setobjectToEdit, setIsOpen2) => {

  const t = useTranslation();
  const toggleMutation = useUpdateAdminstatus();

  return useMemo(
    () => [
      {
        name: t("is_super_user"),
        selector: "is_super_user",
        sortable: false,
        center: true,
        width: '11%',
        maxWidth: 'auto',
        cell: (row) => (
          <>
            {row?.is_super_user ? (
              <AiFillStar style={{ color: "#FFC085" }} size={18} />
            ) : null}
          </>
        ),
       
      },
      {
        name: t("name"),
        sortable: false,
        center: true,
        selector: "username",
        width: '11%',
        maxWidth: 'auto',
      },
      {
        name: t("phone"),
        sortable: false,
        center: true,
        selector: "phone",
        width: '11%',
        maxWidth: 'auto',
      },
      {
        name: t("roles"),
        sortable: false,
        // center: true,
        width: '30%',
        maxWidth: 'auto',
        cell: (row) => <p  className="roles" style={{ fontSize: "12px" }}>{row?.roles}</p>,
      },
      {
        name: t("warehouse"),
        sortable: false,
        center: true,
        cell: (row) => (
          <p style={{ fontSize: "14px" }}>{row?.warehouse?.name}</p>
        ),
      },
      {
        name: t("status"),
        sortable: false,
        center: true,
        cell: (row) => 
          {
            row['is_active'] = row?.is_blocked 

            return   <ToggleStatus object={row} toggleMutation={toggleMutation} />

          }
        ,
      },
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => {
          return (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "122px",
              }}
            >
              <GrView
                onClick={() => history.push(`/dashboard/admin/${row?.id}`)}
                size={22}
                style={{ cursor: "pointer" }}
              />

              <MdAddBusiness
                className="cursor-pointer "
                size={20}
                style={{
                  marginInline: 5,
                }}
                onClick={() => {
                  setIsOpen(true) 
                  setobjectToEdit(row)
                }}
              />
               <AiFillUnlock
                className="cursor-pointer "
                size={20}
                style={{
                  marginInline: 5,
                }}
                onClick={() => {
                  setIsOpen2(true) 
                  setobjectToEdit(row)
                }}
              />
             

            
            </span>
          );
        },
      },
    ],
    [t, toggleMutation]
  );
};

export default useTableColumns;
