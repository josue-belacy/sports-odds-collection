import axios from "axios";

const getOptions = (key) => {
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
      "X-RapidAPI-Key": "c7b8b2155cmsh102f89208c26a47p12fd1ejsn02bc006d09eb",
      "X-RapidAPI-Host": "odds.p.rapidapi.com",
    },
  };
};

export const fetchOdds = async (key) => {
  const options = getOptions(key);

  try {
    const result = await axios.request(options);

    console.log(result, "::result");
    return {
      success: true,
      data: result.data.data,
    };
  } catch (e) {
    console.log(e);
  }
};
