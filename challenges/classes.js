// 1. Copy and paste your prototype in here and refactor into class syntax.
    class refactorCuboidMaker {
        constructor(cubetributes){
            this.length = cubetributes.length;
            this.width = cubetributes.width;
            this.height = cubetributes.height;
        }
        //methods here
        // CuboidMaker.prototype.volume = function() {
    //     const volume = this.length * this.height * this.width;
    //     return `The volume of the cuboid is ${volume}`;
    //   }

    volume() {
        const volume = this.length * this.height * this.width;
        return `The volume of the cuboid is ${volume}`;
    } //closes volume

    // CuboidMaker.prototype.SA = function(){
    //     const SA = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    //     return `Surface area of the cuboid is ${SA}`;
    //   }

    SA(){
        const SA = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
        return `Surface area of the cuboid is ${SA}`;
    }//closes SA
    }//closes refactorCuboidMaker





    // const cuboid = new CuboidMaker({
    //     length: 4,
    //     width: 5,
    //     height: 5
    //   });
      

    const cubeRefactor = new refactorCuboidMaker ({
        length: 4,
        width: 5,
        height: 5
    });








    






// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.