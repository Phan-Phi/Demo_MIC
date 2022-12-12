import { useSnackbar } from "notistack";
import { useCallback } from "react";

export const NotiStack = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const snackbarSuccess = useCallback((message: string) => {
    enqueueSnackbar(message, {
      variant: "success",
    });
  }, []);

  const snackbarEror = useCallback(({ response }: { response: any }) => {
    enqueueSnackbar(response.data.message, {
      variant: "error",
    });
  }, []);

  return { snackbarSuccess, snackbarEror };
};
