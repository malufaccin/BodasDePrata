
// Linha do Tempo Interativa
let eventos = [
    { ano: 1999, descricao: "Aconteceu! O pedido de Casamento" },
    { ano: 2000, descricao: "Casamento! O começo de tudo." },
    { ano: 2006, descricao: "A família Cresceu! Nasceu Maria Luiza." },
    { ano: 2010, descricao: "Casamento mais uma vez! Cerimônia Religiosa" },
    { ano: 2015, descricao: "15 anos de muita cumplicidade." },
    { ano: 2020, descricao: "Celebramos mais um ciclo juntos." },
    { ano: 2025, descricao: "Bodas de Prata!!" }
];
let linhaDoTempo = document.getElementById("linhaDoTempo");
eventos.forEach(evento => {
    let div = document.createElement("div");
    div.classList.add("evento");
    div.innerHTML = `<strong>${evento.ano}</strong>: ${evento.descricao}`;
    linhaDoTempo.appendChild(div);
});