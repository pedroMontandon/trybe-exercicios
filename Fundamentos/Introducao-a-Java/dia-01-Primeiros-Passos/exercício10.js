    let salBruto = 3000;
    let salLiquido;
    let inss;
    let ir;

    if (salBruto <= 1556.94){
        inss = 0.92;
        ir = 1
        salLiquido = salBruto * inss * ir;
        console.log("Seu salário líquido é de R$" + salLiquido)
    } else if (salBruto > 1556.94 && salBruto <= 2594.92){
        inss = 0.91;
        let salarioInss = salBruto * inss;
        if (salarioInss < 1903.98) {
        ir = 1;
        salLiquido = salBruto * inss * ir;
        console.log("Seu salário líquido é de R$" + salLiquido)
        } else {
            ir = 0.075
            let deducao = 142.80
            let deduzido = (salBruto * inss * ir) - deducao
            salLiquido = salBruto * inss - deduzido;
            console.log("Seu salário líquido é de R$" + salLiquido)
        }
    } else if (salBruto > 2594.95 && salBruto <= 5189,82){
        inss = 0.89;
        let salarioInss = salBruto * inss
        if (salarioInss <= 2826,65){
            ir = 0.075;
            let deducao = 142.80
            let deduzido = (salBruto * inss * ir) - deducao
            salLiquido = salBruto * inss - deduzido;
            console.log("Seu salário líquido é de R$" + salLiquido)
        } else if (salarioInss <= 3751.05) {
            ir = 0.15;
            let deducao = 354.80
            let deduzido = (salBruto * inss * ir) - deducao
            salLiquido = salBruto * inss - deduzido;
            console.log("Seu salário líquido é de R$" + salLiquido)
        } else if (salarioInss <= 4664.68) {
            ir = 0.225;
            let deducao = 636.13
            let deduzido = (salBruto * inss * ir) - deducao
            salLiquido = salBruto * inss - deduzido;
            console.log("Seu salário líquido é de R$" + salLiquido)
        } else if (salarioInss > 4664.68) {
            ir = 0.275;
            let deducao = 869.36
            let deduzido = (salBruto * inss * ir) - deducao
            salLiquido = salBruto * inss - deduzido;
            console.log("Seu salário líquido é de R$" + salLiquido)
        }
    } else if (salBruto > 5189.82){
        inss = 570.88;
        let salarioInss = salBruto - inss
        ir = 0.275;
        let deducao = 869.36
        let deduzido = ((salBruto - inss) * ir) - deducao
        salLiquido = salBruto - inss - deduzido;
        console.log("Seu salário líquido é de R$" + salLiquido)
    }