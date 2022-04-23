from fastapi import FastAPI
from pydantic import BaseModel


class Usuario(BaseModel):
    nome: str
    email: str
    senha: str


app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/cadastro")
async def cadastro(usuario: Usuario):
    return usuario
