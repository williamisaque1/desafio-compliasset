import Head from "next/head";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
  export async function getServerSideProps() {
    const res = await (await fetch('https://desafio-compliasset-7aoqxn0lu-williamisaque1.vercel.app/api/teste')).json();  
   console.log(res)
    return {
      props: {data :res.data}, 
    }

    }
export default function Home({data}) {
useEffect(()=> {
console.log(data)
},[])
  return (
 <>
      <Head>
        <title>Tela index </title>
        <meta name="description" content="blog desafio compliasset" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Box display={"flex"} overflow={"auto"} flexDirection={"column"} gap={2} >
          {data.map((data,i) => {
          
            return (
              <Card key={data.id} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  src= {data.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`blog/show/${data?.id}`} prefetch  >
                  <a>
                  <Button size="small">Ler mais</Button>
                  </a>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
            
        </Box>
        </>
     
  );
}
