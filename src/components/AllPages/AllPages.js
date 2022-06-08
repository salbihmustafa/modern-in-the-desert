import "./AllPages.css";
import PageArray from "../PageArray/PageArray";

const AllPages = () => {
  const {pages} = PageArray();

  const pageContent = pages.map((page) => {
    return (
      <img key={page} src={page} alt="Modern in the Desert"/>
    )
  });

  return (
    <>
      {pageContent}
    </>
  );
};

export default AllPages;
