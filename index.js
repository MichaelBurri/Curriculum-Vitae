var app= new Vue({
    el:'#miApp',
    data:{
        idioma:'ES',
        cv:'null',
        cvRoot:'null',
        idiomas:'null'
        
    },
    mounted(){    
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            app.cv = JSON.parse(this.responseText);
            app.cvRoot=app.cv.ES;
            app.idiomas=app.cvRoot.idiomas
            }
        };
        xhttp.open("GET", "cv.json", true);
        xhttp.send();  
    },
    methods:{
        cambiarIdioma:function(){
            if(this.idioma=="ES"){
                this.idioma="EN";
                this.cvRoot=this.cv.EN;
                this.idiomas=this.cvRoot.idiomas
            }
            else if(this.idioma=="EN"){
                this.idioma="ES";
                this.cvRoot=this.cv.ES;
                this.idiomas=this.cvRoot.idiomas
            }
        }

    },
    computed:{

    }
}


)