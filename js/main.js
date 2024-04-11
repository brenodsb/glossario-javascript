initSelect = function() {
    for (var i = 0; i < db.data.length; i++) {
        var item = db.data[i];
        var select_text = "<option value='" + item.id + "'>" + item.titulo + "</option>";
        $('#slc-topicos').append(select_text);
    }
};

onSelectChange = function() {
    var id = $('#slc-topicos').val();
    var item = db.data[id - 1];
    $('#lbl-txt-desc').text(item.titulo);
    $('#txt-desc').text(item.descricao);
};

register = function(){
    var titulo = $('#txt-titulo').val();
    var descricao = $('#txt-descricao').val();
    
    var dados = {
        "id": db.data.length + 1,
        "titulo": titulo,
        "descricao": descricao
    }

    if (titulo && descricao) {
        console.log(dados);
        db.data.push(dados);
        $('#txt-titulo').val('');
        $('#txt-descricao').val('');
        
    }else{
        console.error("Os novos dados devem conter id, titulo e descricao.");
    }
    
}

db.init(initSelect);