import exampleJsonFile from '../2PGihsFnQh1NaKUvBvhbjx.json' assert { type: "json" };
console.log(exampleJsonFile, "exampleJsonFile")
document.addEventListener("DOMContentLoaded", function (event) {
  // let fig = {};
  //  fetch('./fig.json') .then(res=> res.json()) .then(data => fig)
  //  console.log(fig)
  let fig = exampleJsonFile.data
  console.log(exampleJsonFile, "exampleJsonFile")
  const figElement = document.querySelector(".main");
  figElement.style.position = "relative";
  figElement.style.backgroundImage =
    "linear-gradient(90deg, #1F2125 0%, #16171B 100%)";
  // console.log(fig, "fig", fig.length, "fig.lenght");
console.log(fig.document.children[0].children[1].children, "fig[1]", fig.document, "fig.document")
  // const figElementStyle = window.getComputedStyle(figElement)
  // console.log(figElementStyle, "figElementStyle")
  // for( let i = 0; i < fig.length; i ++  ){
  //   console.log(fig[i], "arr[i]")

  //   console.log(fig, "fig")

  //       }
  // let arrFag = fig.document.children[0].children[0].children;
  let arrFag = fig.document.children[0].children[2].children;
  console.log(arrFag, ";", "arrFag");
  const toFixedHard = (number, x) => {
    const s = String(number);
    let [a, b = ""] = s.split(".");
    return parseFloat(a + "." + b.substring(0, x));
  };

  function foreachArr(arrFag) {
    // const arrMain = Array.from(arr);
    // console.log(arrMain)
    // arrMain.forEach(function (item) {
    //   if (Array.isArray(item)) foreachArr(item);
    //   else document.write(item);
    //   console.log("foreachArr(item);")
    // });
    // Object.entries(arr).forEach(([  props ]) => {
    //     console.log(props, "props")
    //     Object.entries(props).forEach(([  item ]) => {
    //         console.log(typeof item === 'object', "props.hasOwnProperty(props)")
    //     });
    //     // if(props.hasOwnProperty(props)){
    //     //     foreachArr(props)
    //     // }else{console.log(props, "props2")}
    //     // Object.entries(props).forEach(([ k, v ]) => console.log(k + ': ' + v));
    //   });
    //  let fadss =  Object.keys(arr).map(b => console.log(b))
    //   let arrFag = fig.document.children
    //   console.log(arrFag, "arrFag")
    //    for( let i = 0; i < arrFag.length; i ++  ){
    // console.log(arrFag[i], )
    // for( let prop in chars ){
    //   console.log(arrFag[j])
    //      }

    for (let key in arrFag) {
      if (arrFag.hasOwnProperty(key)) {
        let reSymbol = arrFag[key].name.replace(/ /g, "-");
        let reSymbol2 = reSymbol.replace(/[(){},.]/g, "");
        let newDiv = document.createElement("div");
        let newPText = document.createElement("p");
        // console.log(arrFag.hasOwnProperty(key), "arrFag.hasOwnProperty(key)", !!arrFag[key].characters, "!!arrFag[key].characters")

        // console.log(key, ";", arrFag[key]);
        // console.log(reSymbol2, "arrFag[key].name");
        //  console.log(`${key} : ${fig[key]}`)

        figElement.appendChild(newDiv);
        // console.log(arrFag, "arrFag");

        // console.log(arrFag[key].name, "name");

        // if (!!arrFag[key].fills[0]) {
        //   console.log(arrFag[key].fills[0].gradientHandlePositions, 'arrFag[key].fills[0].gradientHandlePositions')
        // }
        // if(!!arrFag[key].fills[0] && arrFag[key].fills[0].type === "GRADIENT_LINEAR"){
        //   console.log(arrFag[key].fills[0].gradientHandlePositions, 'arrFag[key].fills[0].gradientHandlePositions')

        //   arrFag[key].fills[0].gradientHandlePositions.forEach( position =>{
        //     console.log( position.x + "position" + " (positiony:" + position.y + ")" );
        //   });
        // }
        if (!!arrFag[key].characters) {
          // console.log(arrFag[key].characters)
          newDiv.appendChild(newPText);
          newPText.innerHTML = arrFag[key].characters;
          // newPText.style.display = "inline-flex";
          newPText.style.fontFamily = `"Inter", "sans-seif"`;
          // newPText.style.width = "fit-content";
          // newPText.style.height = "fit-content";
          newPText.style.width = `${arrFag[key].absoluteBoundingBox.width}px`;
          newPText.style.height = `${arrFag[key].absoluteBoundingBox.height}px`;

          let addBr = function (element, splitNamber) {
            // const p = document.querySelector("p");

            // // Get contents of <p> as a text node
            // const elemenFirstChild = element.firstChild;

            // // Split 'foobar' into two text nodes, 'foo' and 'bar',
            // // and save 'bar' as a const
            // console.log(element, "elemenFirstChild")
            // const elemenSplit = element.splitText(splitNamber);

            // // Create a <u> element containing ' new content '
            // const createBr = document.createElement("<br/>");

            // // Add <u> before 'bar'
            // element.insertBefore(createBr, bar);
          

            // The result is: <p>foo<u> new content </u>bar</p>
            // версия 2
            // element.padEnd(splitNamber, "\n")
            // версия 3
            var str = element
              
                a = str.substring(0,str.length - splitNamber);
                
                b = str.substring(str.length - (splitNamber));
                
             return `${a} <br/> ${b}`

          };

          if(arrFag[key].id === "128:69"){
          const addBrVar =   addBr(arrFag[key].characters, 10);
          newPText.innerHTML = addBrVar;
          }
          if(arrFag[key].id === "128:70"){
            const addBrVar =   addBr(arrFag[key].characters, 9);
            newPText.innerHTML = addBrVar;
            }

          if (!!arrFag[key].style.textAlignHorizontal) {
            let newTextAlign = `"${arrFag[
              key
            ].style.textAlignHorizontal.toLowerCase()}"`;
            // newPText.style.textAlign = newTextAlign;
            // console.log(newTextAlign, "newTextAlign");
            newPText.style.textAlign =
              arrFag[key].style.textAlignHorizontal.toLowerCase();
            // console.log(
            //   newPText.style.textAlign,
            //   "newPText.style.textAlign",
            //   newTextAlign,
            //   "${newPText.style.textAlignHorizontal}"
            // );
          }

          // newPText.style.fontSize = arrFag[key].style.fontSize;
          // newPText.style.fontSize = 10;
          // rgba(255, 255, 128, .5);
          let colorTransform = `rgba(${arrFag[key].fills[0].color.r * 255} , ${
            arrFag[key].fills[0].color.g * 255
          } , ${arrFag[key].fills[0].color.b * 255} , ${
            arrFag[key].fills[0].color.a
          })`;

          // "textAlignHorizontal": "CENTER",
          // "textAlignVertical": "TOP",

          // console.log(colorTransform, "colorTransform")
          newPText.style.color = `${colorTransform}`;
          newPText.style.fontSize = `${arrFag[key].style.fontSize}px`;
          // console.log( newPText.style.color, "arrFag[key].fills.color.r", colorTransform, "colorTransform", `"#${rgba2hex(rgbHes)}"` , "rgbHes")
          newPText.style.fontWeight = arrFag[key].style.fontWeight;
          // console.log(arrFag[key],  "arrFag[key].fontWeight", newPText.style.fontSize, "newPText.style.fontSize");
          newPText.style.lineHeight = arrFag[key].style.lineHeightPx + "px";
          // newPText.parentElement.style.fontSize = arrFag[key].style.fontSize;
          // newPText.parentElement.style.display = "flex";
          // newPText.parentElement.style.justifyContent = "center";
          // console.log(newPText.style, "arrFag[key].style");
        }

        newDiv.classList.add(
          `${reSymbol2}` + `.${Math.abs(arrFag[key].absoluteBoundingBox.x)}`
        );

        // newDiv.style.border = "1px solid red";

        // console.log(
        //   "arrFag[key].absoluteBoundingBox",
        // arrFag[key].absoluteBoundingBox.width
        // );

        // console.log(
        //   !!arrFag[key].absoluteBoundingBox,
        //   "arrFag[key].absoluteBoundingBox.width  !== undefined"
        // );

        if (!!arrFag[key].absoluteBoundingBox) {
          let newDivTop = arrFag[key].absoluteBoundingBox.y - 3800;
          let newDivLeft = arrFag[key].absoluteBoundingBox.x + 170;
          let newDivTop2 = arrFag[key].absoluteBoundingBox;
          // console.log(newDivTop, "newDivTop",newDivTop2, "newDivTop2" )
          // newDiv.style.width = `"${arrFag[key].absoluteBoundingBox.width}"` ;
          newDiv.style.width = `${arrFag[key].absoluteBoundingBox.width}px`;
          newDiv.style.height = `${arrFag[key].absoluteBoundingBox.height}px`;
          // console.log(arrFag[key].absoluteBoundingBox.y, "arrFag[key].absoluteBoundingBox.y");
          newDiv.style.top = `${newDivTop}px`;
          newDiv.style.left = `${newDivLeft}px`;

          if (!!arrFag[key].fills[0]) {
            if (!!arrFag[key].fills[0].color) {
              let colorTransformBac = `rgba(${
                arrFag[key].fills[0].color.r * 255
              } , ${arrFag[key].fills[0].color.g * 255} , ${
                arrFag[key].fills[0].color.b * 255
              } , ${arrFag[key].fills[0].color.a})`;
              // newDiv.style.background =  colorTransformBac;
              // console.log(
              //   colorTransformBac,
              //   "colorTransformBac",
              //   arrFag[key].type,
              //   "arrFag[key].type",

              //   arrFag[key].blendMode,
              //   "arrFag[key].blendMode"
              // );
              if (
                colorTransformBac != "rgba(255 , 255 , 255 , 1)" &&
                arrFag[key].type == "RECTANGLE"
              ) {
                newDiv.style.background = colorTransformBac;
              }
           
            }
          }


          // if(!!arrFag[key].fills[0].color){
          //
          // }

          // newDiv.style.top = `${arrFag[key].absoluteBoundingBox.x}px`;
          // newDiv.style.left = `${arrFag[key].absoluteBoundingBox.y}px`;
          // console.log(
          //   `${arrFag[key].absoluteBoundingBox.x}`,
          //   "arrFag[key].absoluteBoundingBox.x",
          //   newDiv.style.top,
          //   "newDiv.style.top"
          // );
        }
        if (!!arrFag[key].name && arrFag[key].name.indexOf("Line") != -1) {
          if (!!arrFag[key].strokes) {
            let colorTransformStroke = `rgba(${
              arrFag[key].strokes[0].color.r * 255
            } , ${arrFag[key].strokes[0].color.g * 255} , ${
              arrFag[key].strokes[0].color.b * 255
            } , ${arrFag[key].strokes[0].color.a})`;
            // console.log(
            //   arrFag[key].absoluteBoundingBox.width,
            //   "arrFag[key].absoluteBoundingBox.width"
            // );
            if (
              arrFag[key].absoluteBoundingBox.width >
              arrFag[key].absoluteBoundingBox.height
            ) {
              newDiv.style.width = `${arrFag[key].absoluteBoundingBox.width}px`;
              newDiv.style.height = `${arrFag[key].strokeWeight}px`;
            } else {
              newDiv.style.width = `${arrFag[key].strokeWeight}px`;
              newDiv.style.height = `${arrFag[key].absoluteBoundingBox.height}px`;
            }

            newDiv.style.backgroundColor = colorTransformStroke;
            // console.log(
            //   newDiv.style.backgroundColor,
            //   "newDiv.style.backgroundColor"
            // );
          }
        }
        // if(arrFag[key].type === "VECTOR"){
        //   if (!!arrFag[key].strokes && !!arrFag[key].strokes[0]?.color) {
        //     let colorTransformStroke = `rgba(${
        //       arrFag[key].strokes[0].color.r * 255
        //     } , ${arrFag[key].strokes[0].color.g * 255} , ${
        //       arrFag[key].strokes[0].color.b * 255
        //     } , ${arrFag[key].strokes[0].color.a})`;
        //     // console.log(
        //     //   arrFag[key].absoluteBoundingBox.width,
        //     //   "arrFag[key].absoluteBoundingBox.width"
        //     // );
        //     if (
        //       arrFag[key].absoluteBoundingBox.width >
        //       arrFag[key].absoluteBoundingBox.height
        //     ) {
        //       newDiv.style.width = `${arrFag[key].absoluteBoundingBox.width}px`;
        //       newDiv.style.height = `${arrFag[key].strokeWeight}px`;
        //     } else {
        //       newDiv.style.width = `${arrFag[key].strokeWeight}px`;
        //       newDiv.style.height = `${arrFag[key].absoluteBoundingBox.height}px`;
        //     }

        //     newDiv.style.backgroundColor = colorTransformStroke;
        //     // console.log(
        //     //   newDiv.style.backgroundColor,
        //     //   "newDiv.style.backgroundColor"
        //     // );
        //   }
        // }
        // console.log(
        //   arrFag[key].children,
        //   "arrFag.children",
        //   !!arrFag[key].children
        // );
        if (!!arrFag[key].children) {
          foreachArr(arrFag[key].children);
        }

        newDiv.style.position = "absolute";
      }
    }
  }
  // }
  // for (let i = 0; i < 3; i++)
  foreachArr(arrFag);
});
