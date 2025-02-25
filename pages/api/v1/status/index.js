import { log } from "console";
import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1+1"); //o método query() é chamado com uma string que contém a query SQL que será executada no banco de dados.
  console.log(result);
  response.status(200).json("API is running"); //o metodo response .send() envia uma resposta de texto simples que não reconhece a maioria das formatações, enquanto o .json() envia um objeto JSON que possui o charset UTF-8.
}

export default status;
