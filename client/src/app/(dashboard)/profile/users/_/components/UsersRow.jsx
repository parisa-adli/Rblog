import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";

function UsersRow({ index, user }) {
  const { name, email, createdAt } = user;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toLocalDateShort(createdAt)}</td>
    </Table.Row>
  );
}
export default UsersRow;
