function sextasTreze(dataIn, dataFim){
    let input1 = dataIn
    let input2 = dataFim
    let data2 = new Date(input2,11,31)
    let sextastrezee = 0 
    
    for (let ano = input1; ano <= input2; ano++) {
        for (let mes = 0; mes <= 11; mes++) {
            for (let dia = 13; dia < 14; dia++) {
                let data1 = new Date(ano,mes,dia)
                let today = data1.getDay()
                if (today == 5) {
                     if(mes==0){
                        console.log(`O dia ${dia}, do mês janeiro do ano ${ano} é uma sexta treze`)
                        sextastrezee++
                        }else if(mes==1){
                            console.log(`O dia ${dia}, do mês fevereiro do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==2){
                            console.log(`O dia ${dia}, do mês março do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==3){
                            console.log(`O dia ${dia}, do mês abril do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==4){
                            console.log(`O dia ${dia}, do mês maio do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==5){
                            console.log(`O dia ${dia}, do mês junho do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==6){
                            console.log(`O dia ${dia}, do mês julho do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==7){
                            console.log(`O dia ${dia}, do mês agosto do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==8){
                            console.log(`O dia ${dia}, do mês setembro do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==9){
                            console.log(`O dia ${dia}, do mês outubro do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==10){
                            console.log(`O dia ${dia}, do mês novembro do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }else if(mes==11){
                            console.log(`O dia ${dia}, do mês dezembro do ano ${ano} é uma sexta treze`)
                            sextastrezee++
                        }
                }
        }
    }
    }console.log(`A quantidade de sextas feiras treze existentes entre o ano de ${dataIn} e ${dataFim} é de ${sextastrezee} sextas-feiras!`)}
    
    let p1 = Number(prompt("insira o primeiro ano"))
    let p2 = Number(prompt("insira o ano fim"))
    sextasTreze(p1,p2);