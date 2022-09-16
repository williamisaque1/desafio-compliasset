import AddIcon from '@mui/icons-material/Add';
import { Box,Fab } from "@mui/material";
import Link from 'next/link'

export default  function ButtonAdd () {
    return(
<Box  position={"fixed"} bottom={'2%'} right={'3%'} sx={{}}>
<Link href="/blog/new/create" prefetch>
         <a> <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </a>
      </Link>
 </Box>
    )
}
