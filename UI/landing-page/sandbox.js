        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            var copyNbr = document.createElement("div");
            var orgNbr = document.getElementById(data);
            copyNbr.innerHTML = orgNbr.innerHTML;
            var parent = document.getElementById("sandboxExpression");
            var doc = document.createDocumentFragment();
            doc.appendChild(copyNbr);
            parent.appendChild(doc);
            //ev.currentTarget.appendChild(document.getElementById(data));

            //var div = document.createElement("div");
            // doc.appendChild(div);
            if (orgNbr.className==="number")
            copyNbr.setAttribute("class", "operatorContainer number numberText");
            else if (orgNbr.className==="expression")
            copyNbr.setAttribute("class", "operatorContainer expression numberText");
            // div.innerHTML = "1";
            //calculateResult();

        }

        function calculateResult() {
            try {
            var items = document.getElementById('sandboxExpression').childNodes;
            var rs = "";
            for (var i = 0; i < items.length; i++) {
                console.log(items[i].childNodes);

                if (items[i].className==="operatorContainer expression numberText"){

                    span = items[i].childNodes;
                    
                
                rs += (span[1].childNodes[0].value) + (span[3].innerHTML) + (span[5].childNodes[0].value);
                }

                else if (items[i].nodeName != "#text") {
                    span = items[i].childNodes;
                    rs += (span[1].innerHTML);
                }

                

            }
            console.log(rs);
            console.log(eval(rs));
            
            document.getElementById("finalResult").value = eval(rs);
            }
            catch(err){
                alert("Invalid Expression");
            }

        }

        function clearForm(){
            document.getElementById("sandboxExpression").innerHTML=null;
            document.getElementById("finalResult").value=0;

        }
