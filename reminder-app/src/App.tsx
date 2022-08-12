import React, { useEffect, useState } from "react";
import "./App.css";
import NewReminder from "./components/NewReminder";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = async (id: number) => {
    setReminders(reminders.filter((r) => r.id !== id));
  };

  const addReminder = async (title: string) => {
    const reminder = await reminderService.addReminder(title);
    setReminders([reminder, ...reminders]);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div>
      <NewReminder submitReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
