import React from 'react';

function Login() {
  return (
    <form>
    <div class="form-group">
      <label for="user">Digite seu user</label>
      <input type="text" class="form-control" id="user" placeholder="Seu user" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Senha</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
    </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  )
}

export default Login;