export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user", headerName: "User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} className="cellImg" alt="" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:"email", headerName:"Email", width:230,
    },
    {
        field:"age", headerName:"Age",width:100
    },
    {
        field: "status", headerName: "Status", width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];

export const userRows = [
    {
        id: 1,
        username: "JohnSnow",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "active",
        email: "johnsnow35@got.com",
        age: 35,
    },
    {
        id: 2,
        username: "AryaStark",
        img: "https://sevenkingdomsofwesteros.com/wp-content/uploads/2019/08/Arya-Stark-Season-7.jpg",
        status: "active",
        email: "aryastark16@got.com",
        age: 16,
    },

    {
        id: 3,
        username: "CerseiLannister",
        img: "https://upload.wikimedia.org/wikipedia/en/2/22/Cersei_Lannister_in_Black_Dress_in_Season_5.jpg",
        status: "passive",
        email: "cerseilannister42@got.com",
        age: 42,
    },

    {
        id: 4,
        username: "JaimeLannister",
        img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",
        status: "pending",
        email: "jaimelannister45@got.com",
        age: 45,
    },
    {
        id: 5,
        username: "DaenerysTargaryen",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/033884f025a2eabf0eb8c4e974b7c938bca8286540de31898566bd91bfd7af85-1-1554372064.jpg?crop=0.668xw:1.00xh;0.104xw,0&resize=480:*",
        status: "active",
        email: "daenerystargaryen32@got.com",
        age: 32,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://upload.wikimedia.org/wikipedia/en/8/80/Melisandre-Carice_van_Houten.jpg",
        status: "active",
        email: "melisandre150@got.com",
        age: 150,
    },


]