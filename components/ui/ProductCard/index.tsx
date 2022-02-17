import Image from "next/image";
import { Card, Box, Rating, Typography, Button } from "@local-mui";
import { ProductCardProps } from "types/prop-types";
import classes from "./classes.module.scss";

export default function ProductCard({ product }: ProductCardProps) {
  const { imageSrc, title, description, rating, price } = product;
  return (
    <Card className={classes.card}>
      <Image src={imageSrc} height="250px" alt={description} />
      <Box className={classes.describing_info}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2" className={classes.description}>
          {description}
        </Typography>
        <Rating value={rating.average} readOnly />
      </Box>
      <Box className={classes.buying_info}>
        <Box className={classes.price_area}>
          <Typography variant="h5">{price} USD</Typography>
          <Typography variant="subtitle2">{price}</Typography>
        </Box>
        <Button
          color="primary"
          variant="contained"
          className={classes.buy_now_button}
        >
          Buy Now
        </Button>
      </Box>
    </Card>
  );
}
