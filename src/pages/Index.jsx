import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Task Manager</h1>
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          <Input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-grow mr-2"
          />
          <Button onClick={addTask}>
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded shadow"
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
