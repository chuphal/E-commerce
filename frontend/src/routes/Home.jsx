import React, { useState } from "react";
import Homeitem from "../components/Homeitem";
import { useSelector } from "react-redux";
import PaginatedList from "../components/Pagination";

const Home = () => {
  const items = useSelector((store) => store.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(3);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = items.slice(firstPostIndex, lastPostIndex);
  return (
    <main>
      <div className="items-container">
        {currentPost.map((item) => (
          <Homeitem key={item.id} item={item} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <PaginatedList
          postsPerPage={postPerPage}
          totalPosts={items.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </main>
  );
};

export default Home;
