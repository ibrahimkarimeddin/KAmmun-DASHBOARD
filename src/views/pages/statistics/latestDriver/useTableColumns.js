import { useMemo } from "react";
import { GrView } from "react-icons/gr";
import { useTranslation } from "utility/language";
import {history} from '../../../../history'



const useTableColumns = () => {
    const t = useTranslation();

    return useMemo(
        () => [
            {
                name: t("full_name"),
                selector: "full_name",
                sortable: false,
                center: true,
            },
            {
                name: t("phone"),
                selector: "phone",
                sortable: true,
                center: true,

            },
            {
                name: t("wallet"),
                selector: "wallet",
                sortable: true,
                center: true,

            },
            {
                name: "#",
                selector: "action",
                sortable: false,
                center: true,
                cell: (row) => (
                    <GrView
                        onClick={() => history.push(`/dashboard/driver/${row.id}`)}
                        size={22}
                        style={{ cursor: "pointer" }}
                    />
                ),
            },
            


        ],
        [t]
    );
};

export default useTableColumns;
