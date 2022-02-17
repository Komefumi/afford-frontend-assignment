import { Box, Typography } from "@local-mui";
import { FilterControlMajorProps } from "types/prop-types";

export default function FilterControlMajor({
  title,
  children,
}: FilterControlMajorProps) {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Box>{children}</Box>
    </Box>
  );
}
