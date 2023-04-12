import React, { useState, useEffect } from "react";

function useApiSearch(filter) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!filter || filter.trim() === "" || filter.length < 3) {
      setData([]);
      setLoading(false);
      return;
    }

    getSearch();
  }, [filter]);

  const getSearch = async () => {
    const api = await fetch(
      `https://strapicms-production-09eb.up.railway.app/api/testiramo?filter=${filter}`
    );
    if (api.ok) {
      const res = await api.json();
      setData(res);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, data, loading };
}

export default useApiSearch;
