// // app.js
// const trails = [...trailData.TX, ...trailData.AR, ...trailData.OK, ...trailData.KA];


// // ───────────────────────────────── TrailDetail (detail "page") ─────────────────────────────────
// function TrailDetail(props) {
//   const trail = props.trail;
//   const onBack = props.onBack;
//   const detailMapRef = React.useRef(null);

//   // Small map for the trailhead
//   React.useEffect(() => {
//     if (!trail) return;
//     if (trail.lat === -100 || trail.long === -200) return;

//     require([
//       "esri/Map",
//       "esri/views/MapView",
//       "esri/Graphic",
//       "esri/layers/GraphicsLayer"
//     ], function (Map, MapView, Graphic, GraphicsLayer) {
//       if (!detailMapRef.current) return;

//       const map = new Map({ basemap: "topo-vector" });
//       const view = new MapView({
//         container: detailMapRef.current,  // use the div ref
//         map: map,
//         center: [trail.long, trail.lat],
//         zoom: 13
//       });

//       const graphicsLayer = new GraphicsLayer();
//       map.add(graphicsLayer);

//       const point = {
//         type: "point",
//         longitude: trail.long,
//         latitude: trail.lat
//       };

//       const symbol = {
//         type: "simple-marker",
//         color: [226, 119, 40],
//         outline: { color: [255, 255, 255], width: 1 }
//       };

//       const popupTemplate = {
//         title: trail.projectName,
//         content: trail.areaName
//       };

//       const graphic = new Graphic({
//         geometry: point,
//         symbol: symbol,
//         popupTemplate: popupTemplate
//       });

//       graphicsLayer.add(graphic);
//     });
//   }, [trail]);

//   return React.createElement(
//     "div",
//     {
//       className: "trail-detail",
//       style: {
//         maxWidth: "900px",
//         margin: "0 auto",
//         padding: "16px 20px",
//         backgroundColor: "#f9fafb",
//         borderRadius: "12px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
//       }
//     },

//     // Back button
//     React.createElement(
//       "button",
//       {
//         onClick: onBack,
//         style: {
//           marginBottom: "16px",
//           padding: "6px 12px",
//           backgroundColor: "#f3f4f6",
//           border: "1px solid #d1d5db",
//           borderRadius: "999px",
//           cursor: "pointer",
//           fontSize: "0.9rem"
//         }
//       },
//       "← Back to all trails"
//     ),

//     // Title + subtitle
//     React.createElement(
//       "h1",
//       {
//         style: {
//           margin: "0 0 4px 0",
//           fontSize: "1.5rem"
//         }
//       },
//       trail.projectName || "Unnamed Trail"
//     ),
//     React.createElement(
//       "h2",
//       {
//         style: {
//           margin: "0 0 10px 0",
//           fontSize: "1rem",
//           color: "#4b5563"
//         }
//       },
//       trail.areaName || ""
//     ),

//     // Summary chips (length, elevation, intensity)
//     React.createElement(
//       "div",
//       {
//         style: {
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "8px",
//           marginBottom: "14px"
//         }
//       },
//       React.createElement(
//         "span",
//         {
//           style: {
//             padding: "4px 8px",
//             borderRadius: "999px",
//             backgroundColor: "#e5f2ff",
//             fontSize: "0.85rem"
//           }
//         },
//         "Length: ",
//         trail.length !== -1 ? trail.length + " mi" : "Unknown"
//       ),
//       React.createElement(
//         "span",
//         {
//           style: {
//             padding: "4px 8px",
//             borderRadius: "999px",
//             backgroundColor: "#ffe8e5",
//             fontSize: "0.85rem"
//           }
//         },
//         "Elevation: ",
//         trail.eGain !== -1 ? trail.eGain + " ft" : "Unknown"
//       ),
//       React.createElement(
//         "span",
//         {
//           style: {
//             padding: "4px 8px",
//             borderRadius: "999px",
//             backgroundColor: "#e7f7e7",
//             fontSize: "0.85rem"
//           }
//         },
//         "Intensity: ",
//         trail.intensity || "Unknown"
//       )
//     ),

//     // Main content row: left = info, right = map
//     React.createElement(
//       "div",
//       {
//         style: {
//           display: "flex",
//           gap: "16px",
//           alignItems: "flex-start",
//           flexWrap: "wrap"
//         }
//       },

//       // LEFT: all the text/info
//       React.createElement(
//         "div",
//         { style: { flex: "1 1 260px", minWidth: "240px" } },

//         React.createElement(
//           "h3",
//           {
//             style: {
//               marginTop: "0",
//               marginBottom: "6px",
//               fontSize: "1rem"
//             }
//           },
//           "Activities & Access"
//         ),
//         React.createElement(
//           "p",
//           null,
//           React.createElement("strong", null, "Tap: "),
//           trail.tap !== undefined ? trail.tap : "N/A"
//         ),
//         React.createElement(
//           "p",
//           null,
//           React.createElement("strong", null, "Walkable: "),
//           trail.isWalking || "Unknown"
//         ),
//         React.createElement(
//           "p",
//           null,
//           React.createElement("strong", null, "Biking: "),
//           trail.isBiking || "Unknown"
//         ),
//         React.createElement(
//           "p",
//           null,
//           React.createElement("strong", null, "Equestrian: "),
//           trail.isEquestrian || "Unknown"
//         ),
//         React.createElement(
//           "p",
//           null,
//           React.createElement("strong", null, "Wheelchair: "),
//           trail.isWheelchair || "Unknown"
//         ),
//         React.createElement(
//           "p",
//           null,
//           React.createElement("strong", null, "Pets Allowed: "),
//           trail.isPet || "Unknown"
//         ),

//         React.createElement(
//           "h3",
//           {
//             style: {
//               marginTop: "12px",
//               marginBottom: "4px",
//               fontSize: "1rem"
//             }
//           },
//           "More Info"
//         ),
//         trail.infoLink &&
//           React.createElement(
//             "p",
//             null,
//             React.createElement(
//               "a",
//               {
//                 href: trail.infoLink,
//                 target: "_blank",
//                 rel: "noreferrer",
//                 style: { color: "#2563eb" }
//               },
//               "Trail Website"
//             )
//           ),
//         trail.comments &&
//           React.createElement(
//             "p",
//             {
//               style: {
//                 marginTop: "4px",
//                 fontStyle: "italic",
//                 color: "#4b5563"
//               }
//             },
//             trail.comments
//           )
//       ),

