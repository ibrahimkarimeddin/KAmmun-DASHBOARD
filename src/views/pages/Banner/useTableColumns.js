import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
import { FaUserEdit } from "react-icons/fa";
import { useDeleteBanner } from "api/Banner";
import HovarableImage from "components/HovarableImage";
import { baseURL } from "api/config";

const useTableColumns = (setobjectToEdit, setisOpen) => {
  const t = useTranslation();
  const deleteMutation = useDeleteBanner();

  return useMemo(
    () => [
      {
        name: t("image"),
        sortable: false,
        center: true,
        cell: (row) => { 
          return(
        <span style={{marginTop:"10px"}}>
          <HovarableImage
            id={`banner_image_${row.id}`}
            src={`${baseURL}/images/${row.image_file_name}`}
            width="100"
            />  
        </span>
        
        )},
      },
      {
        name: t("title"),
        sortable: false,
        center: true,
        selector: "title",
      },
      {
        name: t("description"),
        sortable: false,
        center: true,
        selector: "description",
      },
      
  
      {
        name: t("expiration_date"),
        sortable: false,
        selector: "expiration_date",
        // cell: (row) => <p  className="roles" style={{ fontSize: "12px" }}>{row?.expiration_date}</p>,
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
                justifyContent: "center",
                gap: "5px",
                width: "122px",
              }}
            >
              <Actions
                onEdit={() => {
                  setisOpen(true);
                  setobjectToEdit(row);
                }}
                onDelete={() => deleteMutation.mutate({ id: row.id })}
              />
            </span>
          );
        },
      },
    ],
    [t, deleteMutation ,setobjectToEdit,setisOpen]
  );
};

export default useTableColumns;
