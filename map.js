// jQuery Tooltip Start //

$description = $(".description");

  $('.enabled').hover(function() {
    
    $(this).attr("class", "enabled");
    $description.addClass('active');
    $description.html($(this).attr('name'));
  }, function() {
    $description.removeClass('active');
  });

$(document).on('mousemove', function(e){
  
  $description.css({
    left:  e.pageX,
    top:   e.pageY - 70
  });
});

// jQuery Tooltip End //

// Zoom + Pan to State Start //

var stateSelect = document.getElementById("states-dropdown");
var transformMatrix = [1, 0, 0, 1, 0, 0];
var svg = document.getElementById('svg');
var viewbox = svg.getAttributeNS(null, "viewBox").split(" ");
var centerX = parseFloat(viewbox[2]) / 2;
var centerY = parseFloat(viewbox[3]) / 2;
var matrixGroup = svg.getElementById("matrix-group");
var isZoomed = false;
var isPanned = false;
var buttonWrapper = document.querySelector('.refreshDiv');
var zoomedState = '';
var clickedState = '';
var states = document.querySelectorAll('.state path');

function updateContent() {
    if(zoomedState === "ALABAMA") {
                alabamaFunctionMobile('ALABAMA');
                alabamaFunction('ALABAMA');
            } 
            else if(zoomedState === "ALASKA") {
                alaskaFunctionMobile('ALASKA');
                alaskaFunction('ALASKA');
            }

            else if(zoomedState === "ARIZONA") {
                arizonaFunctionMobile('ARIZONA');
                arizonaFunction('ARIZONA');
            }

            else if(zoomedState === "ARKANSAS") {
                arkansasFunctionMobile('ARKANSAS');
                arkansasFunction('ARKANSAS');
            }

            else if(zoomedState === "CALIFORNIA") {
                californiaFunctionMobile('CALIFORNIA');
                californiaFunction('CALIFORNIA');
            }

            else if(zoomedState === "COLORADO") {
                coloradoFunctionMobile('COLORADO');
                coloradoFunction('COLORADO');
            }

            else if(zoomedState === "CONNECTICUT") {
                connecticutFunctionMobile('CONNECTICUT');
                connecticutFunction('CONNECTICUT');
            }

            else if(zoomedState === "DELAWARE") {
                delawareFunctionMobile('DELAWARE');
                delawareFunction('DELAWARE');
            }

            else if(zoomedState === "FLORIDA") {
                floridaFunctionMobile('FLORIDA');
                floridaFunction('FLORIDA');
            }

            else if(zoomedState === "GEORGIA") {
                georgiaFunctionMobile('GEORGIA');
                georgiaFunction('GEORGIA');
            }

            else if(zoomedState === "HAWAII") {
                hawaiiFunctionMobile('HAWAII');
                hawaiiFunction('HAWAII');
            }

            else if(zoomedState === "IDAHO") {
                idahoFunctionMobile('IDAHO');
                idahoFunction('IDAHO');
            }

            else if(zoomedState === "ILLINOIS") {
                illinoisFunctionMobile('ILLINOIS');
                illinoisFunction('ILLINOIS');
            }

            else if(zoomedState === "INDIANA") {
                indianaFunctionMobile('INDIANA');
                indianaFunction('INDIANA');
            }

            else if(zoomedState === "IOWA") {
                iowaFunctionMobile('IOWA');
                iowaFunction('IOWA');
            }

            else if(zoomedState === "KANSAS") {
                kansasFunctionMobile('KANSAS');
                kansasFunction('KANSAS');
            }

            else if(zoomedState === "KENTUCKY") {
                kentuckyFunctionMobile('KENTUCKY');
                kentuckyFunction('KENTUCKY');
            }

            else if(zoomedState === "LOUISIANA") {
                louisianaFunctionMobile('LOUISIANA');
                louisianaFunction('LOUISIANA');
            }

            else if(zoomedState === "MAINE") {
                maineFunctionMobile('MAINE');
                maineFunction('MAINE');
            }

            else if(zoomedState === "MARYLAND") {
                marylandFunctionMobile('MARYLAND');
                marylandFunction('MARYLAND');
            }

            else if(zoomedState === "MASSACHUSETTS") {
                massachusettsFunctionMobile('MASSACHUSETTS');
                massachusettsFunction('MASSACHUSETTS');
            }

            else if(zoomedState === "MICHIGAN") {
                michiganFunctionMobile('MICHIGAN');
                michiganFunction('MICHIGAN');
            }

            else if(zoomedState === "MINNESOTA") {
                minnesotaFunctionMobile('MINNESOTA');
                minnesotaFunction('MINNESOTA');
            }

            else if(zoomedState === "MISSISSIPPI") {
                mississippiFunctionMobile('MISSISSIPPI');
                mississippiFunction('MISSISSIPPI');
            }

            else if(zoomedState === "MISSOURI") {
                missouriFunctionMobile('MISSOURI');
                missouriFunction('MISSOURI');
            }

            else if(zoomedState === "MONTANA") {
                montanaFunctionMobile('MONTANA');
                montanaFunction('MONTANA');
            }

            else if(zoomedState === "NEBRASKA") {
                nebraskaFunctionMobile('NEBRASKA');
                nebraskaFunction('NEBRASKA');
            }

            else if(zoomedState === "NEVADA") {
                nevadaFunctionMobile('NEVADA');
                nevadaFunction('NEVADA');
            }

            else if(zoomedState === "NEWHAMPSHIRE") {
                newhampshireFunctionMobile('NEWHAMPSHIRE');
                newhampshireFunction('NEWHAMPSHIRE');
            }

            else if(zoomedState === "NEWJERSEY") {
                newjerseyFunctionMobile('NEWJERSEY');
                newjerseyFunction('NEWJERSEY');
            }

            else if(zoomedState === "NEWMEXICO") {
                newmexicoFunctionMobile('NEWMEXICO');
                newmexicoFunction('NEWMEXICO');
            }

            else if(zoomedState === "NEWYORK") {
                newyorkFunctionMobile('NEWYORK');
                newyorkFunction('NEWYORK');
            }

            else if(zoomedState === "NORTHCAROLINA") {
                northcarolinaFunctionMobile('NORTHCAROLINA');
                northcarolinaFunction('NORTHCAROLINA');
            }

            else if(zoomedState === "NORTHDAKOTA") {
                northdakotaFunctionMobile('NORTHDAKOTA');
                northdakotaFunction('NORTHDAKOTA');
            }

            else if(zoomedState === "OHIO") {
                ohioFunctionMobile('OHIO');
                ohioFunction('OHIO');
            }

            else if(zoomedState === "OKLAHOMA") {
                oklahomaFunctionMobile('OKLAHOMA');
                oklahomaFunction('OKLAHOMA');
            }

            else if(zoomedState === "OREGON") {
                oregonFunctionMobile('OREGON');
                oregonFunction('OREGON');
            }

            else if(zoomedState === "PENNSYLVANIA") {
                pennsylvaniaFunctionMobile('PENNSYLVANIA');
                pennsylvaniaFunction('PENNSYLVANIA');
            }

            else if(zoomedState === "RHODEISLAND") {
                rhodeislandFunctionMobile('RHODEISLAND');
                rhodeislandFunction('RHODEISLAND');
            }

            else if(zoomedState === "SOUTHCAROLINA") {
                southcarolinaFunctionMobile('SOUTHCAROLINA');
                southcarolinaFunction('SOUTHCAROLINA');
            }

            else if(zoomedState === "SOUTHDAKOTA") {
                southdakotaFunctionMobile('SOUTHDAKOTA');
                southdakotaFunction('SOUTHDAKOTA');
            }

            else if(zoomedState === "TENNESSEE") {
                tennesseeFunctionMobile('TENNESSEE');
                tennesseeFunction('TENNESSEE');
            }

            else if(zoomedState === "TEXAS") {
                texasFunctionMobile('TEXAS');
                texasFunction('TEXAS');
            }

            else if(zoomedState === "UTAH") {
                utahFunctionMobile('UTAH');
                utahFunction('UTAH');
            }

            else if(zoomedState === "VERMONT") {
                vermontFunctionMobile('VERMONT');
                vermontFunction('VERMONT');
            }

            else if(zoomedState === "VIRGINIA") {
                virginiaFunctionMobile('VIRGINIA');
                virginiaFunction('VIRGINIA');
            }

            else if(zoomedState === "WASHINGTON") {
                washingtonFunctionMobile('WASHINGTON');
                washingtonFunction('WASHINGTON');
            }

            else if(zoomedState === "WESTVIRGINIA") {
                westvirginiaFunctionMobile('WESTVIRGINIA');
                westvirginiaFunction('WESTVIRGINIA');
            }

            else if(zoomedState === "WISCONSIN") {
                wisconsinFunctionMobile('WISCONSIN');
                wisconsinFunction('WISCONSIN');
            }

            else if(zoomedState === "WYOMING") {
                wyomingFunctionMobile('WYOMING');
                wyomingFunction('WYOMING');
            } else {
                refreshPage();
        }
}

