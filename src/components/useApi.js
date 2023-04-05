import React, { useState, useEffect } from "react";

function useApi(category) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategory();
  }, [category]);

  const getCategory = async () => {
    const api = await fetch(`http://localhost:1337/api/${category}?populate=*`);
    if (api.ok) {
      const res = await api.json();
      setData(res.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, data, loading };
}

export default useApi;
