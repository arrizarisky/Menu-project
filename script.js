// Items
const menu = [
    {
        id: 1,
        title: 'Nasi ayam sambal',
        category: 'Dinner',
        price: 17.500,
        img: './assets/img/1.jpeg',
        desc: 'maem sego karo sambel kambek pacarmu, menggugah lambung untuk kumat namun percaylah rosone iki ga iso dilupakkan',

    },
    {
        id: 2,
        title: 'Lontong pagi',
        category: 'breakfast',
        price: 8.500,
        img: './assets/img/2.jpeg',
        desc: 'lontong iki gae wetengmu wareg di pagi hari rek, ra usah masak uwes tuku wae neng warung onlenku insyaallah rezekiku lancar',

    },
    {
        id: 3,
        title: 'nasi tumpeng super double',
        category:'lunch',
        price: 150.00,
        img: '',
        desc: 'nasi lembu super double iki rek, iso koe kongsian kambek konco kerjomu 8 owong wareg sampe sisok yakin aku',

    },
    {
        id: 4,
        title: 'chicken satay ',
        category:'Dinner',
        price: 12.00,
        img: '',
        desc: 'selain memuaskan dengan rasanya yang enak, sate ini juga bisa membuat kenyang karena banyak kalorinya, tapi ra peduli kalori kalori seng penting enak pangan wae',

    },
    {
        id: 5,
        title: 'nasi padang',
        category:'lunch',
        price: 12.500,
        img: '',
        desc:'kari ayam, sayur gori, ayam goreng jadi satu didalam bungkusan bernama nasi padang, selain hargane terjangkau isine juga banyak rek, cocok nggawe porsi kuli pekerja berat' ,

    },
    {
        id: 6,
        title: 'rendang daging',
        category:'dinner',
        price: 25.00,
        img:'' ,
        desc: 'panganan seko padang iki uwes di modifikasi kambek wong jowo dadi lebih enak gawe ilate wong jowo',

    },
    {
        id: 7,
        title: 'cumi sambalado',
        category:'lunch',
        price: 15.00,
        img:'' ,
        desc: 'cumi yang berasal dari laut sunda ini merupakkan cumi terbaik, namun untuk konsumen di toko Warung onlenku kami kasih murah dengan kualitas yang sempurna',

    },
    {
        id: 8,
        title:'nasi goreng' ,
        category:'dinner',
        price: 10.00,
        img:'' ,
        desc:'nasi goreng adalah solusi yang pas bagi anak muda yang begadang namun kelaparan, kami tidak hadir untuk sekedar mengenyangkan konsumen tetapi juga memberikan pengalaman nasi goreng yang memanjakan lidah' ,

    },
]

const sectionCenter = document.querySelector('.section-center')
// const filterbtns = document.querySelectorAll('.filter-btn')
const container = document.querySelector('.btn-container')
// load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu) 
    displayMenuButtons()
})

function displayMenuItems (menuItems) {
    let displayMenu = menuItems.map(function (item) {
    
        return `<article class="menu-items">
        <img src=${item.img} alt=${item.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML = displayMenu 
}

function displayMenuButtons() {
    const categories = menu.reduce(function(values,item){
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ['all']
    )  
    const categoryBtns = categories.map(function(category){
        return ` <button class="filter-btn" type="button" data-id=${category}>
         ${category}</button>`
    })
    .join('')
    container.innerHTML = categoryBtns
    const filterbtns = container.querySelectorAll('.filter-btn')
    // filter item
        filterbtns.forEach(function (btn){
        btn.addEventListener('click', function (e){
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter(function (menuItem){
        if (menuItem.category === category ) {
           return menuItem 
        }
        })
        if(category === 'all') {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory)
        }
    }) 
})
}