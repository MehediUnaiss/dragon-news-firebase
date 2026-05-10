import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../components/Navbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [id, data]);
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <nav className="py-10">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-6">
        <section className="col-span-9">
          <h1 className="font-semibold mb-5">News Details</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3 flex justify-end">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
