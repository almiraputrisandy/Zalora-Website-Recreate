/*jslint white:true */
/*global angular */
/*
 * Solution for error message: 'angular' was used before it was defined by JSlint
 *  http://stackoverflow.com/questions/31390428/error-angular-was-used-before-it-was-defined-but-online-editors-able-to-outpu
 *
 */
var images = {
    1: 'image/banner.png',
    2: 'image/searchbar.png',
    3: 'image/profile.png',
    4: 'image/wishlist.png',
    5: 'image/cart.png',
    6: 'image/ZNOW-JULY18-USP-V2.png',
    7: 'image/30dayreturn.png',
    8: 'image/delivery.png',
    9: 'image/downloadapp.png',
    10: 'image/streetstyle-cw16-w-hero-desk.jpg',
    11: 'image/DESKTOP_Fat_Skinny.jpg',
    12: 'image/belt.png',
    13: 'image/whiteBelt1.png',
    14: 'image/whiteBelt2.png',
    15: 'image/whiteBelt3.png',
    16: 'image/exploreMore.png',
    17: 'image/justArrived1.png',
    18: 'image/justArrived2.png',
    19: 'image/trend1.png',
    20: 'image/trend2.png',
    21: 'image/trend3.png',
    22: 'image/trend4.png',
    23: 'image/SEMBONIA-APR19-W-B1.jpg',
    24: 'image/ZALORABASICS-SEPT18-W-B1.jpg',
    25: 'image/PHILOSOPHY-APR19-W-B1.jpg',
    26: 'image/REVOLVE-APR19-W-B1.jpg',
    27: 'image/ALDO-OCT18-W-B1.jpg',
    28: 'image/POMELO-MAR19-W-B1-V2.jpg',
    29: 'image/gfg.png',
    30: 'image/sg.png',
    31: 'image/ph.png',
    32: 'image/my.png',
    33: 'image/hk.png',
    34: 'image/bn.png',
    35: 'image/greenflag.png',
    36: 'image/id.png',
    37: 'image/tw.png',
    38: 'image/mastercard.png',
    39: 'image/visa.png',
    40: 'image/americanexpress.png',
    41: 'image/cimb.png',
    42: 'image/ipay88.png',
    43: 'image/cod.png',
    44: 'image/paypal.png',
    45: 'image/maybank.png',
    46: 'image/boost.png',
    47: 'image/gdex.png',
    48: 'image/citylink.png',
    49: 'image/ninjavan.png',
    50: 'image/infinite.png',
    51: 'image/airasia.png',
    52: 'image/seal_ctv_100.png',
    53: 'image/banner2.png',
    54: 'image/c1-cw15-w.jpg',
    55: 'image/c2-cw15-w.jpg',
    56: 'image/c3-cw15-w.jpg',
    57: 'image/c4-cw15-w.jpg',
    58: 'image/c5-cw15-w.jpg',
    59: 'image/inputbox.png',
    60: 'image/forwomen.png',
    61: 'image/formen.png',
    62: 'image/fb.png',
    63: 'image/ig.png',
    64: 'image/twit.png',
    65: 'image/line.png',
    66: 'image/wechat.png',
    67: 'image/yt.png',
    68: 'image/pinterest.png',
    69: 'image/appstore.png',
    70: 'image/bing.png',
    71: 'image/linkedin.png',
    72: 'image/playstore.png',
    73: 'image/appstore2.png',
    74: 'image/shoe1.png',
    75: 'image/shoe2.png',
    76: 'image/shoe3.png',
    77: 'image/shoe4.png',
    78: 'image/menu-mobile.png',
    79: 'image/search-mobile.png',
    80: 'image/wishlist-mobile.png',
    81: 'image/cart-mobile.png',
    82: 'image/main-img-mobile.png',
    83: 'image/topshop.png',
    84: 'image/dorothy.png',
    85: 'image/mango.png',
    86: 'image/zalora.png',
    87: 'image/download-app-mobile.png'
};

var headings = {
    1: 'Best Sellers',
    2: 'Just Arrived',
    3: 'Trending Now',
    4: 'Featured Brands',
    5: 'Shop by Category',
    6: "SHOP ONLINE FOR THE LATEST IN WOMEN'S FASHION",
    7: 'Top Brands',
    8: 'Top Searches',
    9: 'A Company By',
    10: 'Our Locations',
    11: 'Secure Payment',
    12: 'Delivery Providers',
    13: 'Loyalty Partners',
    14: 'Security System',
    15: 'Customer Service',
    16: 'About Us',
    17: 'New to Zalora?',
    18: 'Find us on',
    19: 'Download Our App Now'
};

