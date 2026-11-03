import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberformatter";
import truncateText from "@/utils/truncateText";
import { DeleteCategory, UpdateCategory } from "./Buttons";

function CategoryRow({ category, index }) {
  const { title, englishTitle, createdAt, description } = category;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>
        <p className="badge badge--secondary">{englishTitle}</p>
      </td>
      <td>{truncateText(description, 30)}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdateCategory id={category._id} />
          <DeleteCategory category={category} />
        </div>
      </td>
    </Table.Row>
  );
}
export default CategoryRow;
