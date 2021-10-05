export const getLatestNews = async () => {
  const res = await fetch('https://hn.algolia.com/api/v1/search?query=react&hitsPerPage=10&page=0');
  return await res.json();
};
