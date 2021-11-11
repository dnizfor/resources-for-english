export default function getDatasByCategory(datas, category , isAll ){

    if(category === ""){
        return datas
    }


    let wantedDatas = []

    datas.map((data)=>(
        
        data.category === category && wantedDatas.push(data)

    )
    )
    if(isAll === true){
        return wantedDatas
    }else{
        return [wantedDatas[0],wantedDatas[1],wantedDatas[2]]
    }

    

}