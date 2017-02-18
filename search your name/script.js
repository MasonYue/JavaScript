/*jshint multistr:true */
var text = "Hey, how are you doing? My name is Mason Mason.";
var myName = "Mason";
var hits = [];
for (var i = 0; i<text.length; i++){
    if(text[i]==="M"){
        for(var j=i;j<i+myName.length;j++){
            hits.push(text[j]);
        }
        if(hits==myName.split(''){
            console.log(hits);
            break;
        }
        else{
            hits=[];
        }
    }
}

if(hits.length==0){
    console.log("Your name wasn't found!");
}
