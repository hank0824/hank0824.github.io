AOS.init({

    delay: 2,
    duration: 1000,
});

var stores = {

    north: [{
            local: '北部門店',
            shop_name: '基隆廟口店',
            shop_number: '02-24211682',
            shop_address: '基隆市仁愛區愛四路1號'
        },
        {
            shop_name: '士林天母店',
            shop_number: '02-28711101',
            shop_address: '台北市士林區天母北路3號'
        },
        {
            shop_name: '士林文林店',
            shop_number: '02-28815922',
            shop_address: '台北市士林區文林路191號'
        },
        {
            shop_name: '土城明德店',
            shop_number: '02-22627000',
            shop_address: '新北市土城區明德路一段57號'
        },
        {
            shop_name: '淡水中山店',
            shop_number: '02-26261162',
            shop_address: '新北市淡水區水碓街5號'
        },
        {
            shop_name: '新北市總店',
            shop_number: '02-29572501',
            shop_address: '新北市板橋區中山路二段159號'
        },
        {
            shop_name: '中壢中原店',
            shop_number: '03-4564366',
            shop_address: '桃園市中壢區日新路8號'
        },
        {
            shop_name: '新竹馬偕店',
            shop_number: '03-5165006',
            shop_address: '新竹市東區水源街61號1F'
        },
        {
            shop_name: '竹北正西店',
            shop_number: '03-5536707',
            shop_address: '新竹縣竹北市中正西路124號'
        }
    ],

    central: [{
            local: '中部門店',
            shop_name: '竹南中正店',
            shop_number: '037-552577',
            shop_address: '苗栗縣竹南鎮中正路263-1號'
        },
        {
            shop_name: '苗栗苑裡店',
            shop_number: '037-855866',
            shop_address: '苗栗縣苑裡鎮天下路51號'
        },
        {
            shop_name: '台中學士店',
            shop_number: '04-2206-8891',
            shop_address: '台中市北區學士路45號'
        },
        {
            shop_name: '台中健行店',
            shop_number: '04-2208-3365',
            shop_address: '台中市北區健行路516號'
        },
        {
            shop_name: '台中公益店',
            shop_number: '04-2327-2655',
            shop_address: '台中市南屯區公益路二段158號'
        },
        {
            shop_name: '彰化中正店',
            shop_number: '04-723-4229',
            shop_address: '彰化縣彰化市中正路二段150號'
        },
        {
            shop_name: '鹿港中山店',
            shop_number: '04-7752178',
            shop_address: '彰化縣鹿港鎮中山路159號'
        },
        {
            shop_name: '南投集集店',
            shop_number: '04-92761709',
            shop_address: '南投縣集集鎮民生路111號'
        },
        {
            shop_name: '斗六中山店',
            shop_number: '05-5335958',
            shop_address: '雲林縣斗六市中山路292號'
        }
    ],

    South: [{
            local: '南部門店',
            shop_name: '嘉義民雄店',
            shop_number: ' 05-2263022 ',
            shop_address: '嘉義縣民雄鄉東榮路15號'
        },
        {
            shop_name: '嘉義吳鳳店',
            shop_number: ' 05-2303337 ',
            shop_address: '嘉義市吳鳳南路591號'
        },
        {
            shop_name: '嘉義中山店',
            shop_number: ' 05-2715158  ',
            shop_address: '嘉義市中山路57號'
        },
        {
            shop_name: '台南安平店',
            shop_number: ' 06-2505252 ',
            shop_address: '台南市安平區安平路376-1號'
        },
        {
            shop_name: '中西赤崁店',
            shop_number: ' 06-2238688',
            shop_address: '台南市中西區民族路2段260號'
        },
        {
            shop_name: '民生民權店',
            shop_number: ' 07-2222029',
            shop_address: '高雄市新興區民生一路156號'
        },
        {
            shop_name: '三民高應大店',
            shop_number: ' 07-3985958',
            shop_address: '高雄市三民區大昌二路555號'
        },
        {
            shop_name: '恆春墾丁店',
            shop_number: ' 08-8863869',
            shop_address: '屏東縣恆春鎮墾丁路185號'
        },
        {
            shop_name: '枋寮中山店',
            shop_number: ' 08-8786700',
            shop_address: '屏東縣枋寮鄉中山路205號'
        }
    ],

    east: [{
            local: '東部門店',
            shop_name: '台東新生店',
            shop_number: ' 089-345875',
            shop_address: '台東縣台東市新生路532號'
        },
        {
            shop_name: '台東中華店 ',
            shop_number: '089-333293',
            shop_address: '台東縣台東市中華路一段625號'
        },
    ]
}

