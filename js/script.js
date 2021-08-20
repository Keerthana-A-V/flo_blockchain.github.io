//sendtx
document.getElementById("sendtx").addEventListener('click',()=>{
    let receiverAddr=document.getElementById("rfloi").value;
    let senderAddr=document.getElementById("sfloi").value;
    let PrivKey=document.getElementById("sprivi").value;
    let sendAmt=parseInt(document.getElementById("floc").value);
    let floData=document.getElementById("datai").value;
    floBlockchainAPI.sendTx(senderAddr, receiverAddr, sendAmt, PrivKey, floData = '').then(
        function (value) {
            alert(value);
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
    let addr=document.getElementById("floidd").value;
    let from=document.getElementById("fromi").value;
    let to= document.getElementById("endi").value;

    floBlockchainAPI.readTxs(addr,from,to).then(
        function (value) {
            let len=to-from;
            for(let i=0;i<=len;i++)
                alert(value.items[i].txid)
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

//sentx multiple

//for sender priv key
let aa=new Array();
document.getElementById("add1").addEventListener('click',()=>{
    aa.push(document.getElementById("rflo").value);
    document.getElementById("rflo").value="";
})
document.getElementById("clear1").addEventListener('click',()=>{
var r= confirm("Do you really want to clear the array?");
{
    if(r==true){
        aa.length=0;
        document.getElementById("rflo").value="";
    }
 }
})
let obj={}
//for reciever floid and amnt
document.getElementById("add2").addEventListener('click',()=>{
let key1=document.getElementById("sflo").value;
let value3=parseInt(document.getElementById("ramt").value);
obj[key1]=value3;
document.getElementById("sflo").value="";
document.getElementById("ramt").value="";
})
document.getElementById("clear2").addEventListener('click',()=>{
    var r=confirm("Do you really want to clear the array?");
    if(r==true)
    {   
        document.getElementById("sflo").value="";
        document.getElementById("ramt").value="";
    }
})
document.getElementById("sendtxmulti").addEventListener('click',()=>{
    let data=document.getElementById("data").value;
    floBlockchainAPI.sendTxMultiple(aa, obj, data = '').then(
function (value) {
alert(value);
alert("successful");    
},
function (error) {
    alert(Object.getOwnPropertyNames(error));
alert("unsuccessful");      
}
);  
})
