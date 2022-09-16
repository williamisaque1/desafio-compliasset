import { Container } from "@mui/material"
import style from '../../../styles/Home.module.css' 
export default function showBlog({data}) {

    return (
        <Container maxwidth="lg" sx={{lg:{textAlign:'center'}}} className={'testando'}>
           <article>
            <h1 align='center'>{data?.title}</h1>
            <p className={style.description}>{data.description}</p>
            </article>
        </Container>
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
