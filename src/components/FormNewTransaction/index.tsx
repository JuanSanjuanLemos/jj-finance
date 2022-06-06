
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useModal } from "../../hooks/useModalContext";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import { Form } from "./styles";


interface TrasactionFormatted {
  title: string;
  price: string;
  category: string;
  type: string;
  date: string
}


export function FormNewTransaction() {
  const {getData, listTransactions,setIsLoading} = useTransactionsContext();

  const [type, setType] = useState("inflow");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  
  const {closeModal} = useModal();
  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    setIsLoading(true);
    const date = getDate()
    closeModal();

    const newTransaction = {title,price,type,category, date:date, id: Date.now()};
    const requestOptions ={
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({data: newTransaction})
    }
    await fetch("api/postTransactions", requestOptions)
    .then(() => getData())
    .catch((e)=> console.log(e));
    setTitle("");
    setPrice(0);
    setCategory("");
  }

  function getDate(){
    const date = Date.now()
    return (new Date(date)).toLocaleDateString("pt-BR");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <legend>Cadastrar nova transação</legend>
      <input type="text" placeholder="Nome" value={title} onChange={event => setTitle(event.target.value)} required />
      <input type="number" placeholder="Preço" value={price} onChange={event => setPrice(parseFloat(event.target.value))} required />
      <div className="box-types">
        <div
         onMouseDown={() => setType('inflow')}
          className={`wrapper-type inflow ${
            type === "inflow" && "-active"
          }`}
        >
          <div className="wrapper-icon">
            <Image src={"/images/inflows.svg"} alt="Entradas" layout="fill" />
          </div>
          Entrada
        </div>
        <div
         onMouseDown={() => setType('withdrawal')}
          className={`wrapper-type withdrawal ${
            type === "withdrawal" && "-active"
          }`}
        >
          <div className="wrapper-icon">
            <Image src={"/images/withdrawal.svg"} alt="Saídas" layout="fill" />
          </div>
          Saída
        </div>
      </div>
      <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} required />
      <input type="submit" className="input-submit" value="Cadastrar"  required />
    </Form>
  );
}

