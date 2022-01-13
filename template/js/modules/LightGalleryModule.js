export default function LightGalleryModule(){
    if ($('#lightgallery').length) {

        $("#lightgallery").lightGallery({
            selector: ".zoom-lightgallery",
            // thumbnail: true,
            // animateThumb: false,
            // showThumbByDefault: false
        });
    }
    if ($('#slide-customer').length) {

        $("#slide-customer").lightGallery({
            selector: ".img-light",
            // thumbnail: true,
            // animateThumb: false,
            // showThumbByDefault: false
        });
    }

   
}