from fastapi import APIRouter
from models.usuarioModel import Usuario

rotas = APIRouter()


@rotas.post("/cadastrar")
async def cadastro(usuario: Usuario):
    return usuario
