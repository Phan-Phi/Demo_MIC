import { useSnackbar } from "notistack";
import { useCallback } from "react";

export const NotiStack = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const snackbarId = useCallback(() => {
    enqueueSnackbar("No connection!", {
      variant: "error",
    });
  }, []);

  return { snackbarId };
};
