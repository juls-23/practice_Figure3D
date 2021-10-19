class Figure3D{
  constructor(name){
    this.name = name;
  }
  getVolume(){
  }
  checkParam(param){
    if(typeof param !== 'number'){
      throw new TypeError('must be a number')
    }
    if(param <= 0){
      throw new RangeError('must be higher then 0')
    }
  }

}

class  Sphere extends Figure3D{
  constructor(radius){
    super('Sphere')
    this.radius = radius;
  }

  get radius(){
    return this._radius;
  }

  set radius(radius){
    this.checkParam(radius)
    return this._radius = radius;
      
  }

  getVolume(){
    return (4/3)*Math.PI*(this._radius**3);
  }
}

class  Cylinder extends Figure3D{
  constructor(radius,height){
    super('Cylinder')
    this.radius = radius;
    this.height = height;
  }

  get radius(){
    return this._radius;
  }

  set radius(radius){
    this.checkParam(radius)
    return this._radius = radius;
  }

  get height(){
    return this._height;
  }

  set height(height){
    this.checkParam(height)
    return this._height = height;
  }

  getVolume(){
    return Math.PI*(this.radius**2)*this.height;
  }
}


class Cube extends Figure3D{
  constructor(height){
    super('Cube')
    this.height = height;
  }

  get height(){
    return this.height;
  }

  set height(height){
    this.checkParam(height)
    return this._height = height;
  }
  getVolume(){
    return this._height**3;
  }
}

function getVolumFigure(figure){
  if(figure instanceof Figure3D){
    return figure.getVolume();
  } 
  throw new RangeError('must be a figure3D')
}

const sphere1 = new Sphere(5)
const cylindr1 = new Cylinder(3,5)
const cube1 = new Cube(7)

console.log(getVolumFigure(sphere1));
console.log(getVolumFigure(cylindr1));
console.log(getVolumFigure(cube1));