//       // RIGHT: the small map
//       React.createElement("div", {
//         id: "detail-map",
//         ref: detailMapRef,
//         style: {
//           width: "320px",
//           height: "240px",
//           border: "1px solid #d1d5db",
//           borderRadius: "8px",
//           flexShrink: 0,
//           marginLeft: "4px"
//         }
//       })
//     )
//   );
// }


// // ───────────────────────────────── TrailDirectory (existing list + big map) ─────────────────────────────────
// function TrailDirectory() {
//   const [stateFilter, setStateFilter] = React.useState("All");
//   const [bikingFilter, setBikingFilter] = React.useState("None");
//   const [equestrianFilter, setEquestrianFilter] = React.useState("None");
//   const [wheelchairFilter, setWheelchairFilter] = React.useState("None");
//   const [petsFilter, setPetsFilter] = React.useState("None");

  
//   const [lengthOp, setLengthOp] = React.useState("None");   
//   const [lengthValue, setLengthValue] = React.useState(""); 

//   const [eGainOp, setEGainOp] = React.useState("None");     
//   const [eGainValue, setEGainValue] = React.useState("");   
//   const [selectedTrail, setSelectedTrail] = React.useState(null);
//   const mapRef = React.useRef(null);
//   const graphicsLayerRef = React.useRef(null);

//   const filtered = trails.filter(t => {
   
//     let stateMatch = false;
//     if (stateFilter === "All") stateMatch = true;
//     else if (stateFilter === "TX" && trailData.TX.includes(t)) stateMatch = true;
//     else if (stateFilter === "AR" && trailData.AR.includes(t)) stateMatch = true;
//     else if (stateFilter === "OK" && trailData.OK.includes(t)) stateMatch = true;
//     else if (stateFilter === "KA" && trailData.KA.includes(t)) stateMatch = true;

//     if (!stateMatch) return false;

   
//     const matchYesNo = (value, filter) => {
      
//       if (filter === "None") return true;
//       if (!value) return false; 
//       return value.toLowerCase() === filter.toLowerCase(); 
//     };

   
//     if (!matchYesNo(t.isBiking, bikingFilter)) return false;
//     if (!matchYesNo(t.isEquestrian, equestrianFilter)) return false;
//     if (!matchYesNo(t.isWheelchair, wheelchairFilter)) return false;
//     if (!matchYesNo(t.isPet, petsFilter)) return false;

    
//     const matchNumber = (value, op, targetRaw) => {
      
//       if (op === "None" || targetRaw === "") return true;

//       const target = Number(targetRaw);
//       if (isNaN(target)) return true; 

      
//       if (value === -1 || value === null || value === undefined) return false;

//       const v = Number(value);

//       if (op === "<") return v < target;
//       if (op === ">") return v > target;
//       if (op === "=") return v === target;

//       return true;
//     };

    
//     if (!matchNumber(t.length, lengthOp, lengthValue)) return false;
//     if (!matchNumber(t.eGain, eGainOp, eGainValue)) return false;

//     return true;
//   });


//   // Initialize map (same idea as before)
//   React.useEffect(() => {
//     require([
//       "esri/Map",
//       "esri/views/MapView",
//       "esri/Graphic",
//       "esri/layers/GraphicsLayer"
//     ], function (Map, MapView, Graphic, GraphicsLayer) {
//       const map = new Map({ basemap: "topo-vector" });
//       const view = new MapView({
//         container: "map",
//         map: map,
//         center: [-96, 36],
//         zoom: 4
//       });

//       const graphicsLayer = new GraphicsLayer();
//       map.add(graphicsLayer);

//       graphicsLayerRef.current = graphicsLayer;
//       mapRef.current = view;

//       // Initial markers (for the initial filter)
//       filtered.forEach(function (t) {
//         if (t.lat !== -100 && t.long !== -200) {
//           const point = { type: "point", longitude: t.long, latitude: t.lat };
//           const symbol = {
//             type: "simple-marker",
//             color: [226, 119, 40],
//             outline: { color: [255, 255, 255], width: 1 }
//           };
//           const popupTemplate = {
//             title: t.projectName,
//             content: t.areaName
//           };
//           const graphic = new Graphic({
//             geometry: point,
//             symbol: symbol,
//             popupTemplate: popupTemplate
//           });
//           graphicsLayer.add(graphic);
//         }
//       });
//     });
//   }, []);

  
//   React.useEffect(() => {
//     if (!graphicsLayerRef.current) return;

//     graphicsLayerRef.current.removeAll();

//     filtered.forEach(function (t) {
//       if (t.lat !== -100 && t.long !== -200) {
//         require(["esri/Graphic"], function (Graphic) {
//           const point = { type: "point", longitude: t.long, latitude: t.lat };
//           const symbol = {
//             type: "simple-marker",
//             color: [226, 119, 40],
//             outline: { color: [255, 255, 255], width: 1 }
//           };
//           const popupTemplate = {
//             title: t.projectName,
//             content: t.areaName
//           };
//           const graphic = new Graphic({
//             geometry: point,
//             symbol: symbol,
//             popupTemplate: popupTemplate
//           });
//           graphicsLayerRef.current.add(graphic);
//         });
//       }
//     });
//   }, [filtered]);

//   // If a trail is selected, show the detail "page"
//   if (selectedTrail) {
//     return React.createElement(TrailDetail, {
//       trail: selectedTrail,
//       onBack: function () { setSelectedTrail(null); }
//     });
//   }

