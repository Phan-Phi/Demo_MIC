import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function ButtonBase() {
  return (
    <Box textAlign="center" marginTop="3rem">
      <Button
        variant="text"
        sx={{
          padding: "0.5rem 1rem",
          backgroundColor: "#00A859",
          color: "white",
          borderRadius: "1.5rem",
        }}
      >
        Xem Thêm
      </Button>
    </Box>
  );
}
