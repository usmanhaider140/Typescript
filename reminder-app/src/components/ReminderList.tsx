import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}
const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className="list-group-item d-flex align-items-center justify-content-between"
          key={item.id}
        >
          <p>{item.title}</p>
          <button
            onClick={() => onRemoveReminder(item.id)}
            className="btn btn-danger btn-sm rounded-pill"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
