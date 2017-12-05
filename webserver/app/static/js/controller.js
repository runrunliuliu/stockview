function addAccessors($scope) {

  $scope.getOpacity = function() {
    return getActiveStyle('opacity') * 100;
  };
  $scope.setOpacity = function(value) {
    setActiveStyle('opacity', parseInt(value, 10) / 100);
  };

  $scope.getScale = function() {
    return (getActiveStyle('scaleX')+getActiveStyle('scaleY')) * 50;
  };
  $scope.setScale = function(value) {
    setActiveStyle('scaleX', parseInt(value, 10) / 100);
    setActiveStyle('scaleY', parseInt(value, 10) / 100);
  };

  $scope.showTour = function(){
      hopscotch.startTour(tour);
  };

  $scope.showDev = function(){
      $scope.dev = !$scope.dev;
  };

  $scope.getDev = function(){
      return $scope.dev
  };

  $scope.getConvnet = function(){
      return $scope.convnet_mode
  };

  $scope.getFill = function() {
    return getActiveStyle('fill');
  };
  $scope.setFill = function(value) {
    setActiveStyle('fill', value);
  };

  $scope.getBgColor = function() {
    return getActiveProp('backgroundColor');
  };
  $scope.setBgColor = function(value) {
    setActiveProp('backgroundColor', value);
  };


  $scope.getStrokeColor = function() {
    return getActiveStyle('stroke');
  };
  $scope.setStrokeColor = function(value) {
    setActiveStyle('stroke', value);
  };

  $scope.getStrokeWidth = function() {
    return getActiveStyle('strokeWidth');
  };
  $scope.setStrokeWidth = function(value) {
    setActiveStyle('strokeWidth', parseInt(value, 10));
  };

  function initCustomization() {
    if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
      fabric.Object.prototype.cornerSize = 30;
    }
    fabric.Object.prototype.transparentCorners = false;
    if (document.location.search.indexOf('guidelines') > -1) {
    }
  }
  initCustomization();


//mover_cursor = function(options) {yax.css({'top': options.e.y + delta_top,'left': options.e.x + delta_left});};


  $scope.freeDrawingMode = 'Pencil';

  $scope.getDrawingMode = function() {
    return $scope.freeDrawingMode;
  };

  $scope.setDrawingMode = function(type) {
    $scope.freeDrawingMode = type;
    $scope.$$phase || $scope.$digest();
  };

  $scope.load_image = function(){
    var input, file, fr, img;
    state.recompute = true;
    input = document.getElementById('imgfile');
    filenameinput = $('#imgfilename');
    filenameinput.val("");
    input.click();
  };

$scope.checkStatus = function(){
    return $scope.status;
};

$scope.disableStatus = function(){
    $scope.status = "";
};

function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

$scope.search_quick = function () {

    $scope.status = "开始搜索";
    $scope.$$phase || $scope.$digest();
    var indicators = {};
    for (var k in $scope.indicators) {
        indicator = $scope.indicators[k];
        if (indicator != '') {
            indicators[k] = indicator;
        }
    }
    image_urls = {};
    for (var indicator in indicators) {
        var canvas = $('#' + indicator + "_canvas");
        image_urls[indicator] = canvas[0].toDataURL();
    }
    filename = $("#imgfilename").val();
    if (!filename || filename.length <= 0) {
        filename = document.getElementById("imgfile").files[0].name;
    }
    $.ajax({
        type: "POST",
        url: '/search_quick',
        dataType: 'json',
        async: true,
        data: {
            'image_url': angular.toJson(image_urls),
            'file_name': filename,
            'indicator': $("#indicator option:selected").text(),
            'inds': angular.toJson(indicators)
        },
        success: function (response) {
            $scope.status = "搜索完成";
            $scope.results = chunk(response.results, 16);
//            $scope.currentImage = response.currentImage;
            $scope.stockSummary = response.stockSummary;
            $scope.indicator_index = response.indicator_index;
            $scope.$$phase || $scope.$digest();

        }
    });
};

