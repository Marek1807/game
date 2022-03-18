//Библиотеки
var prompt = require('readline-sync');


//Текстовая Игра
function game() {
    let job_end = "Работа Окончена, Твоя зарплата:";
    let cmd_list = "Список команд: Jobs; Money; Leave";
    let balance = 0;
    console.log(cmd_list);

    let what = prompt.question();
    let job_list = "Список работ: Miner, Farmer";

    //Работы (Надо допилить)
    if (what == "Jobs") {
            console.log(job_list);
            let job = prompt.question();

            if (job == "Miner") {
                let zarplata = Math.floor(Math.random() * (600-200)+ 200);
                console.log(job_end + zarplata);
                balance = balance + zarplata;


            } else if (job == "Farmer") {
                let zarplata = Math.floor(Math.random() * (700-100)+ 100);
                console.log(job_end + zarplata);
                balance = balance + zarplata;


                //Деньги (Надо допилить)
            } else if (what == "Money") {
                console.log("Баланс: " + balance);

            } else if (what == "Leave") {
                return;

            } else {
                console.log("Дурак? Комманду пиши")
            }
        }
    }
    //Начало
    var a = "|---|"
    console.log("Привет")
    console.log(a)
    console.log(a)

    console.log("Нажми Enter")
    console.log(a)
    console.log(a)

    console.log("чтобы начать")
    prompt.question()
    
    //Комманда, чтобы вернулась к меню
    while (true) {
        game()
    }