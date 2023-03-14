import { DynamicColumns } from "K_Layout/ColumnLayout";
import { useMemo } from "react";
import { useTranslation } from "utility/language";
const useTableColumns = () => {
  const t = useTranslation();
  const Dynamic = [{ name: "supported_city_cost" },{ name: "delivery_cost" }, { name: "supported_city_cost"},
  { name: "payment_method" },{ name: "supported_city" }, { name: "warehouse"}
  ]

  return useMemo(
    () => [
      ...DynamicColumns(t, Dynamic)
    ],
    [t]
  );
};

export default useTableColumns;
