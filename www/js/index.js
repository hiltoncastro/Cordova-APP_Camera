var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        var btnTirarFoto = document.getElementById("btnTirarFoto");
        btnTirarFoto.addEventListener('click',this.tirarFoto);
        this.pictureSource=navigator.camera.PictureSourceType;
        this.destinationType=navigator.camera.DestinationType;
        console.dir(this.pictureSource);
        console.dir(this.destinationType);
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
    tirarFoto: function(){
        if (!navigator.camera) {
            alert("Plugin Cordova da Camera nao Instalado", "Erro!!!");
            return;
        }

        var options =   {   quality: 50,
                            destinationType: Camera.DestinationType.FILE_URI,
                            encodingType: Camera.EncodingType.JPEG,
                            mediaType: Camera.MediaType.PICTURE,
                            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
                            encodingType: 0     // 0=JPG 1=PNG
                        };

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        let options2 = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            allowEdit: true,
            saveToPhotoAlbum: false,
            cameraDirection: 1,
            sourceType: Camera.PictureSourceType.CAMERA
        };

        navigator.camera.getPicture(
            function(imgData) {
                alert(imgData);
                //var imgHtmlTag = document.getElementById("imgHtmlTag");
                //alert(imgHtmlTag);
                //imgHtmlTag.src = "data:image/jpeg;base64,"+imgData;
            },
            function(e) {
                alert(e);
                alert('Plugin Camera Instalado, mas getPicture falhou', 'Error');
            }, options2);

        console.log('Received Event: ' + id);
    }
        //nao faz sentido fazer algo aqui....
        return false;     
    }            
};

app.initialize(); 
app.initialize();