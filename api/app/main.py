from fastapi import FastAPI
from routers.usuarioRouter import rotas
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origens = [
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origens,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(rotas)
