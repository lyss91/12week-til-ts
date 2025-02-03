class Car {
  name;
  brand;
  price;
  year;
  constructor(name, brand, price, year) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
}
// 상속 즉 확장을 통한 클래스 정의
class ElectricCar extends Car {
  // 자식 클래스에 해당하는 속성 필드
  batteryLevel;
  constructor(name, brand, price, year, batteryLevel) {
    // 부모의 constructor 를 먼저 실행해 주어야 함.
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }
  // 자식 클래스에 해당하는 메소드 필드
  level() {
    console.log(`${this.batteryLevel} 입니다.`);
  }
}

// 인스턴스 생성
let 그랜저 = new Car("현대", "그랜저", 1000, 20);
// {name: "현대", brand: "그랜저", price: 1000, year: 20}
그랜저.move();
그랜저.stop();
let 아반떼 = new Car("현대", "아반떼", 100, 30);
// {name: "현대", brand: "아반떼", price: 100, year: 30}

let 캐스퍼 = new ElectricCar("캐스퍼", "현대", 1000, 5, 100);
캐스퍼.move();
캐스퍼.stop();
캐스퍼.level();
