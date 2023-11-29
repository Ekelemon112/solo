
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        document.getElementById(tabname).classList.add("tab-links");
    }
    // ----------------menu--------------

    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-130px";
    } 



    // -----------------contact--------------------

    const scriptURL = 'https://script.google.com/macros/s/AKfycbygEwYkRj9N82u6IGzlxMOvPIJWLxf2jt4mx59Um-y6pBT2zk3XPQ1fKl2sGIAR7DNqkA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});


// ======================dark mode=======================

// var content = document.getElementsByTagName('body')[0];
// var darkmode = document.getElementById('dark-change');
// darkmode.addEventListener('click', function(){
//     darkmode.classList.toggle('active');
//     content.classList.toggle('night');
// });

