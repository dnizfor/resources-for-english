export default function getDatasByCategory(datas, category ){

    if(category === ""){
        return datas
    }


    let wantedDatas = []

    datas.map((data)=>(
        
        data.category === category && wantedDatas.push(data)

    )
    )

    return wantedDatas

}