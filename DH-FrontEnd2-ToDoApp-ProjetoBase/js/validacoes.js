
function retiraEspacosDeUmValorInformado(valorRecebido) {
    return valorRecebido.trim();
  }
  
  function converteValorRecebidoParaMinusculo(valorRecebido) {
    return valorRecebido.toLowerCase();
  }
  
  /// BASE-URL da API onde o projeto realiza a conexão
  function apiBaseUrl() {
    return "https://todo-api.ctd.academy/v1"
  }

  
  /// Validação de email: formato válido usando RegExp (Expressões regulares)
  function validaEmailRecebido(emailRecebido) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRecebido)) {
      return true;
    } else {
      return false;
    }
  }
  
  /// Estilização customizada do elemento <small>
  function elementoSmallErro(elementoRecebido) {
    elementoRecebido.style.color = "rgb(116, 116, 116)";
    elementoRecebido.style.fontSize = "8";
    elementoRecebido.style.fontWeight = "bold";
  }
  function senhaValidacoesOk(password) {
    // Define a regular expression for the password pattern
    const pattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  
    // Test the password against the pattern and return the result
    return pattern.test(password);
  } 
  const password = campoSenhaLogin.value;
  const isValid = senhaValidacoesOk(password);
  console.log(isValid); // true
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }