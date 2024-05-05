"use client";
import { useAuth } from "@/components/providers/data-provider";
import { useState, useEffect } from "react";
import { REPLServer } from "repl";

interface FetchDataResponse {
  data: any;
  error: string | null;
  loading: boolean | null;
}
const url = "http://localhost:8000/getuser";
const useFetchData = (): FetchDataResponse => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await fetch("http://localhost:8000/getuser", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();

        setData(responseData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetchData;
