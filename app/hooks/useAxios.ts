import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (content_type : string, params? : string) => {
	const [response, setResponse] = useState<any>([])
	const [errorRes, setErrorRes] = useState('')
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/${content_type}?populate=*&${params}`)
      .then((res) => setResponse(res.data.data))
	  .catch((err) => setErrorRes(err))
  }, []);

  return {response, errorRes}
};

export default useAxios;
