var category = [
    {name:'推荐',path:'/homepage/page/recommend'},
    {name:'手机',path:'/homepage/pagebuy/phone'},
    {name:'智能',path:'/homepage/pagebuy/AI'},
    {name:'电视',path:'/homepage/pagebuy/TV'},
    {name:'家电',path:'/homepage/page/equipment'},
    {name:'笔记本',path:'/homepage/pagebuy/PC'},
    {name:'生活周边',path:'/homepage/page/daily'}
]
var recommend_swiper = [
    {
        img_url:'https://i8.mifile.cn/v1/a1/0d509328-b045-0486-bcd2-3280007e5c5d!720x360.webp',
        path:'https://m.mi.com/commodity/detail/10000131'
    },
    {
        img_url:'https://i8.mifile.cn/v1/a1/b7522c70-99f0-6d81-9e04-fc5411465e08!720x360.webp',
        path:'https://s1.mi.com/pages/c9a8a89997dec2c49626cd70b7849142/index.html'
    },
    {
        img_url:'https://i8.mifile.cn/v1/a1/e6fbd905-b149-5ae4-82b6-6632c4e95167!720x360.webp',
        path:'https://m.mi.com/commodity/detail/6222'
    },
]
var phone_swiper = [
    {
        img_url:'https://i8.mifile.cn/v1/a1/7155e2d6-d70e-e7eb-4bc2-307d4eb43d33!720x360.webp',
        path:'https://m.mi.com/commodity/detail/10000138'
    },
    {
        img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c994e202f3c851e5a6dc50eaba4e886.jpg?thumb=1&w=720&h=360',
        path:'https://m.mi.com/commodity/detail/10000099'
    },
    {
        img_url:'https://i8.mifile.cn/v1/a1/46f6e095-63d1-32ce-d4ba-e65ef7f3e327!720x360.webp',
        path:'https://m.mi.com/commodity/detail/10000135'
    }
]
var AI_swiper = [
    {
        img_url:'//i8.mifile.cn/v1/a1/6bb73dc4-f29e-ff97-ab84-cc3451638f0f.webp?w=1080&h=540&bg=C1C1C3',
        path:'https://m.mi.com/commodity/detail/9120'
    },
    {
        img_url:'//i8.mifile.cn/v1/a1/f127e30e-6b0c-26df-7601-8f9dcdde66f5.webp?w=1080&h=540&bg=D2C2B5',
        path:'https://m.mi.com/commodity/detail/8810'
    },
    {
        img_url:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/370ade3d4a6c3247189727b886886141.jpg?w=1080&h=540&bg=FFFFFF',
        path:'https://m.mi.com/commodity/detail/7229'
    }
]
var TV_swiper = [
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c87c9ce2b644a1354e60d7fef0d548cd.jpg?w=1080&h=624&bg=C51C2E",
        path:'https://m.mi.com/channel/7516'
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/6432175c-7921-b1c8-1200-0ada31c350b3.webp?w=1080&h=626&bg=E7C9B7",
        path:'https://m.mi.com/commodity/detail/8909'
    }
]
var equipment_swiper = [
    {
        img_url: "//i8.mifile.cn/v1/a1/2382b391-e8dc-27b7-ebe3-b45403cd169f.webp?w=1080&h=540&bg=96C8C8",
        path:'https://m.mi.com/commodity/detail/9144'
    },
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3031fd3a867066af3b6351d84162811.jpg?w=1080&h=540&bg=B2B3B6",
        path:'https://m.mi.com/commodity/detail/9161'
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/ae5b2713-44ce-b54a-45b8-897e93e67fdb.webp?w=1080&h=540&bg=F8DEB7",
        path:'https://m.mi.com/commodity/detail/9183'
    }
]
var PC_swiper = [
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb436c3a8dd9e2abb5ce18eaf6359704.jpg?w=1080&h=700&bg=C4206F",
        path:'https://m.mi.com/commodity/detail/10000140'
    },
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/287788894459977803e4a04894979cdd.jpg?w=1080&h=700&bg=BF1E74",
        path:'https://m.mi.com/commodity/detail/10000144'
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/49638a24-9abf-6320-9d8b-0f4232ad4417.webp?w=1080&h=700&bg=C42178",
        path:'https://m.mi.com/commodity/detail/10000082'
    },
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e9782fa9f3d7981195542a3dd139498f.jpg?w=1080&h=700&bg=B71674",
        path:'https://m.mi.com/commodity/detail/10000113'
    }
]
var equipment_swiper = [
    {
        img_url: "//i8.mifile.cn/v1/a1/2382b391-e8dc-27b7-ebe3-b45403cd169f.webp?w=1080&h=540&bg=96C8C8",
        path:'https://m.mi.com/commodity/detail/9144'
    },
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3031fd3a867066af3b6351d84162811.jpg?w=1080&h=540&bg=B2B3B6",
        path:'https://m.mi.com/commodity/detail/9161'
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/ae5b2713-44ce-b54a-45b8-897e93e67fdb.webp?w=1080&h=540&bg=F8DEB7",
        path:'https://m.mi.com/commodity/detail/9183'
    }
]
var daily_swiper = [
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74017c12d09ca8c6e4447ed48050591d.jpg?w=1080&h=540&bg=D1D0CC",
        path:'https://m.mi.com/commodity/detail/8621'
    },
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a8f011aa0bbfbf91bebfa4dc58afee.jpg?w=1080&h=540&bg=E2C4B8",
        path:'https://m.mi.com/commodity/detail/9540'
    },
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/37eeff71bd172640209a047e2349a543.jpg?w=1080&h=540&bg=9FA7B7",
        path:'https://m.mi.com/commodity/detail/10000143'
    }
]
var recommend_productList = [
    {
        kind:'手机',
        url:'/pagebuy/phone',
        beforeImg:[
            {img_url: "//i8.mifile.cn/v1/a1/5df15531-f43d-4255-7e2b-006c7e19ef12.webp?w=1080&h=660&bg=BAADC8",product_id:"10000100"},
        ],
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1.webp?w=1080&h=1080",
                product_id:"10000117",
                product_brief: "潮流轻旗舰，超级夜景模式",
                product_name: "小米8 青春版",
                product_org_price: "1699",
                product_price: "1299"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/2dc1fd08-ee77-65dd-c52a-82ba382ae864.webp?w=1080&h=1080",
                product_id:"10000118",
                product_brief: "压感屏幕指纹，手持超级夜景",
                product_name: "小米8 屏幕指纹版",
                product_org_price: "2999",
                product_price: "2499"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/def98121-4b54-54a6-debb-e5c8a51dd4f7.webp?w=1080&h=1080",
                product_id:"10000122",
                product_brief: "双液冷，更能打",
                product_name: "黑鲨游戏手机 Helo",
                product_org_price: "3499",
                product_price: "3199"   
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/e8699727-9628-8c0b-103a-f14fe8a56d02.webp?w=1080&h=1080",
                product_id:"10000103",
                product_brief: "小屏高性能的双摄手机",
                product_name: "红米6",
                product_org_price: "799",
                product_price: "729"
            },
            {
                img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/103e9551a0d797e708327d49056b65dd.jpg?w=1080&h=1080",
                product_brief: "好看耐用/轻巧省心",
                product_id: "10000110",
                product_name: "红米6A",
                product_org_price: "599",
                product_price: "549"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/bd9b6895-5b51-a0d6-fb79-e430ca40dca6.webp?w=1080&h=1080",
                product_brief: "前置2000万，后置2000万",
                product_id: "10000091",
                product_name: "小米6X",
                product_org_price: "1799",
                product_price: "1249"
            },
        ]
    },
    {
        kind:'电视',
        url:'/pagebuy/TV',
        beforeImg:[
            {img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/65f78b4fe2cadb24e2a73ca740186cff.jpg?w=1080&h=660&bg=C2D1E7",product_id:"9668"},
        ],
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/6017d231-019c-a76d-e54a-0bb6948bfd0d.webp?w=1080&h=1080",
                product_brief: "人工智能语音，FHD全高清屏",
                product_id: "7911",
                product_name: "电视4A 43英寸 青春版",
                product_org_price: "1499",
                product_price: "1399"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc.webp?w=1080&h=1080",
                product_brief: "人工智能系统，高清液晶屏",
                product_id: "6222",
                product_name: "小米电视4A 32英寸",
                product_org_price: "899",
                product_price: "799"
            },
            {
                img_url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7d4d94788f8591e5557a4c23c3ba4307.jpg?w=1080&h=1080",
                product_brief: "4K HDR，人工智能语音系统",
                product_id: "8911",
                product_name: "小米电视4A 58英寸",
                product_org_price: "2999",
                product_price: "2499"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/c547c9f7-1703-a6ae-79e0-4e27912595f8.webp?w=1080&h=1080",
                product_brief: "4K HDR，钢琴烤漆",
                product_id: "7795",
                product_name: "小米电视4C 50英寸",
                product_org_price: "2099",
                product_price: "1899"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/4e925115-fde0-0364-814e-34471fda46e5.webp?w=1080&h=1080",
                product_brief: "4K HDR，人工智能语音",
                product_id: "8111",
                product_name: "小米电视4X 55英寸",
                product_org_price: "2399",
                product_price: "2099"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/b509d62f-a10a-6559-94f4-852b401815fb.webp?w=1080&h=1080",
                product_brief: "4K HDR，人工智能语音系统",
                product_id: "5353",
                product_name: "小米电视4A 65英寸",
                product_org_price: "3699",
                product_price: "3199"
            },
        ],
        afterImg:[
            {img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2fd780d0cc96b2c97b3857d0e480315.jpg?w=1080&h=420&bg=DFD0BE",product_id:"9689"}
        ]
    },
    {
        kind:'笔记本',
        url:'/pagebuy/PC',
        beforeImg:[
            {img_url: "//i8.mifile.cn/v1/a1/2627319b-cb4c-6c13-2c96-c18286c1f34e.webp?w=1080&h=660&bg=BAC8C5",product_id:"10000140"},
        ],
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/48664b4c-07bb-f276-7fbb-a79a7ddd4a7e.webp?w=1080&h=1080",
                product_brief: "全面均衡的国民轻薄本",
                product_id: "8915",
                product_name: "15.6英寸 i5 8G MX110",
                product_org_price: "4599",
                product_price: "4599"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/780ebdf2-669a-923b-752d-8aecb392a08b.webp?w=1080&h=1080",
                product_brief: "四核i7处理器 高性能独显",
                product_id: "7438",
                product_name: "13.3英寸 i7 MX150 灰色",
                product_org_price: "5999",
                product_price: "5499"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/93aa5dda-ae56-3dac-d19a-8fd390189216.webp?w=1080&h=1080",
                product_brief: "高性能独显 第八代处理器",
                product_id: "6781",
                product_name: "15.6英寸 i7 16G MX150",
                product_org_price: "6999",
                product_price: "6499"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/82df8302-8625-d544-8b12-cd37c8b1dd0b.webp?w=1080&h=1080",
                product_brief: "四核i7处理器 高性能独显",
                product_id: "7866",
                product_name: "13.3英寸 i7 MX150 银色",
                product_org_price: "5999",
                product_price: "5999"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/0f5dc643-183c-5bce-8de3-0f0829e9c3d5.webp?w=1080&h=1080",
                product_brief: "性能怪兽 信仰级游戏体验",
                product_id: "8648",
                product_name: "游戏本i7 GTX1060",
                product_org_price: "8999",
                product_price: "8999"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/28bf863f-1c2d-52b8-a2e5-186dfcbaad1e.webp?w=1080&h=1080",
                product_brief: "轻薄长续航 超窄边框",
                product_id: "7565",
                product_name: "12.5英寸 m3 128G 银色",
                product_org_price: "3599",
                product_price: "3599"
            }
        ],
        afterImg:[
            {img_url: "https://i8.mifile.cn/v1/a1/9cb878a9-b7e6-0d38-f8ca-1af56549e74d!720x280.webp",product_id:"10000141"}
        ]
    }
]
var phone_productList = [
    {
        title:"爆款推荐",
        background:"rgb(230, 231, 251)",
        color:"rgb(114, 89, 198)",
        firstProduct:{
            img_url: "//i8.mifile.cn/v1/a1/4d88e210-cda1-95f8-9e12-b09656dced23.webp",
            product_brief: "4000mAh超长续航，骁龙632八核处理器",
            product_id: "10000138",
            product_name: "Redmi 7 ",
            product_org_price: "699",
            product_price: "699"
        },
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/111cd2ee-0e6a-b286-d713-30a7fce817a3.webp",
                product_brief: "骁龙855，立体触控",
                product_id: "10000139",
                product_name: "黑鲨游戏手机 2",
                product_org_price: "3199",
                product_price: "3199"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/caa27ba6-0736-6aec-f9c9-1c043e128209.webp", 
                product_brief: "4800万拍照千元机", 
                product_id: "10000131", 
                product_name: "Redmi Note 7", 
                product_org_price: "999", 
                product_price: "999"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/df928336-4375-9441-8b7f-6ca38804f6db.webp",
                product_brief: "骁龙855，索尼4800万三摄",
                product_id: "10000134",
                product_name: "小米9",
                product_org_price: "2999",
                product_price: "2999"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/8018ebd4-8eda-887e-f2e9-5556e71938f8.webp",
                product_brief: "索尼4800万三摄，骁龙712",
                product_id: "10000135",
                product_name: "小米9 SE",
                product_org_price: "1999",
                product_price: "1999"
            }
        ]
    },
    {
        title:"4800万超清拍照",
        background:"rgb(230, 231, 251)",
        color:"rgb(114, 89, 198)",
        firstProduct:{
            img_url: "//i8.mifile.cn/v1/a1/5aeb5e2a-479d-319c-97b5-13d38d771876.webp?w=1044&h=654",
            product_brief: "骁龙855，索尼4800万微距三摄	",
            product_id: "10000134",
            product_name: "小米9",
            product_org_price: "2999",
            product_price: "2999"
        },
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/4848e768-dd4e-a61b-0c80-e90f8d5e469e.webp?w=516&h=420",
                product_brief: "4800万拍照千元机",
                product_id: "10000131",
                product_name: "Redmi Note 7",
                product_org_price: "999",
                product_price: "999"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/9c8e3886-5903-2449-eccc-542ea1d8db79.webp?w=516&h=420",
                product_brief: "索尼4800万三摄，骁龙712",
                product_id: "10000135",
                product_name: "小米9 SE",
                product_org_price: "1999",
                product_price: "1999"
            }
        ]
    }
]
var AI_productList = [
    {
        title:"热卖爆品",
        background:"rgb(240, 241, 243)",
        color:"rgb(102, 102, 102)",
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/450956c5-4acb-14dc-bc36-ba640bfee836.webp?w=516&h=420",
                product_brief: "听音乐、语音遥控家电",
                product_id: "6334",
                product_name: "小米AI音箱",
                product_org_price: "299",
                product_price: "249"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/8bda3599-0ad3-6c31-cd92-b6e24427fb06.webp?w=516&h=420",
                product_brief: "高清画质，守护家的每一面",
                product_id: "8026",
                product_name: "小米米家智能摄像机云台版",
                product_org_price: "199",
                product_price: "199"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/ebae08b1-0f03-1084-329f-883ff1249d43.webp?w=516&h=420",
                product_brief: "年轻人的酷玩具",
                product_id: "2774",
                product_name: "九号平衡车",
                product_org_price: "1999",
                product_price: "1899"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/333df7d8-a210-f6cf-bbde-1b6165b30d08.webp?w=516&h=420",
                product_brief: "能刷公交卡的手环",
                product_id: "8810",
                product_name: "小米手环3 NFC版",
                product_org_price: "199",
                product_price: "189"
            },
        ]
    },
    {
        title:"新品专区",
        background:"rgb(240, 241, 243)",
        color:"#666",
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/64e59ece-53a6-096d-5388-55ee866aa123.webp?w=516&h=420",
                product_brief: "看得明白扫得彻底",
                product_id: "9527",
                product_name: "米家扫地机器人1S",
                product_org_price: "1999",
                product_price: "1899"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/fdfc4d6f-b505-4208-bf88-0d57397d426a.webp?w=516&h=420",
                product_brief: "营养生活，为你细致打磨",
                product_id: "9408",
                product_name: "米家破壁料理机",
                product_org_price: "699",
                product_price: "699"
            }
        ]
    }
]
var TV_productList =[
    {
        title:"发布会新品开售",
        background:"rgb(218, 10, 32)",
        color:"rgb(252,226,188)",
        products:[
            {
                img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c22ef1ec5004186aa3a675f8283867a4.jpg?w=516&h=420",
                product_brief: "壁画外观，全面屏设计，支持远场语音",
                product_id: "9689",
                product_name: "小米壁画电视 65英寸",
                product_org_price: "6999",
                product_price: "6999"
            },
            {
                img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd9bbb3e627bd7ccf177d70dde7cd706.jpg?w=516&h=420",
                product_brief: "全面屏设计，人工智能语音",
                product_id: "9668",
                product_name: "小米全面屏电视E55A",
                product_org_price: "2999",
                product_price: "2499"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/0b36e406-1df4-a17f-1c90-bd3a177b8aa5.webp?w=516&h=420",
                product_brief: "4K HDR，金属机身，人工智能语音",
                product_id: "9677",
                product_name: "小米电视4S 58英寸",
                product_org_price: "3299",
                product_price: "2999"
            },
            {
                img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/563c65a53d02dcee968704bec2f2a20b.jpg?w=516&h=420",
                product_brief: "4K HDR超高清画质，人工智能语音",
                product_id: "9666",
                product_name: "小米电视4X 65英寸",
                product_org_price: "3699",
                product_price: "2999"
            },
        ]
    },
    {
        title:"热卖旗舰 限时特惠",
        background:"rgb(218, 10, 32)",
        color:"rgb(252,226,188)",
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/f7e8338e-f550-7d06-9b5d-ae17490a4f5d.webp?w=516&h=420",
                product_brief: "4K HDR，人工智能语音系统",
                product_id: "5353",
                product_name: "小米电视4A 65英寸",
                product_org_price: "3699",
                product_price: "2899"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/9d10819b-b9a0-e202-6066-5cafd2eab9a9.webp?w=516&h=420",
                product_brief: "4K HDR，人工智能系统",
                product_id: "6628",
                product_name: "小米电视4C 55英寸",
                product_org_price: "2399",
                product_price: "1899"
            }
        ]
    }
]
var equipment_productList = [
    {
        beforeImg:[
            {img_url: "https://i8.mifile.cn/v1/a1/eb69d32d-1813-8cda-6ba7-e293b77f52dd!720x80.webp",product_id:"10000100"},
        ],
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/c585ed38-bee4-2f3c-c413-a1af154a74b3.webp?w=1080&h=1080",
                product_brief: "1.5匹，全直流变频",
                product_id: "9144",
                product_name: "米家互联网空调（一级能效）",
                product_org_price: "2699",
                product_price: "2199"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/27721d21-782a-32e8-772b-462652d9acde.webp?w=1080&h=1080",
                product_brief: "洗得净、烘得干",
                product_id: "9161",
                product_name: "米家洗烘一体机10kg",
                product_org_price: "2499",
                product_price: "1999"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/ecca7944-9795-a128-8101-15f148bbfdec.webp?w=1080&h=1080",
                product_brief: "1.5匹变频，高效制冷热",
                product_id: "8634",
                product_name: "米家互联网空调",
                product_org_price: "2299",
                product_price: "1999"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/ccecfbb9-a809-f297-1bde-f283b1fb41c0.webp?w=1080&h=1080",
                product_brief: "1.5匹，自清洁，变频 ",
                product_id: "9557",
                product_name: "米家互联网空调C1",
                product_org_price: "2399",
                product_price: "2399"
            },
        ]
    }
]
var PC_productList = [
    {
        title:"人气甄选 热销爆款",
        background:"rgb(193, 0, 105)",
        color:"#eee",
        firstProduct:{
            img_url: "//i8.mifile.cn/v1/a1/4cb934e4-7aae-e105-567c-be9c0ecb58f9.webp",
            product_brief: "全面均衡的国民轻薄本",
            product_id: "10000141",
            product_name: "小米笔记本15.6 2019款 独显版",
            product_org_price: "3999",
            product_price: "3999"
        },
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/1ab77c9e-f4ee-edf9-9faf-b630f0b5a6fe.webp",
                product_brief: "像杂志一样随身携带",
                product_id: "10000145",
                product_name: "Air 12.5 2019款",
                product_org_price: "3599",
                product_price: "3599"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/2a2092cb-b513-6ee5-3f78-c660d74fffc9.webp?w=516&h=420",
                product_brief: "新一代独立显卡",
                product_id: "10000142",
                product_name: "Air 13.3 2019款",
                product_org_price: "4999",
                product_price: "4999"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/7f5bc597-499f-f97f-084a-905fa05c5b71.webp?w=516&h=420",
                product_brief: "更强悍的专业笔记本",
                product_id: "10000114",
                product_name: "Pro 15.6 GTX版",
                product_org_price: "6299",
                product_price: "6299"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/27acb835-9137-0051-7842-0fe65bd267bc.webp?w=516&h=420",
                product_brief: "强悍的专业笔记本",
                product_id: "10000144",
                product_name: "Pro 15.6 2019款",
                product_org_price: "5599",
                product_price: "5599"
            }
        ]
    }
]
var daily_productList = [
    {
        beforeImg:[
            {img_url: "//i8.mifile.cn/v1/a1/f2635080-3835-53f0-5f80-ac1e50e0784c.webp"},
        ],
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/265d40e8-8afc-d31d-ccfd-761f5e515542.webp?w=1080&h=1080",
                product_brief: "真心品质帮助睡眠",
                product_id: "5729",
                product_name: "8H乳胶床垫·青春版",
                product_org_price: "599",
                product_price: "599"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/d868986c-7303-c179-32e4-ff815d6f8f99.webp?w=1080&h=1080",
                product_brief: "看得见的软萌，喝得到的温暖",
                product_id: "9317",
                product_name: "米兔儿童保温杯",
                product_org_price: "129",
                product_price: "119"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/792f0c6a-1647-025c-cf03-8ee75801b873.webp?w=1080&h=1080",
                product_brief: "多重新科技  升级好睡眠",
                product_id: "4375",
                product_name: "8H护颈乳胶枕 Z2",
                product_org_price: "239",
                product_price: "239"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/5d81bf5c-5a76-f23c-2c89-af0d6fdccd20.webp?w=1080&h=1080",
                product_brief: "科学护眼 舒适防污",
                product_id: "9540",
                product_name: "米家防蓝光护目镜 Pro",
                product_org_price: "149",
                product_price: "149"
            },
        ]
    }
]
var cart_productList = [
    {
        beforeImg:[
            {img_url: "https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"},
        ],
        products:[
            {
                img_url: "//i8.mifile.cn/v1/a1/265d40e8-8afc-d31d-ccfd-761f5e515542.webp?w=1080&h=1080",
                product_brief: "真心品质帮助睡眠",
                product_id: "5729",
                product_name: "8H乳胶床垫·青春版",
                product_org_price: "599",
                product_price: "599"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/d868986c-7303-c179-32e4-ff815d6f8f99.webp?w=1080&h=1080",
                product_brief: "看得见的软萌，喝得到的温暖",
                product_id: "9317",
                product_name: "米兔儿童保温杯",
                product_org_price: "129",
                product_price: "119"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/792f0c6a-1647-025c-cf03-8ee75801b873.webp?w=1080&h=1080",
                product_brief: "多重新科技  升级好睡眠",
                product_id: "4375",
                product_name: "8H护颈乳胶枕 Z2",
                product_org_price: "239",
                product_price: "239"
            },
            {
                img_url: "//i8.mifile.cn/v1/a1/5d81bf5c-5a76-f23c-2c89-af0d6fdccd20.webp?w=1080&h=1080",
                product_brief: "科学护眼 舒适防污",
                product_id: "9540",
                product_name: "米家防蓝光护目镜 Pro",
                product_org_price: "149",
                product_price: "149"
            },
        ]
    }
]
var AI_imgList = [
    {
        img_url: "//i8.mifile.cn/v1/a1/d9f19894-29e5-002e-9b13-ffc1aa1ba938.webp",
        path: "https://s1.mi.com/pages/4cea2358d3cc5f8cd32397ca9bc51b94/index.html"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/8e85813b-77de-3db8-5174-c20d229970d1.webp",
        path:"https://s1.mi.com/pages/2ed0828621535a2a85a8f8e3388080d2/index.html"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/aa74812f-c238-0e98-b834-2b7a609e084a.webp",
        path: "https://s1.mi.com/pages/496bd33584d955e3913f1a3e82bb2f2d/index.html"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/dff78479-8832-6a56-df95-0b8710cf00c1.webp",
        path: "https://s1.mi.com/pages/ff1d4796fe85a21ba86081db7bf2196b/index.html"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/d6d9bdb2-c77a-7d38-ba76-ea782ff3bb3a.webp",
        path: "https://s1.mi.com/pages/abceedf5017915685f379075f00a5ccd/index.html"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/e02b65f9-0b2e-d46d-0f43-acb604d90f37.webp",
        path: "https://s1.mi.com/pages/9f03268e82461f179f372e61621f42d9/index.html"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/bbccc554-12fc-270e-1d27-35618878654f.webp",
        path: "https://s1.mi.com/pages/fc1dc4549df0335d7f506edb5d66af16/index.html"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/9b375c22-b4f7-ba76-3433-0600d13d897e.webp",
        path: "https://s1.mi.com/pages/375abb16ea7c1f83be31ce4c3495ec41/index.html",
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/b8a14117-6e79-2344-8c6c-a2f77f038a99.webp",
        path: "https://s1.mi.com/pages/3ebd728de6fa78aa8bc932e9abece9c0/index.html"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/1cba24eb-cbcd-b9e7-340b-22f35ac247d7.webp",
        path: "https://s1.mi.com/pages/3dfa05a594c0e171bc690aa9101496b6/index.html"
    }
]
var recommend_imgList = [
    {
        img_url:'https://i8.mifile.cn/v1/a1/01e0772b-fcd9-6e03-cdf3-9bd08b2d2974!144x152.webp',
        path:'https://m.mi.com/channel/1852'
    },
    {
        img_url:'https://i8.mifile.cn/v1/a1/69f3581c-893a-c3a3-9f27-055146a62b7e!144x152.webp',
        path:'https://m.mi.com/legacy/#/recycling/'
    },
    {
        img_url:'https://i8.mifile.cn/v1/a1/9f3a3e88-3b55-f7c8-b863-5867e23022c1!144x152.webp',
        path:'https://s1.mi.com/pages/eb7cdec4751eb3b3fd24908c6bdb1c17/index.html'
    },
    {
        img_url:'https://i8.mifile.cn/v1/a1/08a2268a-5554-7170-95d6-301ef8db4325!144x152.webp',
        path:'https://m.mi.com/crowdfunding/home'
    },
    {
        img_url:'https://i8.mifile.cn/v1/a1/b05bf09b-a0a7-ef8f-e5ba-500b1549938c!144x152.webp',
        path:'https://service.10046.mi.com/channel/'
    }
]
var TV_imgList = [
    {
        img_url: "//i8.mifile.cn/v1/a1/592f5ad6-f231-bae0-10de-3b113ccd166f.webp?w=216&h=228&bg=CF4248",
        path:"https://m.mi.com/channel/6034"
    },
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/61979db123af07fcc1cd6405d5503b5d.jpg?w=216&h=228&bg=C64348",
        path:"https://m.mi.com/channel/5842"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/c11433fc-aee4-4569-4f12-ecf3a1000e44.webp?w=216&h=228&bg=D54546",
        path:"https://m.mi.com/channel/5678"
    },
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/25cb85d84306cabd3d5c991346815f1d.jpg?w=216&h=228&bg=D34C4D",
        path:"https://m.mi.com/channel/5679"
    },
    {
        img_url: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/612643c9b09f2e84f70523e4bdb007a1.jpg?w=216&h=228&bg=C64A53",
        path:"https://m.mi.com/channel/5680"
    },
    
]
var equipment_imgList=[
    {
        img_url: "//i8.mifile.cn/v1/a1/e44693a1-7703-8f89-fc0f-f280ee271ac9.webp?w=216&h=228&bg=FAF9F2",
        path:"https://m.mi.com/channel/8581"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/9debf9a2-ff6b-b166-dc9e-8df8dcadf696.webp?w=216&h=228&bg=F7F9F9",
        path:"https://m.mi.com/channel/6527"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/6c04eeb7-ba1f-a125-76b7-2639939d842f.webp?w=216&h=228&bg=F3F7FA",
        path:"https://m.mi.com/channel/6528"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/560c7937-dff9-459f-44ec-d8690b563e16.webp?w=216&h=228&bg=FBF4F4",
        path:"https://m.mi.com/channel/6531"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/6cfa0be6-4c0d-38b7-7e52-782a384fd8f6.webp?w=216&h=228&bg=F4F8F9",
        path:"https://m.mi.com/channel/6533"
    }
]
var PC_imgList = [
    {
        img_url: "//i8.mifile.cn/v1/a1/4f43f69d-fd19-876c-123e-18a5de855777.webp",
        path:"https://m.mi.com/channel/9125"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/eab515e8-ca30-0568-188f-cfe3732160c4.webp",
        path:"https://m.mi.com/channel/5740"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/c145c175-f9d2-401a-337d-0807199d20c2.webp",
        path:"https://m.mi.com/channel/5741"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/1e38c6bb-93db-ecc9-a383-b72017a66eb8.webp",
        path:"https://m.mi.com/channel/5742"
    },
    {
        img_url: "//i8.mifile.cn/v1/a1/73773fed-e3ba-8b88-0be7-3ef112ba0ec5.webp",
        path:"https://m.mi.com/commodity/detail/10000113"
    }
]
var daily_imgList=[
    {
        img_url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744a6c8c5fd696193d9f608f683f9c6e.jpg?w=216&h=228&bg=FFFFFF",
        path:"https://m.mi.com/channel/5593"
    },
    {
        img_url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2aec734a14f5301128219279b016c9a6.jpg?w=216&h=228&bg=FFFFFF",
        path:"https://m.mi.com/channel/5594"
    },
    {
        img_url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ebe7f67192ddb55b4f8f94f2e1ab4376.jpg?w=216&h=228&bg=FFFFFF",
        path:"https://m.mi.com/channel/5595"
    },
    {
        img_url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/08b6ade705922f14f196bcd905903caf.jpg?w=216&h=228&bg=FFFFFF",
        path:"https://m.mi.com/channel/5597"
    },
    {
        img_url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/921ce6cd7c033799e45ca01e32430402.jpg?w=216&h=228&bg=FFFFFF",
        path:"https://m.mi.com/channel/5598"
    }
]
var cart = JSON.parse(window.localStorage.getItem('cart')||'[]')
var products = [
    {
        product_id:'10000134',
        product_name:'小米9',
        product_brief:'全息幻彩全曲面玻璃机身 / 骁龙855旗舰处理器 / 索尼4800万超广角微距三摄 / 20W无线闪充 / 第5代极速屏下指纹解锁',
        imgs:[
            {img_url: "//i8.mifile.cn/v1/a1/aac29a74-bf7b-463d-7e15-8348d83d3a7f.webp"},
            {img_url: "//i8.mifile.cn/v1/a1/f30a89a4-73e4-352e-f936-26588462b83c.webp"},
            {img_url: "//i8.mifile.cn/v1/a1/b2d4db08-0429-50dd-6f26-2168eba07eac.webp"},
            {img_url: "//i8.mifile.cn/v1/a1/a880ee2c-538d-7f72-515b-1ef73ba7f985.webp"}
        ],
        price:2999,
        cart_img:'https://i1.mifile.cn/a1/pms_1550642242.36585125.jpg'
    },
    {
        product_id:'4802',
        product_name:'米家空气净化器Pro',
        product_brief:'OLED 显示屏幕 / 激光颗粒物传感器 / 500m³/h颗粒物 CADR / 60㎡适用面积',
        imgs:[
            {img_url:'//i8.mifile.cn/v1/a1/539d9c96-8543-30fd-3e08-3ea3e22334af.webp'},
            {img_url:'//i8.mifile.cn/v1/a1/01ece0a3-b988-9beb-6913-63639d80d6c9.webp'},
            {img_url:'//i8.mifile.cn/v1/a1/c9ec4818-b44c-612b-7c4b-8be87991955a.webp'},
            {img_url:'//i8.mifile.cn/v1/a1/b19c5fdd-9bd9-34d1-20e2-93c57aab760d.webp'},
        ],
        price:1499,
        cart_img:'https://i1.mifile.cn/a1/pms_1477916442.08799062.jpg'
    },
    {
        product_id:'9666',
        product_name:'小米电视4X 65英寸',
        product_brief:'人工智能语音 / 4K HDR超高清画质 / 超窄边 / 2GB+8GB大内存 / 64位四核处理器 / 内置小爱同学',
        imgs:[
            {img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/95e9189bde5cd99231b151a9d3b44823.jpg'},
            {img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d67e2eb0ba63684b66d49734f00fe6a.jpg'}
        ],
        price:3099,
        cart_img:'https://i1.mifile.cn/a1/pms_1555945845.58334039.jpg'
    }
]

var data ={
    category,
    recommend_swiper,
    phone_swiper,
    AI_swiper,
    TV_swiper,
    equipment_swiper,
    PC_swiper,
    daily_swiper,
    recommend_productList,
    phone_productList,
    AI_productList,
    TV_productList,
    equipment_productList,
    PC_productList,
    daily_productList,
    cart_productList,
    AI_imgList,
    recommend_imgList,
    TV_imgList,
    equipment_imgList,
    PC_imgList,
    daily_imgList,
    cart,
    products
}
export default data