var app = angular.module("myApp", []);
app.controller ("myCtrl",
function ($scope){
    "use strict";
    
    $scope.getImage = function(img){
        return images[img];
    };
    
    $scope.getHeading = function(id){
        return headings[id];
    };
    
    $scope.topRightImg = [{id: 3}, {id: 4}, {id: 5}];
    $scope.leftImgMobile = [{id: 78}, {id: 79}];
    $scope.rightImgMobile = [{id: 80}, {id: 81}];
    $scope.nav2 = [{id: 7, text: "DAYS FREE RETURNS"}, {id: 8, text: "FREE DELIVERY ABOVE RM75"}];
    $scope.mainNav = ["Women", "Men"];
    $scope.mainNavMobile = ["Shop", "Women >", "Men >"];
    $scope.nav = ["NEW IN", "ZALORA RAYA 2019", "PREMIUM", "CLOTHING", "SHOES", "ACCESSORIES", "BAGS", "SPORTS", "BEAUTY", "MODEST WEAR", "BRANDS"];
    
    $scope.bestSeller = [{id: 12, brand: "Dorothy Perkins", prodName: "Snake Hammered Square Buckle Belt", price: "RM39.00"},
                        {id: 13, brand: "Playboy Bunny", prodName: "Playboy Bunny 25MM Dot Buckle Ladies Belt", price: "RM75.40"},
                        {id: 14, brand: "Playboy Bunny", prodName: "Playboy Bunny 25MM Automatic Ladies Belt", price: "RM75.40"},
                        {id: 15, brand: "Rubi", prodName: "Chain Detail Belt", price: "RM49.00"}];
    
    $scope.bestSeller2 = [{id: 74, brand: "Nose", prodName: "Metal Heel Sandals", price: "RM119.00"},
                        {id: 75, brand: "Nose", prodName: "Elastic Heels", price: "RM119.90"},
                        {id: 76, brand: "Mango", prodName: "Leather Strap Heels", price: "RM240.90"},
                        {id: 77, brand: "Bata", prodName: "Pointed Toe Heels", price: "RM139.00"}];
    
    $scope.featuredBrands = [{id: 23}, {id: 24}, {id: 25}, {id: 26}, {id: 27}, {id: 28}];
    $scope.brandsMobile = [{id: 83}, {id: 84}, {id: 85}, {id: 86}];
    $scope.shopCategoryCol1 = [{id: 54, text: "SHOP HEELS >"}, {id: 55, text: "SHOP BEAUTY >"}];
    $scope.shopCategoryCol2 = [{id: 57, text: "SHOP BAGS >"}, {id: 58, text: "SHOP ACCESSORIES >"}];
    
    $scope.text = "Ladies, you’ve come to the right place. ZALORA is here to bring you the best in women’s fashion trends. We carry both homegrown and leading international brands, ensuring that you always have the perfect outfit on hand no matter where or when. Get inspired by our trend-focused edits such as floral fever, nudes and neutrals as well as off-duty denim and athleisure spotlight. Our comprehensive selection keeps you looking fresh from top to bottom, with tops and dresses of all styles such as crop top, maxi dresses, playsuits in a myriad of colours, ethnic and modest wear of baju kurung, muslimah dress, tudung, baju kurung moden or kebaya that reflects your culture, and sportswear that brings you closer to your fitness goals.";
    
    $scope.text2 = "No wardrobe is complete without shoes for every occasion, and at ZALORA, we have just the thing. Step out in the sleekest high heels, or make a statement with edgy leather boots. Prefer stylish comfort? Try our classic slip-ons, easy-breezy sandals and lifestyle sneakers. All outfits need a matching bag, and you can always take your pick from our roundup of clutches, purse, shoulder bags and totes. While you’re at it, throw on some new accessories like sunglasses , hijab and dazzling jewellery for added oomph to your outfit. Finally, pamper yourself with an assortment of skin care products tailored for you. Looking and feeling gorgeous 24/7 is possible too thanks to best-selling makeup and fragrances from today’s leading brands.";
    
    $scope.text3 = "Don’t wait any longer, shop at ZALORA today and fulfil all your fashion and beauty needs!";
    
    $scope.brands = [{brandList: ["adidas", "ALDO", "Casio", "Converse", "Daniel Wellington"]}, 
                     {brandList: ["DKNY", "Dorothy Perkins", "EMEL", "JAXON", "Jovian"]},
                     {brandList: ["Lubna", "Mango", "MANGO Man", "New Balance", "Nike"]},
                     {brandList: ["Nose", "Ray-Ban", "Reebok", "Rubi", "SK-II"]},
                     {brandList: ["Something Borrowed", "Timberland", "Topman", "TOPSHOP", "VANS"]},
                     {brandList: ["Velvet", "VINCCI", "ZALORA", "24:01"]}];
    
    $scope.searches = [{searchList: ["Dress", "Baju Melayu", "Jumpsuit", "New Products", "Baju Raya"]}, 
                     {searchList: ["Shoes", "Mysale", "Clothes", "Modest Wear", "Beauty"]},
                     {searchList: ["Kaftan Jubah", "Sports", "Accessories", "Bags", "Baju Muslimah"]},
                     {searchList: ["Heels", "Pants", "Hoodies", "Baju Kebaya", "Cheongsam", "Show More"]},
                     {searchList: ["Skirt", "Wedges", "Lace Dress", "Baju Kurung Moden", "Sneakers"]},
                     {searchList: ["Necklaces", "Kurta Tops", "Dress Muslimah", "Sling Bag", "Instant Tudungs"]}];
    
    $scope.preFooter = [{headerid: 9}, {headerid: 10}, {headerid: 11}, {headerid: 12}, {headerid: 13}, {headerid: 14}];
    
    $scope.preFooterPhoto = [{photo: [{num: 30}, {num: 31}, {num: 32}, {num: 33}, {num: 34}, {num: 35}, {num: 36}, {num: 37}]},
                             {photo: [{num: 38}, {num: 39}, {num: 40}, {num: 41}, {num: 42}, {num: 43}, {num: 44}, {num: 45}, {num: 46}]},
                             {photo: [{num: 47}, {num: 48}, {num: 49}]},
                             {photo: [{num: 50}, {num: 51}]}];
    
    $scope.securityText = ["PCI Security Standard", "Cardholder Protection", "Encrypted Network"];
    
    $scope.brandDesc = "As Asia’s Online Fashion Destination, we create endless style possibilities through an ever-expanding range of products form the most coveted international and local brands, putting you at the centre of it all. With ZALORA, You Own Now.";
    
    $scope.footer = [{headerid: 15, textList: ["Contact Us", "FAQ", "Voucher Terms & Conditions", "Size Guide", "Product Index", "Fashion Glossary", "Track Order"]}, 
                     {headerid: 16, textList: ["ZALORA", "Careers", "Press/Media", "Terms & Conditions", "Privacy Policy", "The Affiliate Program", "Sell With Us", "Advertise with Us", "Promotions", "Corporate Rewards"]}];
    
    $scope.newToZalora = [{text: "Get a RM 35 VOUCHER (plus the latest fashion news and product launches) just by subscribing to our newsletter."}, {text: "Your email address"}];
    $scope.buttons = [{id: 60}, {id: 61}];
    $scope.socialButtons = [{id: 62},{id: 63},{id: 64},{id: 65},{id: 66},{id: 67},{id: 68},{id: 69},{id: 70},{id: 71}];
    $scope.storeButtons = [{id: 72}, {id: 73}];
    
    $scope.bottomFooter = [{col1: ["Any Questions? Let us help you", "Contact  |   Help"]},
                           {col2: ["About  |   Privacy  |   Terms of Service", "© 2012, 2019 Zalora"]}];
    $scope.mobileFooter = ["Contact", "About", "Login", "FAQ", "Termns and Conditions", "Privacy Policy"];
    $scope.mobileFooter2 = "Change to desktop version";
});

app.directive("product", function(){
    "use strict";
    
    var prodList = {},
    linkFunction = function(scope, element,attributes){
        scope.brand = attributes.brand;
        scope.prodName = attributes.prodname;
        scope.price = attributes.price;
        scope.image = attributes.image;
    };
    
    prodList.restrict = 'E';
    prodList.link = linkFunction;
    prodList.template = '<p><img data-ng-src="{{image}}" class="img-responsive bestSeller" alt="product image" /></p><p><b>{{brand}}</b></p><p>{{prodName}}</p><p>{{price}}</p>';
    prodList.scope = {};
    
    return prodList;
});