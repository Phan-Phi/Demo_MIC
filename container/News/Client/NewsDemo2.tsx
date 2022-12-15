// import { Image } from "components";
// import React, { useEffect, useState } from "react";
// // import useDebounce from "./useDebounce";

// const url =
//   "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

// const Home = () => {
//   const API_ENDPOINT =
//     "https://mic.t-solution.vn/api/v2/pages/?fields=%2A&type=news.NewsDetailPage";
//   const [movies, setMovies] = useState([]);
//   console.log("🚀 ~ file: NewsDemo2.tsx:12 ~ Home ~ movies", movies);

//   const [page, setPage] = useState(1);
//   console.log("🚀 ~ file: NewsDemo2.tsx:15 ~ Home ~ page", page);
//   const [query, setQuery] = useState("vi");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState({});

//   const fetchMovies = async () => {
//     setLoading(true);
//     let url = "";
//     const urlPage = `&limit=${page}`;
//     const urlQuery = `&locale=${query}`;
//     url = `${API_ENDPOINT}${urlPage}${urlQuery}`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setMovies([...oldMovies, ...data]);
//       //   if (data.Response === undefined) {
//       //     setMovies((oldMovies) => {
//       //       if (query && page === 1) {
//       //         return data.Search;
//       //       } else if (query) {
//       //         return [...oldMovies, ...data.Search];
//       //       } else {
//       //         return [...oldMovies, ...data];
//       //       }
//       //     });
//       // setMovies(data.Search || data);

//       //     setError({ show: false, msg: "" });
//       //   } else {
//       //     setError({ show: true, msg: data.Error });
//       //   }
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //   const [val, setVal] = useState(query);
//   //   const debouncedVal = useDebounce(val, 1000);

//   //   useEffect(() => {
//   //     if (debouncedVal) {
//   //       setPage(1);
//   //       setQuery(debouncedVal);
//   //     }
//   //   }, [debouncedVal]);

//   useEffect(() => {
//     fetchMovies();
//   }, [page]);

//   const loadMore = () => {
//     setPage((oldPage) => {
//       return oldPage + 1;
//     });
//   };
//   return (
//     <main>
//       {/* <form className="search-form" onSubmit={(e) => e.preventDefault()}>
//         <h2>search movies debouce(1s)</h2>
//         <input
//           type="text "
//           className="form-input"
//           value={val}
//           onChange={(e) => setVal(e.target.value)}
//         />
//         {error.show && <div className="error">{error.msg}</div>}
//       </form> */}

//       <section className="movies">
//         {movies &&
//           movies.map((movie) => {
//             const {
//               imdbID: id,
//               Poster: poster,
//               Title: title,
//               Year: year,
//             } = movie;
//             console.log("🚀 ~ file: NewsDemo2.tsx:110 ~ Home ~ movie", movie);
//             return (
//               <article>
//                 <img
//                   src={poster === "N/A" ? url : poster}
//                   alt={title}
//                   width={100}
//                   height={100}
//                 />
//                 <div className="movie-info">
//                   <h4 className="title">{title}</h4>
//                   <p>{year}</p>
//                 </div>
//               </article>
//             );
//           })}
//       </section>
//       <section className="section">
//         {loading && <h2 className="loading">Loading...</h2>}
//         <div className="loadmodediv">
//           <button className="btn" onClick={loadMore}>
//             Load More
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;
import React from "react";

export default function NewsDemo2() {
  return <div>NewsDemo2</div>;
}
