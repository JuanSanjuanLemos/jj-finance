import { query as q } from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { client } from "../services/fauna";

interface User {
  ref:{
    id:number;
  }
  data: {
    email: string,
    transactions:[]
  };
}

interface TrasactionFormatted {
  id:number;
  title: string;
  price: string;
  category: string;
  type: string;
  date: string;
}

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const newList:TrasactionFormatted[] = req.body.data;
  const session = await getSession({req});
  try {
    const user:User = (await client.query(
      q.Get(
        q.Match(q.Index("user_by_email"), q.Casefold(session?.user?.email!))
        )
        ));
    const dbs = await client.query<User>(
      q.Update(q.Ref(q.Collection("users"), user.ref.id), {
        data: {
          transactions: newList,
        },
      })
    );
    res.status(200).json(dbs.data);
  } catch (e) {
    res.redirect('/login')
    console.log(e);
  }
};
