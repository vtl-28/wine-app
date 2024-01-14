import { useQuery } from "@tanstack/react-query";
import { fetchWines } from "../Utils/wine";

export const useFetchWines = () => {
    const { data, error, status, isError, isLoading } = useQuery({
        queryKey: ["wines"],
        queryFn: fetchWines,
        refetchOnMount: true,
        refetchInterval: 2000,
        refetchIntervalInBackground: true,
        refetchOnWindowFocus: true,
      });
      return { data, error, status, isError, isLoading };
}