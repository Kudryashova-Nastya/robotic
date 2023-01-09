alert("Прииииивеееееет я робот Толик")

function play() {
    let user_name = prompt("введите имя пользователя")
    let nomber = Math.random() * 10
    nomber = parseInt(nomber)
    console.log(nomber)
    let jjj
    let counter = 1
    while (jjj != nomber) {
        jjj = prompt("как вы думаете какое число загадал толик ?")
        if (jjj == nomber) {
            alert("Ура, ты угадал c попытки номер " + counter)
        } else {
            if (jjj > nomber) {
                alert("ваше число слишком большое")
                counter++
            } else {
                if (jjj == '') {
                    alert("пустота не знак мудрости")
                    counter++
                } else if (jjj < nomber) {
                    alert("ваше число слишком маленькое")
                    counter++
                } else {
                    alert("ПИШИТЕ ЧИСЛОООООО")
                    counter++
                }

            }
        }
    }
    document.getElementById("records")
    records.innerHTML += "<p>" + user_name + " угадал с попытки номер " + counter + "<p>"
}

function predskazation() {
    let otveti = ["да", "нет", "возможно", "ни в коем случае", "конечно", "100%", "0%", "ты что шутишь?", "спроси позже", "я не знаю!"]
    let nomber = Math.random() * 10
    nomber = parseInt(nomber)
    document.getElementById("BRED")
    BRED.innerHTML = "<p>" + otveti[nomber] + "<p>"

}

function kotyyyk() {
    let kotiki = ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg", "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg", "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&w=800&ar=2:1&fit=crop", "https://static.wikia.nocookie.net/meme/images/1/1b/Pop_catt.jpg/revision/latest/scale-to-width-down/294?cb=20210722143809", "https://imgflip.com/s/meme/Smiling-Cat.jpg", "https://static.wikia.nocookie.net/meme/images/9/9f/Y20-Funny-Shocked-Cat-Memes-3.jpg/revision/latest?cb=20150726214927", "https://media.pinatafarm.com/protected/65CA2375-85F2-4AA2-97D1-499E73E0306D/d8d5e485-5a4f-4c6d-a1fa-1e0f9ddf1af1-1663290651884-pfarm.webp", "https://www.idlememe.com/wp-content/uploads/2021/12/cat-with-milk-on-face-meme-idlememe-3-300x338.jpg", "https://www.meme-arsenal.com/memes/30b35f8b2b6978b181cb7b373223f4bd.jpg", "https://www.meme-arsenal.com/memes/29fbf8dde81c528f7e1b33257bb26df2.jpg"]
    let nomber = Math.random() * 10
    nomber = parseInt(nomber)
    document.getElementById("muy")
    console.log(nomber)
    muy.innerHTML = "<img width='300' src='" + kotiki[nomber] + "'>"

}