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
        `http://localhost:5000/tasks?email=${user?.email}`
      );
      return response.json();
    },
  });

  return [tasks, refetch];
};

export default useTask;
