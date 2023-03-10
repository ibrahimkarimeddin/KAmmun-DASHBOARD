import { useUpdateWareHouseStatus } from "api/warehouse";
import { DynamicColumns, ActionColumn, StatusColumn } from "K_Layout/ColumnLayout";
import { useMemo } from "react";
import { useTranslation } from "utility/language";

const useTableColumns = (setobjectToEdit, setisOpen,deleteMutation) => {
  const t = useTranslation();
  const Dynamic = [{name:"name",width:"10%",center: false,},{name:"phone",width:"10%"},{name:"roles",width:"40%"}];
  const toggleMutation = useUpdateWareHouseStatus();


  return useMemo(
    () => [
      ...DynamicColumns(t,Dynamic),
      {
        name: t("warehouse"),
        sortable: false,
        maxWidth: 'auto',
        width:"10%",
        cell: (row) => (
          <p style={{ fontSize: "14px" }}>{row?.warehouse?.name}</p>
        ),
      },
      ActionColumn({setisOpen, setobjectToEdit,deleteMutation})
    ],
    [t,setisOpen, setobjectToEdit,deleteMutation]
  );
};

export default useTableColumns;
