const positionsList =  [ 3,2,2,2,1];
uniqueCombination(positionsList);

function uniqueCombination(list) {
    let bandera = 0;
    let percentage = 0;
    let color = '';
    let suma=0;

    for (let i = 0; i < list.length; i++) {
        suma = list.reduce((a, b) =>{return a + b});
        if (suma > 0) {
            if (suma >= 8 ){
                if (list[0] > 0){
                    list[0] = unique(list[0]).valor;
                    bandera = bandera+1;
                    color = color +'rojo' + ' ';
                }
                if (list[1] > 0){
                    list[1] = unique(list[1]).valor;
                    bandera = bandera+1;
                    color = color +'azul' + ' ';
                }
                if (list[2] > 0){
                    list[2] = unique(list[2]).valor;
                    bandera = bandera+1;
                    color = color +'verde' + ' ';
                }
                if (list[3] > 0){
                    list[3] = unique(list[3]).valor;
                    bandera = bandera+1;
                    color = color +'amarillo' + ' ';
                }
                print(i, color, bandera);
                percentage= percentage + countPercentage(bandera);
                bandera = 0;
                color='';
            }
            else if (suma === 2){
                if (list[0] > 0){
                    list[0] = unique(list[0]).valor;
                    color = color +'rojo' + ' ';
                    percentage= percentage + countPercentage(1);
                    print(i, color, 1);
                }
                if (list[1] > 0){
                    list[1] = unique(list[1]).valor;
                    color = 'azul' + ' ';
                    percentage= percentage + countPercentage(1);
                    print(i+1, color, 1);
                }
            } else {
                if (list[0] > 0){
                    list[0] = unique(list[0]).valor;
                    bandera = bandera+1;
                    color = color +'rojo' + ' ';
                }
                if (list[1] > 0){
                    list[1] = unique(list[1]).valor;
                    bandera = bandera+1;
                    color = color +'azul' + ' ';
                }
                if (list[2] > 0){
                    list[2] = unique(list[2]).valor;
                    bandera = bandera+1;
                    color = color +'verde' + ' ';
                }
                if (list[3] > 0){
                    list[3] = unique(list[3]).valor;
                    bandera = bandera+1;
                    color = color +'amarillo' + ' ';
                }
                if (list[4] > 0){
                    list[4] = unique(list[4]).valor;
                    bandera = bandera+1;
                    color = color +'gris' + ' ';
                }
                print(i, color, bandera);
                percentage= percentage + countPercentage(bandera);
                bandera = 0;
                color='';
            }
        }
    }
    console.log(`Total: el brujo a causado un ${percentage}% de daño` );
}
function print(i, color, bandera) {
    console.log(`Ataque ${i + 1} usar pociones ${color} distintas causan un ${countPercentage(bandera)}% de daño`);
}

function unique(data) {
    if (data === 1  && data > 0){
        data = data - 1;
        return {valor:data, count:1};
    }
    if (data === 2  && data > 0){
        data = data - 1;
       return {valor:data, count:1};
    }

    if (data === 3  && data > 0){
        data = data - 1;
        return {valor:data, count:1};
    }
    if (data === 4  && data > 0){
        data = data - 1;
        return {valor:data, count:1};
    }
    if (data === 5  && data > 0){
        data = data - 1;
        return {valor:data, count:1};
    }
}

function countPercentage(number) {
    switch (number) {
        case 1:
            return 3;
        case 2:
            return 5;
        case 3:
            return 10;
        case 4:
            return 20;
        case 5:
            return 25;
    }
}

module.exports = uniqueCombination;
