const loadData = async (url) => {
  const response = await fetch(url);
  const data = response.json();
  return data;
};

const apiBase =
  "http://boomkarksapp.eba-f23q8pts.us-east-2.elasticbeanstalk.com/v1";

export { loadData, apiBase };
