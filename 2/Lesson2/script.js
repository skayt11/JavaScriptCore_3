function task1(){
    let a = +prompt("Введіть значення");
    if(isNaN(a)){
        alert("Дозволяється тільки числа");
    }
    else if(a==0){
        console.log("%c 0","color: #29668f; font-family:serif; font-size: 24px");
    }
    else if(a>=0){
        console.log("%c 1","color: #00ff00; font-family:serif; font-size: 24px");
    }
    else if(a<=0){
        console.log("%c -1","color: #ff0000; font-family:serif; font-size: 24px");
    }
}

function task2(){
    let a = prompt("Who's there?");
    if(a===null){
        console.log("%cCanceled." , "color: #ff0000; font-family:serif; font-size: 24px");
    }
    else if(a===""){
        console.log("%cYou have not entered anything." , "color: #0000ff; font-family:serif; font-size: 24px");
    }
    else if(a!=="admin"){
        console.log("%cI dont't know you" , "color: #00ffff; font-family:serif; font-size: 24px");
    }
    else if(a==="admin"){
        let b = prompt("Password?");
        if(b===null){
            console.log("%cCanceled." , "color: #ff0000; font-family:serif; font-size: 24px");
        }
        else if(b===""){
            console.log("%cYou have not entered anything." , "color: #ff0000; font-family:serif; font-size: 24px");
        }
        else if(b!=="TheMaster"){
            console.log("%cWrong password" , "color: #ff0000; font-family:serif; font-size: 24px");
        }
        else if(b=="TheMaster"){
            console.log("%cWelcome!" , "color: #00ff00; font-family:serif; font-size: 24px");
        }
    }
}

function task3(){
    let a = prompt("Who's there?");
    switch (a) {
        case null:
            console.log("%cCanceled." , "color: #ff0000; font-family:serif; font-size: 24px");
            break;
        case '':
            console.log("%cYou have not entered anything." , "color: #0000ff; font-family:serif; font-size: 24px");
            break;
        case 'admin':
            let b = prompt("Password?");
            switch (b) {
                case null:
                    console.log("%cCanceled." , "color: #ff0000; font-family:serif; font-size: 24px");
                    break;
                case '':
                    console.log("%cYou have not entered anything." , "color: #ff0000; font-family:serif; font-size: 24px");
                    break;
                case 'TheMaster':
                    console.log("%cWelcome!" , "color: #ff0000; font-family:serif; font-size: 24px");
                    break;
                default:
                    console.log("%cWrong password" , "color: #ff0000; font-family:serif; font-size: 24px");
                    break;
            }
        default:
            console.log("%cI dont't know you" , "color: #00ffff; font-family:serif; font-size: 24px");
            break;
    }
}