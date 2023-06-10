const url ='https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara'
let divRoot = document.getElementById('root')

async function getData(){
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

async function construct(){
    let data = await getData()

    data.forEach(e => {
        let div = document.createElement('div')
        div.innerHTML = `<a href='product_link' div class="card cardWrapper" style="width: 18rem;">
        <img src="${e.image_link}" class="card-img-top" alt="">
        <div class="card-body">
          <h4 class="card-title" >${e.name}</h4>
          <h6 class="card-text">${e.brand}</h6>
        </div>
      </div>`
      divRoot.appendChild(div)
    });
}

construct()