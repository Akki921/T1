import React,{useState} from "react";

const Header = () => {
  const [firstColor, setfirstColor] = useState("#ff0a00");
  const [secondColor, setsecondColor] = useState("#1119F8")
  const [thirdColor, setthirdColor] = useState("#5CE611")
  const [fourthColor, setfourthColor] = useState("#EDFF11")
  const getonedivcolor=(e)=>{
 const setvalue=e.target.attributes.getNamedItem("color-value").value;
 setfirstColor(setvalue);
  }

  const gettwodivcolor=(e)=>{
    const setvalue=e.target.attributes.getNamedItem("color-value").value;
    setsecondColor(setvalue);
     }

     const getthreedivcolor=(e)=>{
      const setvalue=e.target.attributes.getNamedItem("color-value").value;
      setthirdColor(setvalue);
       }
       const getfourdivcolor=(e)=>{
        const setvalue=e.target.attributes.getNamedItem("color-value").value;
        setfourthColor(setvalue);
         }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row mt-5">
              <div className="col-sm-3 m-2" style={{width:"30px"}}>
               <div onClick={getonedivcolor}  style={{width:"30px",height:"30px" ,backgroundColor:"#ff0a00",cursor:"pointer"}} color-value="#ff0a00">
                
               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div  onClick={getonedivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#DE251E", cursor:"pointer"}} color-value="#DE251E">

               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div   onClick={getonedivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#b0231e",cursor:"pointer" }} color-value="#b0231e">
                
               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div  onClick={getonedivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#240301",cursor:"pointer"}} color-value="#240301">
               </div>
              </div>
            </div>
            <hr style={{width:"50%"}}/>

            <div className="row mt-5">
              <div className="col-sm-3 m-2" style={{width:"30px"}}>
               <div onClick={gettwodivcolor}  style={{width:"30px",height:"30px" ,backgroundColor:"#1119F8",cursor:"pointer"}} color-value="#1119F8">
                
               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div  onClick={gettwodivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#7077EA",cursor:"pointer"}} color-value="#7077EA">

               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div   onClick={gettwodivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#393E8D",cursor:"pointer"}} color-value="#393E8D">
                
               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div  onClick={gettwodivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#0F145E",cursor:"pointer"}} color-value="#0F145E">
               </div>
              </div>
            </div>
            <hr style={{width:"50%"}}/>
            <div className="row mt-5">
              <div className="col-sm-3 m-2" style={{width:"30px"}}>
               <div onClick={getthreedivcolor}  style={{width:"30px",height:"30px" ,backgroundColor:"#5CE611",cursor:"pointer"}} color-value="#5CE611">
                
               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div  onClick={getthreedivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#AEFF81",cursor:"pointer"}} color-value="#AEFF81">

               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div   onClick={getthreedivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#4A832B",cursor:"pointer"}} color-value="#4A832B">
                
               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div  onClick={getthreedivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#1D4506",cursor:"pointer"}} color-value="#1D4506">
               </div>
              </div>
            </div>
            <hr style={{width:"50%"}}/>

            <div className="row mt-5">
              <div className="col-sm-3 m-2" style={{width:"30px"}}>
               <div onClick={getfourdivcolor}  style={{width:"30px",height:"30px" ,backgroundColor:"#EDFF11",cursor:"pointer"}} color-value="#EDFF11">
                
               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div  onClick={getfourdivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#CFD763",cursor:"pointer"}} color-value="#CFD763">

               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div   onClick={getfourdivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#656A1B",cursor:"pointer"}} color-value="#656A1B">
                
               </div>
              </div>
              <div className="col-sm-3 m-2"  style={{width:"30px"}}>
               <div  onClick={getfourdivcolor} style={{width:"30px",height:"30px" ,backgroundColor:"#454903",cursor:"pointer"}} color-value="#454903">
               </div>
              </div>
            </div>
            <hr style={{width:"50%"}}/>

          </div>
          <div className="col ">
            <div className="row">
              <div
                className="col m-1 border-right "
                style={{
                  height: "200px",
                  width: "200px",
                  backgroundColor: `${firstColor}`,
                }}
              ></div>
              <div
                className="col m-1 border-left"
                style={{
                  height: "200px",
                  width: "200px",
                  backgroundColor:`${secondColor}`,
                }}
              ></div>
            </div>

            <div className="row">
              <div
                className="col m-1 border-top"
                style={{
                  height: "200px",
                  width: "200px",
                  backgroundColor: `${thirdColor}`,
                }}
              ></div>
              <div
                className="col m-1 border-top"
                style={{
                  height: "200px",
                  width: "200px",
                  backgroundColor:`${fourthColor}`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
