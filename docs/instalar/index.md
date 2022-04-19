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

O Gardeno's usa o [`yarn@3.2.0`][yarn] como gerenciador de pacotes em cima da versão do [`node@16.14.2`][node]. Além disso, usa o método _zero-installs_[^1], para garantir estabilidade e agilidade.

???+ hint "Dica para NodeJS"

    É recomendado usar o [`nvm`][nvm] para instalação do **nodeJS** a fim de evitar problemas com versões diferentes que você utilize em outros projetos. Caso use Windows, acesse esse [link][nvm-windows] e baixe o `nvm-setup.zip` da última release. Caso não deseje, baixe a versão que usamos direto do [website deles][node].

Com o Node instalado, siga os comandos abaixo, estando dentro da pasta `gardenos/web`:

=== "Ativar yarn"

    ``` sh
    corepack enable
    ```

=== "Rodar projeto"

    ``` sh
    yarn start
    ```

Caso você queria saber quais dependências são utilizadas e a ação de cada uma, olhe [aqui][library].

  [github]: https://github.com/alessfm/gardenos
  [yarn]: https://yarnpkg.com/getting-started
  [node]: https://nodejs.org/en/
  [nvm]: https://github.com/nvm-sh/nvm
  [nvm-windows]: https://github.com/coreybutler/nvm-windows/releases
  [library]: https://alessfm.github.io/gardenos/instalar/dependencias

  [^1]: A nova versão do Yarn disponibilizou uma forma de trabalhar com dependências sem a necessidade de ter um **node_modules** e sem precisar instalar cada uma ao iniciar pela primeira vez um projeto. O **Zero_Installs** depende somente do arquivo **.pnp.cjs** e do cache na pasta **.yarn**, ambos presentes no repositório, para funcionar. Para maiores informações, visite esse [site](https://yarnpkg.com/features/zero-installs).