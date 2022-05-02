import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { TemaPrincipal } from '../../../shared/utils/tema';
import './cadastro.css'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment'
import LoadingButton from '@mui/lab/LoadingButton';

import FundoLogin from '../../../assets/img/login-fundo.jpg';
import Logo from '../../../assets/img/logos/vector-verde.png';

import { criarUsuario } from '../../services/usuarioService';

export default function Cadastro() {
  return (
    <ThemeProvider theme={TemaPrincipal}>
      <Container
        component="main" maxWidth="md" sx={{ bgcolor: 'white', borderRadius: 2 }}>
        <Grid
          className="grid-global"
          container
          spacing={2}
          sx={{ mt: 7 }}>
          <Grid item xs md>
            <img className='img-fundo-quadrado' src={FundoLogin} alt="Arte de mulher segurando jarro de plantas" />
          </Grid>
          <Grid className="componentes" item xs={12} md={4} sx={{ mr: 3 }}>
            <Logotipo />
            <FormCadastro />
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

function Logotipo() {
  return (
    <Grid
      container direction="row"
      justifyContent="center"
      alignItems="center" sx={{ mt: 1 }}>
      <img className='logo' src={Logo} alt="Logo do Gardeno's" />
    </Grid>
  );
}

function IrParaLogin() {
  return (
    <Grid item xs={12}
      container direction="row"
      justifyContent="center"
      alignItems="center" sx={{ mt: 2 }}>
      <Typography color="primary.dark">
        <Link color="inherit" href="#">
          Já tem uma conta?
        </Link>
      </Typography>
    </Grid>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4, mb: 4 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://alessfm.github.io/gardenos/">
        Gardeno's
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function FormCadastro() {
  const [carregar, setCarregar] = React.useState(false);
  const [sucesso, setSucesso] = React.useState(false);
  const duracao = React.useRef();

  const btnCadastrarSX = {
    ...(sucesso && {
      bgcolor: 'primary.dark',
      '&:hover': {
        bgcolor: 'primary.dark',
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(duracao.current);
    };
  }, []);

  const criarConta = (event) => {
    setSucesso(false);
    setCarregar(true);
    event.preventDefault();

    const dadosUsuario = new FormData(event.currentTarget);

    const usuario = {
      nome: dadosUsuario.get('nome'),
      email: dadosUsuario.get('email'),
      senha: dadosUsuario.get('senha'),
    };

    criarUsuario(usuario).then(
      response => console.log(response)
    )

    duracao.current = window.setTimeout(() => {
      setSucesso(true);
      setCarregar(false);
    }, 2000);
  };

  return (
    <Box className="form-cadastro" component="form" noValidate onSubmit={criarConta} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            name="nome"
            label="Nome"
            placeholder="alex11"
            InputProps={{
              startAdornment: <InputAdornment position="start">@</InputAdornment>,
            }}
            required
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            placeholder="alex11@mail.com"
            type="email"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="senha"
            label="Senha"
            type="password"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <LoadingButton
            color="primary"
            type="submit"
            variant="contained"
            loading={carregar}
            loadingIndicator="Criando Conta..."
            sx={btnCadastrarSX}
            fullWidth
          >{sucesso ? 'Conta Criada' : 'Criar Conta'}
          </LoadingButton>
        </Grid>
        <IrParaLogin />
      </Grid>
    </Box>
  )
}