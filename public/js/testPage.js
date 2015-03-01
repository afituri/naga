$(document).ready(function(){
    alert("Inside function hhhhhhhhhhhhh");
    $('.navmenu').offcanvas();
    // $('.navmenu').canvas-slid();
   

    $("#input-702").fileinput({
        uploadUrl: "' . Url::to(['#']) . '"
        maxFileCount: 10,
        overwriteInitial: false,
        initialPreview: [
            '<img src="http://www.kodyaz.com/photos/windows_8/images/34677/secondarythumb.aspx " class="file-preview-image">',
            '<img src="http://www.kodyaz.com/photos/windows_8/images/34676/secondarythumb.aspx " class="file-preview-image">',
        ],
        initialPreviewConfig: [
        {caption: "Desert.jpg", width: "120px", url:"/site/file-delete", key:1},
        {caption: "Tulips.jpg", width: "120px", url:"/site/file-delete", key:2}
        ],
    });

});
