import React from "react";
import { MdLanguage } from "react-icons/md";
import { BsInfoCircle,BsCartPlusFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

import { useTranslation } from "utility/language";
import ModelForm from "K_Layout/model/ModelForm";
import UserOrder from "./Forms/UserOrder";
import UserFav from "./Forms/UserFav";
import { useGetWareHouse } from "api/warehouse";
import { useGetSupportedCity } from "api/SupportedCity";

const useFormTabs = (status) => {
  const t = useTranslation();
  const {data:SelecWareHouse} = useGetWareHouse()
  const {data:SelecSupportedCity}= useGetSupportedCity()
  const PlatForm = [{name:"Android"},{name:"Iphone"}]
  const EditData = [
    { name: 'name', type: 'text', col: 1 }, { name: 'phone', type: 'number', col: 1 },
    { name: 'platform_type', type: 'select', col: 1, option:PlatForm},
    { name: 'supported_city', type: 'select', col: 2, option:SelecSupportedCity},
    { name: 'limit_total_cost', type: 'text', col: 2 },
    { name: 'warehouse', type: 'select', col: 2, option:SelecWareHouse},
  ]
    const AddData =EditData

  let tabs = [];
  if (status === "add") {
    tabs.push({
      title: (
        <>
          <MdLanguage size={20} /> {t("add_new_user")}
        </>
      ),
      content: <ModelForm ModelData={AddData} />

    },)
  }
  if (status !== "add") {
    tabs.push(
      {
        title: (
          <span>
            <BsInfoCircle size={20} /> {t("edit_user_info")}
          </span>
        ),
        content: <ModelForm ModelData={EditData} />
      },
      {
        title: (
          <span>
            <BsCartPlusFill size={20} /> {t("UserOrders")}
          </span>
        ),
        content: <UserOrder/>
      }
      ,
      {
        title: (
          <span>
            <FcLike size={20} /> {t("favourite_order")}
          </span>
        ),
        content: <UserFav/>
      }
    );
  }
  return tabs;
};

export default useFormTabs;
