let image = document.getElementById("image")
let conteudo = document.getElementById("conteudo")
let botaoCriar = document.getElementById("botaoCriar")
botaoCriar.onclick = () => {
    if (conteudo.value == '')return
    let linkQR = 'https://api.qrserver.com/v1/create-qr-code/'
    image.src = linkQR + '?size=500x500&data=' + conteudo.value
}