//   // Otherwise show the original directory view
//   return (
//     React.createElement("div", null,
//       React.createElement("div", { id: "filters" },

        
//         React.createElement("label", null, "State: ",
//           React.createElement("select", {
//             value: stateFilter,
//             onChange: function (e) { setStateFilter(e.target.value); }
//           },
//             React.createElement("option", null, "All"),
//             React.createElement("option", null, "TX"),
//             React.createElement("option", null, "AR"),
//             React.createElement("option", null, "OK"),
//             React.createElement("option", null, "KA")
//           )
//         ),
  
        
//         React.createElement("label", null, " Biking: ",
//           React.createElement("select", {
//             value: bikingFilter,
//             onChange: function (e) { setBikingFilter(e.target.value); }
//           },
//             React.createElement("option", null, "None"),
//             React.createElement("option", null, "Yes"),
//             React.createElement("option", null, "No")
//           )
//         ),
  
        
//         React.createElement("label", null, " Equestrian: ",
//           React.createElement("select", {
//             value: equestrianFilter,
//             onChange: function (e) { setEquestrianFilter(e.target.value); }
//           },
//             React.createElement("option", null, "None"),
//             React.createElement("option", null, "Yes"),
//             React.createElement("option", null, "No")
//           )
//         ),
  
        
//         React.createElement("label", null, " Wheelchair: ",
//           React.createElement("select", {
//             value: wheelchairFilter,
//             onChange: function (e) { setWheelchairFilter(e.target.value); }
//           },
//             React.createElement("option", null, "None"),
//             React.createElement("option", null, "Yes"),
//             React.createElement("option", null, "No")
//           )
//         ),
  
        
//         React.createElement("label", null, " Pets: ",
//           React.createElement("select", {
//             value: petsFilter,
//             onChange: function (e) { setPetsFilter(e.target.value); }
//           },
//             React.createElement("option", null, "None"),
//             React.createElement("option", null, "Yes"),
//             React.createElement("option", null, "No")
//           )
//         ),
  
        
//         React.createElement("label", null, " Length: ",
//           React.createElement("select", {
//             value: lengthOp,
//             onChange: function (e) { setLengthOp(e.target.value); }
//           },
//             React.createElement("option", { value: "None" }, "None"),
//             React.createElement("option", { value: "<" }, "Less than"),
//             React.createElement("option", { value: ">" }, "Greater than"),
//             React.createElement("option", { value: "=" }, "Equal to")
//           ),
//           React.createElement("input", {
//             type: "number",
//             value: lengthValue,
//             onChange: function (e) { setLengthValue(e.target.value); },
//             placeholder: "miles",
//             min: "0",
//             style: { width: "70px", marginLeft: "4px" }
//           })
//         ),
  
        
//         React.createElement("label", null, " Elev. gain: ",
//           React.createElement("select", {
//             value: eGainOp,
//             onChange: function (e) { setEGainOp(e.target.value); }
//           },
//             React.createElement("option", { value: "None" }, "None"),
//             React.createElement("option", { value: "<" }, "Less than"),
//             React.createElement("option", { value: ">" }, "Greater than"),
//             React.createElement("option", { value: "=" }, "Equal to")
//           ),
//           React.createElement("input", {
//             type: "number",
//             value: eGainValue,
//             onChange: function (e) { setEGainValue(e.target.value); },
//             placeholder: "ft",
//             min: "0",
//             style: { width: "70px", marginLeft: "4px" }
//           })
//         )
//       ),
  
//       React.createElement("div", { id: "map" }),
//       filtered.map(function (t, i) {
//         return React.createElement("div", {
//           key: i,
//           className: "trail-card",
//           onClick: function () { setSelectedTrail(t); }  // ← click tile to open detail page
//         },
//           React.createElement("h2", null, t.projectName || "Unnamed Trail"),
//           React.createElement("p", null,
//             React.createElement("strong", null, "Area: "),
//             t.areaName || "N/A"
//           ),
//           React.createElement("p", null,
//             React.createElement("strong", null, "Walkable: "),
//             t.isWalking || "Unknown"
//           ),
//           React.createElement("p", null,
//             React.createElement("strong", null, "Biking: "),
//             t.isBiking || "Unknown"
//           ),
//           React.createElement("p", null,
//             React.createElement("strong", null, "Equestrian: "),
//             t.isEquestrian || "Unknown"
//           ),
//           React.createElement("p", null,
//             React.createElement("strong", null, "Wheelchair: "),
//             t.isWheelchair || "Unknown"
//           ),
//           React.createElement("p", null,
//             React.createElement("strong", null, "Pets Allowed: "),
//             t.isPet || "Unknown"
//           ),
//           React.createElement("p", null,
//             React.createElement("strong", null, "Length: "),
//             t.length !== -1 ? t.length + " miles" : "Unknown"
//           ),
//           React.createElement("p", null,
//             React.createElement("strong", null, "Elevation Gain: "),
//             t.eGain !== -1 ? t.eGain + " ft" : "Unknown"
//           ),
//           t.infoLink && React.createElement("p", null,
//             React.createElement("a", { href: t.infoLink, target: "_blank" }, "More Info")
//           ),
//           t.comments && React.createElement("p", null,
//             React.createElement("em", null, t.comments)
//           )
//         );
//       })
//     )
//   );
// }

// // Use ReactDOM.render for UMD React
// ReactDOM.render(
//   React.createElement(TrailDirectory, null),
//   document.getElementById("root")
// );



// app.js

// flatten all trails from all 4 states
const trails = [...trailData.TX, ...trailData.AR, ...trailData.OK, ...trailData.KA];


