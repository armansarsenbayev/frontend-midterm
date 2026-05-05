import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  
  const fetchData = useCallback(async () => {
    
    if (!url) return;

    setLoading(true);
    setError(null);

    
    const controller = new AbortController();

    try {
      const response = await fetch(url, { signal: controller.signal });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      setData(json);

    } catch (err) {
      
      if (err.name === 'AbortError') {
        console.log('Fetch aborted — component unmounted');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }

    
    return () => controller.abort();
  }, [url]);

  useEffect(() => {
    
    let cleanup;

    const run = async () => {
      cleanup = await fetchData();
    };

    run();

    
    
    return () => {
      if (cleanup) cleanup();
    };
  }, [fetchData]);

  
  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
