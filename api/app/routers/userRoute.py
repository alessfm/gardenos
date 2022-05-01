from fastapi import APIRouter
from app.models.userModel import User

router = APIRouter()


@router.post("/cadastro")
async def cadastro(user: User):
    return user
