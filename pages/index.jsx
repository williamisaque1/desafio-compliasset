import Head from "next/head";
import Image from "next/image";

import { Checkbox } from "@material-ui/core";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "next/link";
  export async function getServerSideProps() {
  
    const res = await (await fetch('http://localhost:3000/api/teste')).json();  
   // console.log(res.data)
    return {
      props: {data:res.data}, 
    }

    }
export default function Home({data}) {

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
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="./assets/bradPitt.jpg"
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
