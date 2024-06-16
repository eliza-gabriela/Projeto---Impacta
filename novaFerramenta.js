const btn_gravar_f = document.querySelector("#btn_gravar_f");
const btn_cancelar_f = document.querySelector("#btn_cancelar_f");
const nome_f = document.querySelector("#nome_f");
const qtd_f = document.querySelector("#qtd_f");



btn_gravar_f.addEventListener("click",(evt)=>{
    const dados={
        "nome_f":nome_f.value,
        "qtd_f":qtd_f.value,
    }
    const cabecalho={
        method:'POST',
        body:JSON.stringify(dados)
    }



    const endpoint="http://127.0.0.1:1880/addferramentas"
    fetch(endpoint,cabecalho)
    .then(res=>{
        if(res.status==200){
            reset();
        }else{
            alert("Erro ao gravar nova ferramenta");
        }
    })
});


btn_cancelar_f.addEventListener("click",(evt)=>{
    reset();
});

const reset=()=>{
    nome_f.value="";
    qtd_f.value="";
    f_nome.focus();
}

