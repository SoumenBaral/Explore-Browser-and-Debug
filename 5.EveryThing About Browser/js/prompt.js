function showAlert(){
    alert('i will block you man Taka day......');
}
function showConfirm(){

    const con = confirm('please vai kisu taka day.');
    console.log(con);
    if(con)alert('tui amar janer dostoo ');
    else alert('tui akta haramii');

}
function showPrompt(){
    const prom = prompt('Give me some money i will return it with interest ');
    const promParse = parseInt(prom);
    if(prom)alert(`take the money : ${promParse+200}`);
    else alert('sala kuttar baccha ');
}