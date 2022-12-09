import { Box, Button, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import axios from "../../axios.config";

type ITEM = {
  email: string;
  id: string;
  password: string;
  role: string;
  username: string;
};

export default function DemoFetch() {
  const [data, setData] = useState([]);
  const [isChangeData, setIsChangeData] = useState(false);

  const { data: resData } = useSWR(
    "https://638dea854190defdb750e1e4.mockapi.io/users"
  );

  useEffect(() => {
    if (resData == undefined) {
      return;
    }
    setData(resData);
    setIsChangeData(false);
  }, [resData, isChangeData]);

  const handleDelete = useCallback(async (el: ITEM) => {
    await fetch(`https://638dea854190defdb750e1e4.mockapi.io/users/${el.id}`, {
      method: "DELETE",
    });

    setIsChangeData(true);
  }, []);

  const renderData = useMemo(() => {
    return data?.map((el: ITEM, idx: number) => {
      return (
        <Box key={idx}>
          <Typography key={idx}>{el.username}</Typography>
          <Button onClick={() => handleDelete(el)}>Delete</Button>
        </Box>
      );
    });
  }, [data]);

  return <Box>{renderData}</Box>;
}
