const tag_textarea = document.querySelector("#tag_textarea")

tag_textarea.addEventListener('keyup', e=>{
    // console.log(tag_textarea.value)
    div_tree.innerHTML = ''
    renderText(tag_textarea.value)
    MathJax.Hub.Queue(["Typeset", MathJax.Hub])
})

div_tree.innerHTML = ''
    renderText(tag_textarea.value)
    MathJax.Hub.Queue(["Typeset", MathJax.Hub])