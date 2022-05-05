# Preparativos

**Gardeno's** é uma aplicação web/mobile, feita com [`ReactJS`][react] e [`FastAPI`][fastapi], de um sistema de **jardim inteligente** com foco na acessibilidade. É recomendando ter um pouco de experiência com [JavaScript][js] e [Python][py], dado que são as linguagens majoritárias no código. Além de um pouco de conhecimento de [git][git], para poder cooperar com o projeto.

  [react]: https://reactjs.org/
  [fastapi]: https://fastapi.tiangolo.com/
  [js]: https://www.javascript.com/
  [py]: https://docs.python.org/3/
  [git]: https://git-scm.com/

## Instalação

### do repositório

Primeiramente, clone o projeto direto do [GitHub][github] em sua máquina, com:

```
git clone https://github.com/alessfm/gardenos.git
```

### do frontend

O Gardeno's usa o [`yarn@3.2.0`][yarn] como gerenciador de pacotes, em cima da versão do [`node@16.14.2`][node]. Além disso, usa o método _zero-installs_[^1], para garantir estabilidade e agilidade.

???+ hint "Dica para NodeJS"

    **É recomendado usar o [`nvm`][nvm]** para instalação do **nodeJS** a fim de evitar problemas com versões diferentes que você utilize em outros projetos. Caso use Windows, acesse esse [link][nvm-windows] e baixe o `nvm-setup.zip` da última release. **Caso não deseje**, baixe a versão que usamos direto do [website deles][node].

Com o Node instalado, siga os comandos abaixo, estando dentro da pasta `gardenos/web`:

=== "Ativar yarn"

    ```sh
    corepack enable
    ```

=== "Rodar projeto"

    ```sh
    yarn start
    ```

Caso você queria saber quais dependências são utilizadas e a ação de cada uma, olhe [aqui][library].

  [github]: https://github.com/alessfm/gardenos
  [yarn]: https://yarnpkg.com/getting-started
  [node]: https://nodejs.org/en/
  [nvm]: https://github.com/nvm-sh/nvm
  [nvm-windows]: https://github.com/coreybutler/nvm-windows/releases
  [library]: https://alessfm.github.io/gardenos/instalar/dependencias

  [^1]: A nova versão do Yarn disponibilizou uma forma de **trabalhar com dependências sem a necessidade de ter um node_modules**. O **Zero_Installs** depende somente do arquivo **.pnp.cjs** e do cache na pasta **.yarn**, ambos presentes no repositório, para funcionar. Para maiores informações, visite esse [site](https://yarnpkg.com/features/zero-installs).

### do backend

O Gardeno's usa o [`pip@22.0.4`][pip] como gerenciador de pacotes, em cima da versão do [`python@3.9.7`][python].

???+ hint "Dica para Python"

    **É recomendado usar um ambiente virtual** ao instalar as dependências do **Python** a fim de evitar problemas com versões diferentes que você utilize em outros projetos. Você pode usar a biblioteca que já vem na instalação da linguagem, o [`venv`][venv], por meio dos comandos abaixo (dentro da pasta `gardenos/api`):

    ```sh
    python -m venv env #para usuários Windows
    python3 -m venv env #para usuários Unix
    ```
    
    Ou o [`virtualenv`][virtualenv], que pode ser instalado via [`pip`][pip]:

    ```sh
    pip install virtualenv
    virtualenv env
    ```

    Ambos vão criar uma pasta chamada `env`, contendo as informações do seu ambiente virtual. Para ativá-la, faça:

    ```sh
    .\env\Scripts\activate #para usuários Windows
    source env/bin/activate #para usuários Unix
    ```

    **Caso não deseje usar ambientes virtuais**, siga somente a explicação abaixo:

Com o Python instalado, siga os comandos abaixo, estando dentro da pasta `gardenos/api`:

=== "Instalar dependências"

    ```sh
    pip install -r requirements.txt
    ```

=== "Rodar projeto"

    ```sh
    uvicorn routes:app --reload
    ```

Caso você queria saber quais dependências são utilizadas e a ação de cada uma, olhe [aqui][library].

  [fastAPI]: https://fastapi.tiangolo.com/
  [python]: https://www.python.org/downloads/
  [pip]: https://pypi.org/project/pip/
  [venv]: https://docs.python.org/3/library/venv.html
  [virtualenv]: https://pypi.org/project/virtualenv/
  [library]: https://alessfm.github.io/gardenos/instalar/dependencias

### da documentação

O Gardeno's usa o [`Material for MKDocs`][MKDocs] para gerar essa e outras páginas da documentação, em cima da versão da mesma versão do [`python@3.9.7`][python] e do [`pip@22.0.4`][pip] do backend.

???+ caution "Ambiente virtual"

    **Não é recomendado usar um ambiente virtual** para trabalhar com a documentação, dado que por ela está na raiz do projeto, **acontecerão conflitos** entre o ambiente dela e o do backend.

    Logo, _por enquanto que esse problema não é resolvido_, **trabalhe com ela no seu ambiente local**, usando a versão correta do Python.

Com o Python instalado, siga os comandos abaixo, estando na raiz do projeto:

=== "Instalar dependência"

    ```sh
    pip install mkdocs-material
    ```

=== "Rodar documentação"

    ```sh
    mkdocs serve
    ```

  [MKDocs]: https://squidfunk.github.io/mkdocs-material/getting-started/
  [python]: https://www.python.org/downloads/
  [pip]: https://pypi.org/project/pip/