states.forEach(function(state) {
    state.addEventListener('mouseleave', function() {
        updateContent();
    });
});

function zoomIn(scale) {
    for (var i = 0; i < 4; i++) {
        transformMatrix[i] *= scale;
    }
    transformMatrix[4] += (1 - scale) * centerX;
    transformMatrix[5] += (1 - scale) * centerY;        
    var newMatrix = "matrix(" +  transformMatrix.join(' ') + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);
    buttonWrapper.classList.remove('hide');
} 

function zoom(scale) {
    if (zoomedState != clickedState && isZoomed != false) {
        var updatedZoomedState = clickedState;
        refreshPage();
        zoomIn(scale);
        zoomedState = updatedZoomedState;
        isZoomed = true;
        document.getElementById(zoomedState).style = 'fill: #4d79ff;';
    } else if (isZoomed === false) {
        zoomIn(scale);
        isZoomed = true;
    }
  }

function panMap(dx, dy) {
    transformMatrix[4] += dx;
    transformMatrix[5] += dy;
    var newMatrix = "matrix(" +  transformMatrix.join(' ') + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);
};

function pan(dx, dy) {   
    if (zoomedState != clickedState && isPanned != false) {
        refreshPage();
        panMap(dx, dy);
        isPanned = true;
    } else if (isPanned === false) {
        panMap(dx, dy);
        isPanned = true;
    }
  }

