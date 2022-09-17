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
import axios from "axios";
  export async function getServerSideProps() {
    console.log('wjejj')
    let res = ''
  
       axios.get('https://desafio-compliasset.vercel.app/api/teste').then((ress)=>{
        console.log(ress)
        ress.json().then((r)=>{
         res = r
         
          console.log(res)
        })
       
      }).catch((err)=> {
      console.log(err)

      })
      
  
    return {
      props: {data :res}, 
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
          { data?.map((dataa,i) => {
          
            return (
              <Card key={dataa.id} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  src= {dataa.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {dataa.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {dataa.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`blog/show/${dataa?.id}`} prefetch  >
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
