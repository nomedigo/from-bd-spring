
            
            function validar() {
            
            var name = document.getElementById("name");
            var data = document.getElementById("data");
            var profissao = document.getElementById("profissao");
            var telefone = document.getElementById("telefone");
            
            if (name.value == "") {
                    alert("Nome não informado");
                    name.focus();
                    return;
                }

                if (data.value == "") {
                    alert("Data não informada");
                    data.focus();
                    return;
                }
                
            if (profissao.value == "") {
                    alert("Profissão não informada");
                    profissao.focus();
                    return;
                }

            if (telefone.value == "") {
                alert("Telefone nao informado");
                telefone.focus();
                return;
              }

            alert("Formulário enviado!");
        }

       