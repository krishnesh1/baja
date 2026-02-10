exports.getFibonacci = (n) => {
  let fib=[0,1];
  for(let i=2;i<n;i++){
    fib[i]=fib[i-1]+fib[i-2];
  }
  return fib.slice(0,n);
};

exports.getPrimes = (arr)=>{
  return arr.filter(num=>{
    if(num<2) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
      if(num%i===0) return false;
    }
    return true;
  });
};

exports.gcd=(a,b)=>b?exports.gcd(b,a%b):a;

exports.lcmArray=(arr)=>{
  return arr.reduce((a,b)=>(a*b)/exports.gcd(a,b));
};

exports.hcfArray=(arr)=>{
  return arr.reduce((a,b)=>exports.gcd(a,b));
};
