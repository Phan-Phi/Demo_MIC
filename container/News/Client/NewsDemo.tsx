// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Link,
//   Stack,
//   Typography,
// } from "@mui/material";

// import { CardItem } from "components";
// import TitleLine from "components/TitleLine/TitleLine";
// import {
//   IPage,
//   NEW_DETAIL_ITEMS,
//   NEW_LISTING_ITEMS,
//   responseSchema,
// } from "interface";
// import ROUTES from "routes";
// import useSWR from "swr";

// export type NewsProps = IPage<
//   [responseSchema<NEW_LISTING_ITEMS>, responseSchema<NEW_DETAIL_ITEMS>]
// >;

// export default function NewsListing(props: NewsProps) {
//   const { initData } = props;
//   const dataListing = initData[0].items;
//   const dataCategories = initData[1].items;
//   const nextCatergories = initData[1].next;

//   const [data, setData] = useState(dataCategories);
//   const [isFetch, setIsFetch] = useState(false);
//   const [nextPost, setNextPost] = useState(nextCatergories);

//   const { data: resData, isLoading } = useSWR(nextPost);

//   useEffect(() => {
//     if (isFetch) {
//       if (!resData) {
//         return;
//       }
//       const next = resData.next;
//       const items = resData.items;

//       const mergeDataFetch: NEW_DETAIL_ITEMS[] = [];
//       items.forEach((el: NEW_DETAIL_ITEMS) => {
//         mergeDataFetch.push(el);
//       });

//       setNextPost(next);
//       setData(data.concat(mergeDataFetch));
//       setIsFetch(false);
//     }
//   }, [resData, isFetch]);

//   const handlePost = useCallback(() => {
//     setIsFetch(true);
//   }, [isFetch]);

//   const renderNewsCategories = useMemo(() => {
//     if (isLoading) {
//       return <Typography>sadasdasdasdasdasdasdasdasd</Typography>;
//     } else {
//       return data.map((el: NEW_DETAIL_ITEMS, idx) => {
//         return (
//           <Grid item xs={12} sm={6} md={4} key={idx}>
//             <Link
//               href={`/${ROUTES.news}/${el.id}`}
//               style={{ textDecoration: "none" }}
//             >
//               <CardItem data={el} loading={isLoading} />
//             </Link>
//           </Grid>
//         );
//       });
//     }
//   }, [isLoading]);

//   return (
//     <Container>
//       <Grid container marginBottom="5rem">
//         <Grid item xs={12} marginBottom="2rem">
//           {/* <TitleLine title={dataListing[0].title} /> */}
//         </Grid>

//         <Grid item xs={12}>
//           <Grid container spacing={4}>
//             {/* {isLoading ? <Typography>asdsad</Typography> :  null} */}
//             {renderNewsCategories}
//           </Grid>

//           <Stack alignItems="center" marginTop="2rem">
//             <Button
//               variant="contained"
//               onClick={handlePost}
//               sx={{ display: nextPost ? "block" : "none" }}
//             >
//               Xem Thêm
//             </Button>
//           </Stack>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import useDebounce from "./useDebounce";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Home = () => {
  const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("Queen");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const fetchMovies = async () => {
    setLoading(true);
    let url = "";
    const urlPage = `&page=${page}`;
    const urlQuery = `&s=${query}`;
    url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.Response === "True") {
        setMovies((oldMovies) => {
          if (query && page === 1) {
            return data.Search;
          } else if (query) {
            return [...oldMovies, ...data.Search];
          } else {
            return [...oldMovies, ...data];
          }
        });
        // setMovies(data.Search || data);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [val, setVal] = useState(query);
  const debouncedVal = useDebounce(val, 1000);

  useEffect(() => {
    if (debouncedVal) {
      setPage(1);
      setQuery(debouncedVal);
    }
  }, [debouncedVal]);

  useEffect(() => {
    fetchMovies();
  }, [page, query]);

  // useEffect(() => {
  //   const event = window.addEventListener("scroll", () => {
  //     if (
  //       (!loading && window.innerHeight + window.scrollY) >=
  //       document.body.scrollHeight
  //     ) {
  //       console.log("window.innerHeight", window.innerHeight);
  //       console.log("window.scrollY", window.scrollY);
  //       console.log("document.body.scrollHeight", document.body.scrollHeight);
  //       setPage((oldPage) => {
  //         return oldPage + 1;
  //       });
  //     }
  //   });
  //   return () => window.removeEventListener("scroll", event);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const loadMore = () => {
    setPage((oldPage) => {
      return oldPage + 1;
    });
  };

  return (
    <main>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <h2>search movies debouce(1s)</h2>
        <input
          type="text "
          className="form-input"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        {error.show && <div className="error">{error.msg}</div>}
      </form>

      <section className="movies">
        {movies &&
          movies.map((movie) => {
            const {
              imdbID: id,
              Poster: poster,
              Title: title,
              Year: year,
            } = movie;

            return (
              <Link to={`/movies/${id}`} key={id} className="movie">
                <article>
                  <LazyLoadImage
                    src={poster === "N/A" ? url : poster}
                    alt={title}
                    effect="blur"
                  />
                  <div className="movie-info">
                    <h4 className="title">{title}</h4>
                    <p>{year}</p>
                  </div>
                </article>
              </Link>
            );
          })}
      </section>
      <section className="section">
        {loading && <h2 className="loading">Loading...</h2>}
        <div className="loadmodediv">
          <button className="btn" onClick={loadMore}>
            Load More
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
