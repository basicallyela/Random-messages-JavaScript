const messages = ['hey', 'girlie', 'bestie', 'tea']
function giveMessages(msgs){
    let lght = msgs.length
    let h = Math.floor(Math.random() * lght)
    console.log(msgs[h])
}
giveMessages(messages)
/*for( let i=0; i<messages.length; i++){
    console.log(messages[i])
}*/
