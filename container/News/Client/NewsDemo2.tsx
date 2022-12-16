// import { Grid } from "@mui/material";
// import { Image } from "components";
// import React, { useCallback, useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import useSWR from "swr";

// // import useDebounce from "./useDebounce";

// const url =
//   "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   const [page, setPage] = useState(1);

//   const { data: resData, isLoading } = useSWR(
//     `https://www.omdbapi.com/?apikey=b26c507e&page=${page}&s=Queen`
//   );

//   useEffect(() => {
//     if (resData == undefined) {
//       return;
//     }
//     const dataMovies = resData.Search;
//     setMovies((el) => {
//       return [...el, ...dataMovies];
//     });
//   }, [resData]);

//   const loadMore = useCallback(() => {
//     setPage((oldPage) => {
//       return oldPage + 1;
//     });
//   }, []);

//   return (
//     <main>
//       <section className="movies">
//         <Grid container>
//           {movies.map((movie) => {
//             const {
//               imdbID: id,
//               Poster: poster,
//               Title: title,
//               Year: year,
//             } = movie;

//             return (
//               <Grid item xs={1}>
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
//               </Grid>
//             );
//           })}
//         </Grid>
//       </section>

//       <section className="section">
//         {isLoading && (
//           <Grid container>
//             <Grid item xs={4}>
//               <Skeleton count={4} />
//             </Grid>
//             <Grid item xs={4}>
//               <Skeleton count={4} />
//             </Grid>
//             <Grid item xs={4}>
//               <Skeleton count={4} />
//             </Grid>
//           </Grid>
//         )}

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
