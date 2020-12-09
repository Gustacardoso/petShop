const moment = require('moment');
const conexao = require('../infraestrutura/conexao');// a parte aonde vamos fazer toda a conexao

class Atendimento{
    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado = {...atendimento, dataCriacao, data}; // fazzendo um array com tudo que em em atendimento, e data de criação
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro) {
                res.json(erro)
            } else {
                res.json(resultados)
            }
        })
    }
}

module.exports = new Atendimento