$scope.search_match = function () {
    $scope.status = "开始搜索";
//    if(canvas.isDrawingMode){
//        canvas.isDrawingMode = false;
//        canvas.deactivateAll().renderAll();
//    }
    $scope.$$phase || $scope.$digest();
    var indicators = {};
    for (var k in $scope.indicators) {
        indicator = $scope.indicators[k];
        if (indicator != '') {
            indicators[k] = indicator;
        }
    }
    image_urls = {};
    for (var indicator in indicators) {
        var canvas = $('#' + indicator + "_canvas");
        image_urls[indicator] = canvas[0].toDataURL();
    }
    filename = $("#imgfilename").val();
    if (!filename || filename.length <= 0) {
        filename = document.getElementById("imgfile").files[0].name;
    }
    var slash_in_filename = filename.lastIndexOf("/");
    if (slash_in_filename > -1) {
        filename = filename.substring(slash_in_filename+1);
    }
    $.ajax({
        type: "POST",
        url: '/Match',
        dataType: 'json',
        async: true,
        data: {
            'image_url': angular.toJson(image_urls),
            'file_name': filename,
            'indicator': $("#indicator option:selected").text(),
            'inds': angular.toJson(indicators)
        },
        success: function (response) {
            $scope.status = "搜索完成";
            $scope.results = chunk(response.results, 16);
//            $scope.currentImage = response.currentImage;
            $scope.stockSummary = response.stockSummary;
            $scope.indicator_index = response.indicator_index;
            $scope.stockDt = "abc";
            $scope.$$phase || $scope.$digest();

        }
    });
};

$scope.search_dt = function () {
    $scope.status = "开始搜索";
//    if(canvas.isDrawingMode){
//        canvas.isDrawingMode = false;
//        canvas.deactivateAll().renderAll();
//    }
    $scope.$$phase || $scope.$digest();
    var indicators = {};
    for (var k in $scope.indicators) {
        indicator = $scope.indicators[k];
        if (indicator != '') {
            indicators[k] = indicator;
        }
    }
    image_urls = {};
    for (var indicator in indicators) {
        var canvas = $('#' + indicator + "_canvas");
        image_urls[indicator] = canvas[0].toDataURL();
    }
    filename = $("#imgfilename").val();
    if (!filename || filename.length <= 0) {
        filename = document.getElementById("imgfile").files[0].name;
    }
    var slash_in_filename = filename.lastIndexOf("/");
    if (slash_in_filename > -1) {
        filename = filename.substring(slash_in_filename+1);
    }
    $.ajax({
        type: "POST",
        url: '/DT',
        dataType: 'json',
        async: true,
        data: {
            'image_url': angular.toJson(image_urls),
            'file_name': filename,
            'indicator': $("#indicator option:selected").text(),
            'dt1': document.getElementById("dt1").value,
            'dt2': document.getElementById("dt2").value,
            'inds': angular.toJson(indicators)
        },
        success: function (response) {
            $scope.status = "搜索完成";
            $scope.results = chunk(response.results, 16);
//            $scope.currentImage = response.currentImage;
            $scope.stockSummary = response.stockSummary;
            $scope.indicator_index = response.indicator_index;
            $scope.$$phase || $scope.$digest();

        }
    });
};

$scope.get_indicator_data=function(indicator) {
    $.ajax({
        type: "POST",
        url: '/QuickStock',
        dataType: 'json',
        async: true,
        data: {
            'stock': document.getElementById("stock").value,
            'label_date': document.getElementById("label_date").value,
            'indicator': indicator
        },
        success: function (response) {
            $scope.status = "搜索完成";
            $scope.currentImage = response.currentImage;
            $scope.url = response.url;
            input = $('#imgfile');
            filenameinput = $('#imgfilename');
            $scope.$$phase || $scope.$digest();
            var canvas = new fabric.Canvas(indicator + "_canvas");
            canvas.deactivateAll().renderAll();

            var img = new Image();
            img.src = "/static/examples/" + response.url;
            img.onload = function() {
                var image = new fabric.Image(img);
                canvas.add(image).renderAll();
                // canvas.setActiveObject(image);
                filenameinput.val(response.url);
                state.recompute = true;
                input.val("");
            }
        }
    });
}

