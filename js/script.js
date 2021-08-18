//sendtx
document.getElementById("sendtx").addEventListener('click',()=>{
    let receiverAddr=document.getElementById("rfloi").value;
    let senderAddr=document.getElementById("sfloi").value;
    let PrivKey=document.getElementById("sprivi").value;
    let sendAmt=parseInt(document.getElementById("floc").value);
    let floData=document.getElementById("datai").value;
    floBlockchainAPI.sendTx(senderAddr, receiverAddr, sendAmt, PrivKey, floData = '').then(
        function (value) {
                    alert("successful");    
                    },
                    function (error) {
                        alert(error);
                    alert("unsuccessful");      
                    }
                    );
});
//readtx
document.getElementById("readtx"). addEventListener('click',()=>{
    let addr=document.getElementById("floid").value;
    let from=parseInt( document.getElementById("fromi").value);
    let to=parseInt( document.getElementById("endi").value);

floBlockchainAPI.readTxs(addr, from, to).then(
        function (value) {
            alert(value);
                    alert("successful");    
                    },
                    function (error) {
                        alert(error);
                    alert("unsuccessful");      
                    }
                    );  
})
//readalltxs
document.getElementById("readtxall").addEventListener('click',()=> {
    let addr=document.getElementById("flo").value;
    floBlockchainAPI.readTxs(addr).then(
        function (value) {
            /*alert(value);
            alert(Object.getOwnPropertyNames(value));
            alert(value.totalItems);
            alert(value.from);
            alert(value.to);
            alert(value.items);
            alert(Object.getOwnPropertyNames(value.items));
            alert(Object.getOwnPropertyNames(value.items[1]));*/
            for(let i=0;i<=value.to;i++)
                alert(value.items[i].txid);
                    alert("successful");   
                    },
                    function (error) {
                        alert(error);
                    alert("unsuccessful");      
                    }
                    );  
});
//mergeutxo
document.getElementById("mergeutxo").addEventListener('click',()=>{
    let floID=document.getElementById("mfloi").value;
    let privKey=document.getElementById("priv").value;
    let floData=document.getElementById("datai").value;
    floBlockchainAPI.mergeUTXOs(floID, privKey, floData = '').then(
        function (value) {
                    alert("successful");    
                    },
                    function (error) {
                        alert(error);
                    alert("unsuccessful");      
                    }
                    );       
});