var container = ele("div", "class", "container");
var row = ele("div", "class", "row");
let maindiv = ele("div", "id", "main-div");
let navbar = ele("nav", "id", "nav-bar");
let heading = ele("h1", "id", "title");
heading.innerHTML = "Pagination Task";
let contentDiv= document.createElement("div");
contentDiv.setAttribute("id", "buttons");
contentDiv.setAttribute("class", "d-flex justify-content-center");


function ele(tagname, attname, attvalue) {
    let element = document.createElement(tagname);
    element.setAttribute(attname, attvalue);
    return element;
  }


function labelcreate(tagname, attrname, attrvalue, content)
{
    var element= document.createElement(tagname);
    element.setAttribute(attrname, attrvalue);
    element.innerHTML= content;
    return element;
}

function linebreaker(tagname)
{
    var element=document.createElement(tagname);
    return element;
}

function inputcreate(tagname, attrname, attrvalue, attrname1,attrvalue1, attrname2, attrvalue2){
 var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    element.setAttribute(attrname1,attrvalue1);
    element.setAttribute(attrname2, attrvalue2);
    return element;
}


var ul=document.createElement("ul");
ul.setAttribute("id", "lists");
ul.style.textAlign="center";
ul.classList.add("pagination","justify-content-center");


let pre=lists("li");
let li1=lists("li");
let li2=lists("li");
let li3=lists("li");
let li4=lists("li");
let li5=lists("li");
let li6=lists("li");
let li7=lists("li");
let li8=lists("li");
let li9=lists("li");
let li10=lists("li");
let next=lists("li");


function lists(tagname) {
    var lists = document.createElement(tagname);
    return lists;
  }
   
