function tinh () {
        let toan = document.getElementById('inpToan').value*1;
        let ly = document.getElementById('inpLy').value*1;
        let hoa = document.getElementById('inpHoa').value*1;

        let van = document.getElementById('inpVan').value*1;
        let su = document.getElementById('inpSu').value*1;
        let dia = document.getElementById('inpDia').value*1;
        let anh = document.getElementById('inpEnglish').value*1;
    function tinhTB(...restparam){
        switch (restparam.length) {
            case 3: {
                let average1 = (restparam[0] + restparam [1] + restparam[2])/3;
                document.getElementById("tbKhoi1").innerText = average1;
            };break;
            case 4: {
                let average2 = (restparam[0] + restparam [1] + restparam[2] + restparam[3])/4;
                document.getElementById("tbKhoi2").innerText = average2;
            };break;
            default:{
                console.log('Không hợp lệ');
            }
        }
    }
    tinhTB(toan,ly,hoa);
    tinhTB(van,su,dia,anh);
}
