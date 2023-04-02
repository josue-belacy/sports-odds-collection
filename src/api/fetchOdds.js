import axios from "axios";

const getOptions = () => {
  console.log(process.env.REACT_APP_RAPID_API_KEY);
  return {
    method: "GET",
    url: "https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds",
    params: {
      regions: "us",
      oddsFormat: "american",
      markets: "h2h,spreads",
      dateFormat: "iso",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "odds.p.rapidapi.com",
    },

    cache: "force-cache",
  };
};

export const fetchOdds = async () => {
  const options = getOptions();

  try {
    const result = await axios.request(options);

    console.log({ result });

    return {
      success: true,
      data: result.data,
    };
  } catch (e) {
    return {
      error: true,
      data: e,
    };
  }
};
