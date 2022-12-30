var Body = {
    setColor : function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor : function(color) {
        var lst = document.querySelectorAll('span');
        var i = 0;
        while (i < lst.length) lst[i++].style.color = color;
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('white');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('rgb(195, 138, 138');
    }
}