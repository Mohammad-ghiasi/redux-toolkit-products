import Product from "@/components/product/Product";
import { shoose } from "@/data";
import { ShooseItem } from "@/types/shooItem";
import { Box } from "@mui/material";


export default function Home() {
  
  return (
    <Box className="grid gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
      {shoose.map((shooe: ShooseItem): JSX.Element => {
        return <Product key={shooe.id} id={shooe.id} image={shooe.image} name={shooe.name} price={shooe.price} />;
      })}
    </Box>
  );
}
