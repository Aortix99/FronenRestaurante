class locatorRestaurantes{
    constructor(){

    }

    async save(x){
        let result = null;
            try {
                let response = await fetch('http://localhost:8080/api/restaurante/save', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(x)
                });
                
                result = await response.json();
                
            } catch (error) {
                console.error(error);
            }
        return result;
    }
    async selectAll(){
        let result = null;
            try {
                let response = await fetch('http://localhost:8080/restaurante/all', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: null
                });
                
                result = await response.json();
                
            } catch (error) {
                console.error(error);
            }
        return result;
     }
     async deleter(id){
        let result = null;
            try {
                let response = await fetch('http://localhost:8080/api/restaurante/delete/'+id, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: null
                });
                
                result = await response.json();
                
            } catch (error) {
                console.error(error);
            }
        return result;
     }


}