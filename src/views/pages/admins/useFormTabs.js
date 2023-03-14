import React from "react";

import { MdLanguage } from "react-icons/md";
import { BsInfoCircle, BsImages } from "react-icons/bs";
import { useTranslation } from "utility/language";
import BasicInfo from "./admin_tabs/BasicInfo";
import AdminSubWareHoues from "./admin_tabs/AdminSubWareHoues";

const useFormTabs = (status, data) => {
  
  const t = useTranslation();
  let tabs = [
    {
      title: (
        <>
          <MdLanguage size={20} /> {t("basic_info")}
        </>
      ),
      content: <BasicInfo status={status} />,
    },
  ];
  if (data?.shopper) {
  }
  if (status !== "add") {
    
    tabs.push(
      
      {
      title: (
        <span>
          <BsInfoCircle size={20} /> {t("admin_sub_warehouse")}
        </span>
      ),
      content: <AdminSubWareHoues />,
    }
    );
  }
  return tabs;
};

export default useFormTabs;
