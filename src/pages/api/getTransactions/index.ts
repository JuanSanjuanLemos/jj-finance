import { query as q} from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, signOut } from 'next-auth/react';
import { client } from '../services/fauna';


interface Resp {
    data: {
      transactions: Trasaction[];
    };
  }
  
  interface Trasaction {
    title: string;
    price: number;
    category: string;
    type: string;
    date: string;
  }

module.exports = async (req: NextApiRequest,res:NextApiResponse) =>{
    try{
        const session = await getSession({req});
        const dbs = await client.query<Resp>(
          q.Get(
            q.Match(
              q.Index("user_by_email"),
              q.Casefold(session?.user?.email!))
          )
            )
            .then((resp) => resp.data)
            .then((data) => data.transactions)
            .catch(() => {
              signOut();
            })
            res.status(200).json(dbs);
    }catch(error){
      res.status(400);
      console.log(error)
    }
}