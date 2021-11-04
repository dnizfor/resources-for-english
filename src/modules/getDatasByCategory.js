export default function getDatasByCategory(datas, category ){


    let wantedDatas = []

    datas.map((data)=>(
        
        data.category === category && wantedDatas.push(data)

    )
    )

    return wantedDatas

}