// ───────────────────────────────── TrailDetail (detail "page") ─────────────────────────────────
// simple single-trail view; toggled from the directory list
function TrailDetail(props) {
  const trail = props.trail;
  const onBack = props.onBack;
  const detailMapRef = React.useRef(null);

  // tiny helper: figure out which state a trail belongs to
  const getTrailStateCode = function (t) {
    if (trailData.TX.includes(t)) return "TX";
    if (trailData.AR.includes(t)) return "AR";
    if (trailData.OK.includes(t)) return "OK";
    if (trailData.KA.includes(t)) return "KA";
    return null;
  };

  // a few other trails from the same state, for the bottom section
  const trailStateCode = getTrailStateCode(trail);
  const relatedTrails = trails
    .filter(function (t) {
      return t !== trail && getTrailStateCode(t) === trailStateCode;
    })
    .slice(0, 4);

  // small map focused on this trailhead
  React.useEffect(() => {
    if (!trail) return;
    if (trail.lat === -100 || trail.long === -200) return;

    require(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/layers/GraphicsLayer"
      ],
      function (Map, MapView, Graphic, GraphicsLayer) {
        if (!detailMapRef.current) return;

        const map = new Map({ basemap: "topo-vector" });
        const view = new MapView({
          container: detailMapRef.current,
          map: map,
          center: [trail.long, trail.lat],
          zoom: 13
        });

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        const point = {
          type: "point",
          longitude: trail.long,
          latitude: trail.lat
        };

        const symbol = {
          type: "simple-marker",
          color: [45, 95, 45],
          outline: { color: [255, 255, 255], width: 1 }
        };

        const popupTemplate = {
          title: trail.projectName,
          content: trail.areaName
        };

        const graphic = new Graphic({
          geometry: point,
          symbol: symbol,
          popupTemplate: popupTemplate
        });

        graphicsLayer.add(graphic);
      }
    );
  }, [trail]);

  return React.createElement(
    "div",
    {
      className: "trail-detail",
      style: {
        maxWidth: "1120px",
        margin: "0 auto",
        marginTop: "16px",
        marginBottom: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "20px 24px 24px",
        boxShadow: "0 14px 28px rgba(15,23,42,0.12)",
        border: "1px solid #e5e7eb",
        borderTop: "4px solid #2d5f2d"
      }
    },

    // Back button
    React.createElement(
      "button",
      {
        onClick: onBack,
        style: {
          marginBottom: "18px",
          padding: "6px 16px",
          backgroundColor: "#f9fafb",
          border: "1px solid #d1d5db",
          borderRadius: "999px",
          cursor: "pointer",
          fontSize: "0.85rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          color: "#374151"
        }
      },
      "← Back to all trails"
    ),

    // Header block: area + trail name
    React.createElement(
      "div",
      { style: { marginBottom: "10px" } },

      // Area (small label)
      React.createElement(
        "div",
        {
          style: {
            fontSize: "0.8rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#6b7280",
            marginBottom: "2px"
          }
        },
        trail.areaName || "Trail area"
      ),

      // Trail name
      React.createElement(
        "h1",
        {
          style: {
            margin: "0",
            fontSize: "1.7rem",
            lineHeight: "1.3",
            color: "#111827",
            fontWeight: 700
          }
        },
        trail.projectName || "Unnamed Trail"
      )
    ),

    // Summary chips (length, elevation, intensity)
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "18px"
        }
      },
      React.createElement(
        "span",
        {
          style: {
            padding: "4px 10px",
            borderRadius: "999px",
            backgroundColor: "#f0f7ec",
            fontSize: "0.8rem",
            color: "#2d5f2d"
          }
        },
        "Length: ",
        trail.length !== -1 ? trail.length + " mi" : "Unknown"
      ),
      React.createElement(
        "span",
        {
          style: {
            padding: "4px 10px",
            borderRadius: "999px",
            backgroundColor: "#fef3c7",
            fontSize: "0.8rem",
            color: "#92400e"
          }
        },
        "Elevation: ",
        trail.eGain !== -1 ? trail.eGain + " ft" : "Unknown"
      ),
      React.createElement(
        "span",
        {
          style: {
            padding: "4px 10px",
            borderRadius: "999px",
            backgroundColor: "#dcfce7",
            fontSize: "0.8rem",
            color: "#166534"
          }
        },
        "Intensity: ",
        trail.intensity || "Unknown"
      )
    ),

    // Divider
    React.createElement("hr", {
      style: {
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "0 0 16px 0"
      }
    }),

    // Main content row: left = info, right = map
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          gap: "24px",
          alignItems: "flex-start",
          flexWrap: "wrap"
        }
      },

      // LEFT: all the text/info
      React.createElement(
        "div",
        { style: { flex: "1 1 280px", minWidth: "240px" } },

        React.createElement(
          "h3",
          {
            style: {
              marginTop: "0",
              marginBottom: "6px",
              fontSize: "0.95rem",
              color: "#111827",
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: "4px"
            }
          },
          "Activities & Access"
        ),
        React.createElement(
          "p",
          { style: { margin: "3px 0", fontSize: "0.85rem", color: "#4b5563" } },
          React.createElement("strong", null, "Tap: "),
          trail.tap !== undefined ? trail.tap : "N/A"
        ),
        React.createElement(
          "p",
          { style: { margin: "3px 0", fontSize: "0.85rem", color: "#4b5563" } },
          React.createElement("strong", null, "Walkable: "),
          trail.isWalking || "Unknown"
        ),
        React.createElement(
          "p",
          { style: { margin: "3px 0", fontSize: "0.85rem", color: "#4b5563" } },
          React.createElement("strong", null, "Biking: "),
          trail.isBiking || "Unknown"
        ),
        React.createElement(
          "p",
          { style: { margin: "3px 0", fontSize: "0.85rem", color: "#4b5563" } },
          React.createElement("strong", null, "Equestrian: "),
          trail.isEquestrian || "Unknown"
        ),
        React.createElement(
          "p",
          { style: { margin: "3px 0", fontSize: "0.85rem", color: "#4b5563" } },
          React.createElement("strong", null, "Wheelchair: "),
          trail.isWheelchair || "Unknown"
        ),
        React.createElement(
          "p",
          { style: { margin: "3px 0", fontSize: "0.85rem", color: "#4b5563" } },
          React.createElement("strong", null, "Pets Allowed: "),
          trail.isPet || "Unknown"
        ),

        React.createElement(
          "h3",
          {
            style: {
              marginTop: "14px",
              marginBottom: "6px",
              fontSize: "0.95rem",
              color: "#111827",
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: "4px"
            }
          },
          "More Info"
        ),
        trail.infoLink &&
          React.createElement(
            "p",
            {
              style: {
                margin: "3px 0",
                fontSize: "0.85rem",
                color: "#2d5f2d"
              }
            },
            React.createElement(
              "a",
              {
                href: trail.infoLink,
                target: "_blank",
                rel: "noreferrer",
                style: { color: "inherit", textDecoration: "none" }
              },
              "Open trail website ↗"
            )
          ),
        trail.comments &&
          React.createElement(
            "p",
            {
              style: {
                marginTop: "6px",
                fontSize: "0.85rem",
                fontStyle: "italic",
                color: "#4b5563"
              }
            },
            trail.comments
          )
      ),

      // RIGHT: the small map
      React.createElement("div", {
        id: "detail-map",
        ref: detailMapRef,
        style: {
          width: "360px",
          height: "260px",
          border: "1px solid #d1d5db",
          borderRadius: "12px",
          flexShrink: 0,
          marginLeft: "4px",
          boxShadow: "0 2px 6px rgba(15,23,42,0.08)",
          overflow: "hidden"
        }
      })
    ),

    // Other trails section so the bottom isn't empty
    relatedTrails.length > 0 &&
      React.createElement(
        "div",
        {
          style: {
            marginTop: "20px",
            paddingTop: "12px",
            borderTop: "1px solid #e5e7eb"
          }
        },
        React.createElement(
          "h3",
          {
            style: {
              margin: "0 0 8px 0",
              fontSize: "0.9rem",
              color: "#111827"
            }
          },
          "Other trails in this state"
        ),
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px"
            }
          },
          relatedTrails.map(function (rt, idx) {
            return React.createElement(
              "span",
              {
                key: idx,
                style: {
                  padding: "4px 10px",
                  borderRadius: "999px",
                  backgroundColor: "#f3f4f6",
                  fontSize: "0.8rem",
                  color: "#374151"
                }
              },
              rt.projectName || "Unnamed Trail"
            );
          })
        )
      ),

    // Soft little footer line
    React.createElement(
      "p",
      {
        style: {
          marginTop: "14px",
          fontSize: "0.75rem",
          color: "#9ca3af"
        }
      },
      "Trail listings from project data; basemap and tiles © Esri and contributors."
    )
  );
}


