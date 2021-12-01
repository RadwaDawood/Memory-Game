document.addEventListener('DOMContentLoaded', function() {
    const imgarr = [{
            imgname: 'image1',
            imgsrc: 'img/1.gif'
        },
        {
            imgname: 'image1',
            imgsrc: 'img/1.gif'
        },
        {
            imgname: 'image2',
            imgsrc: 'img/2.gif'
        },
        {
            imgname: 'image2',
            imgsrc: 'img/2.gif'
        },
        {
            imgname: 'image3',
            imgsrc: 'img/3.gif'
        },
        {
            imgname: 'image3',
            imgsrc: 'img/3.gif'
        },
        {
            imgname: 'image4',
            imgsrc: 'img/4.gif'
        },
        {
            imgname: 'image4',
            imgsrc: 'img/4.gif'
        },
        {
            imgname: 'image5',
            imgsrc: 'img/5.gif'
        },
        {
            imgname: 'image5',
            imgsrc: 'img/5.gif'
        },
        {
            imgname: 'image6',
            imgsrc: 'img/6.gif'
        },
        {
            imgname: 'image6',
            imgsrc: 'img/6.gif'
        }
    ]
    imgarr.sort(() => 0.5 - Math.random())
    var grid = document.querySelector('.images');
    var imageChoosen = [];
    var imageChoosenId = [];
    var imageWon = [];
    var img_id;

    function creategame() {
        for (var i = 0; i < imgarr.length; i++) {
            var img = document.createElement('img');
            img.setAttribute('src', 'img/Moon.gif');
            img.setAttribute('img-id', i);
            img.addEventListener('click', flipimg);
            grid.appendChild(img);

        }
    }

    function checkForMach() {

        var images = document.querySelectorAll('img');
        const optionOneImg = imageChoosenId[0];
        const optionTwoImg = imageChoosenId[1];
        if (imageChoosen[0] === imageChoosen[1]) {

            images[optionOneImg].setAttribute('id', img_id);
            images[optionTwoImg].setAttribute('id', img_id);
            imageWon.push(imageChoosen);
        } else {
            images[optionOneImg].setAttribute('src', 'img/Moon.gif');
            images[optionTwoImg].setAttribute('src', 'img/Moon.gif');
        }
        imageChoosen = [];
        imageChoosenId = [];

    }

    function flipimg() {
        var img_id = this.getAttribute('img-id');
        imageChoosen.push(imgarr[img_id].imgname);
        imageChoosenId.push(img_id);
        this.setAttribute('src', imgarr[img_id].imgsrc);
        if (imageChoosen.length === 2) {
            setTimeout(checkForMach, 1000)
        }

    }
    creategame();
});