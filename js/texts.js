// startTree(`1
//     2
//     3
//         4
//         5`)

// startTree(`oi
//     -{cubo} testando
//     -{piramide} eita
//     -{cubo} cone`)

function card(title = '', content = '') {
    const est = `<div class="parent">
        <section class="baloon">
            ${title.length > 0 ? `<div class="title">${title}</div>` : ''}
            ${content.length > 0 ? `<div class="window"><p>${content}</p></div>` : ''}
        </section>
    </div>`;

    return est.replace(/\n/g, "").replace(/\s{2,}/g, ' ');
}



function lineToRender(txt) {
    const matchResult = txt.match(/{(.+)} (.+)/);
    if (matchResult) {
        const title = matchResult[1];
        const content = matchResult[2];
        return card(title, content)
    }
}

const content_text = `vai
    {pirâmide} V = (B * H)/3
    {cubo} V = L³
    {esfera} V = 4/3 * π * R
    {cilindro} V =  πR²H 
    {cone} V = 1/3 * π * R² * H
    {tetraedro} V = Lado³/6`


function replaceLine(a) {

    // a = `    {pirâmide} V = 1/3 * {Base} * Altura`

    let title = ''
    let content = ''

    const match_title = a.match(/^\s*{(.+?)}/)
    const match_content = a.match(/^\s*{(.+?)} (.+)|(.+)/)

    if (!match_title) title = '';
    if (!match_content) content = '';

    if (match_title) title = match_title[1]
    if (match_content) content = match_content[2] == undefined ? match_content[3] : match_content[2]


    const quant = a.split('    ').filter(e => e == '').length
    const t = '    '.repeat(quant) + card(title, content)
    return t
}

// replaceLine()

function renderText(content_text) {
    let text3 = []
    content_text.split("\n").map(e => {
        text3.push(replaceLine(e))
    })
    text3 = text3.join("\n")
    startTree(text3)
}



if (window.location.href.includes("?q=")) {
    const file = window.location.href.split('?q=')[1]
    fetch(`./texts/${file}.txt`)
        // fetch('./texts/rlm.txt')
        .then(e => e.text())
        .then(e => {
            renderText(e)
            if (e.includes('Cannot GET')) {
                window.location.href = './index.html'
            }
        })
}


// if (window.location.href.includes("index.html")) {
//     const file = window.location.href.split('?q=')[1]
//     window.location.href = './menu.html'

// fetch(`./texts/${file}.txt`)
//     // fetch('./texts/rlm.txt')
//     .then(e => e.text())
//     .then(e => {
//         renderText(e)
//         if (e.includes('Cannot GET')) {
//             window.location.href = './menu.html'
//         }
//     })
// }

