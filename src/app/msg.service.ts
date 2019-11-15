export class MsgService{
    msgsCinema      = [];
    msgsEsportes    = [];
    msgsDiversos    = [];

    addMsg(username: string, texto: string, categoria: string){
        var date = new Date();
        switch(categoria){
            case "Cinema": {
                this.msgsCinema.push({date: date+"", username: username, text: texto});
                break;
            }
            case "Esportes": {
                this.msgsEsportes.push({date: date+"", username: username, text: texto});
                break;
            }
            default: {
                this.msgsDiversos.push({date: date+"", username: username, text: texto});
                break;
            }
        }
    }

    getMsgsCategory(categoria){
        if(categoria == "Cinema") return this.msgsCinema;
        if(categoria == "Esportes") return this.msgsEsportes;
        return this.msgsDiversos;
    }

}