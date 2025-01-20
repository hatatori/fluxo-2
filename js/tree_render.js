
const div_tree = document.querySelector("#div_tree")
const c = document.querySelector("#div_tree")

const texto = `ffase
    ffase
    ffase
    ffase
        ffase
        ffase
    ffase
    ffase
ffase
    ffase
    ffase`

function add(str, hierarchy) {
    const div_tree = document.querySelector("#div_tree")
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.className = 'tf-nc'
    span.innerHTML = str
    ul.appendChild(li)
    li.appendChild(span)
    ul.h = hierarchy
    li.h = hierarchy
    ul.setAttribute('h', hierarchy)
    li.setAttribute('h', hierarchy)
    div_tree.appendChild(ul)
}

function go(num) {

    const div_tree = document.querySelector("#div_tree")

    const a = div_tree.querySelectorAll('li')[num - 1]
    const b = div_tree.querySelectorAll('li')[num]

    if (b.h > a.h) {
        a.appendChild(b.parentElement);
        // a.parentElement.setAttribute('t', a.parentElement.h)
    }
    if (b.h == a.h) a.parentElement.appendChild(b);

    Array.from(div_tree.querySelectorAll('ul')).filter(e => e.innerHTML.length == 0).map(e => e.remove())
}


function organize() {

    function organizeIn() {

        for (let i = div_tree.children.length - 2; i >= 0; i--) {
            for (let j = 0; j < 10; j++) {

                try {
                    // i = 5
                    a = div_tree.children[i]
                    b = div_tree.children[i + 1]

                    b_li = b.querySelector('li')
                    a_ul = a.querySelectorAll('span + ul')[0]
                    a_ul1 = a.querySelectorAll('span + ul')[1]

                    // if (b_li.h < a_ul1.h) {
                    //     a_ul1.append(b_li);
                    // }

                    if (b_li.h == a_ul1.h) {
                        a_ul1.append(b_li)
                        if(b.children.length == 0) b.remove();
                        // b.remove()
                    } else if (b.h > a.h) {
                        a_ul.append(b_li)
                        // console.log(b.children.length)
                        if(b.children.length == 0) b.remove();
                        
                    }

                } catch (err) { }
            }

        }

        // parte 1
        // for (let i = div_tree.children.length - 2; i >= 0; i--) {
        //     for (let j = 0; j < 1; j++) {
        //         // i = 0
        //         a = div_tree.children[i]
        //         b = div_tree.children[i + 1]

        //         try {
        //             if (b.h > a.h) {
        //                 if (i > 0)
        //                     a.querySelectorAll('span + ul')[0].append(b.querySelector('li'))
        //                 else
        //                     a.querySelectorAll('span + ul')[1].append(b.querySelector('li'))
        //                 b.remove()
        //             }
        //         } catch (err) { }

        //     }
        // }

        // parte 2
        // for (let i = div_tree.children.length - 2; i >= 0; i--) {

        //     a = div_tree.children[i]
        //     b = div_tree.children[i + 1]

        //     if (b.h > a.h) {
        //         if (i > 1)
        //             a.querySelectorAll('span + ul')[1].append(b.querySelector('li'))
        //         else
        //             a.querySelector('span + ul').append(b.querySelector('li'))

        //         b.remove()
        //     }

        // }

        // i = 0
        // a = div_tree.children[i]
        // b = div_tree.children[i + 1]

        // try{
        // if (b.h > a.h) {
        //     a.querySelectorAll('span + ul')[1].append(b.querySelector('li'))
        //     b.remove()
        // }
        // }catch(err){
        // }



    }

    organizeIn()
    organizeIn()
    organizeIn()
    organizeIn()
    organizeIn()
    organizeIn()

    // try{
    //     for (let i = div_tree.children.length; i > 0; i--) {
    //         const a = div_tree.children[i]
    //         const b = div_tree.children[i+1]
    //         a.querySelectorAll('span + ul')[1].append(b.querySelector('li'))
    //     }
    // }catch(err){}




    // const a = div_tree.children[1]
    // const b = div_tree.children[2]
    // a.querySelector('span + ul').appendChild(b.querySelector('li'))

    // for (let i = div_tree.children.length; i > 0; i--) {
    //     try{}catch()
    //     const a = div_tree.children[i]
    //     const b = div_tree.children[i+1]
    //     a.querySelector('span + ul').appendChild(b.querySelector('li'))
    // }

    // for (let j = 0; j < 10; j++) {
    //     const a = div_tree.children[0]
    //     const b = div_tree.children[1]
    //     try {
    //         a.querySelector('ul').appendChild(b.querySelector('li'))
    //         // b.remove()
    //     } catch (err) { }
    // }
}

function startTree(texto) {
    const div_tree = document.querySelector("#div_tree")

    for (let i of texto.split("\n")) {
        const qt = i.split('    ').filter(e => e == '').length
        const txt = i.split('    ').pop()
        add(txt, qt)
    }

    for (let i = 1; i < div_tree.querySelectorAll('li').length; i++) { go(i) }
    organize()
}

// startTree(texto)

// startTree(`1
//     2
//     3
//         4
//         5`)
