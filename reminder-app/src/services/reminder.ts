import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders(): Promise<Reminder[]> {
    const response = await this.http.get<Reminder[]>(`/todos`);
    return response.data;
  }

  async addReminder(title: string): Promise<Reminder> {
    const response = await this.http.post<Reminder>(`/todos`, { title });
    console.log(response.data);
    return response.data;
  }

  async removeReminder(id: number): Promise<void> {
    const response = await this.http.delete(`/todos/${id}`);
    return response.data;
  }
}

export default new ReminderService();
