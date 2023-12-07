$(document).ready(function(){
   
    // localStorage.setItem('Tema', "dark-mode");
    // localStorage.setItem('TemaDiv', "text-bg-dark");
    // localStorage.setItem('TemaDiv2', "bg-body-tertiary")

    const tema = localStorage.getItem('Tema');
    const temaDiv = localStorage.getItem('TemaDiv');
    // const temaDiv2 = localStorage.getItem('TemaDiv2');
    console.log('className', tema, temaDiv);
    if(tema != null && temaDiv != null)
    {
        $('body').toggleClass(tema);
        $('div').removeClass('bg-body-tertiary');
        $('div').removeClass('text-bg-dark');
        $('div').toggleClass(temaDiv);
        $('div').addClass('p-5 mb-4 rounded-3');
    }
    // $('div').toggleClass(temaDiv2);

    $('#btnTema').on("click", function() {
        $('body').toggleClass('dark-mode');
        $('div').toggleClass('bg-body-tertiary');
        $('div').toggleClass('text-bg-dark');
        var classBody = $('body').attr('class');
        var classDiv = $('div').attr('class');
        localStorage.setItem('Tema', classBody);
        localStorage.setItem('TemaDiv', classDiv);
        // localStorage.setItem('TemaDiv2', "bg-body-tertiary")
        console.log('className', classBody, classDiv);

    });
});







