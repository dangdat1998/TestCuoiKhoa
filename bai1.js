function CheckOp(){
    let A1=prompt("Nhập mảng A1:").split(",")
    let A2=prompt("Nhập mảng A2:").split(",")
    let A = []
    console.log(A1)
    console.log(A2)
    for (let i=0; i<A1.length; i++){
        let check = 0

        for(let j=0; j<A2.length;j++){
            if (A2[j]==A1[i]){
                check++
            }
        }

        if(check==0){
            A.push(A1[i])
        }    
    }

    for (let i=0; i<A2.length; i++){
        let check = 0
        for(let j=0; j<A1.length;j++){
            if (A1[j]==A2[i]){
                check++
            }
        }

        if(check==0){
            A.push(A2[i])
        }    
    }



    console.log(A)
}
CheckOp()