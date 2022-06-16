<!--[ Script to QR Code Generator ]-->
    <script src="https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs@master/qrcode.js"></script>
<script type="text/javascript">

  var qrcode = new QRCode(document.getElementById("yourid"), {
    text: 'MyText',
    width: 350,
    height: 350,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
});
function refreshqr(){
  qrcode.makeCode(document.getElementById('myinput').value); // make another code.
}
  
</script>
