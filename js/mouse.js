let dx = 0
let dy = 0
let scale = 1

div_tree.style.scale = scale

const Mouse = {
    x: 0,
    y: 0,
}

const coords = {
    x: 0,
    y: 0,
    scale: 1,

    setX(x) {
        this.x = x
        this.update()
    },

    setY(y) {
        this.y = y
        this.update()
    },

    setScale(scale) {
        this.scale = scale
        this.update()
    },

    update() {
        const div_tree = document.getElementById('div_tree')
        // const div_tree = document.getElementById('main')
        div_tree.style.scale = this.scale
        div_tree.style.translate = `${this.x}px ${this.y}px`
    }
}
coords.update()


document.addEventListener('mousemove', (event) => {
    Mouse.x = event.clientX;
    Mouse.y = event.clientY;
    Mouse.cx = (window.innerWidth / 2 - event.clientX) * -1
    Mouse.cy = (window.innerHeight / 2 - event.clientY) * -1
})

window.addEventListener('mousemove', e => {

    const div_tree = document.getElementById('div_tree')

    const x = e.movementX
    const y = e.movementY

    if (e.buttons > 0) {
        coords.x += x * 1.7;
        coords.y += y * 1.7;

        coords.setX(coords.x)
        coords.setY(coords.y)
    }

})

window.addEventListener('wheel', e => {
    // coords.scale += (e.deltaY < 0) ? 0.07 : -0.07

    if (e.deltaY < 0) {
        coords.scale += 0.07
        coords.setX(coords.x - Mouse.cx/5)

    } else {
        coords.scale -= 0.07
    }

    // coords.setX(coords.x - Mouse.cx / 5)
    // coords.setY(coords.y - Mouse.cy / 5)
    coords.setScale(coords.scale)

    
    // coords.setY(coords.y - Mouse.cy/2)
    // div_tree.style.scale = scale
    // console.log(div_tree.style.scale)
})