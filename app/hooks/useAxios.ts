import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (URL : string ) => {
	const [response, setResponse] = useState<any>([])
	const [errorRes, setErrorRes] = useState('')
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/${URL}`)
      .then((res) => setResponse(res.data.data))
	  .catch((err) => setErrorRes(err))
  }, []);

  return {response, errorRes}
};

export default useAxios;
