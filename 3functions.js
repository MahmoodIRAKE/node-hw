const sum=(a,b)=>{
  return a+b;
}

const multi=(a,b)=>{
   return a*b;
}

const min=(a,b)=>{
    if(a<b){
        return a;
    }
    return b;
}

module.exports={sum,multi,min};