// Zoom + Pan to State End //

// Reset Full Map Start //

function refreshPage() {
    if (zoomedState != '') {
        document.getElementById(zoomedState).style = 'fill: #b3b3b3;';
    }
    transformMatrix = [1, 0, 0, 1, 0, 0]
    matrixGroup.setAttributeNS(null, "transform", "matrix(" +  transformMatrix.join(' ') + ")");
    isZoomed = false;
    isPanned = false;
    zoomedState = '';
    clickedState = '';
    buttonWrapper.classList.add('hide');
    document.getElementById("mobile-heading-1").innerHTML = "Who we Endorse";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    document.getElementById("bubble-heading").innerHTML = `Who We Endorse`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
    stateSelect.selectedIndex = 0;
};

// Reset Full Map End //

// Scroll Zoom Start //

// function zoomOut(event) {
  
//     scale += event.deltaY * -0.0005;
  
//     // Restrict scale
//     scale = Math.min(Math.max(.2, scale), 4);
  
//     // Apply scale transform
//     el.style.transform = `scale(${scale})`;
//   }
  
//   let scale = .05;
//   const el = document.querySelector('svg');
//   el.onwheel = zoomOut;

// Scroll Zoom End //

// Mobile Drop Down Menu Start //

stateSelect.onchange = function() {
    if (this.options[this.selectedIndex].value == 'clear') {
        refreshPage();
    }
    if(this.value === "alabama") {
        alabamaFunctionMobile('ALABAMA');
        zoom(3);
        pan(-500,-400);
        zoomedState = 'ALABAMA';
        alabamaFunctionMobile('ALABAMA');
    } 
    else if(this.value === "alaska") {
        alaskaFunctionMobile('ALASKA');
        zoom(2.75);
        pan(850,-550);
        zoomedState = 'ALASKA';

alaskaFunctionMobile('ALASKA');    }

    else if(this.value === "arizona") {
        arizonaFunctionMobile('ARIZONA');
        zoom(3);
        pan(800,-200);
        zoomedState = 'ARIZONA';
        arizonaFunctionMobile('ARIZONA');
    }

    else if(this.value === "arkansas") {
        arkansasFunctionMobile('ARKANSAS');
        zoom(3);
        pan(-175,-250);
        zoomedState = 'ARKANSAS';
        arkansasFunctionMobile('ARKANSAS');
    }

    else if(this.value === "california") {
        californiaFunctionMobile('CALIFORNIA');
        zoom(2.4);
        pan(650,75);
        zoomedState = 'CALIFORNIA';
        californiaFunctionMobile('CALIFORNIA');
    }

    else if(this.value === "colorado") {
        coloradoFunctionMobile('COLORADO');
        zoom(3);
        pan(465,65);
        zoomedState = 'COLORADO';
        coloradoFunctionMobile('COLORADO');
    }

    else if(this.value === "connecticut") {
        connecticutFunctionMobile('CONNECTICUT');
        zoom(3.5);
        pan(-1025,375);
        zoomedState = 'CONNECTICUT';
        connecticutFunctionMobile('CONNECTICUT');
    }

    else if(this.value === "delaware") {
        delawareFunctionMobile('DELAWARE');
        zoom(3.5);
        pan(-950,150);
        zoomedState = 'DELAWARE';
        delawareFunctionMobile('DELAWARE');
    }

    else if(this.value === "florida") {
        floridaFunctionMobile('FLORIDA');
        zoom(2.5);
        pan(-475,-450);
        zoomedState = 'FLORIDA';
        floridaFunctionMobile('FLORIDA');
    }

    else if(this.value === "georgia") {
        georgiaFunctionMobile('GEORGIA');
        zoom(3);
        pan(-600,-350);
        zoomedState = 'GEORGIA';
        georgiaFunctionMobile('GEORGIA');
    }

    else if(this.value === "hawaii") {
        hawaiiFunctionMobile('HAWAII');
        zoom(3);
        pan(525,-600);
        zoomedState = 'HAWAII';
        hawaiiFunctionMobile('HAWAII');
    }

    else if(this.value === "idaho") {
        idahoFunctionMobile('IDAHO');
        zoom(2.7);
        pan(750,480);
        zoomedState = 'IDAHO';
        idahoFunctionMobile('IDAHO');
    }

    else if(this.value === "illinois") {
        illinoisFunctionMobile('ILLINOIS');
        zoom(3);
        pan(-375,150);
        zoomedState = 'ILLINOIS';
        illinoisFunctionMobile('ILLINOIS');
    }

    else if(this.value === "indiana") {
        indianaFunctionMobile('INDIANA');
        zoom(3);
        pan(-475,125);
        zoomedState = 'INDIANA';
        indianaFunctionMobile('INDIANA');
    }

    else if(this.value === "iowa") {
        iowaFunctionMobile('IOWA');
        zoom(3);
        pan(-125,225);
        zoomedState = 'IOWA';
        iowaFunctionMobile('IOWA');
    }

    else if(this.value === "kansas") {
        kansasFunctionMobile('KANSAS');
        zoom(3);
        pan(75,0);
        zoomedState = 'KANSAS';
        kansasFunctionMobile('KANSAS');
    }

    else if(this.value === "kentucky") {
        kentuckyFunctionMobile('KENTUCKY');
        zoom(3);
        pan(-500,0);
        zoomedState = 'KENTUCKY';
        kentuckyFunctionMobile('KENTUCKY');
    }

    else if(this.value === "louisiana") {
        louisianaFunctionMobile('LOUISIANA');
        zoom(2.8);
        pan(-275,-350);
        zoomedState = 'LOUISIANA';
        louisianaFunctionMobile('LOUISIANA');
    }

    else if(this.value === "maine") {
        maineFunctionMobile('MAINE');
        zoom(2.9);
        pan(-850,500);
        zoomedState = 'MAINE';
        maineFunctionMobile('MAINE');
    }

    else if(this.value === "maryland") {
        marylandFunctionMobile('MARYLAND');
        zoom(3.2);
        pan(-700,100);
        zoomedState = 'MARYLAND';
        marylandFunctionMobile('MARYLAND');
    }

    else if(this.value === "massachusetts") {
        massachusettsFunctionMobile('MASSACHUSETTS');
        zoom(3);
        pan(-825,450);
        zoomedState = 'MASSACHUSETTS';
        massachusettsFunctionMobile('MASSACHUSETTS');
    }

    else if(this.value === "michigan") {
        michiganFunctionMobile('MICHIGAN');
        zoom(3);
        pan(-500,400);
        zoomedState = 'MICHIGAN';
        michiganFunctionMobile('MICHIGAN');
    }

    else if(this.value === "minnesota") {
        minnesotaFunctionMobile('MINNESOTA');
        zoom(2.9);
        pan(-100,475);
        zoomedState = 'MINNESOTA';
        minnesotaFunctionMobile('MINNESOTA');
    }

    else if(this.value === "mississippi") {
        mississippiFunctionMobile('MISSISSIPPI');
        zoom(3);
        pan(-400,-350);
        zoomedState = 'MISSISSIPPI';
        mississippiFunctionMobile('MISSISSIPPI');
    }

    else if(this.value === "missouri") {
        missouriFunctionMobile('MISSOURI');
        zoom(3);
        pan(-200,0);
        zoomedState = 'MISSOURI';
        missouriFunctionMobile('MISSOURI');
    }

    else if(this.value === "montana") {
        montanaFunctionMobile('MONTANA');
        zoom(2.8);
        pan(550,500);
        zoomedState = 'MONTANA';
        montanaFunctionMobile('MONTANA');
    }

    else if(this.value === "nebraska") {
        nebraskaFunctionMobile('NEBRASKA');
        zoom(3);
        pan(150,200);
        zoomedState = 'NEBRASKA';
        nebraskaFunctionMobile('NEBRASKA');
    }

    else if(this.value === "nevada") {
        nevadaFunctionMobile('NEVADA');
        zoom(2.5);
        pan(700,100);
        zoomedState = 'NEVADA';
        nevadaFunctionMobile('NEVADA');
    }

    else if(this.value === "newhampshire") {
        newhampshireFunctionMobile('NEWHAMPSHIRE');
        zoom(3);
        pan(-850,500);
        zoomedState = 'NEWHAMPSHIRE';
        newhampshireFunctionMobile('NEWHAMPSHIRE');
    }

    else if(this.value === "newjersey") {
        newjerseyFunctionMobile('NEWJERSEY');
        zoom(3);
        pan(-900,250);
        zoomedState = 'NEWJERSEY';
        newjerseyFunctionMobile('NEWJERSEY');
    }

    else if(this.value === "newmexico") {
        newmexicoFunctionMobile('NEWMEXICO');
        zoom(2.7);
        pan(450,-200);
        zoomedState = 'NEWMEXICO';
        newmexicoFunctionMobile('NEWMEXICO');
    }

    else if(this.value === "newyork") {
        newyorkFunctionMobile('NEWYORK');
        zoom(3);
        pan(-900,450);
        zoomedState = 'NEWYORK';
        newyorkFunctionMobile('NEWYORK');
    }

    else if(this.value === "northcarolina") {
        northcarolinaFunctionMobile('NORTHCAROLINA');
        zoom(2.7);
        pan(-650,-100);
        zoomedState = 'NORTHCAROLINA';
        northcarolinaFunctionMobile('NORTHCAROLINA');
    }

    else if(this.value === "northdakota") {
        northdakotaFunctionMobile('NORTHDAKOTA');
        zoom(3);
        pan(150,525);
        zoomedState = 'NORTHDAKOTA';
        northdakotaFunctionMobile('NORTHDAKOTA');
    }

    else if(this.value === "ohio") {
        ohioFunctionMobile('OHIO');
        zoom(3);
        pan(-600,200);
        zoomedState = 'OHIO';
        ohioFunctionMobile('OHIO');
    }

    else if(this.value === "oklahoma") {
        oklahomaFunctionMobile('OKLAHOMA');
        zoom(2.8);
        pan(50,-150);
        zoomedState = 'OKLAHOMA';
        oklahomaFunctionMobile('OKLAHOMA');
    }

    else if(this.value === "oregon") {
        oregonFunctionMobile('OREGON');
        zoom(2.8);
        pan(850,450);
        zoomedState = 'OREGON';
        oregonFunctionMobile('OREGON');
    }

    else if(this.value === "pennsylvania") {
        pennsylvaniaFunctionMobile('PENNSYLVANIA');
        zoom(3);
        pan(-700,250);
        zoomedState = 'PENNSYLVANIA';
        pennsylvaniaFunctionMobile('PENNSYLVANIA');
    }

    else if(this.value === "rhodeisland") {
        rhodeislandFunctionMobile('RHODEISLAND');
        zoom(3);
        pan(-1025,375);
        zoomedState = 'RHODEISLAND';
        rhodeislandFunctionMobile('RHODEISLAND');
    }

    else if(this.value === "southcarolina") {
        southcarolinaFunctionMobile('SOUTHCAROLINA');
        zoom(3);
        pan(-650,-150);
        zoomedState = 'SOUTHCAROLINA';
        southcarolinaFunctionMobile('SOUTHCAROLINA');
    }

    else if(this.value === "southdakota") {
        southdakotaFunctionMobile('SOUTHDAKOTA');
        zoom(3);
        pan(150,425);
        zoomedState = 'SOUTHDAKOTA';
        southdakotaFunctionMobile('SOUTHDAKOTA');
    }

    else if(this.value === "tennessee") {
        tennesseeFunctionMobile('TENNESSEE');
        zoom(3);
        pan(-500,-175);
        zoomedState = 'TENNESSEE';
        tennesseeFunctionMobile('TENNESSEE');
    }

    else if(this.value === "texas") {
        texasFunctionMobile('TEXAS');
        zoom(2);
        pan(100,-260);
        zoomedState = 'TEXAS';
        texasFunctionMobile('TEXAS');
    }

    else if(this.value === "utah") {
        utahFunctionMobile('UTAH');
        zoom(2.5);
        pan(650,100);
        zoomedState = 'UTAH';
        utahFunctionMobile('UTAH');
    }

    else if(this.value === "vermont") {
        vermontFunctionMobile('VERMONT');
        zoom(3);
        pan(-850,500);
        zoomedState = 'VERMONT';
        vermontFunctionMobile('VERMONT');
    }

    else if(this.value === "virginia") {
        virginiaFunctionMobile('VIRGINIA');
        zoom(3);
        pan(-650,0);
        zoomedState = 'VIRGINIA';
        virginiaFunctionMobile('VIRGINIA');
    }

    else if(this.value === "washington") {
        washingtonFunctionMobile('WASHINGTON');
        zoom(2.6);
        pan(775,550);
        zoomedState = 'WASHINGTON';
        washingtonFunctionMobile('WASHINGTON');
    }

    else if(this.value === "westvirginia") {
        westvirginiaFunctionMobile('WESTVIRGINIA');
        zoom(3);
        pan(-700,100);
        zoomedState = 'WESTVIRGINIA';
        westvirginiaFunctionMobile('WESTVIRGINIA');
    }

    else if(this.value === "wisconsin") {
        wisconsinFunctionMobile('WISCONSIN');
        zoom(3);
        pan(-300,400);
        zoomedState = 'WISCONSIN';
        wisconsinFunctionMobile('WISCONSIN');
    }

    else if(this.value === "wyoming") {
        wyomingFunctionMobile('WYOMING');
        zoom(2.8);
        pan(450,300);
        zoomedState = 'WYOMING';
        wyomingFunctionMobile('WYOMING');
    }
    updateContent();

}

