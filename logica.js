// Função que será executada quando o botão for clicado 

function  adicionandoGiria(){
    // Pegando o valor inserido no input
    giria = document.getElementById("giriasInput").value// giria = variavel - espaço para guardar nossas informações.--- id
// Selecionando as div ponde os resulotados (gírias) serão exibidas 
// informando as páginas que serão aplicadas
resultadoDiv = document.getElementById("resultados")
//if = se. Else if =  señ, se. Else = señ
// verificando se o campo de texto não estáa vazio 
if(giria){
    // criando um element <p> que conterá a gíria adicionada 
     novaGiria = document.createElement("p")
     // Definindo o conteúdo de texto do <p>
     novaGiria.textContent = `Giria adicionada: ${giria}`
     // Adicionando o <p> dentro da div de resultados 
     resultadoDiv.appendChild(novaGiria)
     //Limpando o campo de texto, após a gíria ser adicionda 
     document.getElementById("giriasInput").value = ''

} else{
    // alertando o usuario caso o campo esteja vazio
    alert("por obséquio, insira uma gíria!")
}
 

}