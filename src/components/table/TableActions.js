import React from "react";
import { Edit, Trash } from "react-feather";
import confirmAlert from "extensions/confirm-alert";
import { toast } from "react-toastify";
import { useTranslation } from "utility/language";


const TableActions = ({ onDelete, onEdit,showEdit=true,showDelete=true, ...props }) => {
  const t = useTranslation();

  return (
      <div className="data-list-action" >
      {
        showEdit&&<Edit onClick={onEdit} className="cursor-pointer m-1" size={20} />
      }  
      {
        showDelete&&<Trash
        onClick={() =>
          confirmAlert({
            onConfirm: () => {
              toast.info(t("_loading.delete"));
              onDelete();
            },
          
          })
        }
        className="cursor-pointer"
        size={20}
      />
      }
      
        
        {props.children}
      </div>
  );
};

export default TableActions;
