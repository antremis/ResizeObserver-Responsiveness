body = document.querySelector("body")
stylesheet = document.querySelector("#stylesheet")

let curLayout = null
layout = new ResizeObserver( entries => {
    width = entries[0].contentRect.width
    height = entries[0].contentRect.height
    if(width > height*1.2 && curLayout !== "Laptop"){
        body.innerHTML = "Laptop"
        stylesheet.href = "laptop.css"
        curLayout = "Laptop"
    }
    else if(height*0.8 < width && width < height*1.2  && curLayout !== "Square"){
        body.innerHTML = "Square"
        stylesheet.href = "square.css"
        curLayout = "Square"
    }
    else if(width < height*0.8 && curLayout !== "Mobile"){
        body.innerHTML = "Mobile"
        stylesheet.href = "mobile.css"
        curLayout = "Mobile"
    }
})

layout.observe(body)