// Put your applicaiton javascript here
newFunction()

function newFunction() {
  $(document).ready(function () {
    $(
      document.on('click', '.js-quantity-button', function (event) {
        alert('button clicked')
      })
    )
  })
}
