function App() {
  return (
    <div>
      <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 text-white">Página Inicial</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Agenda</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Check-list</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Lembretes</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 controleHeader">
              <input type="search" class="form-control form-control-dark" placeholder="Pesquisar..."
                aria-label="Search" />
            </form>

            <div>
              <button type="button" class="btn btn-outline-light me-2 espacamentoHeader">Login</button>
              <button type="button" class="btn btn-warning">Registre-se</button>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="py-5 text-center">
        </div>

        <div class="row">
          <div class="col-md-4 order-md-2 mb-4 formatarTexto">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Seja Bem-Vindo</span>

            </h4>
            <ul class="list-group mb-3">



              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                  <h6 class="my-0">Usuário Novo</h6>

                </div>

              </li>
            </ul>


          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Dados de Cadastro do Usuário</h4>
            <form class="needs-validation">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Nome</label>
                  <input type="text" class="form-control" id="firstName" placeholder="Digite seu nome" value="" required="" />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Sobrenome</label>
                  <input type="text" class="form-control" id="lastName" placeholder="Digite seu sobrenome" value=""
                    required="" />
                </div>
              </div>

              <div class="mb-3">
                <label for="username">Usuário</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input type="text" class="form-control" id="username" placeholder="Nome de usuário" required="" />
                </div>
              </div>

              <div class="mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="seuemail@exemplo.com" />
              </div>

              <div class="mb-3 form-group">
                <label for="password">Senha</label>
                <input type="password" class="form-control" id="password" required="" placeholder="Digite sua senha" />
              </div>
              <div class="row">
                <div class="col-md mb-3">
                  <label for="birthday">Data de Nascimento:</label>
                  <input type="date" id="birthday" name="birthday" class="formatarData" />
                </div>
              </div>
            </form>
          </div>

        </div>
        <hr class="mb-4" />
        <button class="btn btn-primary btn-lg btn-block" type="submit">Registre-se!</button>

      </div>


      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">© 2021 Aplicativo</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacidade</a></li>
          <li class="list-inline-item"><a href="#">Termo de Contrato</a></li>
          <li class="list-inline-item"><a href="#">Fale Conosco</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
