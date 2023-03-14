import { DynamicColumns, ActionColumn, StatusColumn } from "K_Layout/ColumnLayout";
import { useMemo } from "react";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
const useTableColumns = (deleteMutation, setisOpen, setobjectToEdit) => {
  const t = useTranslation();
  const Dynamic = [
    { name: "supported_city_id" }, { name: "street" }, { name: "building" },
    { name: "entrance"}, { name: "floor" }, { name: "address_title" }

];


  return useMemo(
    () => [
     
      ...DynamicColumns(t, Dynamic),
     
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
