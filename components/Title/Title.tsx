import { Box, Typography } from "@mui/material";
type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <Box textAlign="center">
      <Typography
        variant="h6"
        sx={{
          color: "#00A859",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
