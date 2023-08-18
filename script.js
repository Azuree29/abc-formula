let quadraticSolver = (a, b, c) => {
    let numeratorPlus = -b + Math.sqrt((b**2) - 4*a*c)
    let numeratorMinus = -b + Math.sqrt((b**2) - 4*a*c)
   let denominator = 2*a
   
   return {
    x1: numeratorPlus / demoniator,
    x2: numeratorMinus / denominator
   }
}

quadraticSolver(1, 1, 0.25)

console.log(quadraticSolver())