$('#poly_top').hover(function () {
    $('.img_top').addClass('active');
}, function () {    
    $('.img_top').removeClass('active');         
});

$('#poly_center').hover(function () {
    $('.img_center').addClass('active');
}, function () {
    $('.img_center').removeClass('active');
});


$('#poly_south').hover(function () {
    $('.img_south').addClass('active');
}, function () {
    $('.img_south').removeClass('active');
});


$('#poly_east').hover(function () {
    $('.img_east').addClass('active');
}, function () {
    $('.img_east').removeClass('active');
});


// $("#poly_top").click(function () {
       
//     $('.shopBox .row').html('');
//     $('.img_top').removeClass('active');
//     $('.img_top, .img_center, .img_south, .img_east').removeClass('click_active');
//     $('.img_top').addClass('click_active');
//     var row = $('.shopBox .row').html();
//     var store_array = stores.north;
//     getStoreData(store_array);
// });
$("#poly_top").click(function () {
    $('.img_top, .img_center, .img_south, .img_east').removeClass('click_active');
    $('.img_top').addClass('click_active');
    $('.shopBox .row').html('');

    var row = $('.shopBox .row').html();
    var store_array = stores.north;
    getStoreData(store_array);
});
$("#poly_center").click(function () {
    $('.img_top, .img_center, .img_south, .img_east').removeClass('click_active');
    $('.img_center').addClass('click_active');
    $('.shopBox .row').html('');

    var row = $('.shopBox .row').html();
    var store_array = stores.central;
    getStoreData(store_array);
});
$("#poly_south").click(function () {
    $('.img_top, .img_center, .img_south, .img_east').removeClass('click_active');
    $('.img_south').addClass('click_active');
    $('.shopBox .row').html('');

    var row = $('.shopBox .row').html();
    var store_array = stores.South;
    getStoreData(store_array);
});
$("#poly_east").click(function () {
    $('.img_top, .img_center, .img_south, .img_east').removeClass('click_active');
    $('.img_east').addClass('click_active');
    $('.shopBox .row').html('');

    var row = $('.shopBox .row').html();
    var store_array = stores.east;
    getStoreData(store_array);
});

// $("#poly_south").click(function () {
//     $('.shopBox .row').html('');
//     $('.img_top').removeClass('active');
//     $('.img_top, .img_center, .img_south, .img_east').removeClass('click_active');
//     $('.img_south').addClass('click_active');
//     var row = $('.shopBox .row').html();
//     var store_array = stores.South;
//     getStoreData(store_array);
// });


// $("#poly_east").click(function () {
//     $('.shopBox .row').html('');
//     $('.img_top').removeClass('active');
//     $('.img_top, .img_center, .img_south, .img_east').removeClass('click_active');
//     $('.img_east').addClass('click_active');
//     var row = $('.shopBox .row').html();
//     var store_array = stores.east;
//     getStoreData(store_array);
// });

function getStoreData(store_array) {
    $(store_array).each(function (index, item) {
        var row = document.querySelector('.shopBox .row');
        row.innerHTML +=
        '<div class="col-6 col-sm-4 col-md-4" data-aos="flip-left" data-aos-delay="'+ (index * 200 - 50) + '"><div class="shop"><h4>' + item.shop_name + '</h4><p>' + item.shop_number + '</p><p>' + item.shop_address + '</p></div></div>'
    });

    // if (store_array.length < 7) {
    //     $('.right_content').css('height', '100vh');
    // } 
    // else {
    //     $('.right_content').css('height', 'unset');
    // }
}







