var idx = function (p) {
    var width = document.querySelector('body').clientWidth;
    var height = document.querySelector('body').clientHeight;
    var min_wh = (width < height) ? width : height;
    var margin_denominator = 4;
    var margin = 10;
    var shape_size = 10;
    var stroke_weight = 1;
    var x = width * (margin_denominator - 2) / margin_denominator;
    var y = height * (margin_denominator - 2) / margin_denominator;
    var randx = p.random() * x;
    var randy = p.random() * y;
    p.setup = function () {
        p.createCanvas(width, height);
        p.background(0);
    };
    p.draw = function () {
        if (shape_size < (min_wh - 2*margin)) {
          shape_size += 10;
          stroke_weight = p.random()*5;
          p.stroke(255);
          p.strokeWeight(stroke_weight);
          p.noFill();
          p.ellipse(x, y, shape_size);
        }
        else {
            p.fill(0)
            p.rect(margin,margin, width - margin*2, height - margin*2);
            shape_size = 0;
            margin += 10;
        }
    };
};
var node = document.createElement('div');
new p5(idx, node);
window.document.getElementsByTagName('body')[0].appendChild(node);
