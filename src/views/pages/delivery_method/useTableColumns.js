import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
import { useDeleteDelivery_method } from "api/delivery_method";

const useTableColumns = (setobjectToEdit, setisOpen) => {
  const t = useTranslation();
  const deleteMutation = useDeleteDelivery_method();

  return useMemo(
    () => [
      
      {
        name: t("name"),
        sortable: false,
        center: true,
        selector: "name",
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
    [t, deleteMutation]
  );
};

export default useTableColumns;
