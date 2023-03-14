import { DynamicColumns, ActionColumn, StatusColumn } from "K_Layout/ColumnLayout";
import { useMemo } from "react";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
const useTableColumns = (deleteMutation, setisOpen, setobjectToEdit) => {
  const t = useTranslation();
  const Dynamic = [{ name: "name", width: "20%" }, { name: "delivery_price" }, { name: "support_phone_number", width: "37%" }];


  return useMemo(
    () => [
      ...DynamicColumns(t, Dynamic),
      {
        name: t("warehouse"),
        sortable: false,
        maxWidth: "auto",
        width: "auto",
        cell: (row) => (
          <p style={{ fontSize: "14px" }}>{row?.warehouse?.name}</p>
        ),
      },
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => {
          return (
            <span className="Actions">
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
      },],
    [t, setisOpen, setobjectToEdit, deleteMutation]
  );
};

export default useTableColumns;
