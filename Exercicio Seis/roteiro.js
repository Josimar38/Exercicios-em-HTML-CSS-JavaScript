let nome = prompt('Digite seu primeiro nome:')
let sobrenome = prompt('Digite seu ultimo nome:')
let idade = Number(prompt('Digite a sua idade:'))
alert(`Bem vindo ${nome} ${sobrenome} sua idade e ${idade} anos.`)

document.getElementById('h1').innerHTML =
  'Bem vindo ' + nome + ' ' + sobrenome + ' voce tem ' + idade + ' anos.'
