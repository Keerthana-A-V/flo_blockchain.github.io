//sendtx
document.getElementById("sendtx").addEventListener('click',()=>{
    let receiverAddr=document.getElementById("rfloi").value;
    let senderAddr=document.getElementById("sfloi").value;
    let PrivKey=document.getElementById("sprivi").value;
    let sendAmt=parseFloat (document.getElementById("floc").value);
    let floData=document.getElementById("datai").value;
    floBlockchainAPI.sendTx(senderAddr, receiverAddr, sendAmt, PrivKey, floData = '').then(
        function (value) {
                    let tid=value;
                    document.getElementById("sendtxotp").innerHTML="Transaction Successful!!"+"<br>"+"Transaction ID: "
                    var id1=document.querySelector("#sendtxotp");
                    var newdiv= document.createElement('sm-copy')
                    newdiv.value=tid;
                    id1.appendChild(newdiv);  
                    },
                    function (error) {
                        document.getElementById("sendtxotp").innerHTML="Transaction Failed!! This might be the problem,"+"<br>"+error;
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
           // document.getElementById("readtxotp1").innerHtml="The Transaction ID from: "+from+" to: "+to+",<br>";
            document.getElementById("readtxotp").innerHTML="The Transaction ID from "+from+" to "+to+" is listed below,"+"<br><br>";
            for(let i=0;i<=len;i++)
            {
                var id1=document.querySelector("#readtxotp");
                var newdiv= document.createElement('sm-copy')
                newdiv.value=value.items[i].txid;
                id1.appendChild(newdiv);
            }
                //alert(value.items[i].txid)
                  //  alert("successful");    
                    },
                    function (error) {
                        document.getElementById("readtxotp").innerHTML="Failed to fetch Transaction details!! This might be the problem,<br>"+error;
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
            document.getElementById("readalltxotp").innerHTML="The transaction details are,<br>"
            for(let i=0;i<=value.to;i++)
            {
                let outputreadalltx=value;
                //alert(value.items[i].txid);
                //alert(outputreadalltx.items[i].txid);
                var id1=document.querySelector("#readalltxotp");
                    var newdiv= document.createElement('sm-copy')
                    newdiv.value=outputreadalltx.items[i].txid;
                    id1.appendChild(newdiv);
                    }},
                    function (error) {
                        document.getElementById("readalltxotp").innerHTML="Failed to fetch Transaction details!! This might be the reason,<br>"+error;
                    }
                    );  
});
//mergeutxo
document.getElementById("mergeutxo").addEventListener('click',()=>{
    let floID=document.getElementById("mflom").value;
    let privKey=document.getElementById("privkm").value;
    let floData=document.getElementById("datam").value;
    floBlockchainAPI.mergeUTXOs(floID,privKey, floData = '').then(
        function (value) {
            var id1=document.querySelector("#mergeotp");
            var newdiv= document.createElement('sm-copy')
            document.getElementById("mergeotp").innerHTML="Merge Successful!!<br>Transaction ID: ";
            newdiv.value=value;
            id1.appendChild(newdiv); 
                    },
                    function (error) {
                        document.getElementById("mergeotp").innerHTML="Merge Unsuccessful!! This might be the problem,<br>"+error;
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
        document.getElementById("sendtxmultotp").innerHTML="";
    }
 }
})
let obj={}
//for reciever floid and amnt
document.getElementById("add2").addEventListener('click',()=>{
let key1=document.getElementById("sflo").value;
let value3=parseFloat(document.getElementById("ramt").value);
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
        document.getElementById("sendtxmultotp").innerHTML="";
    }
})
document.getElementById("sendtxmulti").addEventListener('click',()=>{
    let data=document.getElementById("data").value;
    floBlockchainAPI.sendTxMultiple(aa, obj, data = '').then(
function (value) {
 
var id1=document.querySelector("#sendtxmultotp");
var newdiv= document.createElement('sm-copy')
document.getElementById("sendtxmultotp").innerHTML="Transaction Successful!!<br>Transaction ID: ";
newdiv.value=value;
id1.appendChild(newdiv);  
},
function (error) {
   // alert(Object.getOwnPropertyNames(error));
    document.getElementById("sendtxmultotp").innerHTML="Transaction Failed!!";
}
);  
})