// ───────────────────────────────── TrailDirectory (existing list + big map) ─────────────────────────────────
function TrailDirectory() {
  const [stateFilter, setStateFilter] = React.useState("All");
  const [bikingFilter, setBikingFilter] = React.useState("None");
  const [equestrianFilter, setEquestrianFilter] = React.useState("None");
  const [wheelchairFilter, setWheelchairFilter] = React.useState("None");
  const [petsFilter, setPetsFilter] = React.useState("None");

  const [lengthOp, setLengthOp] = React.useState("None");
  const [lengthValue, setLengthValue] = React.useState("");

  const [eGainOp, setEGainOp] = React.useState("None");
  const [eGainValue, setEGainValue] = React.useState("");
  const [intensityFilter, setIntensityFilter] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortBy, setSortBy] = React.useState("name");

  const [visibleCount, setVisibleCount] = React.useState(30);
  const listPanelRef = React.useRef(null);

  const [selectedTrail, setSelectedTrail] = React.useState(null);
  const [highlightedProject, setHighlightedProject] = React.useState(null);

    const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);
    const [draftStateFilter, setDraftStateFilter] = React.useState(stateFilter);
    const [draftBikingFilter, setDraftBikingFilter] = React.useState(bikingFilter);
    const [draftEquestrianFilter, setDraftEquestrianFilter] = React.useState(equestrianFilter);
    const [draftWheelchairFilter, setDraftWheelchairFilter] = React.useState(wheelchairFilter);
    const [draftPetsFilter, setDraftPetsFilter] = React.useState(petsFilter);
    const [draftLengthOp, setDraftLengthOp] = React.useState(lengthOp);
    const [draftLengthValue, setDraftLengthValue] = React.useState(lengthValue);
    const [draftEGainOp, setDraftEGainOp] = React.useState(eGainOp);
    const [draftEGainValue, setDraftEGainValue] = React.useState(eGainValue);
    const [draftIntensityFilter, setDraftIntensityFilter] = React.useState(intensityFilter);

  const openFilters = function () {
    setDraftStateFilter(stateFilter);
    setDraftBikingFilter(bikingFilter);
    setDraftEquestrianFilter(equestrianFilter);
    setDraftWheelchairFilter(wheelchairFilter);
    setDraftPetsFilter(petsFilter);

    setDraftLengthOp(lengthOp);
    setDraftLengthValue(lengthValue);
    setDraftEGainOp(eGainOp);
    setDraftEGainValue(eGainValue);
    setDraftIntensityFilter(intensityFilter);

    setIsFilterModalOpen(true);
  };

  
  const applyFilters = function () {
    setStateFilter(draftStateFilter);
    setBikingFilter(draftBikingFilter);
    setEquestrianFilter(draftEquestrianFilter);
    setWheelchairFilter(draftWheelchairFilter);
    setPetsFilter(draftPetsFilter);

    setLengthOp(draftLengthOp);
    setLengthValue(draftLengthValue);
    setEGainOp(draftEGainOp);
    setEGainValue(draftEGainValue);
    setIntensityFilter(draftIntensityFilter);

    setIsFilterModalOpen(false);
  };

  
  const clearFilters = function () {
    const defaultState = "All";

    setStateFilter(defaultState);
    setBikingFilter("None");
    setEquestrianFilter("None");
    setWheelchairFilter("None");
    setPetsFilter("None");
    setLengthOp("None");
    setLengthValue("");
    setEGainOp("None");
    setEGainValue("");
    setIntensityFilter("All");


    setDraftStateFilter(defaultState);
    setDraftBikingFilter("None");
    setDraftEquestrianFilter("None");
    setDraftWheelchairFilter("None");
    setDraftPetsFilter("None");
    setDraftLengthOp("None");
    setDraftLengthValue("");
    setDraftEGainOp("None");
    setDraftEGainValue("");
    setDraftIntensityFilter("All");
  };

  // Dynamic zoom: continuous logarithmic formula, no fixed steps
  // zoom = log2(K / spread), clamped to [6.5, 19]
  // K=820 calibrated so spread≈0.05° → zoom 14, spread≈1° → zoom ~9.7
  var getZoomForSpread = function (spread) {
    if (spread <= 0) return 15;
    var zoom = Math.log2(820 / spread);
    return Math.max(6.5, Math.min(19, zoom));
  };

  // Zoom the map to fit an array of {lat, long} objects with consistent behavior
  var zoomToPoints = function (coords) {
    if (!mapRef.current || coords.length === 0) return;

    var lats = coords.map(function (c) { return c.lat; });
    var longs = coords.map(function (c) { return c.long; });

    var minLat = Math.min.apply(null, lats);
    var maxLat = Math.max.apply(null, lats);
    var minLong = Math.min.apply(null, longs);
    var maxLong = Math.max.apply(null, longs);

    var spreadLat = maxLat - minLat;
    var spreadLong = maxLong - minLong;
    var spread = Math.max(spreadLat, spreadLong);

    var centerLat = (minLat + maxLat) / 2;
    var centerLong = (minLong + maxLong) / 2;

    var zoom = getZoomForSpread(spread);

    mapRef.current.goTo(
      { center: [centerLong, centerLat], zoom: zoom },
      { duration: 600, easing: "ease-in-out" }
    );
  };

  const zoomToTrail = function (t) {
    if (!mapRef.current) return;

    // find all filtered trails with the same projectName that have valid coords
    const siblings = filtered.filter(function (s) {
      return s.projectName === t.projectName && s.lat !== -100 && s.long !== -200;
    });

    setHighlightedProject(t.projectName);

    if (siblings.length === 0) return;

    zoomToPoints(siblings);
  };

  const mapRef = React.useRef(null);
  const graphicsLayerRef = React.useRef(null);

  const filtered = trails.filter(t => {
    let stateMatch = false;
    if (stateFilter === "All") stateMatch = true;
    else if (stateFilter === "TX" && trailData.TX.includes(t)) stateMatch = true;
    else if (stateFilter === "AR" && trailData.AR.includes(t)) stateMatch = true;
    else if (stateFilter === "OK" && trailData.OK.includes(t)) stateMatch = true;
    else if (stateFilter === "KA" && trailData.KA.includes(t)) stateMatch = true;

    if (!stateMatch) return false;

    const matchYesNo = (value, filter) => {
      if (filter === "None") return true;
      if (!value) return false;
      return value.toLowerCase() === filter.toLowerCase();
    };

    if (!matchYesNo(t.isBiking, bikingFilter)) return false;
    if (!matchYesNo(t.isEquestrian, equestrianFilter)) return false;
    if (!matchYesNo(t.isWheelchair, wheelchairFilter)) return false;
    if (!matchYesNo(t.isPet, petsFilter)) return false;

    const matchNumber = (value, op, targetRaw) => {
      if (op === "None" || targetRaw === "") return true;

      const target = Number(targetRaw);
      if (isNaN(target)) return true;

      if (value === -1 || value === null || value === undefined) return false;

      const v = Number(value);

      if (op === "<") return v < target;
      if (op === ">") return v > target;
      if (op === "=") return v === target;

      return true;
    };

    if (!matchNumber(t.length, lengthOp, lengthValue)) return false;
    if (!matchNumber(t.eGain, eGainOp, eGainValue)) return false;

    // intensity filter
    if (intensityFilter !== "All") {
      var tIntensity = (t.intensity || "").toLowerCase();
      var fIntensity = intensityFilter.toLowerCase();
      if (fIntensity === "hard") {
        if (tIntensity !== "hard" && tIntensity !== "difficult" && tIntensity !== "strenuous") return false;
      } else {
        if (tIntensity !== fIntensity) return false;
      }
    }

    // search filter
    if (searchQuery.trim() !== "") {
      var q = searchQuery.trim().toLowerCase();
      var nameMatch = (t.projectName || "").toLowerCase().indexOf(q) !== -1;
      var areaMatch = (t.areaName || "").toLowerCase().indexOf(q) !== -1;
      if (!nameMatch && !areaMatch) return false;
    }

    return true;
  });

  // Reset visible count when filters/sort/search change
  React.useEffect(function () {
    setVisibleCount(30);
  }, [stateFilter, bikingFilter, equestrianFilter, wheelchairFilter, petsFilter,
      lengthOp, lengthValue, eGainOp, eGainValue, intensityFilter, searchQuery,
      sortBy, highlightedProject]);

  // Infinite scroll handler on list panel
  React.useEffect(function () {
    var panel = listPanelRef.current;
    if (!panel) return;
    var onScroll = function () {
      // load more when within 200px of bottom
      if (panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 200) {
        setVisibleCount(function (prev) { return prev + 20; });
      }
    };
    panel.addEventListener("scroll", onScroll);
    return function () { panel.removeEventListener("scroll", onScroll); };
  }, []);

  // Wire up header search input
  React.useEffect(function () {
    var input = document.getElementById("header-search-input");
    if (!input) return;
    var handler = function (e) { setSearchQuery(e.target.value); };
    input.addEventListener("input", handler);
    return function () { input.removeEventListener("input", handler); };
  }, []);

  // Initialize map once
  React.useEffect(() => {
    require(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/layers/GraphicsLayer"
      ],
      function (Map, MapView, Graphic, GraphicsLayer) {
        const map = new Map({ basemap: "topo-vector" });
        const view = new MapView({
          container: "map",
          map: map,
          center: [-96, 35.5],
          zoom: 6
        });

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        graphicsLayerRef.current = graphicsLayer;
        mapRef.current = view;

        // Click a marker → zoom to fit all trails for that project + filter list
        view.on("click", function (event) {
          view.hitTest(event).then(function (response) {
            var hit = response.results.find(function (r) {
              return r.graphic && r.graphic.layer === graphicsLayer;
            });
            if (hit) {
              var name = hit.graphic.popupTemplate.title;
              setHighlightedProject(name);

              // collect all graphics on this layer that share the same project
              var coords = graphicsLayer.graphics.filter(function (g) {
                return g.popupTemplate && g.popupTemplate.title === name;
              }).map(function (g) {
                return { lat: g.geometry.latitude, long: g.geometry.longitude };
              }).toArray();

              zoomToPoints(coords);
            }
          });
        });

        // Initial markers (for the initial filter)
        filtered.forEach(function (t) {
          if (t.lat !== -100 && t.long !== -200) {
            const point = { type: "point", longitude: t.long, latitude: t.lat };
            const symbol = {
              type: "simple-marker",
              color: [45, 95, 45],
              outline: { color: [255, 255, 255], width: 1 }
            };
            const popupTemplate = {
              title: t.projectName,
              content: t.areaName
            };
            const graphic = new Graphic({
              geometry: point,
              symbol: symbol,
              popupTemplate: popupTemplate
            });
            graphicsLayer.add(graphic);
          }
        });
      }
    );
  }, []);

  // update markers whenever filter result or highlight changes
  React.useEffect(() => {
    if (!graphicsLayerRef.current) return;

    graphicsLayerRef.current.removeAll();

    filtered.forEach(function (t) {
      if (t.lat !== -100 && t.long !== -200) {
        require(["esri/Graphic"], function (Graphic) {
          const point = { type: "point", longitude: t.long, latitude: t.lat };
          const isHighlighted = highlightedProject && t.projectName === highlightedProject;
          const symbol = {
            type: "simple-marker",
            color: isHighlighted ? [22, 101, 52] : [45, 95, 45],
            size: isHighlighted ? "14px" : "10px",
            outline: { color: [255, 255, 255], width: isHighlighted ? 2 : 1 }
          };
          const popupTemplate = {
            title: t.projectName,
            content: t.areaName
          };
          const graphic = new Graphic({
            geometry: point,
            symbol: symbol,
            popupTemplate: popupTemplate
          });
          graphicsLayerRef.current.add(graphic);
        });
      }
    });
  }, [filtered, highlightedProject]);

  // If a trail is selected, show the detail "page"
  if (selectedTrail) {
    return React.createElement(TrailDetail, {
      trail: selectedTrail,
      onBack: function () { setSelectedTrail(null); }
    });
  }

  // helper: intensity → badge class
  var badgeClass = function (intensity) {
    if (!intensity) return "badge badge-unknown";
    var lower = intensity.toLowerCase();
    if (lower === "easy") return "badge badge-easy";
    if (lower === "moderate") return "badge badge-moderate";
    if (lower === "hard" || lower === "difficult" || lower === "strenuous") return "badge badge-hard";
    return "badge badge-unknown";
  };

  // visible trail list (applying project highlight filter)
  var displayTrails = filtered.filter(function (t) {
    if (!highlightedProject) return true;
    return t.projectName === highlightedProject;
  });

  // sort
  displayTrails = displayTrails.slice().sort(function (a, b) {
    if (sortBy === "name") return (a.projectName || "").localeCompare(b.projectName || "");
    if (sortBy === "length") return (b.length || 0) - (a.length || 0);
    if (sortBy === "elevation") return (b.eGain || 0) - (a.eGain || 0);
    return 0;
  });

  // slice for infinite scroll
  var totalTrails = displayTrails.length;
  var visibleTrails = displayTrails.slice(0, visibleCount);

  // check if any advanced filters are active (for the "All filters" chip)
  var hasAdvancedFilters = bikingFilter !== "None" || equestrianFilter !== "None" ||
    wheelchairFilter !== "None" || petsFilter !== "None" ||
    lengthOp !== "None" || eGainOp !== "None";

  // Otherwise show the directory view
  return React.createElement("div", null,

    // Modal (floats above everything)
    isFilterModalOpen && React.createElement(
      "div",
      { className: "modal-backdrop" },
      React.createElement(
        "div",
        { className: "modal-panel" },

        React.createElement("h2", null, "Filters"),

        React.createElement("div", { className: "modal-filter-row" },
          React.createElement("label", null, "State"),
          React.createElement("select", {
            value: draftStateFilter,
            onChange: function (e) { setDraftStateFilter(e.target.value); }
          },
            React.createElement("option", null, "All"),
            React.createElement("option", null, "TX"),
            React.createElement("option", null, "AR"),
            React.createElement("option", null, "OK"),
            React.createElement("option", null, "KA")
          )
        ),

        React.createElement("div", { className: "modal-filter-row" },
          React.createElement("label", null, "Difficulty"),
          React.createElement("select", {
            value: draftIntensityFilter,
            onChange: function (e) { setDraftIntensityFilter(e.target.value); }
          },
            React.createElement("option", { value: "All" }, "All"),
            React.createElement("option", { value: "Easy" }, "Easy"),
            React.createElement("option", { value: "Moderate" }, "Moderate"),
            React.createElement("option", { value: "Hard" }, "Hard")
          )
        ),

        React.createElement("div", { className: "modal-filter-row" },
          React.createElement("label", null, "Biking"),
          React.createElement("select", {
            value: draftBikingFilter,
            onChange: function (e) { setDraftBikingFilter(e.target.value); }
          },
            React.createElement("option", null, "None"),
            React.createElement("option", null, "Yes"),
            React.createElement("option", null, "No")
          )
        ),

        React.createElement("div", { className: "modal-filter-row" },
          React.createElement("label", null, "Equestrian"),
          React.createElement("select", {
            value: draftEquestrianFilter,
            onChange: function (e) { setDraftEquestrianFilter(e.target.value); }
          },
            React.createElement("option", null, "None"),
            React.createElement("option", null, "Yes"),
            React.createElement("option", null, "No")
          )
        ),

        React.createElement("div", { className: "modal-filter-row" },
          React.createElement("label", null, "Wheelchair"),
          React.createElement("select", {
            value: draftWheelchairFilter,
            onChange: function (e) { setDraftWheelchairFilter(e.target.value); }
          },
            React.createElement("option", null, "None"),
            React.createElement("option", null, "Yes"),
            React.createElement("option", null, "No")
          )
        ),

        React.createElement("div", { className: "modal-filter-row" },
          React.createElement("label", null, "Pets allowed"),
          React.createElement("select", {
            value: draftPetsFilter,
            onChange: function (e) { setDraftPetsFilter(e.target.value); }
          },
            React.createElement("option", null, "None"),
            React.createElement("option", null, "Yes"),
            React.createElement("option", null, "No")
          )
        ),

        React.createElement("div", { className: "modal-filter-row" },
          React.createElement("label", null, "Trail length (miles)"),
          React.createElement("div", null,
            React.createElement("select", {
              value: draftLengthOp,
              onChange: function (e) { setDraftLengthOp(e.target.value); }
            },
              React.createElement("option", { value: "None" }, "None"),
              React.createElement("option", { value: "<" }, "Less than"),
              React.createElement("option", { value: ">" }, "Greater than"),
              React.createElement("option", { value: "=" }, "Equal to")
            ),
            React.createElement("input", {
              type: "number",
              value: draftLengthValue,
              onChange: function (e) { setDraftLengthValue(e.target.value); },
              placeholder: "miles",
              min: "0",
              style: { width: "80px", marginLeft: "6px" }
            })
          )
        ),

        React.createElement("div", { className: "modal-filter-row" },
          React.createElement("label", null, "Elevation gain (ft)"),
          React.createElement("div", null,
            React.createElement("select", {
              value: draftEGainOp,
              onChange: function (e) { setDraftEGainOp(e.target.value); }
            },
              React.createElement("option", { value: "None" }, "None"),
              React.createElement("option", { value: "<" }, "Less than"),
              React.createElement("option", { value: ">" }, "Greater than"),
              React.createElement("option", { value: "=" }, "Equal to")
            ),
            React.createElement("input", {
              type: "number",
              value: draftEGainValue,
              onChange: function (e) { setDraftEGainValue(e.target.value); },
              placeholder: "ft",
              min: "0",
              style: { width: "80px", marginLeft: "6px" }
            })
          )
        ),

        React.createElement("div", { className: "modal-actions" },
          React.createElement("button", {
            type: "button",
            className: "danger",
            onClick: clearFilters
          }, "Clear"),
          React.createElement("button", {
            type: "button",
            onClick: function () { setIsFilterModalOpen(false); }
          }, "Cancel"),
          React.createElement("button", {
            type: "button",
            className: "primary",
            onClick: applyFilters
          }, "Apply")
        )
      )
    ),

    // ── Side-by-side layout ──
    React.createElement("div", { className: "app-layout" },

      // LEFT: list panel
      React.createElement("div", { className: "list-panel", ref: listPanelRef },

        // Panel heading
        React.createElement("div", { className: "panel-title" }, "Explore trails"),

        // Filter chips row
        React.createElement("div", { className: "filter-chips" },
          // State chip
          React.createElement("select", {
            className: "filter-chip" + (stateFilter !== "All" ? " active" : ""),
            value: stateFilter,
            onChange: function (e) { setStateFilter(e.target.value); }
          },
            React.createElement("option", { value: "All" }, "All States"),
            React.createElement("option", { value: "TX" }, "Texas"),
            React.createElement("option", { value: "AR" }, "Arkansas"),
            React.createElement("option", { value: "OK" }, "Oklahoma"),
            React.createElement("option", { value: "KA" }, "Kansas")
          ),

          // Difficulty chip
          React.createElement("select", {
            className: "filter-chip" + (intensityFilter !== "All" ? " active" : ""),
            value: intensityFilter,
            onChange: function (e) { setIntensityFilter(e.target.value); }
          },
            React.createElement("option", { value: "All" }, "Difficulty"),
            React.createElement("option", { value: "Easy" }, "Easy"),
            React.createElement("option", { value: "Moderate" }, "Moderate"),
            React.createElement("option", { value: "Hard" }, "Hard")
          ),

          // All filters button
          React.createElement("button", {
            type: "button",
            className: "filter-chip-btn" + (hasAdvancedFilters ? " active" : ""),
            onClick: openFilters
          }, "\u2699 All filters")
        ),

        // "Show all" bar when a project is focused
        highlightedProject && React.createElement(
          "div",
          { className: "show-all-bar" },
          React.createElement("span", null,
            "Showing: ",
            React.createElement("strong", null, highlightedProject)
          ),
          React.createElement("button", {
            type: "button",
            onClick: function () {
              setHighlightedProject(null);
              if (mapRef.current) {
                mapRef.current.goTo(
                  { center: [-96, 35.5], zoom: 6 },
                  { duration: 800, easing: "ease-in-out" }
                );
              }
            }
          }, "Show all")
        ),

        // Trail count + sort row
        React.createElement("div", { className: "trail-meta-row" },
          React.createElement("div", { className: "trail-count" },
            totalTrails + " trail" + (totalTrails !== 1 ? "s" : "")
          ),
          React.createElement("div", { className: "trail-sort" },
            React.createElement("select", {
              value: sortBy,
              onChange: function (e) { setSortBy(e.target.value); }
            },
              React.createElement("option", { value: "name" }, "Name"),
              React.createElement("option", { value: "length" }, "Length"),
              React.createElement("option", { value: "elevation" }, "Elevation")
            )
          )
        ),

        // ── Trail cards ──
        visibleTrails.map(function (t, i) {
          var isHL = highlightedProject && t.projectName === highlightedProject;
          var intensityLabel = t.intensity || "Unknown";

          // build access tags
          var tags = [];
          if (t.isWalking === "Yes") tags.push({ label: "Walking", yes: true });
          if (t.isBiking === "Yes") tags.push({ label: "Biking", yes: true });
          if (t.isEquestrian === "Yes") tags.push({ label: "Equestrian", yes: true });
          if (t.isWheelchair === "Yes") tags.push({ label: "Wheelchair", yes: true });
          if (t.isPet === "Yes") tags.push({ label: "Pets", yes: true });

          return React.createElement(
            "div",
            {
              key: i,
              className: "trail-card" + (isHL ? " highlighted" : ""),
              onClick: function () { zoomToTrail(t); }
            },

            // Title
            React.createElement("h2", null, t.projectName || "Unnamed Trail"),

            // Area
            React.createElement("div", { className: "card-area" }, t.areaName || ""),

            // Stats row: badge + length + elev
            React.createElement("div", { className: "card-stats" },
              React.createElement("span", { className: badgeClass(t.intensity) }, intensityLabel),
              React.createElement("span", { className: "stat-sep" }, "\u00b7"),
              React.createElement("span", null, t.length !== -1 ? t.length + " mi" : "-- mi"),
              React.createElement("span", { className: "stat-sep" }, "\u00b7"),
              React.createElement("span", null, t.eGain !== -1 ? t.eGain + " ft gain" : "-- ft gain")
            ),

            // Access tags
            tags.length > 0 && React.createElement("div", { className: "card-tags" },
              tags.map(function (tag, j) {
                return React.createElement("span", {
                  key: j,
                  className: "card-tag" + (tag.yes ? " yes" : "")
                }, tag.label);
              })
            ),

            // Bottom row: link + View Details
            React.createElement("div", { className: "card-bottom" },
              t.infoLink
                ? React.createElement("a", {
                    href: t.infoLink,
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: function (e) { e.stopPropagation(); }
                  }, "Trail info")
                : React.createElement("span", null),
              React.createElement("button", {
                className: "view-details-btn",
                onClick: function (e) {
                  e.stopPropagation();
                  setSelectedTrail(t);
                }
              }, "View Details \u2192")
            )
          );
        }),

        // Loading indicator / end of list
        visibleCount < totalTrails
          ? React.createElement("div", {
              style: { textAlign: "center", padding: "12px", color: "#6b7280", fontSize: "0.8rem" }
            }, "Scroll for more...")
          : totalTrails > 0 && React.createElement("div", {
              style: { textAlign: "center", padding: "12px", color: "#d1d5db", fontSize: "0.75rem" }
            }, "End of list")
      ),

      // RIGHT: map
      React.createElement("div", { className: "map-layer" },
        React.createElement("div", { id: "map" })
      )
    )
  );
}

// Use ReactDOM.render for UMD React
ReactDOM.render(
  React.createElement(TrailDirectory, null),
  document.getElementById("root")
);
