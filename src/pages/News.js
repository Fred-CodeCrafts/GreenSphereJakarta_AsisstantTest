import React, { useEffect, useState } from "react";

const API_KEY = "5da35ba395be4aadb797cc5a7c27c203";

function News() {
  const [environmentNews, setEnvironmentNews] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("Environment Jakarta");

  const fetchNews = async (query) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          query
        )}&from=2025-01-01&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}&language=en`
      );
      const data = await response.json();
      if (data.articles) {
        // Filter out articles without images
        const filteredArticles = data.articles.filter(
          (article) => article.urlToImage
        );
        setEnvironmentNews(filteredArticles);

        // Update to a more specific query if no articles are found
        if (filteredArticles.length === 0 && query === "Environment Jakarta") {
          setCurrentQuery("Sustainability Jakarta");
        } else if (
          filteredArticles.length === 0 &&
          query === "Sustainability Jakarta"
        ) {
          setCurrentQuery("Climate Change Jakarta");
        }
      }
    } catch (error) {
      console.error("Error fetching Environment news:", error);
    }
  };

  useEffect(() => {
    fetchNews(currentQuery);
  }, [currentQuery]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Environment Headlines</h1>
      </header>
      <main className="container mx-auto py-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Latest News on the Environment
          </h2>
          {environmentNews.length === 0 ? (
            <p className="text-center text-gray-500">Loading news...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {environmentNews.map((article, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="rounded-md w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {article.description || "No description available."}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2025 Environment News Jakarta. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default News;
