import { Container } from "@mui/material"
import style from '../../../styles/Home.module.css' 
import Image from "next/image";
import { Box } from "@material-ui/core";
import Head from "next/head";
import axios from "axios";
export default function showBlog({data}) {

    return (
      <>
      <Head>
      <html lang={'pt-BR'} />
      <title>{data.title} </title>
      <meta name="description" content={data.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <Container maxwidth="lg" sx={{lg:{textAlign:'center'}}} className={'testando'}>
          <Box className={style.imgShow}>
        <Image alt={`imagem do post ${data.title}`} src={data.img}  width={500} height={200}/>
        </Box>
           <article>
            <h1 align='center'>{data.title}</h1>
            <p className={style.description}>{data.description}</p>
            </article>
        </Container>
        </>
    )
}
export async function getServerSideProps({params}) {
  let res =  await axios.get(`https://desafio-compliasset.vercel.app/api/teste?id=${params?.id}`)
  console.log('ressss data result')
  console.log(res?.data.result)
    return {
      props: {data:res?.data?.result},
    }

    }
