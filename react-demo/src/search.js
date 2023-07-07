import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ serverKey, tokenu, id, keyword }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://test.e-prathibha.com/apis/search_api',
          { key: keyword },
          { headers: { Id: id, server_key: serverKey, tokenu } }
        );
        console.log('Response data:', response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id, serverKey, tokenu, keyword]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return  <div>
  {data && data.search && data.search.length > 0 && (
    <div>
      <p>{data.search[0].question.question.above}</p>
      <p>{data.search[0].question.question.table}</p>
      <p>{data.search[0].question.question.below}</p>
    </div>
  )}
</div>
};

export default Search;