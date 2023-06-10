const url='https://makeup-api.herokuapp.com/api/v1/products.json'
let divRoot = document.getElementById('root')

let brand = document.createElement('div')
brand.innerHTML = `<a href="./blush/index.html" class="card cardWrapper" style="width: 18rem;">
        <div class="card-body">
          <h6 class="card-text">Blush</h6>
        </div>
      </a>`
      divRoot.appendChild(brand)

let brand2 = document.createElement('div')
      brand2.innerHTML = `<a href="./bronzer/index.html" div class="card cardWrapper" style="width: 18rem;">
              <div class="card-body">
                <h6 class="card-text">Bronzer</h6>
              </div>
            </div>
            </a>`
            divRoot.appendChild(brand2)

let brand3 = document.createElement('div')
     brand3.innerHTML = `<a href="./Eyebrow/index.html" div class="card cardWrapper" style="width: 18rem;">
                    <div class="card-body">
                      <h6 class="card-text">Eyebrow</h6>
                    </div>
                  </div></a>`
                  divRoot.appendChild(brand3)

let brand4 = document.createElement('div')
     brand4.innerHTML = `<a href="./Eyeliner/index.html" div class="card cardWrapper" style="width: 18rem;">
                    <div class="card-body">
                      <h6 class="card-text">Eyeliner</h6>
                    </div>
                  </div></a>`
                  divRoot.appendChild(brand4)

let brand5 = document.createElement('div')
     brand5.innerHTML = `<a href="./Eyeshadow/index.html" div class="card cardWrapper" style="width: 18rem;">
                    <div class="card-body">
                      <h6 class="card-text">Eyeshadow</h6>
                    </div>
                  </div></a>`
                  divRoot.appendChild(brand5)

let brand6 = document.createElement('div')
     brand6.innerHTML = `<a href="./Foundation/index.html" div class="card cardWrapper" style="width: 18rem;">
                    <div class="card-body">
                      <h6 class="card-text">Foundation</h6>
                    </div>
                  </div></a>`
                  divRoot.appendChild(brand6)
let brand7 = document.createElement('div')
     brand7.innerHTML = `<a href="./Lip liner/index.html" div class="card cardWrapper" style="width: 18rem;">
                    <div class="card-body">
                      <h6 class="card-text">Lip liner</h6>
                    </div>
                  </div></a>`
                  divRoot.appendChild(brand7)
let brand8 = document.createElement('div')
     brand8.innerHTML = `<a href="./Lipstick/index.html" div class="card cardWrapper" style="width: 18rem;">
                    <div class="card-body">
                      <h6 class="card-text">Lipstick</h6>
                    </div>
                  </div></a>`
                  divRoot.appendChild(brand8)
 let brand9 = document.createElement('div')
     brand9.innerHTML = `<a href="./Mascara/index.html" div class="card cardWrapper" style="width: 18rem;">
                    <div class="card-body">
                      <h6 class="card-text">Mascara</h6>
                    </div>
                  </div></a>`
                  divRoot.appendChild(brand9)
let brand10 = document.createElement('div')
     brand10.innerHTML = `<a href="./Nail polish/index.html" div class="card cardWrapper" style="width: 18rem;">
                    <div class="card-body">
                      <h6 class="card-text">Nail Polish</h6>
                    </div>
                  </div></a>`
                  divRoot.appendChild(brand10)



async function getData(){
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data

    } catch (error) {
        console.log(error)
    }
}
getData()