// Mobile Drop Down Menu End //

// State Bubbles Start //

function alabamaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Alabama";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function alabamaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="al">Alabama</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Alabama<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Alabama<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function alaskaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Alaska";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function alaskaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Alaska";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Alaska<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Alaska<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function arizonaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Arizona";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function arizonaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Arizona";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Arizona<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Arizona<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function arkansasFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Arkansas";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function arkansasFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="ar">Arkansas</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Arkansas<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Arkansas<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function californiaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "California";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function californiaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="ca">California</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "California<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "California<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function coloradoFunction(state) {
    document.getElementById("bubble-heading").innerHTML = `<span id="co">Colorado</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Colorado<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Colorado<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function coloradoFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Colorado";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}
  
function connecticutFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Connecticut";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function connecticutFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="ct">Connecticut</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Connecticut<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Connecticut<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function delawareFunction(state) {
    document.getElementById("bubble-heading").innerHTML = `<span id="de">Delaware</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Delaware<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Delaware<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function delawareFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Delaware";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function floridaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Florida";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function floridaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Florida";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Florida<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Florida<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function georgiaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Georgia";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function georgiaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Georgia";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Georgia<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Georgia<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function hawaiiFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Hawaii";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function hawaiiFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Hawaii";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Hawaii<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Hawaii<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function idahoFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Idaho";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function idahoFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Idaho";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Idaho<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Idaho<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function illinoisFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Illinois";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function illinoisFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Illinois";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Illinois<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Illinois<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function indianaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Indiana";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function indianaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Indiana";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Indiana<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Indiana<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function iowaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Iowa";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function iowaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Iowa";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Iowa<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Iowa<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function kansasFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Kansas";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function kansasFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Kansas";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Kansas<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Kansas<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function kentuckyFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Kentucky";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function kentuckyFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="ky">Kentucky</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Kentucky<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Kentucky<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function louisianaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Louisiana";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function louisianaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="la">Louisiana</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Louisiana<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Louisiana<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function maineFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "Maine";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Maine<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Maine<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function maineFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Maine";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function marylandFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Maryland";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function marylandFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="md">Maryland</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Maryland<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Maryland<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function massachusettsFunction(state) {
    document.getElementById("bubble-heading").innerHTML = `<span id="ma">Massachusetts</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function massachusettsFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Massachusetts";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function michiganFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "Michigan";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Michigan<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Michigan<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function michiganFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Michigan";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
 }
}

function minnesotaFunction(state) {
    document.getElementById("bubble-heading").innerHTML = `<span id="mn">Minnesota</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Minnesota<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Minnesota<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function minnesotaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Minnesota";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function mississippiFunction(state) {
    document.getElementById("bubble-heading").innerHTML = `<span id="ms">Mississippi</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Mississippi<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Mississippi<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function mississippiFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Mississippi";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
 }
}

function missouriFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Missouri";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function missouriFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="mo">Missouri</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Missouri<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Missouri<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function montanaFunction(state) {
    document.getElementById("bubble-heading").innerHTML = `<span id="mt">Montana</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Montana<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Montana<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function montanaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Montana";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function nebraskaFunction(state) {
    document.getElementById("bubble-heading").innerHTML = `<span id="ne">Nebraska</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Nebraska<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Nebraska<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function nebraskaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Nebraska";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function nevadaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Nevada";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function nevadaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Nevada";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Nevada<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Nevada<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function  newhampshireFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "New Hampshire";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  newhampshireFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="nh">New Hampshire</span>`; 
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "New Hampshire<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "New Hampshire<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function newjerseyFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "New Jersey";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "New Jersey<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "New Jersey<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function newjerseyFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "New Jersey";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function newmexicoFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "New Mexico";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "New Mexico<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "New Mexico<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function newmexicoFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "New Mexico";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  newyorkFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "New York";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  newyorkFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "New York";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "New York<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "New York<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function  northcarolinaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "North Carolina";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  northcarolinaFunction(state) {
  document.getElementById("bubble-heading").innerHTML =`<span id="nc">North Carolina</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "North Carolina<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "North Carolina<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function northdakotaFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "North Dakota";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "North Dakota<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "North Dakota<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function northdakotaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "North Dakota";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  ohioFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Ohio";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  ohioFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Ohio";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Ohio<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Ohio<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function oklahomaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Oklahoma";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  oklahomaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="ok">Oklahoma</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Oklahoma<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Oklahoma<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function  oregonFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Oregon";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  oregonFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Oregon";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Oregon<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Oregon<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function  pennsylvaniaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Pennsylvania";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  pennsylvaniaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="pa">Pennsylvania</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Pennsylvania<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Pennsylvania<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function rhodeislandFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "Rhode Island";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Rhode Island<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Rhode Island<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function rhodeislandFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Rhode Island";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  southcarolinaFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "South Carolina";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  southcarolinaFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="sc">South Carolina</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "South Carolina<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "South Carolina<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function southdakotaFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "South Dakota";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "South Dakota<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "South Dakota<br>Body";
    var st = document.getElementById(state);
      st.style = 'fill: #4d79ff;';
      st.addEventListener('mouseout', function() {
        if (state != zoomedState) {
            st.style = 'fill: #b3b3b3;';
        }
      });
}

function southdakotaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "South Dakota";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function tennesseeFunction(state) {
    document.getElementById("bubble-heading").innerHTML = `<span id="tn">Tennessee</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Tennessee<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Tennessee<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function tennesseeFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Tennessee";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function texasFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "Texas";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Texas<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Texas<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function texasFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Texas";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  utahFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Utah";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  utahFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Utah";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Utah<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Utah<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function  vermontFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Vermont";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  vermontFunction(state) {
  document.getElementById("bubble-heading").innerHTML = "Vermont";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Vermont<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Vermont<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function virginiaFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "Virginia";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Virginia<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Virginia<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function virginiaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Virginia";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function  washingtonFunctionMobile(state) {
  document.getElementById("mobile-heading-1").innerHTML = "Washington";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
  clickedState = state;
  stateSelect.value = state.toLowerCase();
  if (isZoomed === false) {
  document.getElementById(state).style = 'fill: #4d79ff;';
  zoomedState = state;
  }
}

function  washingtonFunction(state) {
  document.getElementById("bubble-heading").innerHTML = `<span id="wa">Washington</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Washington<br>Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Washington<br>Body";
  var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function westvirginiaFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "West Virginia";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "West Virginia<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "West Virginia<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function westvirginiaFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "West Virginia";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function wisconsinFunction(state) {
    document.getElementById("bubble-heading").innerHTML = `<span id="wi">Wisconsin</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Wisconsin<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Wisconsin<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function wisconsinFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Wisconsin";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

function wyomingFunction(state) {
    document.getElementById("bubble-heading").innerHTML = "Wyoming";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Wyoming<br>Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Wyoming<br>Body";
    var st = document.getElementById(state);
  st.style = 'fill: #4d79ff;';
  st.addEventListener('mouseout', function() {
    if (state != zoomedState) {
        st.style = 'fill: #b3b3b3;';
    }
  });
}

function wyomingFunctionMobile(state) {
    document.getElementById("mobile-heading-1").innerHTML = "Wyoming";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
    clickedState = state;
    stateSelect.value = state.toLowerCase();
    if (isZoomed === false) {
    document.getElementById(state).style = 'fill: #4d79ff;';
    zoomedState = state;
  }
}

// Data Bubbles End //