$scope.get_indicator_data_old=function() {
    $.ajax({
        type: "POST",
        url: '/QuickStock',
        dataType: 'json',
        async: true,
        data: {
            'stock': document.getElementById("stock").value,
            'label_date': document.getElementById("label_date").value,
            'indicator': $("#indicator option:selected").text()
        },
        success: function (response) {
            $scope.status = "搜索完成";
            $scope.currentImage = response.currentImage;
            $scope.url = response.url;
            input = $('#imgfile');
            filenameinput = $('#imgfilename');
            $scope.$$phase || $scope.$digest();
            var canvas = new fabric.Canvas("canvas");
            canvas.deactivateAll().renderAll();

            var img = new Image();
            img.src = "/static/examples/" + response.url;
            img.onload = function() {
                var image = new fabric.Image(img);
                canvas.add(image).renderAll();
                // canvas.setActiveObject(image);
                filenameinput.val(response.url);
                state.recompute = true;
                input.val("");
            }
        }
    });
}

$scope.load_stock = function () {
    var indicators = $scope.indicators;
    for (var key in indicators) {
        indicator = indicators[key];
        if (indicator != '') {
            $scope.get_indicator_data(indicator);
        }
    }
    // $scope.get_indicator_data_old();
};

$scope.resize_canvas = function(event) {
    dicts = {"kline": [33, 201], "indicator":[63, 31]};
    indicator = $("#indicator option:selected").val();
    if (indicator in dicts) {
        size = dicts[indicator];
    } else {
        size = dicts["indicator"];
    }
    old_width  = $("#canvas").attr("width");
    old_heigth = $("#canvas").attr("height");
    if (old_width == size[0] && old_heigth == size[1]) {
        return;
    }
    
    oc = document.getElementById("canvas");
    canvas.clear().renderAll();
    oc_context = oc.getContext("2d");
    oc.width   = size[0];
    oc.height  = size[1];

    canvas.setWidth(size[0]);
    canvas.setHeight(size[1]);
    canvas.calcOffset();

    $(".canvas-container")[0].width  = size[0];
    $(".canvas-container")[0].height = size[1];
    $(".lower-canvas")[0].width  = size[0];
    $(".lower-canvas")[0].height = size[1];
    $(".upper-canvas")[0].width  = size[0];
    $(".upper-canvas")[0].height = size[1];

    $(".canvas-container").attr("style", $(".canvas-container").attr("style").replace("width: " + old_width, "width: " + size[0]));
    $(".canvas-container").attr("style", $(".canvas-container").attr("style").replace("height: " + old_heigth, "height: " + size[1]));
    $(".lower-canvas").attr("style", $(".lower-canvas").attr("style").replace("width: " + old_width, "width: " + size[0]));
    $(".lower-canvas").attr("style", $(".lower-canvas").attr("style").replace("height: " + old_heigth, "height: " + size[1]));
    $(".upper-canvas").attr("style", $(".upper-canvas").attr("style").replace("width: " + old_width, "width: " + size[0]));
    $(".upper-canvas").attr("style", $(".upper-canvas").attr("style").replace("height: " + old_heigth, "height: " + size[1]));
}

$scope.select_canvas = function(event) {
    indicator = $("#indicator option:selected").val();
    canvas = $("#" + indicator + "_canvas")[0];
}

$scope.search = function () {
    $scope.setFreeDrawingMode(false,$scope.current_mode);
    $scope.check_movement();
    $scope.status = "Starting Exact Search can take up to a minute";
    if(canvas.isDrawingMode){
        canvas.isDrawingMode = false;
        canvas.deactivateAll().renderAll();
    }
    $scope.$$phase || $scope.$digest();
    $scope.refreshData();
    $.ajax({
        type: "POST",
        url: '/Search',
        dataType: 'json',
        async: true,
        data: {
            'image_url': canvas.toDataURL(),
            'file_name': document.getElementById("imgfile").files[0].name
        },
        success: function (response) {
            $scope.status = "Exact Search Completed";
            $scope.results = chunk(response.results, 4);
            $scope.$$phase || $scope.$digest();

        }
    });
};

$scope.toggle_image = function() {
  var button = $("#btnImageToggle");
  var toggle = button.attr("toggle");
  if (toggle == "1") {
    button.attr("toggle", "0");
    $("img.result-image").attr("style", "");
  } else {
      if (toggle == "0") {
        button.attr("toggle", "1");
        $("img.result-image").attr("style", "max-width:98%");
      }
  }
}

}

function watchCanvas($scope) {

  function updateScope() {
    $scope.$$phase || $scope.$digest();
    canvas.renderAll();
  }

}
