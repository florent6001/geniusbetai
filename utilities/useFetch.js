import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { API_KEY } from "@env"

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const rapidApiKey = API_KEY

    const options = {
      method: 'GET',
      url: `https://football-prediction-api.p.rapidapi.com/api/v2/${endpoint}`,
      params: {
        market: 'classic',
        iso_date: new moment().format('YYYY-MM-DD'),
        federation: 'UEFA'
      },
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
      }
    };

    fetchData = async () => {
      setLoading(true)
      if(endpoint != undefined) {
        try {
          const response = await axios.request(options);
          setData(response.data.data)
        } catch (err) {
          console.log(err)
        } finally {
          setLoading(false)
        }
      }
    }

    useEffect(() => {
      fetchData()
    }, [])

    return { data, loading, fetchData }
}

export default useFetch