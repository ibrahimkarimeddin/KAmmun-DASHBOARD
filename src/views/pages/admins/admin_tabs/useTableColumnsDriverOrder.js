import React, { useMemo } from "react";

import { useBackendLanguageCode, useTranslation } from "utility/language";
import { history } from "../../../../history";
import { ToggleStatus } from "components/ToggleStatus";
import { GrView } from "react-icons/gr";

const useTableColumnsDriverOrder = (categories, setEditModal, setObjectToEdit) => {
  const t = useTranslation();
  const languageCode = useBackendLanguageCode();

  return useMemo(
    () => [
      {
        name: t("name"),
        sortable: false,
        center:true,
        selector:"name"
      },
      {
        name: t("discount_percentage"),
        sortable: false,
        center: true,
        selector:"discount_percentage"
      },
      
      {
        name: t("work_start_time"),
        selector: "work_start_time",
        sortable: false,
        center: true,
      },
      {
        name: t("work_end_time"),
        selector: "work_end_time",
        sortable: false,
        center: true,
      },
      {
        name: t("friday_start_time"),
        selector: "friday_start_time",
        sortable: false,
        center: true,
      },
      {
        name: t("friday_end_time"),
        selector: "friday_end_time",
        sortable: false,
        center: true,
      },
      
    
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
          <GrView
          onClick={()=>history.push(`/order/${row.id}`)}
          size={22}
          style={{ cursor: "pointer" }}
        />
        ),
      },
    ],
    [
      t,
      categories,
      
      
      setEditModal,
      setObjectToEdit,
      languageCode,
    ]
  );
};

export default useTableColumnsDriverOrder;
