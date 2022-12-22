// Sutan Mufti (2022)
// references:
// Cuthbert Chow & Jim Valladingham
// https://towardsdatascience.com/how-i-created-an-interactive-scrolling-visualisation-with-d3-js-and-how-you-can-too-e116372e2c73
// https://vallandingham.me/scroller.html

var map = L.map('map',{
    zoomControl: false
}).setView([51.505404,-0.118658], 9,);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    
}).addTo(map);

// console.log(window.scrollY)


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.airport) {
        layer.bindPopup(feature.properties.airport).openPopup();
        // console.log(feature.properties.airport )
        if (feature.properties.airport === 'Heathrow'){
            // console.log("opening popup!")
            layer.openPopup();
        }
        
        
    }
}
function popupAssign(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.name) {
        layer.bindTooltip(feature.properties.name).openTooltip();
        // console.log(feature.properties.airport )
        
        
        
    }
}
const airportLayer = L.geoJSON(LondonAirports,{
    onEachFeature: onEachFeature
}).addTo(map);
// const attractions = L.geoJSON(attractions_geojson,{
//     onEachFeature: popupAssign
// }).addTo(map);

var attractions = L.geoJSON(null, {
    pointToLayer: function(feature,latlng){
      label = feature.properties.name // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
      return new L.Marker(latlng).bindTooltip(label).openTooltip();
      }
    });
    attractions.addData(attractions_geojson);



function popupairport (){
    airportLayer.eachLayer((layer)=>{
        // console.log(layer.feature.properties)
        if (layer.feature.properties.airport === 'Heathrow'){
    
            layer.openPopup()
        }
    })
}
popupairport()
airportLayer.eachLayer(function(layer){
    
});
const elizabethLine = L.geoJSON(elizabethLine_geojson)
const picadillyStations = L.geoJSON(picadillyStation_geojson, {
    onEachFeature: (feature, layer) =>{
        // does this feature have a property named popupContent?
        if (feature.properties && feature.properties.Name) {
            layer.bindPopup(feature.properties.Name);            
        
        }
    }
})
const paddington = L.marker([51.517886116368174, -0.17892992151450926,]);
paddington.bindTooltip('Paddington Station')
            
const picadillyLine = L.geoJSON(picadillyline_geojson)


var elizaebthLine_st = L.geoJSON(null, {
    pointToLayer: function(feature,latlng){
      label = String(feature.properties.name) // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
      return new L.CircleMarker(latlng, {
        radius: 5,
        color: '#FF0000',
      }).setStyle({color: 'blue'});
      }
    });
  elizaebthLine_st.addData(elizabethLineSt_geojson);

// console.log(message)


let idx = 0
let sectionsArray = []
d3.selectAll("section").attr("id", ()=>{
    const nowId = idx 
    idx = idx + 1
    retval = `section-${nowId}`
    sectionsArray.push(retval)
    return retval
})

let sections = d3.selectAll('.step')
sectionPositions = [];
var startPos;
sections.each(function(d,i) {
    var top = this.getBoundingClientRect().top;

    if(i === 0) {
    startPos = top;
    }
    sectionPositions.push(top - startPos);
});
// console.log("section positions:",sectionPositions)

d3.selectAll("section").style("opacity", "0.2");

d3.selectAll("section")
      .on("mouseover", function(){
        //   d3.select(this)
        //     .style("background-color", "orange");

          // Get current event info
        //   console.log(d3.event);
        //   console.log("the id:",sectionsArray.indexOf(this.id))

          const yposition = sectionPositions[sectionsArray.indexOf(this.id)]
          // Get x & y co-ordinates
            //   console.log(d3.pointer(this));


            
      })
      .on("mouseout", function(){
          
    })

let activeIndex = 0
let activeSection = 'section-0'

$(`#${activeSection}`).css('opacity', '1');
d3.select(`#graph`)
            
            .style("visibility", "hidden");
let previousSection

let mapVisible = true
let cardVisible = false

