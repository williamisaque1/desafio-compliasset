import { Container } from "@mui/material"
import style from '../../../styles/Home.module.css' 
import Image from "next/image";
import { Box } from "@material-ui/core";
import Head from "next/head";
export default function showBlog({data}) {

    return (
      <>
      <Head>
      <title>{data?.title} </title>
      <meta name="description" content={data?.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <Container maxwidth="lg" sx={{lg:{textAlign:'center'}}} className={'testando'}>
          <Box className={style.imgShow}>
        <Image   alt={`imagem do post ${data?.title}`} src={data.img}  width={500} height={200}/>
        </Box>
           <article>
            <h1 align='center'>{data?.title}</h1>
            <p className={style.description}>{data.description}</p>
            </article>
        </Container>
        </>
    )
}
export async function getServerSideProps({params}) {
  const res =  await fetch(`http://localhost:3000/api/teste/?id=${params?.id}`,{
    method:'GET',
    headers:{'Content-Type': 'application/json'},
  });  
  const resp  = await res.json()

    
    return {
      props: {data:resp.data},
    }

    }
