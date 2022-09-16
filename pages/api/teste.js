//const posts = require('./database/posts')
export default async function pots(req,res){
   console.log('alguma requisicao feita do tipo: ',req.method)
   let datas = [
      { id:0, title:'bolsas',description:'loja cccscscscscscscsccdsaaaaaaaaaaaaaccscccs',img:'ds2ds3ad2da'},
      { id:1 , title:'blusa',description:'loja cccscscscscscscsccdsaaaaaaaaaaaaaccscccs',img:'ds2ds3ad2da'},
      { id:2 ,title:'camisa',description:'loja cccscscscscscscaaaaaaaaaaaccscccs',img:'ds2ds3ad2da'},
      { id:3 ,title:'calcas',description:'loja cccscscscscscscsccdsaaaccscccs',img:'ds2ds3ad2da'}
   ]
   if (req.method == 'GET'){
      
   if(req.query.id){
      let result =  datas.find((data)=> data.id == req.query.id)
      return ( res.status(200).json({
         data: result
        }))
   }else{
      return ( res.status(200).json({
         data: datas
        }))
      }
   }else if (req.method == 'POST'){
      datas.push(req.body)
      console.log(datas.length)
      let clear 
      clear = setTimeout(() => {
               res.status(200).send(req.body)
               clearTimeout(clear)
               }, 1500);
               
   }else if (req.method == 'PATH'){
      
   }
   
   }
   const listar = async () => {
      try {
        const dados = await posts.findAll({
          raw: true,
          order: [["createdAt", "DESC"]],
        });
        // console.log(dados);
        return dados;
      } catch (err) {
        throw new Error(err);
      }
    };
    const add = async (id, conteudo, realizada) => {
      try {
        console.log("dados enviados " + id + " " + conteudo + " " + realizada);
        const dados = await posts.create({
          id,
          conteudo,
          realizada,
        });
        return dados;
      } catch (err) {
        throw new Error(err);
      }
    };