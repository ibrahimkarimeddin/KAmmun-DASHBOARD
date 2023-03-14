import { DynamicColumns } from "K_Layout/ColumnLayout";
import { useMemo } from "react";
import { useTranslation } from "utility/language";
const useTableColumns = () => {
  const t = useTranslation();
  const Dynamic = [{ name: "name" },{ name: "unit" }, { name: "warehouse_id"},
  { name: "sub_warehouse_id" }
  ]

  return useMemo(
    () => [
      ...DynamicColumns(t, Dynamic)
    ],
    [t]
  );
};

export default useTableColumns;
