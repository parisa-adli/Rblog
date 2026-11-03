import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import UsersRow from "./UsersRow";
import { getAllUsersApi } from "@/services/authService";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnReq";

async function UsersTable() {
  const cookieStore = await cookies();
  const options = await setCookieOnReq(await cookieStore);
  const { users } = await getAllUsersApi(options);

  console.log(users);
  if (!users.length) return <Empty resourceName="کاربری" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام کاربر</th>
        <th>ایمیل</th>
        <th>تاریخ ثبت نام</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UsersRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default UsersTable;