var btnPre=btnele("button","type","button","btn","btn-outline-primary","id","btn-pre","⏪Previous");
var btn_1=btnele("button","type","button","btn","btn-outline-primary","id","btn-1","1");
var btn_2=btnele("button","type","button","btn","btn-outline-primary","id","btn-2","2");
var btn_3=btnele("button","type","button","btn","btn-outline-primary","id","btn-3","3");
var btn_4=btnele("button","type","button","btn","btn-outline-primary","id","btn-4","4");
var btn_5=btnele("button","type","button","btn","btn-outline-primary","id","btn-5","5");
var btn_6=btnele("button","type","button","btn","btn-outline-primary","id","btn-6","6");
var btn_7=btnele("button","type","button","btn","btn-outline-primary","id","btn-7","7");
var btn_8=btnele("button","type","button","btn","btn-outline-primary","id","btn-8","8");
var btn_9=btnele("button","type","button","btn","btn-outline-primary","id","btn-9","9");
var btn_10=btnele("button","type","button","btn","btn-outline-primary","id","btn-10","10");
var btnNext=btnele("button","type","button","btn","btn-outline-primary","id","btn-next","Next⏩");


  function btnele(tagname,attrname1, attrvalue1,  clsattrname, clsattval, attrname2,attrvalue2, content){
    let button= document.createElement(tagname);
    button.setAttribute(attrname1, attrvalue1);
    button.classList.add(clsattrname, clsattval);
    button.setAttribute(attrname2, attrvalue2);
    button.innerHTML = content;
    return button;
  }

  tableData();

 async function tableData(){
  let url= await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
  let data=await url.json();
   console.log(data);
 let name=[];
 let email=[];
 let id=[];
 
  try{
     for(let i=0; i<100;i++){
      let namelist=data[i].name;
      // console.log(namelist);
      let emaillist=data[i].email;
      // console.log(emaillist);
      let idlist=data[i].id;

      name.push(namelist);
      email.push(emaillist);
      id.push(idlist);
         }
    let initialValue=0;

    let prebtnAdd=document.getElementById("btn-pre");
    prebtnAdd.addEventListener("click", () =>{
      if(initialValue >= 0 && initialValue <=9){
        // initialValue=initialValue-10;
        tableappendValue(initialValue);
       } else if(initialValue >9){
        initialValue=initialValue-10;
        tableappendValue(initialValue);
       }
       else{
        alert("Already you are in 1st page");
      }
    });
    let btnLast=document.getElementById("btn-next");
    btnLast.addEventListener("click",() =>{
     if(initialValue <90 && initialValue>=0){
        initialValue = initialValue + 10;
        tableappendValue(initialValue);
      } else {
        alert("You are already at the Last page!");
      }
     
    });

    let btn1Add=document.getElementById("btn-1");
    btn1Add.addEventListener("click", () =>{
      initialValue=0;
      tableappendValue(initialValue);
    });

    let btn2Add=document.getElementById("btn-2");
    btn2Add.addEventListener("click", () =>{
      initialValue=10;
      tableappendValue(initialValue);
    });

    let btn3Add=document.getElementById("btn-3");
    btn3Add.addEventListener("click", () =>{
      initialValue=20;
      tableappendValue(initialValue);
    });

    let btn4Add=document.getElementById("btn-4");
    btn4Add.addEventListener("click", () =>{
      initialValue=30;
      tableappendValue(initialValue);
      
    });

    let btn5Add=document.getElementById("btn-5");
    btn5Add.addEventListener("click", () =>{
      initialValue=40;
      tableappendValue(initialValue);
    });

    let btn6Add=document.getElementById("btn-6");
    btn6Add.addEventListener("click", () =>{
      initialValue=50;
      tableappendValue(initialValue);
    });

    let btn7Add=document.getElementById("btn-7");
    btn7Add.addEventListener("click", () =>{
      initialValue=60;
      tableappendValue(initialValue);
    });

    let btn8Add=document.getElementById("btn-8");
    btn8Add.addEventListener("click", () =>{
      initialValue=70;
      tableappendValue(initialValue);
    });
    let btn9Add=document.getElementById("btn-9");
    btn9Add.addEventListener("click", () =>{
      initialValue=80;
      tableappendValue(initialValue);
    });
    let btn10Add=document.getElementById("btn-10");
    btn10Add.addEventListener("click", () =>{
      initialValue=90;
      tableappendValue(initialValue);
    });

   
    function tableappendValue(NumofItems){
         let tableBody=document.getElementById("tBody");
         tableBody.innerHTML="";
         
         for(let i=NumofItems; i<=NumofItems+9; i++){
          eventButtonFirst(`${id[i]}`, `${name[i]}`, `${email[i]}`);

        function eventButtonFirst(idlist, namelist, emaillist) {
          let row=document.createElement("tr");
          let td1=document.createElement("td");
          td1.innerHTML = `${idlist}`;
          let td2=document.createElement("td");
          td2.innerHTML = `${namelist}`;
          let td3=document.createElement("td");
          td3.innerHTML = `${emaillist}`;
          tableBody.append(row);
          row.append(td1,td2,td3);

         }
      }
    }
      tableappendValue(initialValue);
   }
  catch(error){
    console.log("Error occurred");
  }
 }


  var tableDiv=document.createElement("div");
  tableDiv.setAttribute("class", "table-responsive");
  // tableDiv.style.textAlign="center";
  // tableDiv.style.marginTop="70px";
  // tableDiv.style.marginLeft="400px";
  
  let tableTag = createtable("table");
  tableTag.classList.add("table", "table-bordered");
  
  let tableBody = createtable("tbody");
  tableBody.setAttribute("id", "tBody");
  
  let tableHead = createtable("thead");
  tableHead.setAttribute("id", "tableHead");
  
  
  let tableTr = createtable("tr");
  
  let tableTh1 = createtable("th");
  tableTh1.innerText = "ID";
  
  let tableTh2 = createtable("th");
  tableTh2.innerText = "Name";
  
  let tableTh3 = createtable("th");
  tableTh3.innerText = "Email";
  
  
 
  
  function createtable(taganme) {
    let elements = document.createElement(taganme);
    return elements;
  }
   

pre.append(btnPre);
li1.append(btn_1);
li2.append(btn_2);
li3.append(btn_3);
li4.append(btn_4);
li5.append(btn_5);
li6.append(btn_6);
li7.append(btn_7);
li8.append(btn_8);
li9.append(btn_9);
next.append(btnNext);


ul.append(pre,li1,li2,li3,li4,li5,li6,li7,li8,li9,next);
navbar.append(ul);
contentDiv.append(navbar);
maindiv.append(heading,tableDiv,contentDiv);
container.append(maindiv);
document.body.append(container);

// Table Appending
tableTr.append(tableTh1,tableTh2 ,tableTh3);
tableHead.append(tableTr);
tableTag.append(tableHead, tableBody);
tableDiv.append(tableTag);
