import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
import { ToggleStatus } from "components/ToggleStatus";
import { useDeleteWareHouse, useUpdateWareHouseStatus } from "api/warehouse";

const useTableColumns = (setEditModal, setObjectToEdit) => {
  const t = useTranslation();
  const deleteMutation = useDeleteWareHouse();
  const toggleMutation = useUpdateWareHouseStatus();

  return useMemo(
   
    () => [
      {
        name: t("name"),
        selector: "name",
        center: true,
      },
      {
        name: t("description"),
        selector: "description",
        center: true,
      },
      {
        name: t("number_of_workers"),
        selector: "number_of_workers",
        center: true,
      },
      {
        name: t("work_start_time"),
        selector: "work_start_time",
        center: true,
      },
      {
        name: t("work_end_time"),
        selector: "work_end_time",
        center: true,
      },
      {
        name: t("friday_start_time"),
        selector: "friday_start_time",
        center: true,
      },
      {
        name: t("friday_end_time"),
        selector: "friday_end_time",
        center: true,
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
        cell: (row) => {

          return (
            <Actions
          
            onEdit={() => {
              setEditModal(true);
              setObjectToEdit(row);
            }}
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
          )
        }
      },
    ],
    [t, deleteMutation, toggleMutation, setEditModal, setObjectToEdit]
  );
};

export default useTableColumns;
