const menuEmail=document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')
const menuHamIcon=document.querySelector('.menu')
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon=document.querySelector('.product-detail-close')
const mobileMenu=document.querySelector('.mobile-menu')
const shoppingCartContainer=document.querySelector('#shoppingCartContainer')
const cardsContainer=document.querySelector('.cards-container')
const productDetailContainer=document.querySelector('#productDetail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    const isProductDetailClosed=productDetailContainer.classList.contains('inactive')

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList=[]
productList.push({
    name: "Nevecon",
    price: 1800,
    image: 'https://img.clasf.co/2020/03/28/Vendo-Nevecon-Lg-750-Lts-Usado-20200328200534.5221070015.jpg'
})

productList.push({
    name: "Gaming Monitor",
    price: 515,
    image: 'https://http2.mlstatic.com/D_NQ_NP_775554-MLA50998709239_082022-V.jpg'
})

productList.push({
    name: "Sofa-bed",
    price: 760,
    image: 'https://sofaralia.com/wp-content/uploads/2019/07/sofa-cama-extensible-120x190.jpg'
})

productList.push({
    name: "BMW-X6",
    price: 41170,
    image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/07/20190703-BMW-X6-2020-01.jpg'
})

productList.push({
    name: "Captain-America LIMITED EDITION Invicta watch",
    price: 476,
    image: 'https://www.hodinky-365.com/fotky/maxi3/f178/invicta-marvel-quartz-chronograph-30313-captain-america-limited-edition_208571_250035.jpg'
})

productList.push({
    name: "Black Panther T-Shirt",
    price: 17,
    image: 'https://arturocalle.vtexassets.com/arquivos/ids/500147-1600-auto?v=638036107265530000&width=1600&height=auto&aspect=true'
})

productList.push({
    name: "iPhone XR",
    price: 410,
    image: 'https://i5.walmartimages.com/asr/09a0abdb-4115-41a2-b21c-82475c0dd83e_1.9a379404d79058b0c400c634f385f9d6.jpeg'
})

productList.push({
    name: "AKG Professional microphone",
    price: 145,
    image: 'https://importacionesarturia.com/wp-content/uploads/2016/09/AKG-P220-PgBlanca.jpg'
})

productList.push({
    name: "LIMITED EDITION Pikachu skateboard",
    price: 5000,
    image: 'https://nintendosoup.com/wp-content/uploads/2020/01/Pokemon_Center_x_Bear_Walker_PikachuSkateboard.jpg'
})

productList.push({
    name: "Giant Teddy-Bear plush",
    price: 37,
    image: 'https://toccodeamore.com/wp-content/uploads/2021/05/2-4.jpg'
})


function renderProducts(arr){
    for (product of arr){
        const productCard=document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg=document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo=document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv=document.createElement('div')
        
        const productPrice=document.createElement('p')
        productPrice.innerText='$' + product.price
        const productName=document.createElement('p')
        productName.innerText=product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure=document.createElement('figure')
        const productImgCart=document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)






















