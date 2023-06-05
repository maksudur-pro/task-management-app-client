import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useTask = () => {
  const { user, loading } = useContext(AuthContext);
  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ["tasks", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await fetch(
        `https://task-management-app-server-maksudur-pro.vercel.app/tasks?email=${user?.email}`
      );
      return response.json();
    },
  });

  return [tasks, refetch];
};

export default useTask;
