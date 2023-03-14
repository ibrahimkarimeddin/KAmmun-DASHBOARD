import React, { useMemo } from "react";
import { useDeleteCategory, useUpdateCategoryStatus } from "api/categories";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
// import { history } from "../../../history";
import { mapTranslatedProperties } from "helpers/language";
import { ToggleStatus } from "components/ToggleStatus";
import HovarableImage from "components/HovarableImage";
import { baseURL } from "api/config";

const useTableColumns = (setEditModal, setObjectToEdit) => {
  const t = useTranslation();
  const deleteMutation = useDeleteCategory();
  const toggleMutation = useUpdateCategoryStatus();

  return useMemo(
   
    () => [
      {
        name: t("name"),
        selector: "code",
        sortable: true,
        center: true,
      },
      {
        name: t("description_user"),
        selector: "description_user",
        sortable: true,
        center: true,
      },
      {
        name: t("usage_limit"),
        selector: "usage_limit",
        sortable: true,
        center: true,
        width:'80px'
      },
      {
        name: t("max_orders"),
        selector: "max_orders",
        sortable: true,
        center: true,
      },
     
 

      {
        name: t("max_cost"),
        selector: "max_cost",
        sortable: true,
        center: true,
      },
      {
        name: t("expiration_date"),
        selector: "expiration_date",
        sortable: true,
        cell:(row)=>row?.expiration_date
     
      },
      {
        name: t("status"),
        sortable: false,
        center: true,
        cell: (row) => (
          <ToggleStatus object={row} toggleMutation={toggleMutation} />
        ),
      },
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
          <Actions
            onEdit={() => {
              setEditModal(true);
              setObjectToEdit(row);
            }}
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
        ),
      },
    ],
    [t, deleteMutation, toggleMutation, setEditModal, setObjectToEdit]
  );
};

export default useTableColumns;