const positionMap = (sectionIndex) =>{
    const option = {
        duration: 0.25
    }
    if (sectionIndex === 0){
        map.flyTo([51.505404,-0.118658], 9,)
        airportLayer.addTo(map)
        elizaebthLine_st.remove()
        popupairport()
        attractions.remove()
    }
    if (sectionIndex === 1){

        map.flyTo([51.509687,-0.115464], 13,)
        

        attractions.addTo(map)
        attractions.eachLayer((layer)=>{
                layer.openTooltip()
            
        })
    
    }
    if (sectionIndex === 2){
        map.flyTo([51.468212,-0.460321], 11, )

        elizabethLine.remove()
        paddington.remove()
        popupairport()
        elizaebthLine_st.remove()
        attractions.eachLayer((layer)=>{
            layer.closeTooltip()
        
    })
        
        
    }
    if (sectionIndex === 3){
        if (!mapVisible){
            mapVisible = true
            d3.select(`#map`)
            .transition()
            .style('opacity', '1');
        }
        map.flyTo([51.512392, -0.303943], 12, )
        elizabethLine.addTo(map)
        elizaebthLine_st.addTo(map)

        


        paddington.addTo(map)
        paddington.openTooltip()
        airportLayer.addTo(map)
        picadillyLine.remove()

        popupairport()
        
        
    }
    
    if (sectionIndex === 4){
        if (!mapVisible){
            mapVisible = true
            d3.select(`#map`)
            .transition()
            .style('opacity', '1');
        }
        map.flyTo([51.514451, -0.211709], 11, )
        picadillyLine.addTo(map)
        elizabethLine.remove()
        elizaebthLine_st.remove()
        attractions.addTo(map)
        picadillyStations.remove()

    }

    picadillyStations

    if (sectionIndex === 5){
        if (!mapVisible){
            mapVisible = true
            d3.select(`#map`)
            .transition()
            .style('visibility', 'visible');

            d3.select(`#graph`)
                .transition()
                .style("opacity", "1")
                .style("visibility", "hidden");
                $("#mapcontainer").fadeIn()
        cardVisible = false;
        }
       
        airportLayer.addTo(map)
        map.flyTo([ 51.511347,-0.123023], 12, )
        picadillyStations.addTo(map)
        picadillyLine.addTo(map)
        attractions.remove()
        elizabethLine.addTo(map)
        popupairport()
        $("#graphcontainer").fadeOut()

        $('#mapcontainer').insertAfter($("#graphcontainer"));

        



    }
    
    if (sectionIndex > 5 && mapVisible){
        d3.select(`#map`)
            .transition()
            .style('visibility', 'hidden');
        mapVisible = false

        d3.select(`#graph`)
                .transition()
                .style("opacity", "1")
                .style("visibility", "visible")
                .transition()
                // .insertAfter("#mapcontainer");
        cardVisible = true;

    $("#graphcontainer").fadeIn()
    $("#mapcontainer").fadeOut()
     $('#graphcontainer').insertAfter($("#mapcontainer"));

    }

}
positionMap(activeSection)

const trackPosition = ()=>{
    let pos = window.pageYOffset - 140;
    let sectionIndex = d3.bisect(sectionPositions, pos);
    sectionIndex = Math.min(sections.size() - 1, sectionIndex);
    activeIndex = sectionIndex
    // console.log(sectionIndex)

    if (sectionsArray[sectionIndex] !== activeSection){
        previousSection = activeSection
        activeSection = sectionsArray[sectionIndex] 
        // console.log("active section:",activeSection)
        // console.log("previous section:",previousSection)

        d3.select(`#${activeSection}`)
            .transition()
            .style("opacity", "1");
        d3.select(`#${previousSection}`)
            .transition()
            .style('opacity', '0.2')
            ;

        positionMap(sectionIndex)

        // if (sectionIndex > 2){
        //     d3.select(`#graph`)
        //         .transition()
        //         .style("opacity", "1");
        //     d3.select(`#map`)
        //         .transition()
        //         .style("opacity", "0");

        // } else if (sectionIndex <= 2){
        //     d3.select(`#graph`)
        //         .transition()
        //         .style("opacity", "0");
        //     d3.select(`#map`)
        //         .transition()
        //         .style("opacity", "1");
        // }


        // $(`#${activeSection}`).css('opacity', '1');
        // $(`#${previousSection}`).css('opacity', '0.2');
    } 
}
d3.select(window)
    .on("scroll.scroller", trackPosition);