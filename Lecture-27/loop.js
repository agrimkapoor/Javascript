for(let i=0;i<5;i++){
    console.log(i);
}

//continue
for(let i=0;i<5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}// 0 1 2 4

//break
for(let i=0;i<5;i++){
    if(i==3){
        break;
    }
    console.log(i);
}// 0 1 2 