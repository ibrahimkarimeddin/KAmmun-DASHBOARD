import { baseURL } from "api/config";
import HovarableImage from "components/HovarableImage";
import Actions from "components/table/TableActions";
import { ToggleStatus } from "components/ToggleStatus";
import Null from "Mix/Null";

export const DynamicColumns = (t, Dynamic) => {      
  return Dynamic.map((column) => ({
    name: t(column.name),
    sortable: false,
    center: column.center ? column.center : true,
    width:  column.width ? column.width : "auto" ,
    maxWidth: "auto",
    // selector: column.name,
    cell: (row)=> <div className={column.name}>{(row[column.name] === null)? <Null/> : row[column.name] }</div>
  }))
}

export const ImageColumn = (t, name) => ({
  name: t(name),
  sortable: false,
  center: true,
  cell: (row) => (
    <span style={{ marginTop: "10px" }}>
      <HovarableImage
        src={`${baseURL}/images/${row["id"]}`}
        width="100"
      />
    </span>
  ),
});

export const ActionColumn = ({ setisOpen, setobjectToEdit, deleteMutation }) => ({
  name: '#',
  sortable: false,
  center: true,
  width: '12%',
  maxWidth: 'auto',
  cell: (row) => (
    <Actions
      onEdit={() => {
        setisOpen(true);
        setobjectToEdit(row);
        console.log("row",row);

      }}
      onDelete={() => deleteMutation.mutate({ id: row.id })}
    />
  ),
}
);
export const StatusColumn = (t, toggleMutation) => ({
  name: t("status"),
  sortable: false,
  center: true,
  width: '8%',
  maxWidth: 'auto',
  cell: (row) => (
    <ToggleStatus object={row} toggleMutation={toggleMutation} />
  ),
});