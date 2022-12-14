import { Container,Fab} from "@mui/material"
import { useRef, useState, useEffect } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import styles from "../../../styles/Home.module.css";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useRouter} from "next/router";
import Head from "next/head";
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import Image from 'next/image';
import axios from "axios";
import Compress from 'compress.js';

export default function Create() {
    const  compress  =  new  Compress ()
    const [loading, setLoading] = useState(false);
    const [title,Settitle] = useState('')
    const [content,Setcontent] = useState('')
    const [errors,Seterrors] = useState(false)
    const [imagem,Setimagem] = useState(null)
    const [urlimagem,Seturlimagem] = useState(null)
    const inputImg =  useRef(null)
    const router = useRouter()
    async function submit(e) {
        e.preventDefault()
        setLoading(true);
            if(!title || !content){
                return Seterrors(true)
            }else{
                
                const date = new Date();
               
               let datajson = JSON.stringify({img: urlimagem ? urlimagem : '', title, description: content, created_at: date,updated_at: date});
               console.log(JSON.parse(datajson)?.img?.length)
                console.log('hhh')
                let resp =  await axios.post('https://desafio-compliasset.vercel.app/api/teste',datajson,{headers: {
                'Content-Type': 'application/json',
            }})
                     
                if (resp.status === 200 && resp.data.status == 'ok'){
                setLoading(false)
                router.push('/')
                }else{
                    setLoading(false) 
                }
      
      }
    }
    function formatBytes(bytes, decimals = 2) {
        if (!+bytes) return '0 Bytes'
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
   useEffect(()=>{
    if (imagem != null){
        compress.compress([...imagem], {
            size: 4, 
            quality: .75, 
            maxWidth: 1920, 
            maxHeight: 1920, 
            resize: true, 
            rotate: false, 
          }).then((data) => {
            const file = Compress.convertBase64ToFile(data[0].data, data[0].ext)
            console.log('imagem  nao compactada compactada base 64')
            console.log(formatBytes(imagem[0].size))
            console.log('imagem compactada base 64')
            console.log(formatBytes(file.size))
            const prefix = data[0].prefix
            Seturlimagem(`${prefix}${data[0].data}`)
          }).catch((e)=>{
                console.log('erro ' + e)
                setLoading(false)
          })
    }
   },[imagem])
    return(
<>
    <Head>
    <title>Tela de cadastro do post </title>
    <meta name="description" content="blog desafio compliasset | criacao dos posts" />
    </Head>
    <Container maxWidth="lg" className={styles.new}>
        <form>
            <TextField
            id="standard-multiline-static"
            label="Titulo"
            multiline
            error={errors}
            rows={2}
            required
            fullWidth={true}
            placeholder="Coloque o titulo aqui"
            variant="outlined"
            sx={{marginBottom:2}}
            onChange={(e)=> Settitle(e.target.value)}
            />
        
            <TextareaAutosize
            maxRows={4}
            onChange={(e)=> Setcontent(e.target.value)}
            aria-label="maximum height"
            placeholder="coloque aqui o conteudo do seu post"
            style={{ width: '100%',height:'400px', resize:'none'}}
            />
            <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row-reverse'}>
                <LoadingButton
                    size="small"
                    color="secondary"
                    onClick={(e)=> submit(e)}
                    type={"submit"}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    > Save </LoadingButton>
                     <Fab style={{alignSelf:'start'}} color='warning' aria-label="add" onClick={()=> inputImg.current.click() }>
                    
                    <input ref={inputImg} className={styles.con} onChange={(e)=> Setimagem(e.target.files)}  type={'file'}  accept="image/*"  multiple />
                    <UploadRoundedIcon/>
                   
                    </Fab>
       
            </Box>
     { urlimagem && (
<Image  src={urlimagem}  width={500} height={500}/>
     )
}   
 

           
      </form>
    </Container>
</>
    )
}
export async function getStaticProps() {
    return {
        props:{
            
        }


    }
}